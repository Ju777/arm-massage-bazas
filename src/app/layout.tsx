import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Définit la base URL en fonction de l'environnement
const baseURL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(baseURL),
  title: "ARM Bazas",
  description:
    "Ateliers Relaxation Massage à Bazas. Prestations de massage pour entreprises et particuliers.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
