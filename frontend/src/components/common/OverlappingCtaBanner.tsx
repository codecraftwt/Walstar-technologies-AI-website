import { WalstarButton } from '@/components/common/WalstarButton';

export function OverlappingCtaBanner({
  title,
  description,
  ctaLabel = 'Discuss Your Project',
  ctaHref = '/contact',
  ariaLabel = 'Discuss your project',
}: {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  ariaLabel?: string;
}) {
  return (
    <div
      className="section-container-80 relative z-10 -mt-16 rounded-3xl bg-[#0077ed] text-white shadow-lg md:-mt-20"
      aria-label={ariaLabel}
    >
      <div className="flex flex-col items-start justify-between gap-6 px-6 py-7 md:flex-row md:items-center md:px-10 md:py-8">
        <div className="max-w-2xl">
          <h3 className="text-xl font-semibold leading-snug text-white md:text-2xl">
            {title}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-white/85 md:text-sm">
            {description}
          </p>
        </div>
        <div className="shrink-0">
          <WalstarButton variant="orange" href={ctaHref}>
            {ctaLabel}
          </WalstarButton>
        </div>
      </div>
    </div>
  );
}
