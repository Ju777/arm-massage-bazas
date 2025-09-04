import Image from "next/image";
import { Sparkles, Hand, Footprints, Zap, Droplet } from "lucide-react";
import { PrestationCard } from "../../components/PrestationCard";
import Disclaimer from "@/components/Disclaimer";
import MasseurBio from "@/components/MasseurBio";

export const metadata = {
  title: "Particuliers - ARM Bazas",
  description:
    "Massages bien-être à Bazas, réalisés par un masseur indépendant dans une ambiance calme et apaisante.",
};

export default function ParticuliersPage() {
  const prestations = [
    {
      icon: <Hand size={28} />,
      title: "Massage personnalisé – 1h",
      description:
        "Offrez-vous une parenthèse enchantée à Bazas, où chaque geste se fait doux voyage. Que vous souhaitiez un massage profond pour libérer les tensions ou un toucher léger pour favoriser la détente, chaque séance s’adapte avec soin à vos envies et besoins.",
      price: "50 €",
      imageSrc: "/images/massage-table-image.jpg",
    },
    {
      icon: <Footprints size={28} />,
      title: "Réflexologie plantaire – 1h",
      description:
        "Laissez vos pieds raconter l’histoire de votre bien-être. Par un toucher précis et appuyé, ce soin stimule naturellement la détoxification de votre corps tout en éveillant une sensation profonde de lâcher-prise et de renouveau.",
      price: "50 €",
      imageSrc: "/images/reflexology-image.png",
    },
    {
      icon: <Zap size={28} />,
      title: "Soin énergétique (appelé Polarité) – 1h",
      description:
        "Plongez dans un univers de douceur magnétique où le corps retrouve son équilibre et sa vitalité. Ce soin harmonise votre énergie, fait re-circuler le magnétisme de votre corps et vous invite à une renaissance intérieure, source de sérénité profonde.",
      price: "50 €",
      imageSrc: "/images/polarity-image.png",
    },
    {
      icon: <Droplet size={28} />,
      title: "Gommage + Massage – 1h30",
      description:
        "Éveillez votre peau à une nouvelle lumière grâce à un gommage délicat du corps, suivi d’un massage enveloppant qui prolonge l’expérience de détente. Une pause précieuse pour vous sentir à la fois léger(e), rayonnant(e) et pleinement apaisé(e).",
      price: "70 €",
      imageSrc: "/images/massage-table-image.jpg",
    },
  ];

  return (
    <section className="py-16 bg-light">
      {/* En-tête + image */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
        <div className="flex-1 text-center md:text-left space-y-4">
          <h1 className="text-3xl font-title text-primary mb-2">
            Soins corps sur rdv
          </h1>
          <p className="text-dark leading-relaxed text-justify">
            Venez vous détendre dans une ambiance calme et apaisante à Bazas.
            Des massages adaptés à tous pour votre bien-être et votre
            relaxation.
          </p>
        </div>
        <div className="relative flex-1 w-full h-64 rounded-xl overflow-hidden shadow-lg border border-secondary">
          <Image
            src="/images/hero-picture.jpg"
            alt="Salle de bien-être à Bazas"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Prestations */}
      <div className="container mx-auto px-6 bg-beige rounded-xl shadow p-6 mb-12 border border-secondary">
        <h2 className="text-2xl font-title text-primary mb-8 text-center">
          Nos soins relaxants
        </h2>

        <div className="grid gap-6 mb-6 grid-cols-1 md:grid-cols-2">
          {prestations.map((prestation) => (
            <PrestationCard key={prestation.title} {...prestation} />
          ))}
        </div>

        {/* <div className="grid gap-6 mb-6 grid-cols-1 md:grid-cols-2">
          <PrestationCard
            icon={<Hand size={28} />}
            title="Massage personnalisé – 1h"
            description="Offrez-vous une parenthèse enchantée à Bazas, où chaque geste se fait doux voyage. Que vous souhaitiez un massage profond pour libérer les tensions ou un toucher léger pour favoriser la détente, chaque séance s’adapte avec soin à vos envies et besoins."
            price="50 €"
          />
          <PrestationCard
            icon={<Footprints size={28} />}
            title="Réflexologie plantaire – 1h"
            description="Laissez vos pieds raconter l’histoire de votre bien-être. Par un toucher précis et appuyé, ce soin stimule naturellement la détoxification de votre corps tout en éveillant une sensation profonde de lâcher-prise et de renouveau."
            price="50 €"
          />
          <PrestationCard
            icon={<Zap size={28} />}
            title="Soin énergétique (appelé Polarité) – 1h"
            description="Plongez dans un univers de douceur magnétique où le corps retrouve son équilibre et sa vitalité. Ce soin harmonise votre énergie, fait re-circuler le magnétisme de votre corps et vous invite à une renaissance intérieure, source de sérénité profonde."
            price="50 €"
          />
          <PrestationCard
            icon={<Droplet size={28} />}
            title="Gommage + Massage – 1h30"
            description="Éveillez votre peau à une nouvelle lumière grâce à un gommage délicat du corps, suivi d’un massage enveloppant qui prolonge l’expérience de détente. Une pause précieuse pour vous sentir à la fois léger(e), rayonnant(e) et pleinement apaisé(e)."
            price="70 €"
          />
        </div> */}

        <Disclaimer />

        {/* Bouton unique Infos & RDV */}
        <div className="text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-white shadow hover:bg-primary/90 transition"
          >
            <Sparkles size={18} /> Infos & RDV
          </a>
        </div>
      </div>

      {/* À propos du masseur */}
      <MasseurBio />
    </section>
  );
}
