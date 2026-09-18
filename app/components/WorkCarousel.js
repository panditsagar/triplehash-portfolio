"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CustomCursor from "./CustomCursor";

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

      {/* Row 1: Right-to-Left (Matching LandingCarousel running speed) */}
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
        {row1Duplicated.map((card, index) => (
          <Link
            key={`website-row1-${card.id}-${index}`}
            href={`/website/${card.slug}`}
            onMouseEnter={() => setIsCursorVisible(true)}
            onMouseLeave={() => setIsCursorVisible(false)}
            className="w-[380px] sm:w-[500px] lg:w-[580px] h-[250px] sm:h-[330px] lg:h-[380px] rounded-none overflow-hidden flex-shrink-0 relative cursor-none block bg-zinc-950"
          >
            {card.renderContent()}
          </Link>
        ))}
      </motion.div>

      {/* Row 2: Left-to-Right (Matching LandingCarousel running speed) */}
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
        {row2Duplicated.map((card, index) => (
          <Link
            key={`website-row2-${card.id}-${index}`}
            href={`/website/${card.slug}`}
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
