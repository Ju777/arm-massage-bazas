"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-beige shadow-sm sticky top-0 z-50 transition-shadow">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
          <Image src="/images/logo.png" alt="ARM Bazas" width={48} height={48} className="rounded-full" />
          <span className="font-title text-xl text-primary font-bold">ARM Bazas</span>
        </Link>

        <button
          className="md:hidden p-2 rounded-full hover:bg-secondary transition"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
        </button>

        <nav className={`absolute top-16 left-0 w-full bg-beige md:static md:w-auto md:flex md:space-x-6 ${open ? 'block' : 'hidden'}`}>
          <Link href="/entreprises" className="block px-6 py-2 hover:text-primary transition">Entreprises</Link>
          <Link href="/particuliers" className="block px-6 py-2 hover:text-primary transition">Particuliers</Link>
          <Link href="/contact" className="block px-6 py-2 hover:text-primary transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
