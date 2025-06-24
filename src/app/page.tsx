import Hero from '@/components/Hero';
import CTAButton from '@/components/CTAButton';

export default function HomePage() {
  return (
    <>
      <Hero title="A R M – Ateliers Relaxation Massage" subtitle="Bien-être pour entreprises et particuliers à Bazas" />
      <section className="py-16 text-center bg-light">
        <p className="mb-8 text-lg max-w-2xl mx-auto px-4 text-dark">
          L’Association ARM propose aux TPE/PME du Bazadais des prestations de massage et relaxation sur site ou dans sa salle bien-être à Bazas. Pour les particuliers, le masseur indépendant vous accueille sur rendez-vous pour des soins sur mesure.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
          <CTAButton href="/entreprises" variant="primary" icon="business">
            Entreprises
          </CTAButton>
          <CTAButton href="/particuliers" variant="secondary" icon="user">
            Particuliers
          </CTAButton>
        </div>
      </section>
    </>
  );
}