interface CacheEntry<T> {
  value: T;
  expiresAt: number;
}

const DEFAULT_TTL_MS = 60_000;
const MAX_CACHE_ENTRIES = 60;

const cacheStore = new Map<string, CacheEntry<unknown>>();
const inFlightStore = new Map<string, Promise<unknown>>();

export async function getOrComputeCached<T>(
  key: string,
  compute: () => Promise<T>,
  ttlMs = DEFAULT_TTL_MS
): Promise<T> {
  const now = Date.now();
  const cached = cacheStore.get(key) as CacheEntry<T> | undefined;
  if (cached && cached.expiresAt > now) {
    return cached.value;
  }

  const pending = inFlightStore.get(key) as Promise<T> | undefined;
  if (pending) {
    return pending;
  }

  const promise = compute()
    .then((value) => {
      if (cacheStore.size >= MAX_CACHE_ENTRIES) {
        const oldestKey = cacheStore.keys().next().value;
        if (oldestKey !== undefined) {
          cacheStore.delete(oldestKey);
        }
      }
      cacheStore.set(key, { value, expiresAt: Date.now() + ttlMs });
      return value;
    })
    .finally(() => {
      inFlightStore.delete(key);
    });

  inFlightStore.set(key, promise);
  return promise;
}

export function clearResponseCache(): void {
  cacheStore.clear();
  inFlightStore.clear();
}
