"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full px-6 sm:px-10 lg:px-16 py-6 md:py-8 flex flex-wrap items-center justify-between text-zinc-900 text-sm sm:text-base font-sans">
      {/* Brand Logo & Name */}
      <div className="flex items-center gap-4 sm:gap-10">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.webp"
            alt="TripleHash Logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain transition-transform duration-200 group-hover:scale-105"
            priority
          />
          <span className="font-semibold text-zinc-950 tracking-tight text-base sm:text-lg">
            TripleHash
          </span>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-6 sm:gap-8 font-medium text-zinc-900">
        <Link
          href="/"
          className={`transition-colors duration-200 ${
            pathname === "/"
              ? "text-zinc-950    "
              : "text-zinc-600 hover:text-zinc-950"
          }`}
        >
          Website
        </Link>
        <Link
          href="/landing-page"
          className={`transition-colors duration-200 ${
            pathname === "/landing-page"
              ? "text-zinc-950   "
              : "text-zinc-600 hover:text-zinc-950"
          }`}
        >
          Landing Page
        </Link>
      </nav>

      {/* Contact CTA */}
      <div className="hidden md:block">
        <a
          href="mailto:connect@triplehash.in"
          className="flex items-center gap-1.5 text-zinc-900 hover:text-zinc-500 transition-colors duration-200 font-normal"
        >
          <span className="text-base select-none">↪</span>
          <span>Send me a message</span>
        </a>
      </div>

      <button
        type="button"
        className="md:hidden flex h-9 w-9 items-center justify-center text-zinc-900"
        aria-label="Toggle navigation menu"
        aria-controls="mobile-navigation"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={
              isMenuOpen
                ? "M6 6l12 12M6 18L18 6"
                : "M4 6h16M4 12h16m-7 6h7"
            }
          />
        </svg>
      </button>

      <div
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        className={`w-full overflow-hidden transition-[max-height,opacity] duration-200 md:hidden ${
          isMenuOpen ? "max-h-56 opacity-100" : "invisible max-h-0 opacity-0"
        }`}
      >
        <div className="pt-6 flex flex-col gap-5 font-medium text-zinc-900">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className={`transition-colors duration-200 ${
              pathname === "/"
                ? "text-zinc-950    "
                : "text-zinc-600 hover:text-zinc-950"
            }`}
          >
            Website
          </Link>
          <Link
            href="/landing-page"
            onClick={() => setIsMenuOpen(false)}
            className={`transition-colors duration-200 ${
              pathname === "/landing-page"
                ? "text-zinc-950   "
                : "text-zinc-600 hover:text-zinc-950"
            }`}
          >
            Landing Page
          </Link>
          <a
            href="mailto:connect@triplehash.in"
            className="flex items-center gap-1.5 text-zinc-900 hover:text-zinc-500 transition-colors duration-200 font-normal"
          >
            <span className="text-base select-none">â†ª</span>
            <span>Send me a message</span>
          </a>
        </div>
      </div>
    </header>
  );
}
