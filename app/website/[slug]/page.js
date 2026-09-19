import Link from "next/link";
import { notFound } from "next/navigation";
import { websiteData } from "@/lib/websiteData";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export function generateStaticParams() {
  return Object.keys(websiteData).map((slug) => ({
    slug,
  }));
}

export default async function WebsiteDetailsPage({ params }) {
  const { slug } = await params;
  const project = websiteData[slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full bg-white text-zinc-900 font-sans flex flex-col justify-between selection:bg-zinc-900 selection:text-white">
      {/* Header Navigation */}
      <Navbar />

      {/* Two-Column Details Showcase */}
      <section className="w-full px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 mt-12 sm:mt-16 lg:mt-24 mb-6">
        {/* Left Metadata Column */}
        <div className="w-full lg:w-[42%] flex flex-col justify-between flex-shrink-0 min-w-0 pt-0">
          <div className="space-y-8 sm:space-y-10">
            {/* Header & Back Link */}
            <div className="flex items-center justify-between gap-4">
              <h1 className="min-w-0 flex-1 max-w-full break-words text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-zinc-950">
                {project.title}
              </h1>
              <Link
                href="/"
                className="hidden sm:flex shrink-0 items-center gap-1.5 text-xs sm:text-sm text-zinc-400 hover:text-zinc-950 transition-colors font-medium group"
              >
                <span className="text-base select-none transition-transform duration-200 group-hover:-translate-x-0.5">
                  ↩
                </span>
                <span>Back</span>
              </Link>
            </div>

            {/* Info Section */}
            <div className="space-y-1.5">
              <p className="text-xs sm:text-sm text-zinc-400 font-normal">
                Info
              </p>
              <p className="text-xs sm:text-sm lg:text-base text-zinc-800 leading-relaxed font-normal max-w-lg">
                {project.info}
              </p>
            </div>

            {/* Areas & Live Link Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-8">
              <div className="min-w-0 space-y-1.5">
                <p className="text-xs sm:text-sm text-zinc-400 font-normal">
                  Areas
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-zinc-950 font-medium">
                  {project.areas}
                </p>
              </div>

              <div className="min-w-0 space-y-1.5">
                <p className="text-xs sm:text-sm text-zinc-400 font-normal">
                  Live link
                </p>
                <a
                  href={project.liveLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-0 max-w-[12rem] text-xs sm:text-sm lg:text-base text-zinc-950 font-medium hover:text-zinc-500 transition-colors inline-flex items-start gap-1.5 group"
                >
                  <span className="text-zinc-400 group-hover:translate-x-0.5 transition-transform">↪</span>
                  <span className="break-words underline underline-offset-4">{project.liveLinkDisplay || "Visit Website"}</span>
                </a>
              </div>
            </div>

            {/* Client & Year Grid */}
            <div className="grid grid-cols-2 gap-8 pt-1">
              <div className="space-y-1.5">
                <p className="text-xs sm:text-sm text-zinc-400 font-normal">
                  Client
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-zinc-950 font-medium">
                  {project.client}
                </p>
              </div>
              <div className="space-y-1.5">
                <p className="text-xs sm:text-sm text-zinc-400 font-normal">
                  Year
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-zinc-950 font-medium">
                  {project.year}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Hero Visual Column */}
        <div className="w-full lg:w-[58%] relative flex items-start justify-end min-w-0 pt-0">
          {project.renderShowcase()}
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
