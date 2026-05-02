import { useState } from "react";
import heroFallback from "../assets/images/regenerated_image_1777729867288.png";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageWithFallback({ src, alt, className }: Props) {
  const [error, setError] = useState(false);

  return (
    <img
      src={error ? heroFallback : src}
      alt={alt}
      className={`${className} object-cover w-full h-full`}
      onError={() => {
        if (!error) setError(true);
      }}
    />
  );
}
