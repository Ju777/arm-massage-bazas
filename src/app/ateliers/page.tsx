export const metadata = {
  title: "Ateliers - ARM Bazas",
  description:
    "Ateliers d’initiation au massage relaxant réservés aux adhérents ARM à Bazas.",
};

export default function AteliersPage() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <h1 className="text-3xl font-title text-primary mb-4">
          Ateliers d’initiation au massage relaxant
        </h1>
        <p className="text-dark mb-6">
          L’association ARM propose aux adhérents des ateliers d’initiation au
          massage relaxant dans une ambiance conviviale. Apprenez les gestes
          essentiels aux côtés d’un praticien qualifié, dans notre salle à
          Bazas.
        </p>
        <ul className="text-left list-disc list-inside mb-6 text-dark space-y-2">
          <li>Public réservé aux adhérents ARM</li>
          <li>Séances d’1 à 2 heures dans notre salle à Bazas</li>
          <li>Sur inscription préalable</li>
          <li>Tarif préférentiel pour les membres</li>
        </ul>
        <p className="text-dark mb-8">
          Pour plus d’informations ou pour vous inscrire, contactez-nous !
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition"
        >
          Nous contacter
        </a>
      </div>
    </section>
  );
}
