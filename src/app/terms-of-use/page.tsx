export default function TermsOfUsePage() {
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
                data-icon="lucide:file-text"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-sm tracking-tight text-white">
                TERMS_OF_USE
              </span>
              <span className="font-mono text-[9px] tracking-[0.25em] text-zinc-500">
                USER_AGREEMENT
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
              data-icon="lucide:scale"
            />
          </div>

          <div className="relative z-10 max-w-2xl">
            <p className="font-mono text-[10px] text-accent tracking-[0.3em] uppercase mb-4">
              /// LEGAL_FRAMEWORK
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white tracking-tight leading-[1.1] mb-4">
              Terms of <span className="text-accent">Use</span>
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
              {/* Critical Disclaimer */}
              <div className="bg-red-950/20 border border-red-900/50 p-6 rounded">
                <div className="flex items-start gap-3">
                  <span className="iconify text-red-500 text-xl mt-0.5" data-icon="lucide:alert-triangle" />
                  <div>
                    <h3 className="font-mono text-sm text-red-400 uppercase tracking-wider mb-2">
                      CRITICAL DISCLAIMER
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      OSINT JOURNO provides tools and resources for educational and legitimate research
                      purposes only. <strong className="text-white">We are not responsible for any misuse,
                      illegal activities, or consequences arising from the use of our tools.</strong> Users
                      assume full responsibility for ensuring their activities comply with all applicable
                      laws and regulations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 1 */}
              <div className="border-l-2 border-accent/30 pl-6">
                <h2 className="font-mono text-sm text-accent uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="text-zinc-500">01.</span> ACCEPTANCE OF TERMS
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  By accessing and using OSINT JOURNO&apos;s website, tools, resources, and services
                  (collectively, the &quot;Services&quot;), you acknowledge that you have read, understood,
                  and agree to be bound by these Terms of Use. If you do not agree to these terms,
                  you must not use our Services.
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  We reserve the right to modify these terms at any time. Continued use of the
                  Services after any modifications constitutes acceptance of the updated terms.
                </p>
              </div>

              {/* Section 2 */}
              <div className="border-l-2 border-accent/30 pl-6">
                <h2 className="font-mono text-sm text-accent uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="text-zinc-500">02.</span> PERMITTED USE
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  Our tools and resources are intended for:
                </p>
                <ul className="text-sm text-zinc-400 space-y-2 list-none mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    Legitimate journalistic investigations and research
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    Educational purposes and learning OSINT methodologies
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    Security research with proper authorization
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    Due diligence and background verification (within legal bounds)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    Public interest investigations
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="border-l-2 border-accent/30 pl-6">
                <h2 className="font-mono text-sm text-accent uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="text-zinc-500">03.</span> PROHIBITED USE
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  You expressly agree NOT to use our Services for:
                </p>
                <ul className="text-sm text-zinc-400 space-y-2 list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    Stalking, harassment, or intimidation of any individual
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    Unauthorized access to computer systems or networks
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    Identity theft, fraud, or any illegal financial activities
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    Violating any individual&apos;s privacy rights or data protection laws
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    Corporate espionage or unauthorized competitive intelligence
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    Any activity that violates local, national, or international laws
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    Doxxing or publishing private information without consent
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    Any malicious, harmful, or unethical purposes
                  </li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="border-l-2 border-accent/30 pl-6">
                <h2 className="font-mono text-sm text-accent uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="text-zinc-500">04.</span> DISCLAIMER OF LIABILITY
                </h2>
                <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded mb-4">
                  <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider mb-2">
                    IMPORTANT NOTICE
                  </p>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    OSINT JOURNO SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
                    SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM THE USE OR MISUSE
                    OF OUR TOOLS AND SERVICES.
                  </p>
                </div>
                <ul className="text-sm text-zinc-400 space-y-3 list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    We provide tools &quot;as is&quot; without warranties of any kind, express or implied
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    We do not guarantee the accuracy, completeness, or reliability of any information
                    obtained through our tools
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    Users are solely responsible for verifying information and ensuring legal compliance
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    We are not responsible for any actions taken based on information obtained using
                    our Services
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    Any legal consequences arising from misuse are the sole responsibility of the user
                  </li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="border-l-2 border-accent/30 pl-6">
                <h2 className="font-mono text-sm text-accent uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="text-zinc-500">05.</span> USER RESPONSIBILITIES
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  By using our Services, you agree to:
                </p>
                <ul className="text-sm text-zinc-400 space-y-2 list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    Comply with all applicable laws and regulations in your jurisdiction
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    Use our tools ethically and responsibly
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    Respect individual privacy and data protection rights
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    Obtain necessary authorizations before conducting investigations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    Accept full responsibility for your actions and their consequences
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    Indemnify OSINT JOURNO against any claims arising from your use of our Services
                  </li>
                </ul>
              </div>

              {/* Section 6 */}
              <div className="border-l-2 border-accent/30 pl-6">
                <h2 className="font-mono text-sm text-accent uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="text-zinc-500">06.</span> INTELLECTUAL PROPERTY
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  Our open-source tools are released under their respective licenses (typically MIT
                  or Apache 2.0). While you are free to use, modify, and distribute these tools
                  according to their licenses:
                </p>
                <ul className="text-sm text-zinc-400 space-y-2 list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    The OSINT JOURNO name, logo, and branding remain our intellectual property
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    Website content (articles, methodologies, training materials) is protected by copyright
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    Modified versions of our tools must not imply official endorsement
                  </li>
                </ul>
              </div>

              {/* Section 7 */}
              <div className="border-l-2 border-accent/30 pl-6">
                <h2 className="font-mono text-sm text-accent uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="text-zinc-500">07.</span> TERMINATION
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  We reserve the right to terminate or restrict access to our Services at any time,
                  without notice, for any user who violates these Terms of Use or engages in any
                  activity we deem harmful or inappropriate.
                </p>
              </div>

              {/* Section 8 */}
              <div className="border-l-2 border-accent/30 pl-6">
                <h2 className="font-mono text-sm text-accent uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="text-zinc-500">08.</span> GOVERNING LAW
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  These Terms of Use shall be governed by and construed in accordance with the laws
                  of India, without regard to its conflict of law provisions. Any disputes arising
                  from these terms shall be subject to the exclusive jurisdiction of the courts in
                  Delhi, India.
                </p>
              </div>

              {/* Section 9 */}
              <div className="border-l-2 border-accent/30 pl-6">
                <h2 className="font-mono text-sm text-accent uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="text-zinc-500">09.</span> CONTACT
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  For questions regarding these Terms of Use, please contact us:
                </p>
                <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded font-mono text-xs">
                  <p className="text-zinc-500">EMAIL: <span className="text-accent">team@osintjourno.com</span></p>
                </div>
              </div>

              {/* Final Agreement */}
              <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded mt-8">
                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3 font-mono">
                  USER ACKNOWLEDGMENT
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  By using OSINT JOURNO&apos;s Services, you acknowledge that you have read these Terms
                  of Use, understand them, and agree to be bound by them. You further acknowledge
                  that you are solely responsible for your use of our tools and any consequences
                  that may arise from such use.
                </p>
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
            <span>OSINT_JOURNO // TERMS_OF_USE</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/privacy-policy" className="hover:text-accent transition-colors">
              PRIVACY_POLICY
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
