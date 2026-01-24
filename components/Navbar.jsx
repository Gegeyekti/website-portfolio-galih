"use client";

import { useState } from "react";
import { ListIcon } from "@phosphor-icons/react";

const links = ["Home", "About", "Portfolio", "Certificate", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold tracking-widest cursor-pointer">
          GALIH YEKTI
        </span>

        {/* Desktop */}
        <ul className="hidden md:flex gap-10 text-sm uppercase tracking-widest">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-green-400"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-sm cursor-pointer"
        >
          <ListIcon />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-black px-6 pb-6">
          <ul className="flex flex-col gap-4 uppercase tracking-widest text-sm">
            {links.map((link) => (
              <li key={link}>
                <a
                  onClick={() => setOpen(false)}
                  href={`#${link.toLowerCase()}`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
