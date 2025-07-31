import { Phone, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact - ARM Bazas",
  description:
    "Contactez l’association ARM pour les entreprises ou le masseur indépendant pour les particuliers. Coordonnées, adresse et plan.",
};

export default function ContactPage() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-title font-semibold text-center mb-12 text-primary">
          Contact
        </h1>
        <p className="text-center text-lg text-gray-700 mb-12 max-w-xl mx-auto">
          Pour toute information ou réservation, n’hésitez pas à nous contacter.
        </p>

        <div className="bg-beige p-10 rounded-xl shadow-md mb-16 border border-gray-200">
          {/* <h2 className="text-3xl font-semibold mb-8 text-primary text-center">
            Coordonnées
          </h2> */}
          <p className="mb-6 font-semibold text-lg text-center">ARM</p>

          <div className="flex items-center gap-4 mb-6 text-gray-800">
            <Phone size={24} className="text-primary flex-shrink-0" />
            <a
              href="tel:0798605626"
              className="text-lg font-medium text-primary hover:underline"
              aria-label="Téléphone"
            >
              07 98 60 56 26
            </a>
          </div>

          <div className="flex items-center gap-4 mb-6 text-gray-800">
            <Mail size={24} className="text-primary flex-shrink-0" />
            <a
              href={`mailto:${[
                "julien",
                ".",
                "tamil",
                "@",
                "gmail",
                ".",
                "com",
              ].join("")}`}
              className="text-lg font-medium text-primary hover:underline"
              aria-label="Email"
            >
              {"julien.tamil"}&#64;{"gmail.com"}
            </a>
          </div>

          <div className="flex items-center gap-4 mb-6 text-gray-800">
            <MapPin size={24} className="text-primary flex-shrink-0" />
            <address className="text-primary not-italic text-lg font-medium">
              10, Rue/Chemin de la Chênaie 33430 Bazas
            </address>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl shadow-lg aspect-[16/9] border border-gray-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.881590513951!2d-0.24618012403219486!3d44.435591071075706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5575b56767b16f%3A0x1cdce518a1d47907!2s10%20Rue%20de%20la%20Ch%C3%AAnaie%2C%2033430%20Bazas!5e0!3m2!1sfr!2sfr!4v1750766861679!5m2!1sfr!2sfr"
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Emplacement sur la carte"
          />
        </div>
      </div>
    </section>
  );
}
