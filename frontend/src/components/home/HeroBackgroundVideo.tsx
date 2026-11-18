'use client';

import { useEffect, useRef } from 'react';

interface HeroBackgroundVideoProps {
  src: string;
  poster?: string | null;
}

/**
 * Renders a muted, looping hero background video and forces browser auto-play
 * by syncing `defaultMuted`, `muted`, and `playsInline` directly on the DOM node.
 */
export function HeroBackgroundVideo({ src, poster }: HeroBackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const ensurePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;

    if (video.paused) {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {
          // Browsers that block autoplay under strict power-saving modes still show poster cleanly.
        });
      }
    }
  };

  useEffect(() => {
    ensurePlayback();
  }, [src]);

  return (
    <video
      ref={videoRef}
      className="hero-bg-video"
      src={src}
      poster={poster || undefined}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      aria-hidden="true"
      onCanPlay={ensurePlayback}
    />
  );
}
