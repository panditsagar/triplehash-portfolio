"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }),
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-[#121212] text-white px-6 sm:px-10 lg:px-16 pt-16  pb-8 mt-20 flex flex-col justify-between relative overflow-hidden font-sans">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 mb-16 sm:mb-24">
        {/* Left Column: Heading & Contact Badge */}
        <div className="  max-w-4xl">
          <p className="text-zinc-400 text-xs sm:text-sm font-normal tracking-wide mb-2">
            ( Get in touch )
          </p>

          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-normal tracking-tighter leading-tight text-white mb-2">
            Have a project in mind? <br />
            Let's talk.
          </h2>

          <p className="text-zinc-400 text-xs sm:text-sm font-normal max-w-md leading-relaxed mb-10">
            Feel free to reach out. Together, we'll make it sharper.
          </p>

          {/* Contact Badge Card */}
          <div className="bg-[#1A1A1A]   p-3 flex items-center gap-4 max-w-xs   shadow-xl transition-all duration-300 hover:border-zinc-700">
            <div className="w-10 h-10      flex items-center justify-center flex-shrink-0">
              <Image
                src="/logo.webp"
                alt="TripleHash Avatar"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <a
                href="mailto:hello@triplehash.com"
                className="text-white font-medium text-xs sm:text-sm hover:underline"
              >
                connect@triplehash.in
              </a>
              <span className="text-zinc-400 text-[11px] sm:text-xs">
                +1 (555) 019-2834
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Clock, Location & Social Links */}
        <div className="flex flex-col gap-8 lg:text-right min-w-[180px]">
          {/* Social Media Links */}
          <div className="space-y-2.5">
            <p className="text-xs text-zinc-500 uppercase tracking-widest font-mono">
              Social media
            </p>
            <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 lg:justify-end"
                >
                 <span className="  select-none">↪</span> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 lg:justify-end"
                >
                  <span className="  select-none">↪</span> Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 lg:justify-end"
                >
                 <span className=" select-none">↪</span> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 lg:justify-end"
                >
                  <span className=" select-none">↪</span> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section: Bullet & Massive Watermark */}
      <div className="pt-8 flex flex-col justify-end items-start relative">
        {/* Large Display Watermark */}
        <div className="w-full flex justify-between items-end ">
          <p className="text-zinc-500 text-[11px] sm:text-sm font-normal">
            ©2026. TripleHash
          </p>

          <h1 className="text-4xl sm:text-8xl md:text-[130px] lg:text-[170px] font-medium text-white tracking-tighter leading-none select-none uppercase">
            TRIPLEHASH
          </h1>
        </div>
      </div>
    </footer>
  );
}
