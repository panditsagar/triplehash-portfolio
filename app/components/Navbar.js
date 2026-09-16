"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full px-6 sm:px-10 lg:px-16 py-6 md:py-8 flex items-center justify-between text-zinc-900 text-sm sm:text-base font-sans">
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
      <nav className="flex items-center gap-6 sm:gap-8 font-medium text-zinc-900">
        <Link
          href="#website"
          className="hover:text-zinc-500 transition-colors duration-200"
        >
          Website
        </Link>
        <Link
          href="#landing-page"
          className="hover:text-zinc-500 transition-colors duration-200"
        >
          Landing Page
        </Link>
      </nav>

      {/* Contact CTA */}
      <div>
        <a
          href="mailto:hello@triplehash.com"
          className="flex items-center gap-1.5 text-zinc-900 hover:text-zinc-500 transition-colors duration-200 font-normal"
        >
          <span className="text-base select-none">↪</span>
          <span>Send me a message</span>
        </a>
      </div>
    </header>
  );
}
