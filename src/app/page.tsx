import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";

export default function HomePage() {
  return (
    <>
      <Hero
        title="A R M – Ateliers Relaxation Massage"
        subtitle="Bien-être pour entreprises, particuliers et adhérents à Bazas"
      />
      <section className="py-16 text-center bg-white">
        <p className="mb-8 text-lg max-w-2xl mx-auto px-4 text-dark">
          L’Association ARM propose aux TPE/PME du Bazadais des prestations de
          massage et relaxation sur site, aux particuliers des soins sur mesure,
          ainsi qu’à ses adhérents des ateliers d’initiation au massage relaxant
          dans une ambiance conviviale.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
          <CTAButton href="/ateliers" variant="secondary" icon="heart">
            Ateliers
          </CTAButton>
          <CTAButton href="/entreprises" variant="third" icon="business">
            Entreprises
          </CTAButton>
          <CTAButton href="/particuliers" variant="primary" icon="user">
            Particuliers
          </CTAButton>
        </div>
      </section>
    </>
  );
}
