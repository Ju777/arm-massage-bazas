import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-beige text-dark py-8 mt-12 border-t border-secondary">
      <div className="container mx-auto text-center space-y-4 px-4">
        <Link href="/" className="inline-block">
          <Image
            src="/images/logo.png"
            alt="A R M Bazas"
            width={48}
            height={48}
            className="rounded-full mx-auto mb-2 border-2 border-primary"
          />
        </Link>
        <p className="font-title text-lg text-primary">
          A R M – Ateliers Relaxation Massage
        </p>
        <p className="text-sm opacity-70">
          Tous droits réservés © {new Date().getFullYear()}
        </p>
        {/* <nav className="flex justify-center space-x-6 mt-2">
          <Link href="/ateliers" className="hover:text-primary transition">
            Ateliers
          </Link>
          <Link href="/entreprises" className="hover:text-primary transition">
            Entreprises
          </Link>
          <Link href="/massages" className="hover:text-primary transition">
            Massages
          </Link>
          <Link href="/contact" className="hover:text-primary transition">
            Contact
          </Link>
        </nav> */}
      </div>
    </footer>
  );
}
