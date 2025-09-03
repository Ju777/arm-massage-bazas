import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";

export default function HomePage() {
  return (
    <>
      <Hero
        title="ARM Bazas"
        subtitle1="Prestations de bien-être pour les particuliers"
        subtitle2="et les pros du Bazadais"
      />

      <section className="py-16 bg-white text-dark max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-title text-primary mb-8 text-center">
          Que fait ARM à Bazas ?
        </h2>

        <p className="mb-6 text-lg leading-relaxed text-justify">
          <strong>ARM</strong> signifie{" "}
          <strong>Ateliers Relaxation Massage</strong>. Notre association loi
          1901 propose aux habitants et professionnels du Bazadais des
          prestations de bien-être accessibles, collectives ou individuelles :
        </p>

        <ul className="list-none space-y-6 mb-10 text-lg">
          <li className="flex items-start gap-4">
            <span className="text-primary text-2xl" aria-hidden="true">
              💆‍♀️
            </span>
            <span>
              <strong>Pour nos adhérents :</strong> ateliers d’initiation au
              massage relaxant. Recréons du lien en apprenant à masser en toute
              bienveillance dans notre salle bien-être de Bazas.
            </span>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-primary text-2xl" aria-hidden="true">
              🏢
            </span>
            <span>
              <strong>Pour les TPE/PME de Bazas et ses environs :</strong>{" "}
              animations bien-être sur site ou dans notre salle, avec la
              possibilité de choisir des prestations pendant ou en dehors des
              horaires de travail, pour mieux accompagner et alléger vos
              équipes.
            </span>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-primary text-2xl" aria-hidden="true">
              🧘
            </span>
            <span>
              <strong>Pour toutes et tous :</strong> soins corps et massages
              relaxants sur rendez-vous. Une
              parenthèse de calme dans notre salle bien-être.
            </span>
          </li>
        </ul>

        <p className="mb-12 text-lg leading-relaxed text-center font-semibold text-primary">
          ✨ Une approche humaine, locale et accessible à tous.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <CTAButton
            href="/ateliers"
            variant="secondary"
            icon="heart"
            className="w-full md:w-auto"
          >
            Ateliers d&apos;initiation
          </CTAButton>

          <CTAButton
            href="/entreprises"
            variant="third"
            icon="business"
            className="w-full md:w-auto"
          >
            TPE / PME
          </CTAButton>

          <CTAButton
            href="/soins-corps"
            variant="primary"
            icon="hand"
            className="w-full md:w-auto"
          >
            Soins corps
          </CTAButton>
        </div>
      </section>
    </>
  );
}
