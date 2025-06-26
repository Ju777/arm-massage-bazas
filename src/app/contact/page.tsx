import { Phone, Mail } from "lucide-react";

export const metadata = {
  title: "Contact - A R M Bazas",
  description:
    "Contactez l’association A R M pour les entreprises ou le masseur indépendant pour les particuliers. Coordonnées, adresse et plan.",
};

export default function ContactPage() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-title font-semibold text-center mb-10 text-primary">
          Contact
        </h1>
        <p className="text-center text-lg text-gray-700 mb-10">
          Pour toute information ou réservation, n’hésitez pas à nous contacter.
        </p>

        <div className="bg-beige p-8 rounded-xl shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-primary">
            Coordonnées
          </h2>
          <p className="mb-4 font-semibold">
            Association A R M – Ateliers Relaxation Massage
          </p>

          <div className="flex items-center gap-3 mb-4 text-gray-800">
            <Phone size={20} className="text-primary" />
            <a href="tel:0798605626" className="hover:underline">
              07 98 60 56 26
            </a>
          </div>
          <div className="flex items-center gap-3 mb-6 text-gray-800">
            <Mail size={20} className="text-primary" />
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
              className="hover:underline"
            >
              {"julien.tamil"}&#64;{"gmail.com"}
            </a>
          </div>
          <p className="text-gray-700">
            Sur rendez-vous uniquement, dans la salle bien-être au{" "}
            <strong>10, Rue/Chemin de la Chênaie, 33430 Bazas</strong>
          </p>
        </div>

        <div className="overflow-hidden rounded-xl shadow-lg aspect-[16/9]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.881590513951!2d-0.24618012403219486!3d44.435591071075706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5575b56767b16f%3A0x1cdce518a1d47907!2s10%20Rue%20de%20la%20Ch%C3%AAnaie%2C%2033430%20Bazas!5e0!3m2!1sfr!2sfr!4v1750766861679!5m2!1sfr!2sfr"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Emplacement sur la carte"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
