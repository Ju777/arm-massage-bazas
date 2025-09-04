import Image from "next/image";
import React from "react";
import { Tag } from "lucide-react"; // ✅ Icône Lucide

export function PrestationCard({
  icon,
  title,
  description,
  price,
  imageSrc,
}: Readonly<{
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  imageSrc?: string;
}>) {
  return (
    <article
      className="bg-white p-6 rounded-xl shadow-md border border-secondary
    transition-all duration-300 ease-in-out
    hover:bg-primary/5 hover:scale-[1.02] hover:shadow-xl hover:ring-2 hover:ring-primary/20
    active:scale-[0.98]
    group
    outline-none"
      aria-label={`${title}, prix ${price}`}
    >
      {/* Image */}
      {imageSrc && (
        <div className="w-full h-48 mb-4 relative rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <Image
            src={imageSrc}
            alt={`Illustration de ${title}`}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Titre */}
      <header className="flex justify-between items-baseline mb-4">
        <h3 className="font-title text-lg font-semibold text-primary">
          {title}
        </h3>

        {/* Badge prix avec icône + ombre */}
        <span
          className="inline-flex items-center gap-1 px-3 py-1 
          rounded-full bg-primary/10 text-primary font-semibold text-sm 
          shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <Tag className="w-4 h-4" aria-hidden="true" />
          {price}
        </span>
      </header>

      {/* Description */}
      <p className="text-sm text-dark leading-relaxed text-justify">
        {description}
      </p>
    </article>
  );
}
