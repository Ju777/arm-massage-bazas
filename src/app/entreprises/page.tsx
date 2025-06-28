import Image from "next/image";
import ServiceCard from "@/components/ServiceCard"; // adapte le chemin si besoin

export const metadata = {
  title: "Entreprises - ARM Bazas",
  description:
    "Animations bien-être et qualité de vie au travail pour les TPE/PME du Bazadais.",
};

const marketingItems = [
  {
    title: "Démo gratuite",
    description:
      "Faites connaissance avec nous grâce à une démonstration gratuite de massage assis, sur votre lieu d'activité.",
    highlighted: true,
  },
  {
    title: "Adapté à vos horaires",
    description:
      "Nos prestations sont pensées pour qu'elles aient lieu pendant ou en dehors des horaires professionnels.",
  },
  {
    title: "Sur site ou chez nous",
    description:
      "Interventions directement dans vos locaux ou dans notre salle bien-être à Bazas.",
  },
  {
    title: "En individuel & en groupe",
    description:
      "Des prestations adaptées à tous les besoins : séances de groupe ou individuelles.",
  },
];

export default function EntreprisesPage() {
  const services = [
    {
      title: "Atelier collectif d'automassage",
      duration: "1h",
      participants: "10 personnes max",
      location: "Sur site",
      description:
        "Atelier d’1h sur site pour apprendre des techniques simples d’auto-massage. Les participants reproduisent des gestes simples à retenir pour gérer stress et fatigue, en tenue confortable.",
      practicalInfo: ["Se réalise habillé", "Tapis fournis"],
      price: "120 €",
      extraPricing: "10 € par personne supplémentaire au-delà de 10",
    },
    {
      title: "Pause Express (Massage assis)",
      duration: "2h",
      participants: "6 personnes (20' par personne)",
      location: "Sur site",
      description:
        "Offrez à vos équipes un moment de détente express sur leur lieu de travail. Chaque séance individuelle de 20 minutes cible dos, nuque, épaules et bras pour soulager les tensions rapidement.",
      practicalInfo: [
        "Se réalise habillé sur chaise érgonomique fournie",
        "Organisation simple, efficace et sans interruption majeure de l’activité.",
      ],
      price: "150 €",
      extraPricing: "70€ par heure supplémentaire",
    },
    {
      title: "Pack Bien-Être Personnel",
      duration: "5 massages d'1h",
      participants: "5 personnes",
      location: "Dans notre salle à Bazas",
      description:
        "Un pack de massages prépayés pour prendre soin de vos collaborateurs en dehors du cadre professionnel. Les séances sont individuelles et réalisées dans notre salle bien-être de Bazas. Les massages sont personnalisés comme si vous étiez en SPA (corps complet, zones ciblées, etc.), dans un espace calme et chaleureux.",
      practicalInfo: [
        "À réserver librement, sur créneaux choisis de 11h à 20h du lundi au samedi",
        "Un geste de reconnaissance pour renforcer la motivation et fidéliser vos talents",
      ],
      price: "275 €",
      extraPricing: "50€ par massage supplémentaire",
    },
    {
      title: "Atelier Détente & Cohésion",
      duration: "3h",
      participants: "4 personnes max",
      location: "Dans notre salle à Bazas",
      description:
        "Un atelier Team Building original pour renforcer les liens d’équipe tout en découvrant les bases du massage. Guidés dans une ambiance zen, les participants apprennent en binômes des gestes simples de relaxation du dos. Cet atelier se déroule dans notre salle bien-être de Bazas.",
      practicalInfo: [
        "Idéal pour créer un moment de partage, de bienveillance et de décompression collective",
        "Matériel fourni, tenue souple conseillée",
      ],
      price: "350 €",
      extraPricing: "",
    },
  ];

  return (
    <section className="py-16 bg-light">
      {/* En-tête + image */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
        <div className="flex-1 text-center md:text-left space-y-4">
          <h1 className="text-3xl font-title text-primary mb-2">
            Animations bien-être pour les TPE / PME du Bazadais
          </h1>
          <p className="text-dark leading-relaxed text-justify">
            L’association ARM propose aux entreprises des animations pour le
            bien-être de vos équipes dans le Bazadais. Offrez à vos
            collaborateurs des moments de détente et de cohésion adaptés à vos
            besoins. Organisation simple, efficace, qui impacte peu le temps de
            travail.
          </p>
        </div>
        <div className="relative flex-1 w-full h-64 rounded-xl overflow-hidden shadow-lg border border-secondary">
          <Image
            src="/images/amma.jpeg"
            alt="Bien-être en entreprise à Bazas"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Section Marketing */}
      <div className="container mx-auto px-6 mb-16 bg-gray-50 rounded-xl p-8 shadow-md border border-gray-200">
        <div className="grid gap-6 sm:grid-cols-4">
          {marketingItems.map(({ title, description, highlighted }) => (
            <div
              key={title}
              className={`text-center p-6 rounded-xl cursor-default transition-transform hover:scale-[1.03] ${
                highlighted
                  ? "bg-primary text-white shadow-xl"
                  : "bg-white text-gray-800 border border-gray-300 shadow-sm"
              }`}
            >
              <h3
                className={`font-semibold text-lg mb-3 ${
                  highlighted ? "text-white" : "text-primary"
                }`}
              >
                {title}
              </h3>
              <p
                className={`${highlighted ? "text-white/90" : "text-gray-700"}`}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Ligne de séparation */}
      <div className="container mx-auto px-6 mb-12">
        <hr className="border-gray-300" />
      </div>

      {/* Liste des services */}
      <div className="container mx-auto px-6 mb-16 bg-white rounded-xl p-8 shadow-md border border-gray-300">
        <h2 className="text-2xl font-title text-primary mb-8 text-center">
          Nos prestations
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
