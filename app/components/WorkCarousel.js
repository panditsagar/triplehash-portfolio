"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CustomCursor from "./CustomCursor";

const projectCards = [
  {
    id: 1,
    slug: "code-interface",
    title: "Code Interface",
    category: "IDE & Developer Tooling",
    renderContent: () => (
      <div className="w-full h-full flex flex-col justify-center items-center p-6 relative overflow-hidden bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950">
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-purple-600/15 blur-3xl pointer-events-none" />
        
        {/* Editor window mockup */}
        <div className="w-full max-w-[380px] bg-zinc-950/90 rounded border border-purple-500/20 p-5 shadow-2xl backdrop-blur-sm">
          <div className="flex items-center gap-1.5 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <div className="space-y-2.5 text-xs sm:text-sm font-mono text-purple-300/80">
            <p className="text-zinc-500">// Initialize TripleHash engine</p>
            <p><span className="text-purple-400">const</span> system = <span className="text-indigo-300">createCore</span>();</p>
            <p><span className="text-purple-400">await</span> system.<span className="text-indigo-300">render</span>();</p>
          </div>
          <div className="mt-6 pt-3 border-t border-purple-500/10 text-xs text-zinc-500 font-mono flex justify-between">
            <span>[ 04 ]</span>
            <span>READY</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    slug: "synthex-bio",
    title: "Synthex Bio-Intelligence",
    category: "Web Design & Digital Architecture",
    renderContent: () => (
      <div className="w-full h-full p-8 flex flex-col justify-between relative overflow-hidden bg-zinc-950 border border-purple-900/30">
        {/* Glowing DNA Strand Graphic Mockup */}
        <div className="absolute -right-8 -top-8 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
        
        {/* Website Header Mockup */}
        <div className="flex justify-between items-center text-sm text-zinc-400 border-b border-zinc-800/80 pb-3">
          <span className="font-semibold text-white tracking-wider flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 inline-block" />
            Synthex
          </span>
          <span className="text-xs text-zinc-500">Therapeutics</span>
        </div>

        {/* Hero Copy */}
        <div className="my-auto py-4 flex justify-between items-end gap-6">
          <div className="space-y-2">
            <h4 className="text-2xl sm:text-3xl font-light tracking-tight text-white leading-tight">
              Engineering the <br />
              <span className="font-normal text-purple-300">Biological Renaissance</span>
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-[320px] leading-relaxed">
              From Digital Blueprint to Physical Matter with autonomous molecular design.
            </p>
          </div>

          {/* Side Stat */}
          <div className="bg-purple-950/40 p-4 rounded border border-purple-800/30 text-right hidden sm:block">
            <p className="text-xs text-zinc-400">Analysis Rate</p>
            <p className="text-base text-purple-300 font-semibold">+94.2%</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    slug: "therapeutics-dashboard",
    title: "Therapeutics Dashboard",
    category: "Molecular Innovation Platform",
    renderContent: () => (
      <div className="w-full h-full p-8 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-zinc-900 via-purple-950/60 to-zinc-950 border border-purple-800/20">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-sm font-mono text-purple-400 tracking-wider">THERAPEUTICS</span>
            <span className="text-xs bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full border border-purple-700/40">v2.4</span>
          </div>

          <div className="w-full h-40 bg-zinc-950/80 rounded border border-purple-500/20 p-5 flex items-center justify-between">
            <div className="space-y-1.5">
              <div className="text-xs font-mono text-zinc-400">01 / MOLECULAR STRUCTURE</div>
              <p className="text-base font-medium text-white">Binding Efficiency</p>
              <p className="text-xs text-purple-300 font-mono">100% SECURE & OPTIMIZED</p>
            </div>
            <div className="w-16 h-16 rounded-full border-2 border-dashed border-purple-400/60 flex items-center justify-center flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-purple-500/40 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    slug: "synthra",
    title: "Synthra Showcase",
    category: "3D Product Showcase",
    renderContent: () => (
      <div className="w-full h-full flex flex-col justify-center items-center p-8 relative overflow-hidden bg-zinc-950">
        {/* Subtle spotlight glow */}
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-purple-950/60 to-transparent pointer-events-none" />

        {/* Laptop Mockup Graphic */}
        <div className="w-full max-w-[420px] relative z-10">
          {/* Laptop Screen */}
          <div className="w-full aspect-[16/9] bg-zinc-900 rounded-t border-2 border-zinc-700 p-4 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-950 via-indigo-950 to-zinc-900 opacity-90" />
            <div className="relative z-10 text-center space-y-1.5">
              <p className="text-base font-medium text-white tracking-tight">Engineering the</p>
              <p className="text-xs font-light text-purple-300">Biological Renaissance</p>
            </div>
          </div>
          {/* Laptop Base */}
          <div className="w-[110%] -ml-[5%] h-3.5 bg-zinc-800 rounded-b border-t border-zinc-600 shadow-md flex justify-center items-center">
            <div className="w-14 h-1 bg-zinc-600 rounded-full" />
          </div>
        </div>
      </div>
    ),
  },
];

export default function WorkCarousel() {
  const [isCursorVisible, setIsCursorVisible] = useState(false);

  const row1Cards = [...projectCards, ...projectCards, ...projectCards];
  const row2Cards = [...[...projectCards].reverse(), ...[...projectCards].reverse(), ...[...projectCards].reverse()];

  return (
    <div className="w-full overflow-hidden py-4 select-none flex flex-col gap-3 sm:gap-4 relative">
      {/* Floating Custom "View" Cursor */}
      <CustomCursor isVisible={isCursorVisible} text="View" />

      {/* Row 1: Right-to-Left */}
      <motion.div
        className="flex gap-3 sm:gap-4 w-max"
        animate={{
          x: ["0%", "-33.3333%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 60,
        }}
      >
        {row1Cards.map((card, index) => (
          <Link
            key={`row1-${card.id}-${index}`}
            href={`/works/${card.slug}`}
            onMouseEnter={() => setIsCursorVisible(true)}
            onMouseLeave={() => setIsCursorVisible(false)}
            className="w-[380px] sm:w-[500px] lg:w-[580px] h-[250px] sm:h-[330px] lg:h-[380px] rounded-none overflow-hidden border border-zinc-200/80 flex-shrink-0 relative cursor-none block"
          >
            {card.renderContent()}
          </Link>
        ))}
      </motion.div>

      {/* Row 2: Left-to-Right (Opposite Direction) */}
      <motion.div
        className="flex gap-3 sm:gap-4 w-max"
        animate={{
          x: ["-33.3333%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 60,
        }}
      >
        {row2Cards.map((card, index) => (
          <Link
            key={`row2-${card.id}-${index}`}
            href={`/works/${card.slug}`}
            onMouseEnter={() => setIsCursorVisible(true)}
            onMouseLeave={() => setIsCursorVisible(false)}
            className="w-[380px] sm:w-[500px] lg:w-[580px] h-[250px] sm:h-[330px] lg:h-[380px] rounded-none overflow-hidden border border-zinc-200/80 flex-shrink-0 relative cursor-none block"
          >
            {card.renderContent()}
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
