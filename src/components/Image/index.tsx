import NextImage from "next/image";
import { FC } from "react";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export const Image: FC<ImageProps> = ({ src, alt, className }) => {
  return (
    <div className={`relative ${className}`}>
      <NextImage fill src={src} alt={alt} className="object-cover" />
    </div>
  );
};
