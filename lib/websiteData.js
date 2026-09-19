import Image from "next/image";

export const websiteData = {
  "sample-website-1": {
    slug: "sample-website-1",

    title: "Triple Hash – AI Product Engineering",

    info: "A modern technology agency website positioning Triple Hash as an end-to-end product engineering partner for founders and businesses, covering scalable web and mobile apps, custom SaaS platforms, AI integrations, workflow automation and conversion-focused digital experiences.",

    areas: "AI, SaaS & Product Engineering",

    liveLink: "https://triplehash.in/",

    liveLinkDisplay: "triplehash.in",

    client: "Triple Hash",

    year: "2025",

    renderShowcase: () => (
      <div className="w-full max-w-[760px] aspect-[16/10] relative overflow-hidden bg-zinc-950 rounded-none shadow-[0_25px_70px_-15px_rgba(0,0,0,0.2)] flex items-center justify-center">
        <Image
          src="/website/website1.png"
          alt="Triple Hash AI Product Engineering Website Showcase"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    ),
  },
  "sample-website-2": {
    slug: "sample-website-2",

    title: "CodingWise – AI & Tech Learning Platform",

    info: "A career-focused EdTech website for CodingWise, designed to showcase industry-relevant programs in Generative AI, Data Analytics, Python, Machine Learning and Full-Stack Development while helping learners build practical skills, real-world portfolios and stronger pathways to tech careers.",

    areas: "EdTech, AI & Career Development",

    liveLink: "https://codingwise.in/",

    liveLinkDisplay: "codingwise.in",

    client: "CodingWise Academy",

    year: "2024",

    renderShowcase: () => (
      <div className="w-full max-w-[760px] aspect-[16/10] relative overflow-hidden bg-zinc-950 rounded-none shadow-[0_25px_70px_-15px_rgba(0,0,0,0.2)] flex items-center justify-center">
        <Image
          src="/website/website2.png"
          alt="CodingWise AI and Tech Learning Platform Website Showcase"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    ),
  },
  "sample-website-3": {
    slug: "sample-website-3",

    title: "Aithagoni – Healthcare RCM Solutions",

    info: "A healthcare services website for Aithagoni, positioning the company as an end-to-end Revenue Cycle Management partner helping healthcare providers improve billing efficiency, reduce claim denials, accelerate collections and make better financial decisions through data and technology.",

    areas: "Healthcare RCM & Data Analytics",

    liveLink: "https://aithagoni.vercel.app/",

    liveLinkDisplay: "aithagoni.vercel.app",

    client: "Aithagoni",

    year: "2026",

    renderShowcase: () => (
      <div className="w-full max-w-[760px] aspect-[16/10] relative overflow-hidden bg-zinc-950 rounded-none shadow-[0_25px_70px_-15px_rgba(0,0,0,0.2)] flex items-center justify-center">
        <Image
          src="/website/website3.png"
          alt="Aithagoni Healthcare RCM Solutions Website Showcase"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    ),
  },
  "sample-website-4": {
    slug: "sample-website-4",

    title: "HashBoard – Agency Operating System",

    info: "A modern SaaS website for HashBoard, positioning the platform as an all-in-one operating system for agencies to manage projects, CRM, teams, attendance, payroll, invoicing, bookings and client collaboration from one unified workspace.",

    areas: "SaaS, Agency Operations & CRM",

    liveLink: "https://hashboard.in/",

    liveLinkDisplay: "hashboard.in",

    client: "HashBoard – Triple Hash",

    year: "2026",

    renderShowcase: () => (
      <div className="w-full max-w-[760px] aspect-[16/10] relative overflow-hidden bg-zinc-950 rounded-none shadow-[0_25px_70px_-15px_rgba(0,0,0,0.2)] flex items-center justify-center">
        <Image
          src="/website/website4.png"
          alt="HashBoard Agency Operating System Website Showcase"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    ),
  },
  "sample-website-5": {
    slug: "sample-website-5",

    title: "HashCal – Smart Meeting Scheduler",

    info: "A modern SaaS website for HashCal, positioning the platform as a smart scheduling solution for professionals and teams to automate bookings, sync calendars, manage availability, create branded booking pages, send reminders and streamline the entire meeting workflow.",

    areas: "SaaS, Scheduling & Booking Automation",

    liveLink: "https://cal.hashboard.in/",

    liveLinkDisplay: "cal.hashboard.in",

    client: "HashCal – Triple Hash",

    year: "2026",

    renderShowcase: () => (
      <div className="w-full max-w-[760px] aspect-[16/10] relative overflow-hidden bg-zinc-950 rounded-none shadow-[0_25px_70px_-15px_rgba(0,0,0,0.2)] flex items-center justify-center">
        <Image
          src="/website/website5.png"
          alt="HashCal Smart Meeting Scheduler Website Showcase"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    ),
  },
  "sample-website-6": {
    slug: "sample-website-6",

    title: "Estira – AI Fashion & Smart Wardrobe",

    info: "A modern AI fashion platform designed to personalize how users style, organize and shop for clothing through intelligent outfit recommendations, smart wardrobe management, virtual try-on and personalized fashion discovery.",

    areas: "Fashion Tech, AI & E-Commerce",

    liveLink: "https://beta.estira.in/",

    liveLinkDisplay: "beta.estira.in",

    client: "Estira",

    year: "2026",

    renderShowcase: () => (
      <div className="w-full max-w-[760px] aspect-[16/10] relative overflow-hidden bg-zinc-950 rounded-none shadow-[0_25px_70px_-15px_rgba(0,0,0,0.2)] flex items-center justify-center">
        <Image
          src="/website/website6.png"
          alt="Estira AI Fashion and Smart Wardrobe Website Showcase"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    ),
  },
  "sample-website-7": {
    slug: "sample-website-7",
    title: "Website Project 07",
    info: "Generative content workspace tailored for creative studios, highlighting visual design and interactive motion.",
    areas: "Creative Studio & Motion",
    liveLink: "https://triplehash.in",
    liveLinkDisplay: "triplehash.in",
    client: "TripleHash Client",
    year: "2026",
    renderShowcase: () => (
      <div className="w-full max-w-[760px] aspect-[16/10] relative overflow-hidden bg-zinc-950 rounded-none shadow-[0_25px_70px_-15px_rgba(0,0,0,0.2)] flex items-center justify-center">
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
  "sample-website-8": {
    slug: "sample-website-8",
    title: "Website Project 08",
    info: "Ultra-fast headless commerce platform designed with React Server Components and micro-animations.",
    areas: "Headless E-Commerce & UI",
    liveLink: "https://triplehash.in",
    liveLinkDisplay: "triplehash.in",
    client: "TripleHash Client",
    year: "2026",
    renderShowcase: () => (
      <div className="w-full max-w-[760px] aspect-[16/10] relative overflow-hidden bg-zinc-950 rounded-none shadow-[0_25px_70px_-15px_rgba(0,0,0,0.2)] flex items-center justify-center">
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
  "sample-website-9": {
    slug: "sample-website-9",
    title: "Website Project 09",
    info: "Interactive developer ecosystem platform built for smooth documentation browsing and live sandbox previews.",
    areas: "Developer Experience & Tooling",
    liveLink: "https://triplehash.in",
    liveLinkDisplay: "triplehash.in",
    client: "TripleHash Client",
    year: "2026",
    renderShowcase: () => (
      <div className="w-full max-w-[760px] aspect-[16/10] relative overflow-hidden bg-zinc-950 rounded-none shadow-[0_25px_70px_-15px_rgba(0,0,0,0.2)] flex items-center justify-center">
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
  "sample-website-10": {
    slug: "sample-website-10",
    title: "Website Project 10",
    info: "Modern design system and marketing platform built with micro-frontend architecture and clean typography.",
    areas: "Design System & Marketing",
    liveLink: "https://triplehash.in",
    liveLinkDisplay: "triplehash.in",
    client: "TripleHash Client",
    year: "2026",
    renderShowcase: () => (
      <div className="w-full max-w-[760px] aspect-[16/10] relative overflow-hidden bg-zinc-950 rounded-none shadow-[0_25px_70px_-15px_rgba(0,0,0,0.2)] flex items-center justify-center">
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
};
