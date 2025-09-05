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
    <Zoom>
      <div className="relative aspect-square">
        <Image
          src={imageUrl}
          alt={altText}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover rounded-lg"
        />
      </div>
    </Zoom>
  );
}
