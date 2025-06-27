"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const menuItems = [
    { href: "/ateliers", mainLabel: "Ateliers", subLabel: "d’initiation" },
    {
      href: "/entreprises",
      mainLabel: "TPE / PME Bazas",
      subLabel: "animations bien-être",
    },
    { href: "/massages", mainLabel: "Massages", subLabel: "sur rdv" },
    { href: "/contact", mainLabel: "Contact", subLabel: "nos coordonnées" },
  ];

  // Focus sur la nav quand le menu s'ouvre (mobile)
  useEffect(() => {
    if (open && navRef.current) {
      navRef.current.focus();
    }
  }, [open]);

  return (
    <header className="bg-beige border-b border-secondary sticky top-0 z-50 transition-shadow">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
        >
          <Image
            src="/images/logo.png"
            alt="ARM Bazas"
            width={48}
            height={48}
            className="rounded-full border-2 border-primary"
          />
          <span className="font-title text-xl text-primary font-bold">
            ARM Bazas
          </span>
        </Link>

        {/* Bouton mobile */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-secondary transition transform hover:scale-110"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? (
            <X size={24} className="text-primary" />
          ) : (
            <Menu size={24} className="text-primary" />
          )}
        </button>

        {/* Navigation */}
        <nav
          ref={navRef}
          tabIndex={-1}
          id="mobile-navigation"
          className={`${
            open ? "flex flex-col space-y-2 mt-4" : "hidden"
          } md:flex md:flex-row md:items-center md:space-y-0 md:space-x-4 font-sans text-center text-primary text-lg`}
        >
          {menuItems.map((item, index) => (
            <span key={item.href} className="flex items-center">
              <Link
                href={item.href}
                className="block px-2 py-1 rounded-md transition-all duration-300 ease-in-out hover:bg-secondary/10 hover:text-primary hover:scale-[1.02]"
              >
                <span className="block text-base font-semibold leading-tight">
                  {item.mainLabel}
                </span>
                <span className="block text-xs font-light leading-tight -mt-1">
                  {item.subLabel}
                </span>
              </Link>
              {index < menuItems.length - 1 && (
                <Sparkles className="w-4 h-4 text-primary mx-1" />
              )}
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
}
