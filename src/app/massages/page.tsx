import Image from "next/image";
import { Sparkles } from "lucide-react";

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
            Massages sur rdv
          </h1>
          <p className="text-dark leading-relaxed text-justify">
            Venez vous détendre dans une ambiance calme et apaisante à Bazas.
            Des massages sur mesure pour votre bien-être et votre relaxation.
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
          <div className="grid gap-4 mb-6">
            <div className="p-4 border border-secondary rounded-lg bg-white shadow-sm">
              <h3 className="font-bold text-primary mb-1">
                Massage personnalisé 1h
              </h3>
              <p className="text-sm text-dark">
                Détente, sportif, ou selon votre demande.
              </p>
            </div>
            <div className="p-4 border border-secondary rounded-lg bg-white shadow-sm">
              <h3 className="font-bold text-primary mb-1">
                Réflexologie plantaire 1h
              </h3>
              <p className="text-sm text-dark">
                Massage appuyé de la voûte plantaire pour un effet détente et
                détox.
              </p>
            </div>
            <div className="p-4 border border-secondary rounded-lg bg-white shadow-sm">
              <h4 className="font-bold text-primary mb-1">
                Soin énergétique 1h
              </h4>
              <p className="text-sm text-dark">
                Soin énergétique doux et profond qui harmonise le magnétisme du
                corps pour libérer le stress, stimuler la vitalité naturelle et
                procurer un bien-être global. La technique employée
                s&apos;appelle &quot;La Polarité&quot;.
              </p>
            </div>
          </div>

          <p className="italic text-sm text-dark/80 mb-4">
            Tous nos soins sont à visée de bien-être, de relaxation et de
            détente. Ils ne remplacent en aucun cas une pratique médicale ou
            thérapeutique et sont totalement dénués de caractère sexuel.
          </p>

          <ul className="space-y-2 list-disc list-inside">
            <li>
              <strong>Tarif unique :</strong> 50 € / séance
            </li>
            <li>Ambiance calme et propice à la détente</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-title text-primary mb-2">Prise de rdv</h2>
          <p className="mb-4 text-dark leading-relaxed">
            Contactez-nous par téléphone ou par mail pour planifier votre
            créneau.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white shadow hover:bg-primary/90 transition"
          >
            <Sparkles size={18} /> Nous contacter
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
          </em>{" "}
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
