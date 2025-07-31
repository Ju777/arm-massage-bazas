import Image from "next/image";
import { Sparkles, Hand, Footprints, Zap, Droplet } from "lucide-react";
import { PrestationCard } from "../../components/PrestationCard";

export const metadata = {
  title: "Particuliers - ARM Bazas",
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
            src="/images/hero.jpg"
            alt="Salle de bien-être à Bazas"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Prestations */}
      <div className="container mx-auto px-6 bg-beige rounded-xl shadow p-6 mb-12 border border-secondary">
        <div className="grid gap-6 mb-6 grid-cols-1 md:grid-cols-2">
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
            title="Soin énergétique (Polarité) – 1h"
            description="Plongez dans un univers de douceur magnétique où le corps retrouve son équilibre et sa vitalité. Ce soin harmonise votre énergie, fait recirculer le magnétisme de votre corps et vous invite à une renaissance intérieure, source de sérénité profonde."
            price="50 €"
          />
          <PrestationCard
            icon={<Droplet size={28} />}
            title="Gommage + Massage – 1h30"
            description="Éveillez votre peau à une nouvelle lumière grâce à un gommage délicat du corps, suivi d’un massage enveloppant qui prolonge l’expérience de détente. Une pause précieuse pour vous sentir à la fois léger(e), rayonnant(e) et pleinement apaisé(e)."
            price="70 €"
          />
        </div>

        <p className="italic text-sm text-dark/70 mb-6 text-center">
          Tous nos soins sont à visée de bien-être, de relaxation et de détente.
          Ils ne remplacent en aucun cas une pratique médicale ou thérapeutique
          et sont totalement dénués de caractère sexuel.
        </p>

        <p className="italic text-sm text-dark/70 mb-6 text-center">
          Paiement uniquement par chèque ou espèces.
        </p>

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
      <div className="container mx-auto px-6 bg-beige rounded-xl shadow p-6 text-dark border border-secondary">
        <h2 className="text-xl font-title text-primary mb-2">Votre masseur</h2>
        <p className="leading-relaxed mb-2">
          Votre masseur est{" "}
          <em>
            praticien en techniques éducatives et corporelles par le toucher
          </em>
          , formé sur un cursus de 800 heures entre 2008 et 2010.
        </p>
        <p className="leading-relaxed mb-2">
          Après sa formation, il a pratiqué en Inde du Sud lors d&apos;un séjour
          de 3 ans à Pondichéry (2011–2014), avant d’enrichir son expérience
          dans différents contextes en France : EHPAD en Gironde, instituts de
          beauté, ainsi qu’au SPA <em>Les Sources de Caudalie</em> à Martillac
          (33).
        </p>
        <p className="leading-relaxed">
          Son expertise et sa bienveillance vous assurent une séance adaptée à
          vos besoins dans une atmosphère de confiance et de respect.
        </p>
      </div>
    </section>
  );
}
