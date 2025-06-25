import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";

export default function HomePage() {
  return (
    <>
      <Hero
        title="A R M Bazas"
        subtitle1="Ateliers d'initiation au massage relaxant"
        subtitle2="Bien-être pour entreprises & particuliers"
      />
      <section className="py-16 text-center bg-white">
        <p className="mb-8 text-lg max-w-2xl mx-auto px-4 text-dark">
          ARM signifie Ateliers Relaxation Massage. Notre association propose à
          ses adhérents des ateliers d&apos;initiations au massage relaxant à
          Bazas, des animations de bien-être pour les TPE/PME du Bazadais et
          ainsi que des massages relaxants sur mesure dans notre salle
          bien-être.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
          <CTAButton href="/ateliers" variant="secondary" icon="heart">
            Ateliers
          </CTAButton>
          <CTAButton href="/entreprises" variant="third" icon="business">
            Entreprises
          </CTAButton>
          <CTAButton href="/massages" variant="primary" icon="user">
            Massages
          </CTAButton>
        </div>
      </section>
    </>
  );
}
