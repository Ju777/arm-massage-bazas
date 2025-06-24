import Hero from '@/components/Hero';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Hero title="A R M – Ateliers Relaxation Massage" subtitle="Bien-être pour entreprises et particuliers à Bazas" />
      <section className="py-16 text-center">
        <p className="mb-8 text-lg max-w-2xl mx-auto px-4">
          L’Association ARM propose aux TPE/PME du Bazadais des prestations de massage et relaxation sur site et dans sa salle bien-être à Bazas. Pour les particuliers, le masseur indépendant vous accueille sur rendez-vous pour des soins sur mesure.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
          <Link href="/entreprises" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Entreprises</Link>
          <Link href="/particuliers" className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">Particuliers</Link>
        </div>
      </section>
    </>
  );
}