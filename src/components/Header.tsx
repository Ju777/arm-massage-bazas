"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

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

  useEffect(() => {
    if (open && navRef.current) {
      navRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    const now = new Date();
    const cutoffDate = new Date("2025-11-01");
    if (now >= cutoffDate) {
      setShowAnnouncement(false);
    }
  }, []);

  return (
    <>
      {showAnnouncement && (
        <div
          className="
            w-full bg-primary text-white text-center text-sm md:text-base
            py-2 px-4 font-medium
            animate-slideIn
          "
        >
          Ouverture le 15 septembre 2025 🎉
        </div>
      )}

      <header className="bg-beige border-b border-secondary sticky top-0 z-40 transition-shadow">
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
              priority
            />
            <span className="font-title text-xl text-primary font-bold">
              ARM Bazas
            </span>
          </Link>

          {/* Mobile button */}
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
            } md:flex md:flex-row md:items-center md:space-y-0 font-sans text-center text-primary text-lg`}
          >
            <div className="flex md:space-x-6 items-center">
              {menuItems.map((item, index) => (
                <div key={item.href} className="flex items-center space-x-6">
                  <Link
                    href={item.href}
                    className={`
                      block px-2 py-1 rounded-md transition-all duration-300 ease-in-out
                      hover:bg-secondary/10 hover:text-primary hover:scale-[1.02]
                      ${
                        pathname === item.href
                          ? "bg-beige border-b-2 border-primary text-primary font-semibold shadow-inner"
                          : ""
                      }
                    `}
                  >
                    <span className="block text-base font-semibold leading-tight">
                      {item.mainLabel}
                    </span>
                    <span className="block text-xs font-light leading-tight -mt-1">
                      {item.subLabel}
                    </span>
                  </Link>

                  {/* Sparkles sauf sur le dernier item */}
                  {index < menuItems.length - 1 && (
                    <Sparkles className="w-4 h-4 text-primary" />
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
