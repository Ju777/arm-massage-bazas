import Image from "next/image";
import { Sparkles } from "lucide-react";

export const metadata = {
  title: "Ateliers - ARM Bazas",
  description:
    "Ateliers d’initiation au massage relaxant réservés aux adhérents ARM à Bazas.",
};

export default function AteliersPage() {
  return (
    <section className="py-16 bg-light">
      {/* En-tête + image */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
        <div className="flex-1 text-center md:text-left space-y-4">
          <h1 className="text-3xl font-title text-primary mb-2">
            Ateliers d’initiation au massage relaxant
          </h1>
          <p className="text-dark leading-relaxed">
            L’association ARM propose à ses adhérents des ateliers hebdomadaires
            d’initiation au massage relaxant dans une ambiance bienveillante et
            conviviale. Apprenez des gestes simples aux côtés d’un praticien
            qualifié dans notre salle à Bazas.
          </p>
        </div>
        <div className="relative flex-1 w-full h-64 rounded-xl overflow-hidden shadow-lg border border-secondary">
          <Image
            src="/images/massage-noir-et-blanc-min.png"
            alt="Ateliers de massage à Bazas"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Infos pratiques */}
      <div className="container mx-auto px-6 bg-beige rounded-xl shadow p-6 grid md:grid-cols-2 gap-6 text-dark mb-12 border border-secondary">
        <div>
          <h2 className="text-xl font-title text-primary mb-2">
            Infos pratiques
          </h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              <strong>Période :</strong> année scolaire (de septembre à juillet)
            </li>
            <li>
              <strong>Quand :</strong> tous les mercredis de 18h30 à 20h30
            </li>
            <li>
              <strong>Où :</strong> 10, Chemin de la Chênaie 33430 Bazas
            </li>
            <li>
              <strong>Participants :</strong> 4 personnes max{" "}
            </li>
            <li>
              <strong>Adhésion annuelle :</strong> 250 € par personne
            </li>
            <li>
              <strong>Matériel :</strong> prévoir une serviette de grande taille
              (de plage), tout le reste est fourni.
            </li>
            <li>
              <strong>Tenue conseillée :</strong> tenue souple (jogging,
              claquettes, etc.)
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-title text-primary mb-2">Inscription</h2>
          <p className="mb-4 text-dark leading-relaxed">
            Inscription possible en cours d’année en fonction des places
            disponibles. Contactez-nous pour plus d’informations.
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
