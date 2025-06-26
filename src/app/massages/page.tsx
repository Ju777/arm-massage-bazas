import Image from "next/image";
import { Sparkles } from "lucide-react";

export const metadata = {
  title: "Particuliers - A R M Bazas",
  description:
    "Massages bien-être à Bazas, réalisés par un masseur indépendant dans une ambiance calme et apaisante.",
};

export default function ParticuliersPage() {
  return (
    <section className="py-16 bg-light">
      {/* En-tête + image */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
        <div className="flex-1 text-center md:text-left space-y-4">
          <h1 className="text-3xl font-title text-primary mb-2">
            Massages pour particuliers
          </h1>
          <p className="text-dark leading-relaxed">
            Je vous accueille dans une ambiance calme et apaisante à Bazas. Massages sur mesure pour votre bien-être et votre relaxation. Prestations assurées par un masseur indépendant.
          </p>
        </div>
        <div className="relative flex-1 w-full h-64 rounded-xl overflow-hidden shadow-lg border border-secondary">
          <Image
            src="/images/hero.jpg"
            alt="Salle de massage à Bazas"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Infos pratiques */}
      <div className="container mx-auto px-6 bg-beige rounded-xl shadow p-6 grid md:grid-cols-2 gap-6 text-dark mb-12 border border-secondary">
        <div>
          <h2 className="text-xl font-title text-primary mb-2">
            Séances sur rendez-vous
          </h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>Massages personnalisés (relaxant, sportif, détente musculaire)</li>
            <li>Durée d’environ 1 heure</li>
            <li><strong>Tarif unique :</strong> 50 € / séance</li>
            <li>Ambiance calme et propice à la détente</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-title text-primary mb-2">Contact</h2>
          <p className="mb-4 text-dark leading-relaxed">
            Contactez-moi par téléphone ou par mail pour planifier votre créneau.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white shadow hover:bg-primary/90 transition"
          >
            <Sparkles size={18} /> Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}
