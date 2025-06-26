import Image from 'next/image';

export const metadata = {
  title: 'Particuliers - A R M Bazas',
  description:
    'Massages bien-être à Bazas, réalisés par un masseur indépendant dans une ambiance calme et apaisante.',
};

export default function ParticuliersPage() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mb-8">Massages pour particuliers</h1>
        <p className="text-center max-w-2xl mx-auto mb-12 text-lg">
          Je vous accueille dans une ambiance calme et apaisante à Bazas. Massages sur mesure pour votre bien-être et votre relaxation. Prestations assurées par un masseur indépendant.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 relative w-full h-64 rounded overflow-hidden shadow">
            <Image
              src="/images/hero.jpg"
              alt="Salle de massage à Bazas"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-semibold">Séances sur rendez-vous</h2>
            <p>Des massages personnalisés (relaxant, sportif, détente musculaire) adaptés à vos besoins. Durée d’environ 1 heure.</p>
            <p><strong>Tarif unique :</strong> 50 € / séance</p>
            <p>Contactez-moi par téléphone ou par mail pour planifier votre créneau dans une ambiance propice à la détente.</p>
          </div>
        </div>
      </div>
    </section>
  );
}