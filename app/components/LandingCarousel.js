"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CustomCursor from "./CustomCursor";

// Row 1: 5 Unique Landing Page Projects (sample-landing-page-1 to 5)
const row1LandingCards = [
  {
    id: 1,
    slug: "sample-landing-page-1",
    title: "Landing Page Project 01",
    category: "SaaS Landing Page",
    renderContent: () => (
      <div className="w-full h-full relative overflow-hidden bg-zinc-950 flex items-center justify-center">
        <Image
          src="/landingpage/landingpage1.png"
          alt="Landing Page Project 1 Showcase"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    ),
  },
  {
    id: 2,
    slug: "sample-landing-page-2",
    title: "Landing Page Project 02",
    category: "Mobile Landing Page",
    renderContent: () => (
      <div className="w-full h-full relative overflow-hidden bg-zinc-950 flex items-center justify-center">
        <Image
          src="/landingpage/landingpage2.png"
          alt="Landing Page Project 2 Showcase"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    ),
  },
  {
    id: 3,
    slug: "sample-landing-page-3",
    title: "Landing Page Project 03",
    category: "Product Landing Page",
    renderContent: () => (
      <div className="w-full h-full relative overflow-hidden bg-zinc-950 flex items-center justify-center">
        <Image
          src="/landingpage/landingpage3.png"
          alt="Landing Page Project 3 Showcase"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    ),
  },
  {
    id: 4,
    slug: "sample-landing-page-4",
    title: "Landing Page Project 04",
    category: "Developer Documentation & Landing",
    renderContent: () => (
      <div className="w-full h-full relative overflow-hidden bg-zinc-950 flex items-center justify-center">
        <Image
          src="/landingpage/landingpage4.png"
          alt="Landing Page Project 4 Showcase"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    ),
  },
  {
    id: 5,
    slug: "sample-landing-page-5",
    title: "Landing Page Project 05",
    category: "Biotechnology Landing Page",
    renderContent: () => (
      <div className="w-full h-full relative overflow-hidden bg-zinc-950 flex items-center justify-center">
        <Image
          src="/landingpage/landingpage5.png"
          alt="Landing Page Project 5 Showcase"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    ),
  },
];

// Row 2: 5 Different Unique Landing Page Projects (sample-landing-page-6 to 10)
const row2LandingCards = [
  {
    id: 6,
    slug: "sample-landing-page-6",
    title: "Landing Page Project 06",
    category: "Enterprise Security Landing Page",
    renderContent: () => (
      <div className="w-full h-full relative overflow-hidden bg-zinc-950 flex items-center justify-center">
        <Image
          src="/landingpage/landingpage6.png"
          alt="Landing Page Project 6 Showcase"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    ),
  },
  {
    id: 7,
    slug: "sample-landing-page-7",
    title: "Landing Page Project 07",
    category: "SaaS OS Landing Page",
    renderContent: () => (
      <div className="w-full h-full relative overflow-hidden bg-zinc-950 flex items-center justify-center">
        <Image
          src="/landingpage/landingpage7.png"
          alt="Landing Page Project 7 Showcase"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    ),
  },
  {
    id: 8,
    slug: "sample-landing-page-8",
    title: "Landing Page Project 08",
    category: "HealthTech Landing Page",
    renderContent: () => (
      <div className="w-full h-full relative overflow-hidden bg-zinc-950 flex items-center justify-center">
        <Image
          src="/landingpage/landingpage8.png"
          alt="Landing Page Project 8 Showcase"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    ),
  },
  {
    id: 9,
    slug: "sample-landing-page-9",
    title: "Landing Page Project 09",
    category: "Spatial 3D Landing Page",
    renderContent: () => (
      <div className="w-full h-full relative overflow-hidden bg-zinc-950 flex items-center justify-center">
        <Image
          src="/landingpage/landingpage9.png"
          alt="Landing Page Project 9 Showcase"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    ),
  },
  {
    id: 10,
    slug: "sample-landing-page-10",
    title: "Landing Page Project 10",
    category: "CleanTech Landing Page",
    renderContent: () => (
      <div className="w-full h-full relative overflow-hidden bg-zinc-950 flex items-center justify-center">
        <Image
          src="/landingpage/landingpage10.png"
          alt="Landing Page Project 10 Showcase"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    ),
  },
];

// Row 3: Reuse row 1 samples until dedicated row-3 projects are added.
const row3LandingCards = [
  {
    id: 11,
    slug: "sample-landing-page-11",
    title: "Landing Page Project 11",
    category: "Enterprise Security Landing Page",
    renderContent: () => (
      <div className="w-full h-full relative overflow-hidden bg-zinc-950 flex items-center justify-center">
        <Image
          src="/landingpage/landingpage11.png"
          alt="Landing Page Project 11 Showcase"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    ),
  },
  {
    id: 12,
    slug: "sample-landing-page-12",
    title: "Landing Page Project 12",
    category: "SaaS OS Landing Page",
    renderContent: () => (
      <div className="w-full h-full relative overflow-hidden bg-zinc-950 flex items-center justify-center">
        <Image
          src="/landingpage/landingpage12.png"
          alt="Landing Page Project 12 Showcase"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    ),
  },
  {
    id: 13,
    slug: "sample-landing-page-13",
    title: "Landing Page Project 13",
    category: "HealthTech Landing Page",
    renderContent: () => (
      <div className="w-full h-full relative overflow-hidden bg-zinc-950 flex items-center justify-center">
        <Image
          src="/landingpage/landingpage13.png"
          alt="Landing Page Project 13 Showcase"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    ),
  },
  {
    id: 14,
    slug: "sample-landing-page-14",
    title: "Landing Page Project 14",
    category: "Spatial 3D Landing Page",
    renderContent: () => (
      <div className="w-full h-full relative overflow-hidden bg-zinc-950 flex items-center justify-center">
        <Image
          src="/landingpage/landingpage14.png"
          alt="Landing Page Project 14 Showcase"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    ),
  },
  {
    id: 15,
    slug: "sample-landing-page-15",
    title: "Landing Page Project 15",
    category: "CleanTech Landing Page",
    renderContent: () => (
      <div className="w-full h-full relative overflow-hidden bg-zinc-950 flex items-center justify-center">
        <Image
          src="/landingpage/landingpage15.png"
          alt="Landing Page Project 15 Showcase"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    ),
  },
];
export default function LandingCarousel() {
  const [isCursorVisible, setIsCursorVisible] = useState(false);

  // Tripled arrays for seamless infinite looping marquee matching WorkCarousel
  const row1Cards = [
    ...row1LandingCards,
    ...row1LandingCards,
    ...row1LandingCards,
  ];

  const row2Cards = [
    ...row2LandingCards,
    ...row2LandingCards,
    ...row2LandingCards,
  ];

  const row3Cards = [
    ...row3LandingCards,
    ...row3LandingCards,
    ...row3LandingCards,
  ];

  return (
    <div className="w-full overflow-hidden py-4 select-none flex flex-col gap-3 sm:gap-4 relative">
      {/* Floating Custom "View" Translucent Glass Cursor */}
      <CustomCursor isVisible={isCursorVisible} text="View" />

      {/* Row 1: Right-to-Left (5 Unique Landing Pages) */}
      <motion.div
        className="flex gap-3 sm:gap-4 w-max"
        animate={{
          x: ["0%", "-33.3333%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 75,
        }}
      >
        {row1Cards.map((card, index) => (
          <Link
            key={`landing-row1-${card.id}-${index}`}
            href={`/landing-page/${card.slug}`}
            onMouseEnter={() => setIsCursorVisible(true)}
            onMouseLeave={() => setIsCursorVisible(false)}
            className="w-[380px] sm:w-[500px] lg:w-[580px] h-[250px] sm:h-[330px] lg:h-[380px] rounded-none overflow-hidden flex-shrink-0 relative cursor-none block bg-zinc-950"
          >
            {card.renderContent()}
          </Link>
        ))}
      </motion.div>

      {/* Row 2: Left-to-Right (5 Different Unique Landing Pages) */}
      <motion.div
        className="flex gap-3 sm:gap-4 w-max"
        animate={{
          x: ["-33.3333%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 75,
        }}
      >
        {row2Cards.map((card, index) => (
          <Link
            key={`landing-row2-${card.id}-${index}`}
            href={`/landing-page/${card.slug}`}
            onMouseEnter={() => setIsCursorVisible(true)}
            onMouseLeave={() => setIsCursorVisible(false)}
            className="w-[380px] sm:w-[500px] lg:w-[580px] h-[250px] sm:h-[330px] lg:h-[380px] rounded-none overflow-hidden flex-shrink-0 relative cursor-none block bg-zinc-950"
          >
            {card.renderContent()}
          </Link>
        ))}
      </motion.div>

      {/* Row 3: Right-to-Left (same motion as Row 1) */}
      <motion.div
        className="flex gap-3 sm:gap-4 w-max"
        animate={{
          x: ["0%", "-33.3333%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 75,
        }}
      >
        {row3Cards.map((card, index) => (
          <Link
            key={`landing-row3-${card.id}-${index}`}
            href={`/landing-page/${card.slug}`}
            onMouseEnter={() => setIsCursorVisible(true)}
            onMouseLeave={() => setIsCursorVisible(false)}
            className="w-[380px] sm:w-[500px] lg:w-[580px] h-[250px] sm:h-[330px] lg:h-[380px] rounded-none overflow-hidden flex-shrink-0 relative cursor-none block bg-zinc-950"
          >
            {card.renderContent()}
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
