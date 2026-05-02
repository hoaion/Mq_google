import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageWithFallback({ src, alt, className }: Props) {
  const [error, setError] = useState(false);
  const fallbackSrc = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200";

  return (
    <img
      src={error ? fallbackSrc : src}
      alt={alt}
      className={`${className} object-cover w-full h-full`}
      onError={() => {
        if (!error) setError(true);
      }}
    />
  );
}
