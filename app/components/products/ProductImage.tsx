"use client";

import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface ProductImageProps {
  imageUrl: string;
  altText: string;
}

export default function ProductImage({ imageUrl, altText }: ProductImageProps) {
  return (
    <div className="overflow-hidden rounded-lg shadow-sm max-w-lg mx-auto">
      <Zoom>
        <div className="relative aspect-square">
          <Image
            src={imageUrl}
            alt={altText}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
            className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </Zoom>
    </div>
  );
}
