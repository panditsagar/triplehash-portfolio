"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CustomCursor from "./CustomCursor";
import { websiteData } from "@/lib/websiteData";

// Row 1: 5 Unique Websites (Projects 1 to 5)
const row1CardsData = [
  {
    id: 1,
    slug: "sample-website-1",
    title: "Website Project 01",
    category: "Webdesign & Development",
    renderContent: () => (
      <div className="w-full h-full relative overflow-hidden bg-zinc-950 flex items-center justify-center">
        <Image
          src="/website/website1.png"
          alt="Website Project 1 Showcase"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    ),
  },
  {
    id: 2,
    slug: "sample-website-2",
    title: "Website Project 02",
    category: "Webdesign & Development",
    renderContent: () => (
      <div className="w-full h-full relative overflow-hidden bg-zinc-950 flex items-center justify-center">
        <Image
          src="/website/website2.png"
          alt="Website Project 2 Showcase"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    ),
  },
  {
    id: 3,
    slug: "sample-website-3",
    title: "Website Project 03",
    category: "Webdesign & Development",
    renderContent: () => (
      <div className="w-full h-full relative overflow-hidden bg-zinc-950 flex items-center justify-center">
        <Image
          src="/website/website3.png"
          alt="Website Project 3 Showcase"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    ),
  },
  {
    id: 4,
    slug: "sample-website-4",
    title: "Website Project 04",
    category: "Webdesign & Development",
    renderContent: () => (
      <div className="w-full h-full relative overflow-hidden bg-zinc-950 flex items-center justify-center">
        <Image
          src="/website/website4.png"
          alt="Website Project 4 Showcase"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    ),
  },
  {
    id: 5,
    slug: "sample-website-5",
    title: "Website Project 05",
    category: "Webdesign & Development",
    renderContent: () => (
      <div className="w-full h-full relative overflow-hidden bg-zinc-950 flex items-center justify-center">
        <Image
          src="/website/website5.png"
          alt="Website Project 5 Showcase"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    ),
  },
];

// Row 2: 5 Different Unique Websites (Projects 6 to 10)
const row2CardsData = [
  {
    id: 6,
    slug: "sample-website-6",
    title: "Website Project 06",
    category: "Webdesign & Development",
    renderContent: () => (
      <div className="w-full h-full relative overflow-hidden bg-zinc-950 flex items-center justify-center">
        <Image
          src="/website/website6.png"
          alt="Website Project 6 Showcase"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    ),
  },
  {
    id: 7,
    slug: "sample-website-7",
    title: "Website Project 07",
    category: "Webdesign & Development",
    renderContent: () => (
      <div className="w-full h-full relative overflow-hidden bg-zinc-950 flex items-center justify-center">
        <Image
          src="/website/website2.png"
          alt="Website Project 7 Showcase"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    ),
  },
  {
    id: 8,
    slug: "sample-website-8",
    title: "Website Project 08",
    category: "Webdesign & Development",
    renderContent: () => (
      <div className="w-full h-full relative overflow-hidden bg-zinc-950 flex items-center justify-center">
        <Image
          src="/website/website3.png"
          alt="Website Project 8 Showcase"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    ),
  },
  {
    id: 9,
    slug: "sample-website-9",
    title: "Website Project 09",
    category: "Webdesign & Development",
    renderContent: () => (
      <div className="w-full h-full relative overflow-hidden bg-zinc-950 flex items-center justify-center">
        <Image
          src="/website/website4.png"
          alt="Website Project 9 Showcase"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    ),
  },
  {
    id: 10,
    slug: "sample-website-10",
    title: "Website Project 10",
    category: "Webdesign & Development",
    renderContent: () => (
      <div className="w-full h-full relative overflow-hidden bg-zinc-950 flex items-center justify-center">
        <Image
          src="/website/website5.png"
          alt="Website Project 10 Showcase"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    ),
  },
];

export default function WorkCarousel() {
  const [isCursorVisible, setIsCursorVisible] = useState(false);

  // Tripled arrays matching LandingCarousel structure for seamless infinite marquee loop
  const row1Duplicated = [
    ...row1CardsData,
    ...row1CardsData,
    ...row1CardsData,
  ];

  const row2Duplicated = [
    ...row2CardsData,
    ...row2CardsData,
    ...row2CardsData,
  ];

  return (
    <div className="w-full overflow-hidden py-4 select-none flex flex-col gap-3 sm:gap-4 relative">
      {/* Floating Custom "View" Translucent Glass Cursor */}
      <CustomCursor isVisible={isCursorVisible} text="View" />

      {/* Row 1 Mobile: Touch Snap Slider */}
      <div className="flex sm:hidden overflow-x-auto snap-x snap-mandatory no-scrollbar w-full gap-3 px-4 py-1">
        {row1CardsData.map((card) => (
          <Link
            key={`website-mobile-row1-${card.id}`}
            href={`/website/${card.slug}`}
            className="w-[82vw] max-w-[340px] aspect-[380/250] rounded-none overflow-hidden flex-shrink-0 relative block bg-zinc-950 snap-center"
          >
            {card.renderContent()}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/70 to-transparent sm:hidden z-10 pointer-events-none flex items-center justify-between gap-2">
              <p className="text-white text-xs font-medium tracking-wide truncate flex-1">
                {websiteData[card.slug]?.title || card.title}
              </p>
              <svg
                className="w-3.5 h-3.5 text-white/90 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17L17 7M17 7H7M17 7V17"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* Row 1 Desktop: Marquee Loop */}
      <motion.div
        className="hidden sm:flex gap-3 sm:gap-4 w-max"
        animate={{
          x: ["0%", "-33.3333%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 75,
        }}
      >
        {row1Duplicated.map((card, index) => (
          <Link
            key={`website-row1-${card.id}-${index}`}
            href={`/website/${card.slug}`}
            onMouseEnter={() => setIsCursorVisible(true)}
            onMouseLeave={() => setIsCursorVisible(false)}
            className="sm:w-[500px] lg:w-[580px] sm:h-[330px] lg:h-[380px] rounded-none overflow-hidden flex-shrink-0 relative cursor-none block bg-zinc-950"
          >
            {card.renderContent()}
          </Link>
        ))}
      </motion.div>

      {/* Row 2 Mobile: Touch Snap Slider */}
      <div className="flex sm:hidden overflow-x-auto snap-x snap-mandatory no-scrollbar w-full gap-3 px-4 py-1">
        {row2CardsData.map((card) => (
          <Link
            key={`website-mobile-row2-${card.id}`}
            href={`/website/${card.slug}`}
            className="w-[82vw] max-w-[340px] aspect-[380/250] rounded-none overflow-hidden flex-shrink-0 relative block bg-zinc-950 snap-center"
          >
            {card.renderContent()}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/70 to-transparent sm:hidden z-10 pointer-events-none flex items-center justify-between gap-2">
              <p className="text-white text-xs font-medium tracking-wide truncate flex-1">
                {websiteData[card.slug]?.title || card.title}
              </p>
              <svg
                className="w-3.5 h-3.5 text-white/90 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17L17 7M17 7H7M17 7V17"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* Row 2 Desktop: Marquee Loop */}
      <motion.div
        className="hidden sm:flex gap-3 sm:gap-4 w-max"
        animate={{
          x: ["-33.3333%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 75,
        }}
      >
        {row2Duplicated.map((card, index) => (
          <Link
            key={`website-row2-${card.id}-${index}`}
            href={`/website/${card.slug}`}
            onMouseEnter={() => setIsCursorVisible(true)}
            onMouseLeave={() => setIsCursorVisible(false)}
            className="sm:w-[500px] lg:w-[580px] sm:h-[330px] lg:h-[380px] rounded-none overflow-hidden flex-shrink-0 relative cursor-none block bg-zinc-950"
          >
            {card.renderContent()}
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
