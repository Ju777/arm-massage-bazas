import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
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
