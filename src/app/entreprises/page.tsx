import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import { Sparkles } from "lucide-react";

export const metadata = {
  title: "Entreprises - A R M Bazas",
  description:
    "Prestations bien-être sur mesure pour les entreprises (TPE/PME) du Bazadais.",
};

export default function EntreprisesPage() {
  const services = [
    {
      title: "Atelier Détente & Cohésion",
      description:
        "Séance collective de 3h sur votre site ou dans notre salle. Inclut des exercices simples de relaxation et d'auto-massage pour votre équipe (maximum 4 personnes).",
      price: "350 €",
    },
    {
      title: "Pack Bien-Être Personnel",
      description:
        "Lot de 5 séances de massage sur chaise ergonomique (1h par personne). Offrez à vos salariés une pause bien-être personnalisée dans notre salle à Bazas.",
      price: "275 €",
    },
    {
      title: "Pause Express (Massage assis)",
      description:
        "2 heures d'intervention sur votre site avec massage sur chaise ergonomique (environ 10-12 min par personne). Détente rapide garantie !",
      price: "150 €",
    },
    {
      title: "Atelier Automassage",
      description:
        "Atelier d'1h sur site pour apprendre des techniques simples d'auto-massage. Conçu pour des groupes jusqu’à 10 personnes. ",
      price: "120 €",
    },
  ];

  return (
    <section className="py-16 bg-light">
      {/* En-tête + image */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
        <div className="flex-1 text-center md:text-left space-y-4">
          <h1 className="text-3xl font-title text-primary mb-2">
            Prestations bien-être pour entreprises
          </h1>
          <p className="text-dark leading-relaxed">
            L’association ARM propose aux entreprises des prestations sur mesure
            pour le bien-être de vos équipes dans le Bazadais. Offrez à vos
            collaborateurs des moments de détente et de cohésion adaptés à vos
            besoins.
          </p>
        </div>
        <div className="relative flex-1 w-full h-64 rounded-xl overflow-hidden shadow-lg border border-secondary">
          <Image
            src="/images/amma.jpeg" // adapte le chemin et nom d’image
            alt="Bien-être en entreprise à Bazas"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Services */}
      <div className="container mx-auto px-6">
        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>

      {/* Bouton Contact en bas */}
      <div className="container mx-auto px-6 mt-12 text-center">
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-white shadow hover:bg-primary/90 transition"
        >
          <Sparkles size={18} /> Nous contacter
        </a>
      </div>
    </section>
  );
}
