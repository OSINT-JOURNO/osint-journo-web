export default function PrivacyPolicyPage() {
  return (
    <div className="bg-zinc-950 text-zinc-300 font-sans antialiased min-h-screen flex flex-col selection-lime relative overflow-x-hidden dark">
      {/* Subtle grid + CRT overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[size:30px_30px] bg-grid-dark opacity-40" />
      <div className="fixed inset-0 crt-overlay z-40 pointer-events-none" />

      {/* Top System Bar */}
      <div className="bg-black/80 border-b border-zinc-800 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-zinc-500 flex justify-between px-4 py-1.5 relative z-50">
        <div className="flex items-center gap-4">
          <span className="text-accent flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-sm animate-pulse" />
            LEGAL_DOCUMENT
          </span>
          <span className="hidden sm:inline">CLASSIFICATION: PUBLIC</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="/" className="hover:text-accent cursor-pointer transition-colors">
            RETURN_INDEX
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-6 md:top-8 z-40 max-w-5xl mx-auto w-full px-4 sm:px-8">
        <div className="border border-zinc-800 bg-zinc-950/80 backdrop-blur flex items-center justify-between px-4 sm:px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-zinc-900 border border-zinc-700 flex items-center justify-center relative overflow-hidden">
              <span
                className="iconify text-accent text-lg"
                data-icon="lucide:shield"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-sm tracking-tight text-white">
                PRIVACY_POLICY
              </span>
              <span className="font-mono text-[9px] tracking-[0.25em] text-zinc-500">
                DATA_PROTECTION
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
      <main className="flex-grow max-w-5xl mx-auto w-full border-x border-zinc-800 mt-6 md:mt-10 relative z-10 bg-zinc-950/60">
        {/* Hero */}
        <section className="border-b border-t border-zinc-800 p-6 sm:p-10 lg:p-14 relative overflow-hidden">
          <div className="absolute inset-y-0 right-0 w-48 sm:w-64 opacity-10 pointer-events-none flex items-center justify-center">
            <span
              className="iconify text-6xl sm:text-7xl text-zinc-700"
              data-icon="lucide:lock"
            />
          </div>

          <div className="relative z-10 max-w-2xl">
            <p className="font-mono text-[10px] text-accent tracking-[0.3em] uppercase mb-4">
              /// LEGAL_FRAMEWORK
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white tracking-tight leading-[1.1] mb-4">
              Privacy <span className="text-accent">Policy</span>
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl">
              Last updated: January 2025
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="p-6 sm:p-10 lg:p-14">
          <div className="prose prose-invert prose-zinc max-w-none">
            <div className="space-y-8">
              {/* Section 1 */}
              <div className="border-l-2 border-accent/30 pl-6">
                <h2 className="font-mono text-sm text-accent uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="text-zinc-500">01.</span> INTRODUCTION
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  OSINT JOURNO (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your
                  information when you visit our website and use our open-source intelligence tools.
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  By accessing or using our services, you acknowledge that you have read, understood,
                  and agree to be bound by this Privacy Policy.
                </p>
              </div>

              {/* Section 2 */}
              <div className="border-l-2 border-accent/30 pl-6">
                <h2 className="font-mono text-sm text-accent uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="text-zinc-500">02.</span> INFORMATION WE COLLECT
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
                      Information You Provide
                    </h3>
                    <ul className="text-sm text-zinc-400 space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">→</span>
                        Contact information (email address) when you submit tips or contact us
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">→</span>
                        Any information you voluntarily provide through forms or communications
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
                      Automatically Collected Information
                    </h3>
                    <ul className="text-sm text-zinc-400 space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">→</span>
                        Log data (IP address, browser type, operating system, referring URLs)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">→</span>
                        Usage data (pages visited, time spent, click patterns)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">→</span>
                        Device information (device type, unique device identifiers)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="border-l-2 border-accent/30 pl-6">
                <h2 className="font-mono text-sm text-accent uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="text-zinc-500">03.</span> HOW WE USE YOUR INFORMATION
                </h2>
                <ul className="text-sm text-zinc-400 space-y-2 list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    To provide, maintain, and improve our services
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    To respond to your inquiries and communications
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    To analyze usage patterns and optimize user experience
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    To detect, prevent, and address technical issues or security threats
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    To comply with legal obligations
                  </li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="border-l-2 border-accent/30 pl-6">
                <h2 className="font-mono text-sm text-accent uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="text-zinc-500">04.</span> DATA SECURITY
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  We implement appropriate technical and organizational security measures to protect
                  your personal information against unauthorized access, alteration, disclosure, or
                  destruction. However, no method of transmission over the Internet or electronic
                  storage is 100% secure.
                </p>
                <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded">
                  <p className="text-xs text-zinc-500 font-mono">
                    ENCRYPTION_STATUS: TLS 1.3 ENABLED | DATA_AT_REST: ENCRYPTED
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div className="border-l-2 border-accent/30 pl-6">
                <h2 className="font-mono text-sm text-accent uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="text-zinc-500">05.</span> THIRD-PARTY SERVICES
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Our website may contain links to third-party websites or services. We are not
                  responsible for the privacy practices of these external sites. We encourage you
                  to review the privacy policies of any third-party services you access through
                  our platform.
                </p>
              </div>

              {/* Section 6 */}
              <div className="border-l-2 border-accent/30 pl-6">
                <h2 className="font-mono text-sm text-accent uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="text-zinc-500">06.</span> YOUR RIGHTS
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  Depending on your jurisdiction, you may have the following rights:
                </p>
                <ul className="text-sm text-zinc-400 space-y-2 list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    Right to access your personal data
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    Right to rectification of inaccurate data
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    Right to erasure (&quot;right to be forgotten&quot;)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    Right to restrict processing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    Right to data portability
                  </li>
                </ul>
              </div>

              {/* Section 7 */}
              <div className="border-l-2 border-accent/30 pl-6">
                <h2 className="font-mono text-sm text-accent uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="text-zinc-500">07.</span> CONTACT US
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices,
                  please contact us:
                </p>
                <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded font-mono text-xs">
                  <p className="text-zinc-500">EMAIL: <span className="text-accent">team@osintjourno.com</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-800 py-4 px-4 sm:px-8 relative z-20">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-mono text-zinc-600">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>OSINT_JOURNO // PRIVACY_POLICY</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/terms-of-use" className="hover:text-accent transition-colors">
              TERMS_OF_USE
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
