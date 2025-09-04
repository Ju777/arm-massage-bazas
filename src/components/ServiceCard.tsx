"use client";

import Image from "next/image";
import { Clock, Users, MapPin, Tag, Check } from "lucide-react";

type ServiceCardProps = {
  title: string;
  duration?: string;
  participants?: string;
  location?: string;
  description: string;
  practicalInfo?: string[];
  price: string;
  extraPricing?: string;
  recurrenceOptions?: string[];
  imageSrc?: string; // nouvelle prop pour illustration
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
  recurrenceOptions,
  imageSrc,
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
      {/* Illustration */}
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
      <header className="flex items-center gap-2 mb-5">
        <h3 className="relative text-primary font-title font-semibold text-xl mb-4 inline-block">
          {title}
          <span
            aria-hidden="true"
            className="block absolute bottom-0 left-0 w-full h-[2px] rounded"
            style={{
              background: "linear-gradient(to right, #326d6d, #f4efe9)",
            }}
          />
        </h3>
      </header>

      {/* Infos pratiques */}
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

      {/* Description */}
      <p className="text-dark mb-4 leading-relaxed">{description}</p>

      {/* Informations complémentaires */}
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

      {/* Récurrence */}
      {recurrenceOptions && recurrenceOptions.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-primary mb-1">
            Récurrence possible :
          </h4>
          <ul
            className="text-sm text-dark list-disc list-inside space-y-1"
            aria-label="Options de récurrence"
          >
            {recurrenceOptions.map((option) => (
              <li key={option}>{option}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Prix dans un badge */}
      <div className="mt-6">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-lg shadow-md">
          <Tag size={18} aria-hidden="true" />
          {price}
        </span>
        {extraPricing && (
          <p className="text-sm text-dark mt-1">{extraPricing}</p>
        )}
      </div>
    </article>
  );
}
