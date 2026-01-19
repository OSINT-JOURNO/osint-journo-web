"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface Certificate {
  hash: string;
  recipient: string;
  created_at: string;
  expiry_date?: string | null;
  // Joined via FK issued_certificates.cert_id -> certificates.id
  certificate: {
    name: string;
  } | null;
}

// Shape we actually get back from Supabase before normalizing
interface SupabaseIssuedCertificateRow extends Omit<Certificate, "certificate"> {
  certificate: { name: string } | { name: string }[] | null;
}

type VerificationStatus = "idle" | "loading" | "valid" | "invalid";

export default function VerifyCertificatePage() {
  const [certificateHash, setCertificateHash] = useState("");
  const [status, setStatus] = useState<VerificationStatus>("idle");
  const [verifiedCert, setVerifiedCert] = useState<Certificate | null>(null);
  const [terminalLogs, setTerminalLogs] = useState<{ time: string; message: string }[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Initialize logs on client only to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
    const time = new Date().toTimeString().substring(0, 8);
    setTerminalLogs([
      { time, message: "init_handshake --secure" },
      { time, message: ">> Establishing encrypted tunnel... OK" },
      { time, message: ">> Waiting for user input_" },
    ]);
  }, []);

  const addLog = (message: string) => {
    const time = new Date().toTimeString().substring(0, 8);
    setTerminalLogs((prev) => [...prev.slice(-4), { time, message }]);
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();

    const cleanHash = certificateHash.trim().toLowerCase().replace(/\s/g, "");

    if (!cleanHash) {
      addLog(">> ERROR: No hash provided");
      return;
    }

    // Validate SHA-256 format (64 hex characters)
    const sha256Regex = /^[a-f0-9]{64}$/i;
    if (!sha256Regex.test(cleanHash)) {
      addLog(">> ERROR: Invalid SHA-256 format");
      addLog(">> Expected: 64 hexadecimal characters");
      setStatus("invalid");
      return;
    }

    setStatus("loading");
    const truncatedHash = `${cleanHash.substring(0, 8)}...${cleanHash.substring(56)}`;
    addLog(`>> Querying ledger for: ${truncatedHash}`);

    // Query Supabase for the certificate
    const { data, error } = await supabase
      .from("issued_certificates")
      .select(
        "hash, recipient, created_at, expiry_date, certificate:certificates(name)"
      )
      .eq("hash", cleanHash)
      .single();

    console.log("[verify-certificate] Supabase result", data, error);

    if (error && error.code !== "PGRST116") {
      // PGRST116 = no rows returned, which is expected for invalid hashes
      addLog(">> ERROR: Database query failed");
      setStatus("invalid");
      console.log(error);
      return;
    }

    const raw = (data as SupabaseIssuedCertificateRow | null) ?? null;

    const foundCert: Certificate | null = raw
      ? {
          ...raw,
          certificate: Array.isArray(raw.certificate)
            ? raw.certificate[0] ?? null
            : raw.certificate,
        }
      : null;

    if (foundCert) {
      setStatus("valid");
      setVerifiedCert(foundCert);
      addLog(">> Hash match found in ledger");
      addLog(">> Certificate VERIFIED ✓");
    } else {
      setStatus("invalid");
      setVerifiedCert(null);
      addLog(">> Hash not found in ledger");
      addLog(">> Certificate INVALID ✗");
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setCertificateHash("");
    setVerifiedCert(null);
    addLog(">> Session reset. Awaiting input_");
  };

  return (
    <div className="font-sans antialiased text-zinc-400 bg-zinc-950 min-h-screen selection:bg-lime-400/20 selection:text-lime-400 flex flex-col overflow-x-hidden scroll-smooth">
      {/* Ambient Glow Orbs */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-lime-500/5 blur-[120px] rounded-full pointer-events-none z-0 animate-pulse-slow" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-zinc-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Animated Background Grid */}
      <div className="fixed inset-0 bg-grid-animate opacity-[0.15] pointer-events-none z-0" />

      {/* Moving Scanline Overlay */}
      <div className="fixed inset-0 scanline-overlay pointer-events-none z-0" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-lime-400/10 border border-lime-400/20 flex items-center justify-center">
              <span className="iconify text-lime-400" data-icon="lucide:shield-check" data-width="16" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-semibold tracking-tight text-sm leading-none">
                OSINT JOURNO
              </span>
              <span className="text-[10px] text-zinc-500 font-mono tracking-wider">
                CERTIFICATE_VALIDATOR
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/"
              className="text-xs font-mono text-zinc-500 hover:text-white transition-colors"
            >
              [ RETURN_HOME ]
            </a>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 border border-lime-400/20 bg-lime-400/5 text-[10px] font-mono text-lime-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-lime-500"></span>
              </span>
              SYSTEM ONLINE
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative pt-32 pb-20 px-6 z-10 flex-grow flex flex-col items-center justify-center min-h-[80vh]">
        <div className="w-full max-w-2xl mx-auto relative">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="font-mono text-lime-400 text-[10px] mb-4 tracking-[0.2em] uppercase">
              /// Certificate Verification Portal
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-4">
              Verify Certificate Authenticity
            </h1>
            <p className="text-sm text-zinc-400 font-light max-w-md mx-auto leading-relaxed">
              Enter the unique SHA-256 hash provided on your certificate
              to validate credentials against our secure database.
            </p>
          </div>

          {/* Verification Result - Valid */}
          {status === "valid" && verifiedCert && (
            <div className="mb-8 bg-lime-400/5 border border-lime-400/30 p-6 relative overflow-hidden">
              {/* Success Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-lime-400/20">
                <div className="w-12 h-12 rounded-full bg-lime-400/20 flex items-center justify-center">
                  <span className="iconify text-lime-400 text-2xl" data-icon="lucide:check-circle" />
                </div>
                <div>
                  <h3 className="text-lime-400 font-bold text-lg">CERTIFICATE VERIFIED</h3>
                  <p className="text-[10px] font-mono text-lime-400/70">
                    Hash matched in secure ledger
                  </p>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1">
                    Certificate Holder
                  </label>
                  <p className="text-white font-medium">{verifiedCert.recipient}</p>
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1">
                    Certificate Name
                  </label>
                  <p className="text-white font-medium">
                    {verifiedCert.certificate?.name ?? "Unknown certificate"}
                  </p>
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1">
                    Issue Date
                  </label>
                  <p className="text-white font-medium">{new Date(verifiedCert.created_at).toLocaleDateString()}</p>
                </div>
                {verifiedCert.expiry_date && (
                  <div>
                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1">
                      Expiry Date
                    </label>
                    <p className="text-white font-medium">{new Date(verifiedCert.expiry_date).toLocaleDateString()}</p>
                  </div>
                )}
                <div className="sm:col-span-2">
                  <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1">
                    Certificate Hash (SHA-256)
                  </label>
                  <p className="text-lime-400 font-mono text-xs break-all bg-black/30 p-2 border border-lime-400/20">
                    {verifiedCert.hash}
                  </p>
                </div>
              </div>

              {/* Reset Button */}
              <button
                onClick={handleReset}
                className="mt-6 w-full border border-lime-400/30 text-lime-400 hover:bg-lime-400/10 py-2.5 text-xs font-bold font-mono transition-colors tracking-tight flex items-center justify-center gap-2"
              >
                [ VERIFY_ANOTHER ]
                <span className="iconify" data-icon="lucide:refresh-cw" data-width="14" />
              </button>
            </div>
          )}

          {/* Verification Result - Invalid */}
          {status === "invalid" && (
            <div className="mb-8 bg-red-500/5 border border-red-500/30 p-6 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                  <span className="iconify text-red-500 text-2xl" data-icon="lucide:x-circle" />
                </div>
                <div>
                  <h3 className="text-red-500 font-bold text-lg">CERTIFICATE NOT FOUND</h3>
                  <p className="text-[10px] font-mono text-red-500/70">
                    Hash does not exist in our records
                  </p>
                </div>
              </div>
              <p className="text-sm text-zinc-400 mb-4">
                The certificate hash you entered could not be verified. Please check:
              </p>
              <ul className="text-sm text-zinc-500 space-y-1 mb-4">
                <li className="flex items-center gap-2">
                  <span className="iconify text-zinc-600" data-icon="lucide:chevron-right" data-width="14" />
                  The hash is entered correctly (including dashes)
                </li>
                <li className="flex items-center gap-2">
                  <span className="iconify text-zinc-600" data-icon="lucide:chevron-right" data-width="14" />
                  The certificate was issued by OSINT JOURNO
                </li>
                <li className="flex items-center gap-2">
                  <span className="iconify text-zinc-600" data-icon="lucide:chevron-right" data-width="14" />
                  Contact us if you believe this is an error
                </li>
              </ul>
              <button
                onClick={handleReset}
                className="w-full border border-red-500/30 text-red-400 hover:bg-red-500/10 py-2.5 text-xs font-bold font-mono transition-colors tracking-tight flex items-center justify-center gap-2"
              >
                [ TRY_AGAIN ]
                <span className="iconify" data-icon="lucide:refresh-cw" data-width="14" />
              </button>
            </div>
          )}

          {/* Input Module - Show when idle or loading */}
          {(status === "idle" || status === "loading") && (
            <div className="group relative bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 p-8 corner-brackets mb-8 transition-colors hover:border-zinc-700">
              {/* Decorative status lights */}
              <div className="absolute top-4 right-4 flex gap-1.5">
                <div className={`w-1 h-1 rounded-full ${status === "loading" ? "bg-yellow-500 animate-pulse" : "bg-lime-500 animate-pulse"}`} />
                <div className="w-1 h-1 bg-zinc-700 rounded-full" />
                <div className="w-1 h-1 bg-zinc-700 rounded-full" />
              </div>

              <form onSubmit={handleVerify} className="relative z-10">
                <label className="block font-mono text-[10px] text-zinc-500 mb-2 uppercase tracking-wider">
                  SHA-256 Certificate Hash
                </label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={certificateHash}
                    onChange={(e) => setCertificateHash(e.target.value)}
                    disabled={status === "loading"}
                    className="w-full bg-black/50 border border-zinc-700 text-white font-mono text-sm py-4 px-4 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/50 transition-all placeholder-zinc-700 lowercase disabled:opacity-50"
                    placeholder="Enter 64-character SHA-256 hash..."
                    autoComplete="off"
                  />
                  <div className="absolute right-4">
                    {status === "loading" ? (
                      <span className="iconify text-lime-400 animate-spin" data-icon="lucide:loader-2" data-width="20" />
                    ) : (
                      <span className="iconify text-zinc-600 group-focus-within:text-lime-400 transition-colors" data-icon="lucide:scan-line" data-width="20" />
                    )}
                  </div>
                </div>

                {/* Action Bar */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex gap-4 text-[10px] font-mono text-zinc-500">
                    <div className="flex items-center gap-1.5">
                      <span className="iconify" data-icon="lucide:database" data-width="12" />
                      <span>DB_CONNECTED</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="iconify" data-icon="lucide:lock" data-width="12" />
                      <span>SECURE</span>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-white hover:bg-lime-400 text-black px-6 py-2.5 text-xs font-bold font-mono transition-colors tracking-tight flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        [ VERIFYING... ]
                        <span className="iconify animate-spin" data-icon="lucide:loader-2" data-width="14" />
                      </>
                    ) : (
                      <>
                        [ RUN_VALIDATION ]
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="14" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Terminal Output / Console */}
          <div className="border-l border-zinc-800 pl-4 py-2 bg-gradient-to-r from-zinc-900/20 to-transparent">
            <div className="font-mono text-[10px] space-y-1.5 opacity-70">
              {isClient && terminalLogs.map((log, index) => (
                <div key={index} className="flex gap-2">
                  <span className="text-zinc-600">{log.time}</span>
                  {log.message.startsWith(">>") ? (
                    <span className={`${log.message.includes("ERROR") || log.message.includes("INVALID") ? "text-red-400" : log.message.includes("VERIFIED") || log.message.includes("OK") ? "text-lime-400" : "text-zinc-500"}`}>
                      {log.message}
                    </span>
                  ) : (
                    <>
                      <span className="text-lime-400/80">root@osintjourno:~#</span>
                      <span className="text-zinc-400">{log.message}</span>
                    </>
                  )}
                </div>
              ))}
              {!isClient && (
                <div className="flex gap-2">
                  <span className="text-zinc-600">--:--:--</span>
                  <span className="text-zinc-500">&gt;&gt; Initializing...</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sample Hash Info */}
        {/* <div className="mt-16 w-full max-w-2xl border-t border-zinc-800/50 pt-8">
          <div className="text-center">
            <p className="text-[10px] font-mono text-zinc-600 mb-3">
              // TEST SHA-256 HASH FOR DEMO
            </p>
            <code className="text-lime-400/70 font-mono text-xs bg-zinc-900/50 px-4 py-3 border border-zinc-800 block break-all max-w-md mx-auto">
              a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456
            </code>
            <p className="text-[10px] font-mono text-zinc-700 mt-3">
              64 hexadecimal characters (0-9, a-f)
            </p>
          </div>
        </div> */}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black/80 backdrop-blur py-6 mt-auto z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-zinc-600">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-lime-500 rounded-full animate-pulse" />
            <span>SECURE CONNECTION ESTABLISHED</span>
          </div>
          <div className="uppercase tracking-wider">
            OSINT JOURNO © {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </div>
  );
}
