"use client";
import { useState } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/types";

export const Gallery = ({ images }: { images: GalleryImage[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) {
    return null;
  }
  const mainImage = images[activeIndex];

  return (
    <div className="flex flex-col gap-6">
      <div className="h-[360px] w-[560px] overflow-hidden rounded-xl border border-[var(--gray-light)] bg-[var(--inputs)]">
        <Image
          src={mainImage.original}
          alt="Camper photo"
          width={560}
          height={360}
          className="h-full w-full object-cover"
          priority
        />
      </div>

      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            className={`h-[96px] overflow-hidden rounded-xl border-2 transition ${
              index === activeIndex
                ? "border-[var(--grey-green)]"
                : "border-transparent"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={image.thumb}
              alt="Camper thumbnail"
              width={128}
              height={96}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;