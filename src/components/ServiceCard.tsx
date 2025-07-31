"use client";

import { Sparkles, Clock, Users, MapPin, Tag, Check } from "lucide-react";

type ServiceCardProps = {
  title: string;
  duration?: string;
  participants?: string;
  location?: string;
  description: string;
  practicalInfo?: string[];
  price: string;
  extraPricing?: string;
};

export default function ServiceCard({
  title,
  duration,
  participants,
  location,
  description,
  practicalInfo,
  price,
  extraPricing,
}: Readonly<ServiceCardProps>) {
  return (
    <article
      className="group relative bg-white border border-gray-300 rounded-xl p-6 shadow-md
             focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
             hover:bg-light transition cursor-default flex flex-col justify-between"
      aria-label={`${title} — durée: ${
        duration ?? "non spécifiée"
      }, participants: ${participants ?? "non spécifiés"}, lieu: ${
        location ?? "non spécifié"
      }`}
    >
      <Sparkles
        className="absolute top-4 right-4 text-primary opacity-100 transition-colors duration-300 group-hover:text-secondary group-focus-visible:text-secondary"
        size={24}
        aria-hidden="true"
      />

      <header className="flex items-center gap-2 mb-5">
        <h3 className="relative text-primary font-title font-semibold text-xl mb-4 inline-block">
          {title}
          <span
            aria-hidden="true"
            className="block absolute bottom-0 left-0 w-full h-[2px] rounded"
            style={{
              background: "linear-gradient(to right, #326d6d, #f4efe9)", // primary → beige
            }}
          />
        </h3>
      </header>

      <section
        className="flex flex-wrap gap-4 mb-4 text-dark text-sm"
        aria-label="Informations pratiques"
      >
        {duration && (
          <div className="flex items-center gap-1" title={`Durée: ${duration}`}>
            <Clock size={16} aria-hidden="true" />
            <span>{duration}</span>
          </div>
        )}
        {participants && (
          <div
            className="flex items-center gap-1"
            title={`Participants: ${participants}`}
          >
            <Users size={16} aria-hidden="true" />
            <span>{participants}</span>
          </div>
        )}
        {location && (
          <div className="flex items-center gap-1" title={`Lieu: ${location}`}>
            <MapPin size={16} aria-hidden="true" />
            <span>{location}</span>
          </div>
        )}
      </section>

      <p className="text-dark mb-4 leading-relaxed">{description}</p>

      {practicalInfo && practicalInfo.length > 0 && (
        <ul
          className="mb-6 text-dark text-sm list-none space-y-1"
          aria-label="Informations pratiques complémentaires"
        >
          {practicalInfo.map((info) => (
            <li key={info} className="flex items-center gap-2">
              <Check
                size={16}
                className="text-primary flex-shrink-0"
                aria-hidden="true"
              />
              <span>{info}</span>
            </li>
          ))}
        </ul>
      )}

      <p className="font-semibold text-primary text-lg flex items-center gap-2">
        <Tag size={18} aria-hidden="true" />
        {price}
      </p>
      {extraPricing && (
        <p className="text-sm font-normal text-dark mt-1">{extraPricing}</p>
      )}
    </article>
  );
}
