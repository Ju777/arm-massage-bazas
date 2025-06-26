import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(baseURL),
  title: "ARM Bazas",
  description:
    "Ateliers Relaxation Massage à Bazas. Prestations de massage pour entreprises et particuliers.",
  icons: {
    icon: [
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.ico", type: "image/ico" },
      "/favicon.ico",
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "ARM Bazas - Ateliers Relaxation Massage",
    description:
      "Massages bien-être à Bazas pour entreprises et particuliers. Découvrez nos ateliers relaxation et massage sur rdv.",
    images: [
      {
        url: "/images/logo.png",
        width: 600,
        height: 600,
      },
    ],
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: baseURL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
        {/* Lien skip accessible au clavier */}
        <a
          href="#main-content"
          className="skip-link absolute left-[-999px] top-auto w-px h-px overflow-hidden focus:left-4 focus:top-4 focus:w-auto focus:h-auto focus:p-2 focus:bg-primary focus:text-white focus:rounded-md transition-all z-50"
        >
          Passer au contenu
        </a>

        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
