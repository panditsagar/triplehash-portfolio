"use client";

import LandingCarousel from "./LandingCarousel";

export default function LandingHero() {
  return (
    <section className="w-full pt-20 sm:pt-28 lg:pt-36">
      {/* Top Header Section */}
      <div className="px-6 sm:px-10 lg:px-16 pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-200">
          {/* Main Title & Bullet */}
          <div className="flex items-baseline gap-4 sm:gap-6">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[115px] font-normal tracking-tight text-zinc-950 leading-none">
              Landing Pages
            </h1>
            <span className="text-xl sm:text-3xl text-zinc-950 font-bold leading-none hidden sm:inline-block">
              •
            </span>
          </div>

          {/* Tagline Subtext */}
          <p className="text-zinc-400 text-xs sm:text-sm font-normal tracking-wide whitespace-nowrap self-start md:self-end pb-1 sm:pb-2">
            ( High conversion. Thoughtfully designed. )
          </p>
        </div>
      </div>

      {/* Running Motion Carousel for Landing Pages */}
      <LandingCarousel />
    </section>
  );
}
