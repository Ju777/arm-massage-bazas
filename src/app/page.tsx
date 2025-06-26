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
      <section className="py-16 text-justify bg-white">
        <p className="mb-8 text-lg max-w-2xl mx-auto px-4 text-dark">
          <strong>A R M</strong> signifie{" "}
          <strong>Ateliers Relaxation Massage</strong>. Notre association
          propose à ses adhérents des{" "}
          <strong>ateliers d&apos;initiation</strong> au massage relaxant à
          Bazas, des <strong>animations de bien-être pour les TPE/PME</strong>{" "}
          du Bazadais ainsi que des <strong>massages relaxants</strong> sur
          mesure dans notre salle bien-être, par un masseur indépendant).
        </p>
        <p className="mb-8 text-lg max-w-2xl mx-auto px-4 text-dark">
          Découvrez-nous !
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
          <CTAButton href="/ateliers" variant="secondary" icon="heart">
            Ateliers
          </CTAButton>
          <CTAButton href="/entreprises" variant="third" icon="business">
            TPE / PME Bazas
          </CTAButton>
          <CTAButton href="/massages" variant="primary" icon="user">
            Massages
          </CTAButton>
        </div>
      </section>
    </>
  );
}
