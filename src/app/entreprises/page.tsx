import ServiceCard from "@/components/ServiceCard";

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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mb-8">
          Prestations entreprises
        </h1>
        <p className="text-center max-w-2xl mx-auto mb-12 text-lg">
          L’association <strong>A R M</strong> propose aux entreprises des
          prestations sur mesure pour le bien-être de vos équipes dans le
          Bazadais.
        </p>
        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
