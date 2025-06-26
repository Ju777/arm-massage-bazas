"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { href: "/ateliers", mainLabel: "Ateliers", subLabel: "d’initiation" },
    { href: "/entreprises", mainLabel: "TPE / PME Bazas", subLabel: "animations bien-être" },
    { href: "/massages", mainLabel: "Massages", subLabel: "sur rdv" },
    { href: "/contact", mainLabel: "Contact", subLabel: "nos coordonnées" },
  ];

  return (
    <header className="bg-beige border-b border-secondary sticky top-0 z-50 transition-shadow">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
          <Image
            src="/images/logo.png"
            alt="ARM Bazas"
            width={48}
            height={48}
            className="rounded-full border-2 border-primary"
          />
          <span className="font-title text-xl text-primary font-bold">ARM Bazas</span>
        </Link>

        {/* Bouton mobile */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-secondary transition transform hover:scale-110"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
        </button>

        {/* Navigation */}
        <nav
          className={`${
            open ? "block" : "hidden"
          } md:flex md:items-center font-sans text-center text-primary text-lg space-x-4`}
        >
          {menuItems.map((item, index) => (
            <span key={item.href} className="flex items-center">
              <Link href={item.href} className="block px-2 py-1 hover:text-primary/80 transition-colors">
                <span className="block text-base font-semibold leading-tight">{item.mainLabel}</span>
                <span className="block text-xs font-light leading-tight -mt-1">{item.subLabel}</span>
              </Link>
              {index < menuItems.length - 1 && (
                <Sparkles className="w-4 h-4 text-secondary mx-1" />
              )}
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
}
