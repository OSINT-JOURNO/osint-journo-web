import Image from "next/image";


export default function TeamPage() {
  const teamMembers = [
    {
      name: "Rahul Kumar",
      codename: "RAHUL_K",
      role: "CEO & Founder",
      focus: "Building Scalable Growth Through Vision & Execution",
      location: "Delhi, IN",
      status: "ONLINE",
      image: "/rahul.png",
      briefUrl: "https://www.linkedin.com/in/rrahulkumark/",
    },
    {
      name: "Vivek Yadav",
      codename: "VIVEK_Y",
      role: "CISO",
      focus: "Performing continuous security testing powered by OSINT insights",
      location: "Delhi, IN",
      status: "ONLINE",
      image: "/vivek.png",
      briefUrl: "https://www.linkedin.com/in/vyvivekyadav04/",
    },
    {
      name: "Dipti Yadv",
      codename: "DIPTI_Y",
      role: "CIO",
      focus: "Tracing people, money, and influence through open data",
      location: "Delhi, IN",
      status: "ONLINE",
      image: "/dipti.png",
      briefUrl: "https://www.linkedin.com/in/dydiptiyadav07/",
    },
    {
      name: "Madhav Yadav",
      codename: "MADHAV_Y",
      role: "CTO",
      focus: "Architecting resilient infrastructure for real-world threats",
      location: "Delhi, IN",
      status: "ONLINE",
      image: "/madhav.png",
      briefUrl: "https://linkedin.com/in/mymadhavyadav07",
    },
  ] as const;

  return (
    <div className="bg-zinc-950 text-zinc-300 font-sans antialiased min-h-screen flex flex-col selection-lime relative overflow-x-hidden dark">
      {/* Subtle grid + CRT overlay to match main site */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[size:30px_30px] bg-grid-dark opacity-40" />
      <div className="fixed inset-0 crt-overlay z-40 pointer-events-none" />

      {/* Top System Bar */}
      <div className="bg-black/80 border-b border-zinc-800 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-zinc-500 flex justify-between px-4 py-1.5 relative z-50">
        <div className="flex items-center gap-4">
          <span className="text-accent flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-sm animate-pulse" />
            OSINT_JOURNO_TEAM
          </span>
          <span className="hidden sm:inline">NODE: CORE_UNIT_ALPHA</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">ACCESS: INTERNAL</span>
          <a href="/" className="hover:text-accent cursor-pointer transition-colors">
            RETURN_INDEX
          </a>
        </div>
      </div>

      {/* Compact header bar consistent with verify-certificate */}
      <header className="sticky top-6 md:top-8 z-40 max-w-7xl mx-auto w-full px-4 sm:px-8">
        <div className="border border-zinc-800 bg-zinc-950/80 backdrop-blur flex items-center justify-between px-4 sm:px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-zinc-900 border border-zinc-700 flex items-center justify-center relative overflow-hidden">
              <span
                className="iconify text-accent text-lg"
                data-icon="lucide:users"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-sm tracking-tight text-white">
                CORE_TEAM
              </span>
              <span className="font-mono text-[9px] tracking-[0.25em] text-zinc-500">
                HUMAN_NETWORK
              </span>
            </div>
          </div>

          <a
            href="/"
            className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 hover:text-accent flex items-center gap-1"
          >
            <span className="iconify" data-icon="lucide:arrow-left" />
            BACK_TO_GRID
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto w-full border-x border-zinc-800 mt-6 md:mt-10 relative z-10 bg-zinc-950/60">
        {/* Hero */}
        <section className="border-b border-t border-zinc-800 p-6 sm:p-10 lg:p-14 relative overflow-hidden">
          <div className="absolute inset-y-0 right-0 w-48 sm:w-64 opacity-10 pointer-events-none flex items-center justify-center">
            <span
              className="iconify text-6xl sm:text-7xl text-zinc-700"
              data-icon="lucide:radar"
            />
          </div>

          <div className="relative z-10 max-w-2xl">
            <p className="font-mono text-[10px] text-accent tracking-[0.3em] uppercase mb-4">
              /// ORGANIZATION_MANIFEST
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white tracking-tight leading-[1.1] mb-4">
              People behind the <span className="text-accent">signal.</span>
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl">
              A distributed cell of analysts, journalists and engineers working across
              time zones. Intelligence built from the ground up, no shortcuts. 
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="p-6 sm:p-10 lg:p-12">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500 flex items-center gap-2">
                <span className="iconify text-accent" data-icon="lucide:shield" />
                ACTIVE_PERSONNEL_REGISTRY
              </h2>
              <p className="text-[11px] text-zinc-500 mt-2">
                {teamMembers.length.toString().padStart(2, "0")} records • auto‑synced
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>INTERNAL USE ONLY</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {teamMembers.map((member) => (
              <article
                key={member.codename}
                className="group border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/70 hover:border-accent/60 transition-colors duration-300 p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Small hover thumbnail in top-right, inside card */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    top-3 right-3
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-300
                    z-20
                  "
                >
                  <div
                    className="
                      w-24 h-24
                      sm:w-28 sm:h-28
                      border border-accent/60
                      bg-black/80
                      shadow-lg shadow-accent/20
                      p-0.5 rounded-sm
                      overflow-hidden
                    "
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 112px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                {/* Accent corner bar */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <header className="relative z-10 mb-4 flex items-start justify-between gap-2">
                  <div>
                    <div className="font-mono text-[10px] text-accent mb-1">
                      {member.codename}
                    </div>
                    <h3 className="font-display text-sm sm:text-base text-white">
                      {member.name}
                    </h3>
                    <p className="text-[11px] text-zinc-300 mt-1">{member.role}</p>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700/80 px-2 py-0.5 text-[9px] font-mono text-zinc-200 bg-black/40">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          backgroundColor:
                            member.status === "ONLINE"
                              ? "#a3e635"
                              : member.status === "SECURE"
                              ? "#22c55e"
                              : "#fbbf24",
                        }}
                      />
                      {member.status}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-300 bg-black/40 px-1.5 py-0.5 rounded">
                      {member.location}
                    </span>
                  </div>
                </header>

                <p className="relative z-10 text-[11px] text-zinc-200 leading-relaxed mb-4">
                  {member.focus}
                </p>

                <footer className="relative z-10 flex items-center justify-between text-[10px] font-mono text-zinc-300 pt-3 border-t border-zinc-800/70">
                  <div className="flex items-center gap-1.5">
                    <span className="iconify text-xs" data-icon="lucide:network" />
                    <span>TRUST_SCORE: 0xA9</span>
                  </div>
                  <a
                    href={member.briefUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-zinc-300 hover:text-accent transition-colors"
                  >
                    VIEW_BRIEF
                    <span
                      className="iconify text-xs"
                      data-icon="lucide:arrow-up-right"
                    />
                  </a>
                </footer>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Slim footer banner to stay consistent with theme */}
      <footer className="bg-black border-t border-zinc-800 py-4 px-4 sm:px-8 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-mono text-zinc-600">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>OSINT_JOURNO // CORE_TEAM_MANIFEST</span>
          </div>
          <span>Last sync: &lt;anonymized&gt;</span>
        </div>
      </footer>
    </div>
  );
}
