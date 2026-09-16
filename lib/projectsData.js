export const projectsData = {
  synthra: {
    slug: "synthra",
    title: "Synthra",
    info: "Synthra is a biotechnology company combining generative AI and robotics to accelerate the development of synthetic proteins and new therapeutics. The website translates complex science into a clear, modern, and engaging digital experience.",
    areas: "Webdesign",
    liveLink: "https://synthra.com",
    liveLinkDisplay: "synthra.com",
    client: "Synthra",
    year: "2026",
    renderShowcase: () => (
      <div className="w-full max-w-[760px] aspect-[16/10] flex flex-col justify-center items-center p-8 sm:p-12 relative overflow-hidden bg-zinc-950 rounded-none border border-zinc-800/80 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.4)]">
        {/* Subtle spotlight glow */}
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-purple-950/60 to-transparent pointer-events-none" />

        {/* Laptop Mockup Graphic */}
        <div className="w-full max-w-[600px] relative z-10">
          {/* Laptop Screen */}
          <div className="w-full aspect-[16/9] bg-zinc-900 rounded-none border-2 border-zinc-700 p-5 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-950 via-indigo-950 to-zinc-900 opacity-90" />
            <div className="flex justify-between items-center text-xs text-zinc-400 border-b border-zinc-800 pb-2 relative z-10">
              <span className="font-semibold text-white tracking-wider flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500 inline-block" />
                Synthra
              </span>
              <span className="text-[10px] text-zinc-500">Therapeutics</span>
            </div>
            
            <div className="my-auto py-6 space-y-2 relative z-10">
              <h3 className="text-3xl sm:text-4xl font-light text-white leading-none">
                Engineering the <br />
                <span className="font-normal text-purple-300">Biological Renaissance</span>
              </h3>
            </div>

            <div className="flex justify-between text-[10px] text-zinc-500 border-t border-zinc-800/80 pt-2 font-mono relative z-10">
              <span>BOUND TO DISCOVERY</span>
              <span>2026 RELEASE</span>
            </div>
          </div>
          {/* Laptop Base */}
          <div className="w-[110%] -ml-[5%] h-4 bg-zinc-800 rounded-none border-t border-zinc-600 shadow-md flex justify-center items-center">
            <div className="w-20 h-1.5 bg-zinc-600 rounded-full" />
          </div>
        </div>
      </div>
    ),
  },
  "code-interface": {
    slug: "code-interface",
    title: "Code Interface",
    info: "An advanced cloud-based IDE designed for modern software development teams. Featuring real-time agentic co-pilots, instant workspace branching, and seamless deployment pipelines.",
    areas: "IDE & Developer Tooling",
    liveLink: "https://triplehash.com",
    liveLinkDisplay: "triplehash.com",
    client: "TripleHash Core",
    year: "2026",
    renderShowcase: () => (
      <div className="w-full max-w-[760px] aspect-[16/10] flex flex-col justify-center items-center p-8 sm:p-12 relative overflow-hidden bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 rounded-none border border-purple-500/20 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.4)]">
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-purple-600/15 blur-3xl pointer-events-none" />
        
        {/* Editor window mockup */}
        <div className="w-full max-w-[560px] bg-zinc-950/90 rounded-none border border-purple-500/20 p-8 shadow-2xl backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs font-mono text-zinc-400">TripleHash Workspace</span>
          </div>
          <div className="space-y-3 text-sm font-mono text-purple-300/80">
            <p className="text-zinc-500">// Initialize TripleHash engine</p>
            <p><span className="text-purple-400">const</span> system = <span className="text-indigo-300">createCore</span>();</p>
            <p><span className="text-purple-400">await</span> system.<span className="text-indigo-300">render</span>();</p>
          </div>
          <div className="mt-8 pt-4 border-t border-purple-500/10 text-xs text-zinc-500 font-mono flex justify-between">
            <span>[ 04 ]</span>
            <span>READY</span>
          </div>
        </div>
      </div>
    ),
  },
  "synthex-bio": {
    slug: "synthex-bio",
    title: "Synthex Bio-Intelligence",
    info: "Synthex merges autonomous molecular design algorithms with physical robotic laboratory execution, cutting drug discovery timelines from years to days.",
    areas: "Web Design & Digital Architecture",
    liveLink: "https://synthex.bio",
    liveLinkDisplay: "synthex.bio",
    client: "Synthex Inc.",
    year: "2026",
    renderShowcase: () => (
      <div className="w-full max-w-[760px] aspect-[16/10] p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden bg-zinc-950 border border-purple-900/30 rounded-none shadow-[0_25px_70px_-15px_rgba(0,0,0,0.4)]">
        {/* Glowing DNA Strand Graphic Mockup */}
        <div className="absolute -right-8 -top-8 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
        
        {/* Website Header Mockup */}
        <div className="flex justify-between items-center text-sm text-zinc-400 border-b border-zinc-800/80 pb-3">
          <span className="font-semibold text-white tracking-wider flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 inline-block" />
            Synthex
          </span>
          <span className="text-xs text-zinc-500">Therapeutics</span>
        </div>

        {/* Hero Copy */}
        <div className="my-auto py-6 flex justify-between items-end gap-6">
          <div className="space-y-3">
            <h4 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
              Engineering the <br />
              <span className="font-normal text-purple-300">Biological Renaissance</span>
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-[420px] leading-relaxed">
              From Digital Blueprint to Physical Matter with autonomous molecular design.
            </p>
          </div>

          {/* Side Stat */}
          <div className="bg-purple-950/40 p-4 rounded-none border border-purple-800/30 text-right hidden sm:block">
            <p className="text-xs text-zinc-400">Analysis Rate</p>
            <p className="text-lg text-purple-300 font-semibold">+94.2%</p>
          </div>
        </div>
      </div>
    ),
  },
  "therapeutics-dashboard": {
    slug: "therapeutics-dashboard",
    title: "Therapeutics Dashboard",
    info: "An enterprise analytics suite monitoring real-time molecular binding assays, target selectivity, and protein folding metrics.",
    areas: "Molecular Innovation Platform",
    liveLink: "https://therapeutics.global",
    liveLinkDisplay: "therapeutics.global",
    client: "Therapeutics Global",
    year: "2026",
    renderShowcase: () => (
      <div className="w-full max-w-[760px] aspect-[16/10] p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-zinc-900 via-purple-950/60 to-zinc-950 border border-purple-800/20 rounded-none shadow-[0_25px_70px_-15px_rgba(0,0,0,0.4)]">
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <span className="text-sm font-mono text-purple-400 tracking-wider">THERAPEUTICS</span>
            <span className="text-xs bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full border border-purple-700/40">v2.4</span>
          </div>

          <div className="w-full h-48 bg-zinc-950/80 rounded-none border border-purple-500/20 p-6 flex items-center justify-between">
            <div className="space-y-2">
              <div className="text-xs font-mono text-zinc-400">01 / MOLECULAR STRUCTURE</div>
              <p className="text-xl font-medium text-white">Binding Efficiency</p>
              <p className="text-xs text-purple-300 font-mono">100% SECURE & OPTIMIZED</p>
            </div>
            <div className="w-20 h-20 rounded-full border-2 border-dashed border-purple-400/60 flex items-center justify-center flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-purple-500/40 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
};
