"use client";

import Image from "next/image";
import { useState } from "react";

export default function ToolLaunchPage() {
  const [activeTab, setActiveTab] = useState("features");
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  // ============================================
  // TOOL CONFIGURATION - Update these for each new tool launch
  // ============================================
  const tool = {
    name: "TOOL_NAME",
    tagline: "Your Tool Tagline Here",
    version: "1.0.0",
    status: "BETA", // BETA, LIVE, COMING_SOON
    description:
      "A brief description of what your tool does. Explain the problem it solves and who it's for. Keep it concise but informative.",
    longDescription:
      "A longer description that goes into more detail about the tool's capabilities, use cases, and benefits. This helps users understand exactly what they're getting.",
    appUrl: "#", // Main app/tool URL
    docsUrl: "#",
    pricingUrl: "#",
    launchDate: "January 2025",
    heroImage: "/logo.png", // Replace with tool screenshot/preview
  };

  // Screenshots/Images Gallery
  const screenshots = [
    {
      src: "/logo.png", // Replace with actual screenshot
      alt: "Dashboard Overview",
      caption: "Main dashboard showing key metrics and controls",
    },
    {
      src: "/logo.png", // Replace with actual screenshot
      alt: "Feature View",
      caption: "Detailed view of the core feature in action",
    },
    {
      src: "/logo.png", // Replace with actual screenshot
      alt: "Results Panel",
      caption: "Results and analytics panel with export options",
    },
  ];

  // Demo Video/GIF - Set to null if not available
  const demoMedia = {
    type: "image", // "video", "gif", or "image"
    src: "/logo.png", // Replace with actual video/gif path
    poster: "/logo.png", // Poster image for video (optional)
    caption: "See the tool in action",
  };

  const features = [
    {
      icon: "lucide:zap",
      title: "Feature One",
      description:
        "Describe the first key feature of your tool. What makes it valuable?",
    },
    {
      icon: "lucide:shield",
      title: "Feature Two",
      description:
        "Describe the second key feature. Focus on benefits to the user.",
    },
    {
      icon: "lucide:globe",
      title: "Feature Three",
      description:
        "Describe the third key feature. How does it solve a problem?",
    },
    {
      icon: "lucide:cpu",
      title: "Feature Four",
      description:
        "Describe the fourth key feature. What sets it apart from alternatives?",
    },
  ];

  const useCases = [
    {
      title: "Use Case 1",
      description: "Describe a specific scenario where this tool is useful.",
      tag: "JOURNALISM",
    },
    {
      title: "Use Case 2",
      description: "Another scenario demonstrating the tool's value.",
      tag: "RESEARCH",
    },
    {
      title: "Use Case 3",
      description: "A third use case to show versatility.",
      tag: "SECURITY",
    },
  ];

  const pricing = [
    {
      name: "Starter",
      price: "Free",
      period: "",
      description: "For individuals getting started",
      features: [
        "Basic features",
        "Limited queries/month",
        "Email support",
        "Community access",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "For professionals and small teams",
      features: [
        "All Starter features",
        "Unlimited queries",
        "Priority support",
        "API access",
        "Advanced analytics",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For organizations with custom needs",
      features: [
        "All Professional features",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "On-premise option",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  const faqs = [
    {
      question: "How do I get started?",
      answer:
        "Provide clear instructions on how users can start using the tool. Include any prerequisites or setup steps.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and bank transfers for enterprise customers.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes, we offer a 14-day free trial of our Professional plan. No credit card required.",
    },
    {
      question: "What data do you collect?",
      answer:
        "Address privacy concerns. Explain what data is collected and how it's used. Link to privacy policy.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.",
    },
  ];
  // ============================================

  return (
    <div className="bg-zinc-950 text-zinc-300 font-sans antialiased min-h-screen flex flex-col selection-lime relative overflow-x-hidden dark">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[size:30px_30px] bg-grid-dark opacity-40" />
      <div className="fixed inset-0 crt-overlay z-40 pointer-events-none" />

      {/* Top System Bar */}
      <div className="bg-black/80 border-b border-zinc-800 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-zinc-500 flex justify-between px-4 py-1.5 relative z-50">
        <div className="flex items-center gap-4">
          <span className="text-accent flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-sm animate-pulse" />
            PRODUCT_LAUNCH
          </span>
          <span className="hidden sm:inline">
            STATUS:{" "}
            <span
              className={
                tool.status === "LIVE"
                  ? "text-green-400"
                  : tool.status === "BETA"
                  ? "text-yellow-400"
                  : "text-zinc-400"
              }
            >
              {tool.status}
            </span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">VER: {tool.version}</span>
          <a
            href="/"
            className="hover:text-accent cursor-pointer transition-colors"
          >
            RETURN_INDEX
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-6 md:top-8 z-40 max-w-6xl mx-auto w-full px-4 sm:px-8">
        <div className="border border-zinc-800 bg-zinc-950/80 backdrop-blur flex items-center justify-between px-4 sm:px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-zinc-900 border border-zinc-700 flex items-center justify-center relative overflow-hidden">
              <Image
                src="/logo.png"
                alt="OSINT JOURNO Logo"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-sm tracking-tight text-white">
                {tool.name}
              </span>
              <span className="font-mono text-[9px] tracking-[0.25em] text-zinc-500">
                BY OSINT_JOURNO
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={tool.docsUrl}
              className="hidden sm:flex text-[10px] font-mono uppercase tracking-widest text-zinc-500 hover:text-accent items-center gap-1"
            >
              <span className="iconify" data-icon="lucide:book" />
              DOCS
            </a>
            <a
              href={tool.pricingUrl}
              className="hidden sm:flex text-[10px] font-mono uppercase tracking-widest text-zinc-500 hover:text-accent items-center gap-1"
            >
              <span className="iconify" data-icon="lucide:credit-card" />
              PRICING
            </a>
            <a
              href="/"
              className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 hover:text-accent flex items-center gap-1"
            >
              <span className="iconify" data-icon="lucide:arrow-left" />
              BACK
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-6xl mx-auto w-full border-x border-zinc-800 mt-6 md:mt-10 relative z-10 bg-zinc-950/60">
        {/* Hero Section */}
        <section className="border-b border-t border-zinc-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left - Content */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-6">
                <span
                  className={`px-2 py-1 text-[10px] font-mono rounded border ${
                    tool.status === "LIVE"
                      ? "bg-green-500/10 text-green-400 border-green-500/20"
                      : tool.status === "BETA"
                      ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                      : "bg-zinc-500/10 text-zinc-400 border-zinc-500/20"
                  }`}
                >
                  {tool.status}
                </span>
                <span className="text-[10px] font-mono text-zinc-500">
                  LAUNCHED: {tool.launchDate}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-white tracking-tight leading-[1.1] mb-4">
                {tool.name}
              </h1>

              <p className="text-lg sm:text-xl text-zinc-400 mb-6 font-light">
                {tool.tagline}
              </p>

              <p className="text-sm text-zinc-500 leading-relaxed mb-8 max-w-lg">
                {tool.description}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={tool.appUrl}
                  className="bg-accent text-black hover:bg-white transition-colors px-6 py-3 text-xs font-bold tracking-widest uppercase flex items-center gap-2"
                >
                  <span className="iconify" data-icon="lucide:rocket" />
                  Launch App
                </a>
                <a
                  href={tool.pricingUrl}
                  className="border border-zinc-700 hover:border-white text-zinc-300 hover:text-white transition-colors px-6 py-3 text-xs font-bold tracking-widest uppercase bg-black/50 flex items-center gap-2"
                >
                  <span className="iconify" data-icon="lucide:sparkles" />
                  View Pricing
                </a>
              </div>

              {/* Trust Badges */}
              <div className="mt-10 pt-8 border-t border-zinc-800">
                <div className="flex flex-wrap gap-6 text-[10px] font-mono text-zinc-500">
                  <div className="flex items-center gap-2">
                    <span className="iconify text-accent" data-icon="lucide:shield-check" />
                    <span>SECURE & ENCRYPTED</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="iconify text-accent" data-icon="lucide:clock" />
                    <span>24/7 UPTIME</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="iconify text-accent" data-icon="lucide:headphones" />
                    <span>PRIORITY SUPPORT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Hero Image/Video */}
            <div className="hidden lg:flex items-center justify-center p-8 border-l border-zinc-800 bg-zinc-900/20 relative">
              <div className="absolute inset-0 bg-[size:20px_20px] bg-grid-dark opacity-30" />
              <div className="relative w-full aspect-video border border-zinc-700 bg-zinc-900/50 rounded-lg overflow-hidden">
                {demoMedia.type === "video" ? (
                  <video
                    src={demoMedia.src}
                    poster={demoMedia.poster}
                    controls
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={demoMedia.src}
                    alt={tool.name}
                    fill
                    className="object-contain p-8"
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-950/90 to-transparent p-4">
                  <div className="font-mono text-[10px] text-zinc-400">
                    {demoMedia.caption}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Screenshot Gallery Section */}
        <section className="border-b border-zinc-800 p-6 sm:p-10 lg:p-14 bg-black/30">
          <div className="mb-8">
            <h2 className="font-mono text-sm text-accent uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="iconify" data-icon="lucide:image" />
              Product Screenshots
            </h2>
            <p className="text-sm text-zinc-400">
              See {tool.name} in action with these product screenshots.
            </p>
          </div>

          {/* Main Screenshot Display */}
          <div className="mb-6">
            <div className="relative aspect-video border border-zinc-700 bg-zinc-900/50 rounded-lg overflow-hidden">
              <Image
                src={screenshots[activeScreenshot].src}
                alt={screenshots[activeScreenshot].alt}
                fill
                className="object-contain p-4"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-950/90 to-transparent p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-mono text-[10px] text-accent mb-1">
                      {String(activeScreenshot + 1).padStart(2, "0")} / {String(screenshots.length).padStart(2, "0")}
                    </div>
                    <div className="text-sm text-zinc-300">
                      {screenshots[activeScreenshot].caption}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveScreenshot((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1))}
                      className="w-8 h-8 border border-zinc-700 hover:border-accent flex items-center justify-center transition-colors"
                    >
                      <span className="iconify" data-icon="lucide:chevron-left" />
                    </button>
                    <button
                      onClick={() => setActiveScreenshot((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1))}
                      className="w-8 h-8 border border-zinc-700 hover:border-accent flex items-center justify-center transition-colors"
                    >
                      <span className="iconify" data-icon="lucide:chevron-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {screenshots.map((screenshot, index) => (
              <button
                key={index}
                onClick={() => setActiveScreenshot(index)}
                className={`relative w-32 h-20 shrink-0 border rounded overflow-hidden transition-all ${
                  activeScreenshot === index
                    ? "border-accent ring-1 ring-accent/50"
                    : "border-zinc-700 hover:border-zinc-500"
                }`}
              >
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  className="object-contain p-2"
                />
                <div className="absolute inset-0 bg-zinc-950/40" />
                <div className="absolute bottom-1 left-1 font-mono text-[8px] text-zinc-400">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Tab Navigation */}
        <div className="border-b border-zinc-800 bg-zinc-900/30">
          <div className="flex overflow-x-auto">
            {["features", "use-cases", "pricing", "faq"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-[11px] font-mono uppercase tracking-widest whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === tab
                    ? "text-accent border-accent bg-zinc-900/50"
                    : "text-zinc-500 border-transparent hover:text-white hover:bg-zinc-900/30"
                }`}
              >
                {tab.replace("-", " ")}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <section className="p-6 sm:p-10 lg:p-14">
          {/* Features Tab */}
          {activeTab === "features" && (
            <div>
              <div className="mb-10">
                <h2 className="font-mono text-sm text-accent uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="iconify" data-icon="lucide:sparkles" />
                  Key Features
                </h2>
                <p className="text-sm text-zinc-400 max-w-2xl">
                  {tool.longDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group p-6 border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-accent/30 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-zinc-900 border border-zinc-700 flex items-center justify-center shrink-0 group-hover:border-accent/50 transition-colors">
                        <span
                          className="iconify text-lg text-zinc-500 group-hover:text-accent transition-colors"
                          data-icon={feature.icon}
                        />
                      </div>
                      <div>
                        <h3 className="font-display font-medium text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Use Cases Tab */}
          {activeTab === "use-cases" && (
            <div>
              <div className="mb-10">
                <h2 className="font-mono text-sm text-accent uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="iconify" data-icon="lucide:target" />
                  Use Cases
                </h2>
                <p className="text-sm text-zinc-400 max-w-2xl">
                  Discover how {tool.name} can be applied across different
                  scenarios and industries.
                </p>
              </div>

              <div className="space-y-4">
                {useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="group p-6 border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-accent/30 transition-all flex flex-col sm:flex-row sm:items-center gap-4"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-8 h-8 bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs font-mono text-zinc-500">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <h3 className="font-display font-medium text-white mb-1">
                          {useCase.title}
                        </h3>
                        <p className="text-xs text-zinc-400">
                          {useCase.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono border border-zinc-700 text-zinc-400 px-2 py-1 rounded self-start sm:self-center">
                      {useCase.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pricing Tab */}
          {activeTab === "pricing" && (
            <div>
              <div className="mb-10">
                <h2 className="font-mono text-sm text-accent uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="iconify" data-icon="lucide:credit-card" />
                  Pricing Plans
                </h2>
                <p className="text-sm text-zinc-400 max-w-2xl">
                  Choose the plan that best fits your needs. All plans include a 14-day free trial.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pricing.map((plan, index) => (
                  <div
                    key={index}
                    className={`relative p-6 border bg-zinc-900/20 transition-all ${
                      plan.highlighted
                        ? "border-accent bg-zinc-900/40 ring-1 ring-accent/20"
                        : "border-zinc-800 hover:border-zinc-700"
                    }`}
                  >
                    {plan.highlighted && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-black text-[9px] font-mono font-bold uppercase tracking-wider">
                        Most Popular
                      </div>
                    )}
                    <div className="mb-6">
                      <h3 className="font-display font-medium text-white mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-zinc-500 mb-4">
                        {plan.description}
                      </p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-display font-semibold text-white">
                          {plan.price}
                        </span>
                        <span className="text-sm text-zinc-500">
                          {plan.period}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-2 text-xs text-zinc-400"
                        >
                          <span className="iconify text-accent mt-0.5" data-icon="lucide:check" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={tool.appUrl}
                      className={`block w-full py-3 text-center text-xs font-bold uppercase tracking-widest transition-colors ${
                        plan.highlighted
                          ? "bg-accent text-black hover:bg-white"
                          : "border border-zinc-700 text-zinc-300 hover:border-white hover:text-white"
                      }`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                ))}
              </div>

              {/* Enterprise Contact */}
              <div className="mt-10 p-6 border border-zinc-800 bg-zinc-900/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-display font-medium text-white mb-1">
                    Need a custom solution?
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Contact us for enterprise pricing and custom integrations.
                  </p>
                </div>
                <a
                  href="mailto:team@osintjourno.com"
                  className="border border-zinc-700 hover:border-accent text-zinc-300 hover:text-accent transition-colors px-6 py-2 text-xs font-mono uppercase tracking-widest flex items-center gap-2"
                >
                  <span className="iconify" data-icon="lucide:mail" />
                  Contact Sales
                </a>
              </div>
            </div>
          )}

          {/* FAQ Tab */}
          {activeTab === "faq" && (
            <div>
              <div className="mb-10">
                <h2 className="font-mono text-sm text-accent uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="iconify" data-icon="lucide:help-circle" />
                  Frequently Asked Questions
                </h2>
                <p className="text-sm text-zinc-400 max-w-2xl">
                  Common questions about {tool.name} and how to use it
                  effectively.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="p-6 border border-zinc-800 bg-zinc-900/20"
                  >
                    <h3 className="font-display font-medium text-white mb-3 flex items-start gap-3">
                      <span className="text-accent font-mono text-sm">Q.</span>
                      {faq.question}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed pl-6">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="border-t border-zinc-800 p-8 sm:p-12 lg:p-16 bg-gradient-to-b from-zinc-900/30 to-transparent">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-sm text-zinc-400 mb-8">
              Start using {tool.name} today and enhance your OSINT capabilities.
              No credit card required for the free trial.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={tool.appUrl}
                className="bg-accent text-black hover:bg-white transition-colors px-8 py-3 text-xs font-bold tracking-widest uppercase flex items-center gap-2"
              >
                <span className="iconify" data-icon="lucide:rocket" />
                Start Free Trial
              </a>
              <a
                href={tool.docsUrl}
                className="border border-zinc-700 hover:border-white text-zinc-300 hover:text-white transition-colors px-8 py-3 text-xs font-bold tracking-widest uppercase bg-black/50 flex items-center gap-2"
              >
                <span className="iconify" data-icon="lucide:book-open" />
                Read Documentation
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-800 py-6 px-4 sm:px-8 relative z-20">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-zinc-600">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>OSINT_JOURNO // {tool.name}</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="hover:text-accent transition-colors">
              PRIVACY
            </a>
            <a href="/terms-of-use" className="hover:text-accent transition-colors">
              TERMS
            </a>
            <a href="/" className="hover:text-accent transition-colors">
              HOME
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
