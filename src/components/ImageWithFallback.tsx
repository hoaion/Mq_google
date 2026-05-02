import { useState } from "react";
import heroFallback from "../assets/images/regenerated_image_1777729867288.png";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageWithFallback({ src, alt, className }: Props) {
  const [errorCount, setErrorCount] = useState(0);
  const ultimateFallback = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200";

  const getSrc = () => {
    if (errorCount === 0) return src;
    if (errorCount === 1) return heroFallback;
    return ultimateFallback;
  };

  return (
    <img
      src={getSrc()}
      alt={alt}
      className={`${className} object-cover w-full h-full`}
      onError={() => {
        if (errorCount < 2) {
          setErrorCount(prev => prev + 1);
        }
      }}
    />
  );
}
