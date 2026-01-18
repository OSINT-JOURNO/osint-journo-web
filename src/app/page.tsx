"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

export default function Home() {
  const [utcTime, setUtcTime] = useState<string>("");
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [showContactModal, setShowContactModal] = useState<boolean>(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    service: "investigation",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // ============================================
  // TOOL LAUNCH BANNER CONFIGURATION
  // Set SHOW_TOOL_BANNER to true to display the popup
  // ============================================
  const SHOW_TOOL_BANNER = true; // Toggle this to show/hide the banner

  const toolBanner = {
    name: "NEW_TOOL_NAME",
    tagline: "Your tool tagline goes here",
    description: "A brief description of what the tool does and why users should check it out.",
    badge: "NEW RELEASE", // or "BETA", "UPDATE", "COMING SOON"
    badgeColor: "accent", // "accent", "yellow", "red", "blue"
    launchUrl: "/tools/launch",
    // Media: supports "video", "gif", or "image"
    media: {
      type: "image", // "video", "gif", or "image"
      src: "/logo.png", // Path to video/gif/image file
      poster: "/logo.png", // Poster image for video (optional)
    },
  };
  // ============================================

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString =
        now.toISOString().replace("T", " ").substring(0, 19) + " UTC";
      setUtcTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close modals when pressing Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowBanner(false);
        setShowContactModal(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // ============================================
  // EMAILJS CONFIGURATION
  // Get these values from your EmailJS dashboard
  // ============================================
  const EMAILJS_SERVICE_ID = "service_4ctkh16"; // e.g., "service_xxxxxxx"
  const EMAILJS_TEMPLATE_ID = "template_j71bxdp"; // e.g., "template_xxxxxxx"
  const EMAILJS_PUBLIC_KEY = "y-4t4i_TMnIS3pLlv"; // e.g., "xXxXxXxXxXxXxXx"
  // ============================================

  // Handle contact form submission
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: contactForm.name,
          from_email: contactForm.email,
          service_type: contactForm.service,
          message: contactForm.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus("success");
      setContactForm({ name: "", email: "", service: "investigation", message: "" });

      // Close modal after success
      setTimeout(() => {
        setShowContactModal(false);
        setSubmitStatus("idle");
      }, 2000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get badge color classes
  const getBadgeClasses = (color: string) => {
    switch (color) {
      case "yellow":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/30";
      case "red":
        return "bg-red-500/10 text-red-400 border-red-500/30";
      case "blue":
        return "bg-sky-500/10 text-sky-400 border-sky-500/30";
      default:
        return "bg-accent/10 text-accent border-accent/30";
    }
  };

  return (
    <div className="bg-zinc-950 text-zinc-300 font-sans antialiased min-h-screen flex flex-col selection-lime relative overflow-x-hidden dark">
      {/* CRT/Scanline Effects */}
      <div className="fixed inset-0 crt-overlay z-50 pointer-events-none" />
      <div className="fixed inset-0 pointer-events-none z-0 bg-[size:30px_30px] bg-grid-dark opacity-40" />

      {/* Tool Launch Popup Banner */}
      {SHOW_TOOL_BANNER && showBanner && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowBanner(false)}
          />

          {/* Banner Content */}
          <div className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 shadow-2xl shadow-accent/10 overflow-hidden">
            {/* Top accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-accent to-transparent" />

            {/* Close button */}
            <button
              onClick={() => setShowBanner(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors z-10 bg-zinc-900/80 backdrop-blur-sm"
            >
              <span className="iconify" data-icon="lucide:x" />
            </button>

            {/* Media Section - Landscape Video/GIF/Image */}
            <div className="relative w-full aspect-video bg-zinc-900 border-b border-zinc-800 overflow-hidden">
              {/* Grid overlay */}
              <div className="absolute inset-0 bg-[size:20px_20px] bg-grid-dark opacity-30 pointer-events-none" />

              {toolBanner.media.type === "video" ? (
                <video
                  src={toolBanner.media.src}
                  poster={toolBanner.media.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : toolBanner.media.type === "gif" ? (
                <Image
                  src={toolBanner.media.src}
                  alt={toolBanner.name}
                  fill
                  className="object-cover"
                  unoptimized // Required for GIFs to animate
                />
              ) : (
                <Image
                  src={toolBanner.media.src}
                  alt={toolBanner.name}
                  fill
                  className="object-contain p-8"
                />
              )}

              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />

              {/* Badge overlay */}
              <div className="absolute top-4 left-4">
                <span
                  className={`px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider rounded border backdrop-blur-sm ${getBadgeClasses(
                    toolBanner.badgeColor
                  )}`}
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-current mr-1.5 animate-pulse" />
                  {toolBanner.badge}
                </span>
              </div>

              {/* Play indicator for videos */}
              {toolBanner.media.type === "video" && (
                <div className="absolute bottom-4 right-4 flex items-center gap-2 text-[10px] font-mono text-zinc-400">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  PLAYING
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="p-6 sm:p-8">
              {/* Tool Info */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white mb-2">
                    {toolBanner.name}
                  </h3>
                  <p className="text-sm sm:text-base text-accent mb-3">{toolBanner.tagline}</p>
                  <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">
                    {toolBanner.description}
                  </p>
                </div>

                {/* Stats/Info badges */}
                <div className="flex sm:flex-col gap-3 text-[10px] font-mono text-zinc-500">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded">
                    <span className="iconify text-accent" data-icon="lucide:shield-check" />
                    SECURE
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded">
                    <span className="iconify text-accent" data-icon="lucide:zap" />
                    FAST
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 pt-6 border-t border-zinc-800">
                <a
                  href={toolBanner.launchUrl}
                  className="flex-1 sm:flex-none bg-accent text-black hover:bg-white transition-colors px-8 py-3 text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2"
                >
                  <span className="iconify" data-icon="lucide:rocket" />
                  Explore Tool
                </a>
                <a
                  href={toolBanner.launchUrl + "#pricing"}
                  className="flex-1 sm:flex-none border border-accent/50 text-accent hover:bg-accent/10 transition-colors px-8 py-3 text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2"
                >
                  <span className="iconify" data-icon="lucide:sparkles" />
                  View Pricing
                </a>
                <button
                  onClick={() => setShowBanner(false)}
                  className="flex-1 sm:flex-none border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-white transition-colors px-8 py-3 text-xs font-bold tracking-widest uppercase"
                >
                  Maybe Later
                </button>
              </div>

              {/* Footer hint */}
              <p className="text-[10px] font-mono text-zinc-600 mt-4 text-center">
                Press ESC or click outside to close
              </p>
            </div>

            {/* Bottom decorative line */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowContactModal(false)}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800 shadow-2xl shadow-accent/10 overflow-hidden">
            {/* Top accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-accent to-transparent" />

            {/* Close button */}
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors z-10"
            >
              <span className="iconify" data-icon="lucide:x" />
            </button>

            {/* Header */}
            <div className="p-6 pb-0">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="bg-accent/10 text-accent border border-accent/20 px-2 py-1 text-[10px] font-mono rounded">
                  SECURE_CHANNEL
                </span>
              </div>
              <h3 className="text-2xl font-display font-semibold text-white mb-2">
                Get in Touch
              </h3>
              <p className="text-sm text-zinc-400">
                Tell us about your project and we&apos;ll get back to you within 24 hours.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleContactSubmit} className="p-6 space-y-4">
              {/* Name */}
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2">
                  Service Required
                </label>
                <select
                  value={contactForm.service}
                  onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors cursor-pointer"
                >
                  <option value="investigation">OSINT Investigation</option>
                  <option value="training">OSINT Training</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || submitStatus === "success"}
                className={`w-full py-3 text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-all ${
                  submitStatus === "success"
                    ? "bg-green-500 text-white"
                    : submitStatus === "error"
                    ? "bg-red-500 text-white"
                    : "bg-accent text-black hover:bg-white"
                } disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? (
                  <>
                    <span className="iconify animate-spin" data-icon="lucide:loader-2" />
                    Sending...
                  </>
                ) : submitStatus === "success" ? (
                  <>
                    <span className="iconify" data-icon="lucide:check" />
                    Message Sent!
                  </>
                ) : submitStatus === "error" ? (
                  <>
                    <span className="iconify" data-icon="lucide:alert-circle" />
                    Error - Try Again
                  </>
                ) : (
                  <>
                    <span className="iconify" data-icon="lucide:send" />
                    Send Message
                  </>
                )}
              </button>

              {/* Footer hint */}
              <p className="text-[10px] font-mono text-zinc-600 text-center pt-2">
                Press ESC or click outside to close
              </p>
            </form>

            {/* Bottom decorative line */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          </div>
        </div>
      )}

      {/* Top System Bar */}
      <div className="bg-black/80 border-b border-zinc-800 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-zinc-500 flex justify-between px-4 py-1.5 relative z-50">
        <div className="flex items-center gap-4">
          <span className="text-accent flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-sm animate-pulse" />
            SYSTEM ONLINE
          </span>
          <span className="hidden sm:inline">ENCRYPTION: ENABLED</span>
          <span className="hidden sm:inline">IP: MASKED</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hover:text-accent cursor-pointer transition-colors">
            LOGIN_SECURE_SHELL
          </span>
          <span id="utc-time">{utcTime}</span>
        </div>
      </div>

      {/* Navigation */}
      <header className={`fixed left-0 w-full z-40 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md transition-all duration-300 ${isAtTop ? 'top-7' : 'top-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-3">
            <div className="w-8 h-8 bg-zinc-900 border border-zinc-700 flex items-center justify-center relative overflow-hidden group-hover:border-accent transition-colors duration-300">
              <Image
                src="/logo.png"
                alt="OSINT JOURNO Logo"
                width={24}
                height={24}
                className="object-contain"
              />
              <div className="absolute inset-0 bg-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-tighter leading-none text-white">
                OSINT<span className="text-zinc-600">_</span>JOURNO
              </span>
              <span className="font-mono text-[9px] tracking-[0.3em] text-accent opacity-80">
                OSINT SIMPLIFIED
              </span>
            </div>
          </a>

          {/* Main Nav */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-medium tracking-widest uppercase text-zinc-400">
            <a
              href="https://blogs.osintjourno.com"
              className="hover:text-accent hover:bg-zinc-900/50 px-3 py-1.5 rounded transition-all"
            >
              Investigations
            </a>
            {/* <a
              href="https://certifications.osintjourno.com"
              className="hover:text-accent hover:bg-zinc-900/50 px-3 py-1.5 rounded transition-all"
            >
              Certifications
            </a> */}
            
            <a
              href="/team"
              className="hover:text-accent hover:bg-zinc-900/50 px-3 py-1.5 rounded transition-all"
            >
              Team
            </a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            {/* <button className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors">
              <span className="iconify" data-icon="lucide:search" />
            </button> */}
            <button
              onClick={() => setShowContactModal(true)}
              className="bg-zinc-100 text-black px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase hover:bg-accent hover:text-black transition-colors duration-300"
            >
              Hire Us
            </button>
          </div>
        </div>
      </header>

      {/* Content Layout */}
      <main className="flex-grow flex flex-col lg:flex-row max-w-7xl mx-auto w-full border-x border-zinc-800 relative z-10">
        {/* Sidebar Navigation (Desktop) - fixed on the left, not scrollable */}
        <aside className="hidden lg:flex flex-col w-64 border-r border-zinc-800 p-6 fixed top-28 bottom-0 bg-zinc-950/50 backdrop-blur-sm">
          <div className="flex flex-col h-full gap-8">
            {/* Site Navigation */}
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-4 border-b border-zinc-800 pb-2">
                / Navigation
              </h3>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#investigations"
                    className="flex items-center gap-3 px-3 py-2 text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-900/30 border-l-2 border-transparent hover:border-accent transition-all"
                  >
                    <span className="iconify text-sm" data-icon="lucide:file-search" />
                    <span>Investigations</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#methodology"
                    className="flex items-center gap-3 px-3 py-2 text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-900/30 border-l-2 border-transparent hover:border-accent transition-all"
                  >
                    <span className="iconify text-sm" data-icon="lucide:git-branch" />
                    <span>Methodology</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#tools"
                    className="flex items-center gap-3 px-3 py-2 text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-900/30 border-l-2 border-transparent hover:border-accent transition-all"
                  >
                    <span className="iconify text-sm" data-icon="lucide:terminal-square" />
                    <span>Tools</span>
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#resources"
                    className="flex items-center gap-3 px-3 py-2 text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-900/30 border-l-2 border-transparent hover:border-accent transition-all"
                  >
                    <span className="iconify text-sm" data-icon="lucide:book-open" />
                    <span>Resources</span>
                  </a>
                </li> */}
                <li>
                  <a
                    href="/team"
                    className="flex items-center gap-3 px-3 py-2 text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-900/30 border-l-2 border-transparent hover:border-accent transition-all"
                  >
                    <span className="iconify text-sm" data-icon="lucide:users" />
                    <span>Team</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/verify-certificate"
                    className="flex items-center gap-3 px-3 py-2 text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-900/30 border-l-2 border-transparent hover:border-accent transition-all"
                  >
                    <span className="iconify text-sm" data-icon="lucide:shield-check" />
                    <span>Verify Certificate</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Feed Status */}
            <div className="mt-auto">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-4 border-b border-zinc-800 pb-2">
                / Node Status
              </h3>
              <div className="space-y-3 font-mono text-[10px]">
                <div className="flex justify-between text-zinc-400">
                  <span>API_LATENCY</span>
                  <span className="text-accent">24ms</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>SOURCE_NETWORK</span>
                  <span className="animate-pulse">ACTIVE</span>
                </div>
                <div className="h-1 w-full bg-zinc-800 mt-2">
                  <div className="h-full bg-zinc-600 w-2/3 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Stream */}
        <div className="flex-1 flex flex-col min-w-0 lg:ml-64 pt-24 sm:pt-28">
          {/* Hero */}
          <section className="relative border-b border-zinc-800 p-8 sm:p-16 overflow-hidden">
            <div className="absolute top-8 right-0 p-8 opacity-20 pointer-events-none">
              <span
                className="iconify text-9xl text-zinc-700"
                data-icon="lucide:fingerprint"
              />
            </div>

            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="bg-accent/10 text-accent border border-accent/20 px-2 py-1 text-[10px] font-mono rounded">
                  OPEN_SOURCE_INTEL
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-display font-semibold text-white tracking-tight leading-[1.1] mb-6">
                Decoding the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">
                  Digital Footprint.
                </span>
              </h1>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-10 max-w-lg">
                We are a collective of open-source intelligence analysts and
                investigative journalists. We verify the unverifiable and track the
                untraceable using satellite imagery, digital forensics, and
                public data.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#investigations"
                  className="bg-accent text-black hover:bg-white transition-colors px-6 py-3 text-xs font-bold tracking-widest uppercase flex items-center gap-2"
                >
                  Start Reading
                  <span
                    className="iconify"
                    data-icon="lucide:arrow-down-right"
                  />
                </a>
                <a
                  href="#methodology"
                  className="border border-zinc-700 hover:border-white text-zinc-300 hover:text-white transition-colors px-6 py-3 text-xs font-bold tracking-widest uppercase bg-black/50"
                >
                  Our Methodology
                </a>
              </div>
            </div>
          </section>

          {/* Data Ticker */}
          <div className="bg-accent/5 border-b border-zinc-800 h-8 flex items-center overflow-hidden relative">
            <div className="absolute left-0 w-10 h-full bg-gradient-to-r from-zinc-950 to-transparent z-10" />
            <div className="absolute right-0 w-10 h-full bg-gradient-to-l from-zinc-950 to-transparent z-10" />
            <div className="whitespace-nowrap flex animate-ticker">
              <div className="flex font-mono text-[10px] text-zinc-500 tracking-wider items-center">
                <span className="mx-6 text-accent">CAPABILITIES:</span>
                <span className="mx-6">GEOLOCATION & CHRONOLOCATION</span>
                <span className="mx-6">///</span>
                <span className="mx-6">SATELLITE IMAGERY ANALYSIS</span>
                <span className="mx-6">///</span>
                <span className="mx-6">SOCIAL MEDIA FORENSICS</span>
                <span className="mx-6">///</span>
                <span className="mx-6">BLOCKCHAIN TRACING</span>
                <span className="mx-6">///</span>
                <span className="mx-6">CORPORATE DUE DILIGENCE</span>
                <span className="mx-6">///</span>
                <span className="mx-6">DOCUMENT VERIFICATION</span>
                <span className="mx-6">///</span>
                <span className="mx-6">NETWORK MAPPING</span>
                <span className="mx-6">///</span>
                {/* Repeat for seamless loop */}
                <span className="mx-6 text-accent">CAPABILITIES:</span>
                <span className="mx-6">GEOLOCATION & CHRONOLOCATION</span>
                <span className="mx-6">///</span>
                <span className="mx-6">SATELLITE IMAGERY ANALYSIS</span>
                <span className="mx-6">///</span>
                <span className="mx-6">SOCIAL MEDIA FORENSICS</span>
                <span className="mx-6">///</span>
                <span className="mx-6">BLOCKCHAIN TRACING</span>
              </div>
            </div>
          </div>

          {/* Recent Investigations (Blogs) */}
          <section id="investigations" className="border-b border-zinc-800 scroll-mt-32">
            <div className="p-4 sm:p-8 flex items-center justify-between border-b border-zinc-800/50">
              <h2 className="font-mono text-sm text-accent uppercase tracking-widest flex items-center gap-2">
                <span className="iconify" data-icon="lucide:file-search" />
                Case Files
              </h2>
              <a
                href="https://blogs.osintjourno.com"
                className="text-[10px] font-mono text-zinc-500 hover:text-white uppercase"
              >
                View More -&gt;
              </a>
            </div>

            <div className="divide-y divide-zinc-800">
              {/* Article 1 */}
              <article className="group p-6 sm:p-10 hover:bg-zinc-900/30 transition-colors flex flex-col sm:flex-row gap-6 sm:gap-10">
                <div className="sm:w-48 shrink-0">
                  <div className="font-mono text-[10px] text-zinc-500 mb-2">
                    ARTICLE: 10
                  </div>
                  <div className="h-24 w-full bg-zinc-900 border border-zinc-800 relative overflow-hidden">
                    <img
                      src="https://raw.githubusercontent.com/OSINT-JOURNO/OJ-Blog/refs/heads/main/blog/public/images/manipur-pla.png"
                      alt="Manipur PLA Anti-Drone Jammers Investigation"
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex gap-2 mb-3">
                    <span className="text-[9px] uppercase tracking-wider border border-zinc-700 text-zinc-400 px-1.5 py-0.5 rounded">
                      Drones
                    </span>
                    <span className="text-[9px] uppercase tracking-wider border border-zinc-700 text-zinc-400 px-1.5 py-0.5 rounded">
                      Conflict
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-medium text-white mb-3 group-hover:text-accent transition-colors">
                    OSINT Analysis Reveals Manipur's PLA Using Chinese-Origin Anti-Drone Jammers
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4 max-w-2xl">
                    An OSINT-driven analysis tracing how Manipur’s People’s Liberation Army has adopted Chinese-origin anti-drone jamming systems along 
                    the Indo–Myanmar border, revealing evolving insurgent capabilities, 
                    cross-border networks, and the growing role of counter-drone technology in asymmetric conflict.
                  </p>
                  <a href="https://blogs.osintjourno.com/article/manipur-pla-anti-drone-jammers" className="text-[10px] font-bold uppercase tracking-widest text-white border-b border-zinc-700 pb-1 group-hover:border-accent transition-all">
                    Read Investigation
                  </a>
                </div>
              </article>

              {/* Article 2 */}
              <article className="group p-6 sm:p-10 hover:bg-zinc-900/30 transition-colors flex flex-col sm:flex-row gap-6 sm:gap-10">
                <div className="sm:w-48 shrink-0">
                  <div className="font-mono text-[10px] text-zinc-500 mb-2">
                    ARTICLE: 09
                  </div>
                  <div className="h-24 w-full bg-zinc-900 border border-zinc-800 relative overflow-hidden">
                    <img
                      src="https://raw.githubusercontent.com/OSINT-JOURNO/OJ-Blog/refs/heads/main/blog/public/images/bondi.png"
                      alt="Bondi Beach Attack Investigation"
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex gap-2 mb-3">
                    <span className="text-[9px] uppercase tracking-wider border border-zinc-700 text-zinc-400 px-1.5 py-0.5 rounded">
                      OSINT Analysis
                    </span>
                    <span className="text-[9px] uppercase tracking-wider border border-zinc-700 text-zinc-400 px-1.5 py-0.5 rounded">
                      Conflict
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-medium text-white mb-3 group-hover:text-accent transition-colors">
                    Bondi Beach Attack Through the Open Source Lens
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4 max-w-2xl">
                    An open-source investigation highlights the deadly Bondi Beach 
                    attack during Hanukkah, showing how extremist ideology and antisemitism fueled a targeted assault on Sydney’s Jewish community.
                  </p>
                  <a href="https://blogs.osintjourno.com/article/bondi-beach-hanukkah-attack" className="text-[10px] font-bold uppercase tracking-widest text-white border-b border-zinc-700 pb-1 group-hover:border-accent transition-all">
                    Read Investigation
                  </a>
                </div>
              </article>
            </div>
          </section>

          {/* Methodology Grid */}
          <section
            id="methodology"
            className="grid grid-cols-1 md:grid-cols-3 border-b border-zinc-800 scroll-mt-32"
          >
            <div className="p-8 border-b md:border-b-0 md:border-r border-zinc-800 bg-zinc-900/10">
              <div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-xs font-mono mb-6 text-zinc-500">
                01
              </div>
              <h4 className="font-display font-semibold text-white mb-2">Collect</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                We aggregate data from open sources: social media, public records,
                satellite feeds, and leak repositories. Nothing is hacked; everything
                is found.
              </p>
            </div>
            <div className="p-8 border-b md:border-b-0 md:border-r border-zinc-800 bg-zinc-900/10">
              <div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-xs font-mono mb-6 text-zinc-500">
                02
              </div>
              <h4 className="font-display font-semibold text-white mb-2">Verify</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Every datapoint is cross-referenced. We use geolocation (shadow
                analysis, landmark matching) and chronolocation to confirm
                authenticity.
              </p>
            </div>
            <div className="p-8 bg-zinc-900/10">
              <div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-xs font-mono mb-6 text-zinc-500">
                03
              </div>
              <h4 className="font-display font-semibold text-white mb-2">Connect</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                We build network graphs to show relationships between entities,
                visualizing the invisible threads that connect disparate actors.
              </p>
            </div>
          </section>

          {/* Tools Section (The Workbench) */}
          <section
            id="tools"
            className="p-8 sm:p-12 bg-black border-b border-zinc-800 scroll-mt-32"
          >
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="font-mono text-sm text-accent uppercase tracking-widest mb-2">
                  <span
                    className="iconify inline mr-2"
                    data-icon="lucide:terminal-square"
                  />
                  The Workbench
                </h2>
                <p className="text-xs text-zinc-500 max-w-sm">
                  Essential tools we use and maintain for the OSINT community.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Tool Card 1 */}
              {/* <a
                href="#"
                className="block p-5 border border-zinc-800 bg-zinc-900/20 hover:border-accent/50 hover:bg-zinc-900/50 transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <span
                    className="iconify text-xl text-zinc-500 group-hover:text-white"
                    data-icon="lucide:map"
                  />
                  <span className="text-[9px] font-mono border border-zinc-800 px-1 text-zinc-500">
                    v2.1.0
                  </span>
                </div>
                <h3 className="font-mono text-xs font-bold text-white mb-1 group-hover:text-accent">
                  GEO_CALC
                </h3>
                <p className="text-[10px] text-zinc-500 leading-relaxed">
                  Shadow length calculator for time-of-day verification in videos.
                </p>
              </a> */}

              {/* Tool Card 2 */}
              <a
                href="https://github.com/OSINT-JOURNO/awesome-osint-toolkit"
                className="block p-5 border border-zinc-800 bg-zinc-900/20 hover:border-accent/50 hover:bg-zinc-900/50 transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <span
                    className="iconify text-xl text-zinc-500 group-hover:text-white"
                    data-icon="lucide:users"
                  />
                  <span className="text-[9px] font-mono border border-zinc-800 px-1 text-zinc-500">
                    RESOURCE
                  </span>
                </div>
                <h3 className="font-mono text-xs font-bold text-white mb-1 group-hover:text-accent">
                  AWESOME_OSINT_TOOLKIT
                </h3>
                <p className="text-[10px] text-zinc-500 leading-relaxed">
                  A Toolkit for Open Source Intelligence(OSINT) by the OSINT JOURNO Community!
                </p>
              </a>

              {/* Tool Card 3 */}
              <a
                href="https://github.com/OSINT-JOURNO/Flight-Tracker"
                className="block p-5 border border-zinc-800 bg-zinc-900/20 hover:border-accent/50 hover:bg-zinc-900/50 transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <span
                    className="iconify text-xl text-zinc-500 group-hover:text-white"
                    data-icon="lucide:plane-takeoff"
                  />
                  <span className="text-[9px] font-mono border border-zinc-800 px-1 text-zinc-500">
                    TOOL
                  </span>
                </div>
                <h3 className="font-mono text-xs font-bold text-white mb-1 group-hover:text-accent">
                  FLIGHT_TRACKER
                </h3>
                <p className="text-[10px] text-zinc-500 leading-relaxed">
                   Python-based tool that allows users to track flights in real-time.
                </p>
              </a>
            </div>
          </section>

          {/* Services */}
          <section
            id="resources"
            className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-800 scroll-mt-32"
          >
            <div className="p-8 sm:p-12 hover:bg-zinc-900/20 transition-colors group">
              <span
                className="iconify text-3xl text-zinc-600 mb-6 group-hover:text-accent transition-colors"
                data-icon="lucide:graduation-cap"
              />
              <h3 className="font-display font-medium text-lg text-white mb-3">
                OSINT Training
              </h3>
              <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                Comprehensive training programs for individuals and organizations.
                Learn intelligence gathering, verification techniques, and digital
                investigation methodologies from industry experts.
              </p>
              <ul className="space-y-2 text-[10px] font-mono text-zinc-500">
                <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                  <span className="w-1 h-1 bg-accent rounded-full" />
                  Geolocation & Chronolocation
                </li>
                <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                  <span className="w-1 h-1 bg-accent rounded-full" />
                  Social Media Intelligence (SOCMINT)
                </li>
                <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                  <span className="w-1 h-1 bg-accent rounded-full" />
                  Digital Forensics & Verification
                </li>
              </ul>
            </div>
            <div className="p-8 sm:p-12 hover:bg-zinc-900/20 transition-colors group">
              <span
                className="iconify text-3xl text-zinc-600 mb-6 group-hover:text-accent transition-colors"
                data-icon="lucide:search-check"
              />
              <h3 className="font-display font-medium text-lg text-white mb-3">
                OSINT Investigations
              </h3>
              <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                Professional investigation services using open-source intelligence.
                We help uncover the truth through ethical and legal means for
                journalists, legal teams, and organizations.
              </p>
              <ul className="space-y-2 text-[10px] font-mono text-zinc-500">
                <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                  <span className="w-1 h-1 bg-accent rounded-full" />
                  Corporate Due Diligence
                </li>
                <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                  <span className="w-1 h-1 bg-accent rounded-full" />
                  Digital Footprint Analysis
                </li>
                <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                  <span className="w-1 h-1 bg-accent rounded-full" />
                  Asset & Entity Tracing
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-800 pt-16 pb-8 px-4 sm:px-8 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo.png"
                  alt="OSINT JOURNO Logo"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <span className="font-display font-bold text-white tracking-tight">
                  OSINT_JOURNO
                </span>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed max-w-sm mb-6">
                OSINT JOURNO is an investigative journalism based organization dedicated to
                exposing corruption, tracking conflicts, and verifying truth through
                open-source intelligence.
              </p>
              <div className="flex gap-4">
                <a
                  href="mailto:team@osintjourno.com"
                  className="text-zinc-600 hover:text-accent transition-colors"
                  title="Email"
                >
                  <span className="iconify" data-icon="lucide:mail" />
                </a>
                <a
                  href="https://www.linkedin.com/company/osint-journo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-accent transition-colors"
                  title="LinkedIn"
                >
                  <span className="iconify" data-icon="lucide:linkedin" />
                </a>
                <a
                  href="https://medium.com/osint-journo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-accent transition-colors"
                  title="Medium"
                >
                  <span className="iconify" data-icon="lucide:book-open" />
                </a>
                <a
                  href="https://github.com/OSINT-JOURNO/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-accent transition-colors"
                  title="GitHub"
                >
                  <span className="iconify" data-icon="lucide:github" />
                </a>
                <a
                  href="https://x.com/osint_journo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-accent transition-colors"
                  title="Twitter"
                >
                  <span className="iconify" data-icon="lucide:twitter" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-4">
                Tools & Resources
              </h4>
              <ul className="space-y-2 text-xs text-zinc-600">
                <li>
                  <a href="https://github.com/OSINT-JOURNO/awesome-osint-toolkit" className="hover:text-white transition-colors">
                    Awesome OSINT Toolkit
                  </a>
                </li>
                <li>
                  <a href="https://github.com/OSINT-JOURNO/Flight-Tracker" className="hover:text-white transition-colors">
                    Flight Tracker
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-4">
                Legal
              </h4>
              <ul className="space-y-2 text-xs text-zinc-600">
               
                <li>
                  <a href="/privacy-policy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-of-use" className="hover:text-white transition-colors">
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[10px] font-mono text-zinc-600">
              © 2024 OSINT JOURNO. POWERED BY <a href="https://shallvhack.com" target="_blank" rel="noopener noreferrer" className="text-sky-400 font-semibold hover:text-sky-300 transition-colors">ShallVhack</a>.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-600">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>GRID STATUS: STABLE</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
