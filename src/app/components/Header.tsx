'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="text-xl font-bold">A R M</Link>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={`${open ? 'block' : 'hidden'} md:flex md:space-x-6`}>
          <Link href="/entreprises" className="block py-2">Entreprises</Link>
          <Link href="/particuliers" className="block py-2">Particuliers</Link>
          <Link href="/contact" className="block py-2">Contact</Link>
        </nav>
      </div>
    </header>
  );
}