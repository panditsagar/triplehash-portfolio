"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CustomCursor from "./CustomCursor";

const landingCards = [
  {
    id: 1,
    title: "AI Co-Pilot Launch",
    category: "SaaS Landing Page",
    renderContent: () => (
      <div className="w-full h-full flex flex-col justify-between p-8 relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 border border-indigo-900/30">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Landing Page Navbar Mockup */}
        <div className="flex justify-between items-center text-xs text-slate-300 border-b border-slate-800/80 pb-3">
          <span className="font-semibold text-white tracking-wide flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 inline-block" />
            Nexus AI
          </span>
          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <span>Features</span>
            <span>Pricing</span>
            <span className="bg-indigo-600 text-white px-3 py-1 rounded-full font-medium">Get Started</span>
          </div>
        </div>

        {/* Hero Section Copy */}
        <div className="my-auto space-y-3">
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-900/40 text-indigo-300 border border-indigo-700/30 text-[11px] font-mono">
            ⚡ Powered by Next.js 16
          </span>
          <h4 className="text-2xl sm:text-3xl font-light tracking-tight text-white leading-tight">
            Build Intelligence <br />
            <span className="font-semibold text-indigo-300">Into Every Workflow</span>
          </h4>
          <p className="text-xs text-slate-400 max-w-[340px] leading-relaxed">
            Autonomous agentic AI infrastructure engineered for high growth teams.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Fintech Mobile App Launch",
    category: "Mobile Landing Page",
    renderContent: () => (
      <div className="w-full h-full p-8 flex justify-between items-center relative overflow-hidden bg-zinc-950 border border-emerald-900/30">
        {/* Glow */}
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Left Copy */}
        <div className="space-y-3 max-w-[280px]">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">FINTECH PLATFORM</span>
          <h4 className="text-2xl sm:text-3xl font-light text-white leading-tight">
            The Future of <br />
            <span className="font-normal text-emerald-300">Borderless Payments</span>
          </h4>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Zero transaction friction across 140 currencies.
          </p>
          <div className="flex gap-3 pt-2">
            <div className="px-4 py-2 bg-emerald-500 text-zinc-950 rounded text-xs font-semibold">Download App</div>
            <div className="px-4 py-2 border border-zinc-800 text-zinc-300 rounded text-xs">Learn More</div>
          </div>
        </div>

        {/* Right Phone Mockup */}
        <div className="w-44 aspect-[9/18] bg-zinc-900 rounded-2xl border-2 border-zinc-700 p-2 shadow-2xl flex flex-col justify-between hidden sm:flex">
          <div className="w-12 h-2 bg-zinc-800 rounded-full mx-auto" />
          <div className="bg-emerald-950/60 p-3 rounded-lg border border-emerald-800/30 text-center">
            <p className="text-[10px] text-zinc-400">Total Portfolio</p>
            <p className="text-lg text-emerald-300 font-bold">$128,490.00</p>
          </div>
          <div className="w-full h-8 bg-emerald-500 rounded text-[10px] font-semibold text-zinc-950 flex items-center justify-center">
            Send Payment
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Minimalist E-Commerce Launch",
    category: "Product Landing Page",
    renderContent: () => (
      <div className="w-full h-full p-8 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800">
        <div className="flex justify-between items-center">
          <span className="text-xs font-mono text-zinc-400">SERIES 01 // AUDIO</span>
          <span className="text-xs text-zinc-300 font-semibold">$349.00</span>
        </div>

        <div className="my-auto space-y-2">
          <h4 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
            Acoustic Precision. <br />
            <span className="font-normal text-zinc-400">Uncompromised Design.</span>
          </h4>
          <p className="text-xs text-zinc-400 max-w-[320px]">
            Custom titanium driver units crafted for audiophiles.
          </p>
        </div>

        <div className="flex justify-between items-center border-t border-zinc-800/80 pt-4">
          <div className="text-xs text-zinc-400">
            ★ ★ ★ ★ ★ <span className="text-zinc-200 ml-1">4.9 (1.2k reviews)</span>
          </div>
          <button className="px-4 py-2 bg-white text-zinc-950 font-semibold text-xs rounded hover:bg-zinc-200 transition-colors">
            Pre-Order Now
          </button>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Developer API Platform",
    category: "Developer Documentation & Landing",
    renderContent: () => (
      <div className="w-full h-full p-8 flex flex-col justify-between relative overflow-hidden bg-zinc-950 border border-purple-900/30">
        <div className="flex justify-between items-center text-xs text-purple-300 font-mono">
          <span>API PLATFORM</span>
          <span>⚡ 99.99% UPTIME</span>
        </div>

        <div className="my-auto space-y-2">
          <h4 className="text-2xl sm:text-3xl font-light text-white leading-tight">
            Deploy Global APIs <br />
            <span className="font-normal text-purple-400">In Under 60 Seconds</span>
          </h4>
          <p className="text-xs text-zinc-400 max-w-[340px]">
            Single line integration with automatic global edge distribution.
          </p>
        </div>

        <div className="w-full bg-zinc-900/90 rounded border border-purple-500/20 p-3 text-xs font-mono text-purple-300 flex justify-between items-center">
          <code>$ npx triplehash-api deploy --prod</code>
          <span className="text-[10px] text-zinc-500">COPY</span>
        </div>
      </div>
    ),
  },
];

export default function LandingCarousel() {
  const [isCursorVisible, setIsCursorVisible] = useState(false);

  const row1Cards = [...landingCards, ...landingCards, ...landingCards];
  const row2Cards = [...[...landingCards].reverse(), ...[...landingCards].reverse(), ...[...landingCards].reverse()];

  return (
    <div className="w-full overflow-hidden py-4 select-none flex flex-col gap-3 sm:gap-4 relative">
      {/* Floating Custom "View" Translucent Glass Cursor */}
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
          <div
            key={`landing-row1-${card.id}-${index}`}
            onMouseEnter={() => setIsCursorVisible(true)}
            onMouseLeave={() => setIsCursorVisible(false)}
            className="w-[380px] sm:w-[500px] lg:w-[580px] h-[250px] sm:h-[330px] lg:h-[380px] rounded-none overflow-hidden border border-zinc-200/80 flex-shrink-0 relative cursor-none"
          >
            {card.renderContent()}
          </div>
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
          <div
            key={`landing-row2-${card.id}-${index}`}
            onMouseEnter={() => setIsCursorVisible(true)}
            onMouseLeave={() => setIsCursorVisible(false)}
            className="w-[380px] sm:w-[500px] lg:w-[580px] h-[250px] sm:h-[330px] lg:h-[380px] rounded-none overflow-hidden border border-zinc-200/80 flex-shrink-0 relative cursor-none"
          >
            {card.renderContent()}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
