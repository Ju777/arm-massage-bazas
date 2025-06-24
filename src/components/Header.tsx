"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50 transition-shadow duration-300 hover:shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Logo ARM Bazas"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="text-xl font-bold">ARM Bazas</span>
        </Link>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={`${open ? 'block' : 'hidden'} md:flex md:space-x-6`}>
          <Link href="/entreprises" className="block py-2 hover:text-blue-600 transition">Entreprises</Link>
          <Link href="/particuliers" className="block py-2 hover:text-blue-600 transition">Particuliers</Link>
          <Link href="/contact" className="block py-2 hover:text-blue-600 transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
