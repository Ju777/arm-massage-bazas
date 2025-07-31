import React from "react";

export function PrestationCard({
  icon,
  title,
  description,
  price,
}: Readonly<{
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
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
      <div className="text-primary mb-4 w-fit group-hover:animate-spin-slow">
        {icon}
      </div>

      {/* Titre et prix alignés */}
      <header className="flex justify-between items-baseline mb-3">
        <h3 className="font-title text-lg font-semibold text-primary">
          {title}
        </h3>
        <span className="text-base font-semibold text-dark">{price}</span>
      </header>

      {/* Description */}
      <p className="text-sm text-dark leading-relaxed text-justify">
        {description}
      </p>
    </article>
  );
}
