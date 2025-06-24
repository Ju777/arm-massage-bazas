import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto text-center space-y-2">
        <p>© {new Date().getFullYear()} Association ARM – Tous droits réservés.</p>
        <Link href="/contact" className="underline">Contact</Link>
      </div>
    </footer>
  );
}