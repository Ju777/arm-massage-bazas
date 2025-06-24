export const metadata = {
  title: "Contact - ARM Bazas",
  description:
    "Contactez l’association ARM pour les entreprises ou le masseur indépendant pour les particuliers. Coordonnées, adresse et plan.",
};

export default function ContactPage() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-8">Contact</h1>
        <p className="text-center mb-6">
          Pour toute information ou réservation, n’hésitez pas à nous contacter.
        </p>
        <div className="space-y-4 text-center mb-8">
          <p>
            <strong>Association ARM</strong> – Ateliers Relaxation Massage
          </p>

          <p>
            <strong>Téléphone :</strong> 07 98 60 56 26
          </p>
          <p>
            <strong>Email :</strong> julien.tamil@gmail.com
          </p>
          <p>
            Sur rendez-vous uniquement, dans la salle bien-être au 10,
            Rue/Chemin de la Chênaie, 33430 Bazas
          </p>
        </div>
        <div className="relative w-full h-64 rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.881590513951!2d-0.24618012403219486!3d44.435591071075706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5575b56767b16f%3A0x1cdce518a1d47907!2s10%20Rue%20de%20la%20Ch%C3%AAnaie%2C%2033430%20Bazas!5e0!3m2!1sfr!2sfr!4v1750766861679!5m2!1sfr!2sfr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Emplacement sur la carte"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
