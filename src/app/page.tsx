import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";

export default function HomePage() {
  return (
    <>
      <Hero
        title="ARM Bazas"
        subtitle1="Ateliers d'initiation au massage relaxant"
        subtitle2="Bien-être pour les pros de Bazas & les particuliers"
      />
      <section className="py-16 text-justify bg-white">
        <div className="max-w-2xl mx-auto px-4 text-dark">
          <p className="mb-6 text-lg">
            <strong>ARM</strong> signifie{" "}
            <strong>Ateliers Relaxation Massage</strong>. Notre association loi
            1901 propose aux habitants et professionnels du Bazadais des prestations de bien-être
            accessibles, collectives ou individuelles :
          </p>

          <ul className="list-none space-y-4 mb-8 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-primary">💆‍♀️</span>
              <span>
                <strong>Pour nos adhérents :</strong> ateliers d’initiation au
                massage relaxant. Recréons du lien en apprenant à masser en
                toute bienveillance dans notre salle bien-être de Bazas.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">🏢</span>
              <span>
                <strong>Pour les TPE/PME de Bazas :</strong> animations
                bien-être sur site ou chez nous. Améliorez la qualité de vie au
                travail à Bazas avec des interventions pendant et en dehors des
                horaires pros.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">🧘</span>
              <span>
                <strong>Pour toutes et tous :</strong> massages relaxants sur
                rendez-vous. Une parenthèse de calme dans notre salle bien-être
                à Bazas.
              </span>
            </li>
          </ul>

          <p className="mb-8 text-lg">
            ✨{" "}
            <strong>Une approche humaine, locale et accessible à tous.</strong>
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
          <CTAButton href="/ateliers" variant="secondary" icon="heart">
            Ateliers d&apos;initiation
          </CTAButton>
          <CTAButton href="/entreprises" variant="third" icon="business">
            TPE / PME Bazas
          </CTAButton>
          <CTAButton href="/soins-corps" variant="primary" icon="user">
            Soins corps
          </CTAButton>
        </div>
      </section>
    </>
  );
}
