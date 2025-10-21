"use client";

interface VideoProps {
  videoAsset?: {
    asset?: {
      alt?: string;
      size?: number;
      url?: string | null | undefined;
      handle?: string;
    };
  };
}

export default function Video({
  videoAsset = {
    asset: {
      alt: "",
      size: 0,
      url: null,
      handle: "",
    },
  },
}: VideoProps) {
  if (!videoAsset?.asset?.url) return null;
  return (
    <video
      className="absolute inset-0 w-full h-lvh object-cover"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={videoAsset.asset?.url} type="video/mp4" />
    </video>
  );
}
