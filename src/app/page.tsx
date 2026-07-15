"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { webProjects, designProjects, ProjectType } from "../data/projects";

const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
  </svg>
);
const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const TiktokIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};
const cardFade: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

type WebFilter = "all" | "travel" | "cafe" | "company";
type DesignFilter = "all" | "logo" | "poster" | "instagram";

const webFilterFn = (filter: WebFilter, type: ProjectType) => {
  if (type === "dynamic") return filter === "all";
  const maps: Record<WebFilter, number[]> = {
    all: [1, 2, 3, 4, 5, 6, 7],
    travel: [1, 2, 3],
    cafe: [4, 5, 6],
    company: [7],
  };
  return maps[filter];
};

export default function Home() {
  const [webType, setWebType] = useState<ProjectType>("static");
  const [webFilter, setWebFilter] = useState<WebFilter>("all");
  const [designFilter, setDesignFilter] = useState<DesignFilter>("all");
  const [activeTab, setActiveTab] = useState<"web" | "desain">("web");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const filteredWeb = webProjects.filter((p) => {
    if (p.type !== webType) return false;
    if (webType === "dynamic") return true;
    const ids = webFilterFn(webFilter, webType);
    return Array.isArray(ids) ? ids.includes(p.id) : ids;
  });

  const filteredDesign = designProjects.filter((d) =>
    designFilter === "all" ? true : d.category === designFilter
  );

  return (
    <div className="bg-[#faf9f5] text-[#0a0a0a] min-h-screen" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 300 }}>

      {/* ── NAVBAR ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#faf9f5]/90 backdrop-blur-sm border-b border-[#e5e5e0]" : ""}`}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <span className="text-sm tracking-[0.2em] uppercase text-[#0a0a0a]" style={{ fontWeight: 400 }}>rfa</span>
          <nav className="hidden md:flex items-center gap-8">
            {["about", "portfolio", "contact"].map((id) => (
              <a key={id} href={`#${id}`}
                className="text-[11px] tracking-[0.18em] uppercase text-[#999] hover:text-[#0a0a0a] transition-colors duration-200">
                {id}
              </a>
            ))}
          </nav>
          <a href="mailto:rehanalay9@gmail.com"
            className="hidden md:flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase border border-[#ccc] px-4 py-2 text-[#666] hover:text-[#0a0a0a] hover:border-[#0a0a0a] transition-all duration-200">
            hire me
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-screen overflow-hidden">
        {/* bg — full bleed, tidak dibatasi max-width */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/bg-hero.png"
            alt=""
            className="hidden md:block absolute right-0 top-0 h-full w-auto max-w-none object-right object-cover"
            style={{ opacity: 1 }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/bg-mobile.png"
            alt=""
            className="block md:hidden absolute right-0 top-0 h-full w-full object-cover object-center"
            style={{ opacity: 0.5 }}
          />
        </div>

        {/* content — max-width di sini */}
        <div className="relative z-10 min-h-screen flex flex-col justify-end pb-20 px-6 md:px-12 max-w-6xl mx-auto pt-32">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
            <motion.p variants={fadeUp} className="text-[11px] tracking-[0.25em] uppercase text-[#aaa]">
              available for projects — 2026
            </motion.p>
            <motion.h1 variants={fadeUp}
              className="text-[clamp(3rem,9vw,8rem)] leading-[0.92] tracking-[-0.02em] text-[#0a0a0a]"
              style={{ fontWeight: 300 }}>
              Raihan<br />
              <span className="text-[#c8c8c0]">Fajar</span><br />
              Aly
            </motion.h1>
            <motion.div variants={fadeUp} className="pt-8 border-t border-[#e5e5e0] space-y-4">
              <p className="text-[#888] text-sm md:text-base max-w-md leading-relaxed">
                web developer & ui/ux designer based in indonesia. building clean, purposeful digital experiences that work.
              </p>
              <div className="flex gap-6">
                <a href="https://github.com/ggaku3076-ux" target="_blank" rel="noreferrer" className="text-[#bbb] hover:text-[#0a0a0a] transition-colors"><GithubIcon /></a>
                <a href="https://instagram.com/raihnnf.a" target="_blank" rel="noreferrer" className="text-[#bbb] hover:text-[#0a0a0a] transition-colors"><InstagramIcon /></a>
                <a href="https://tiktok.com/@raihnnfa" target="_blank" rel="noreferrer" className="text-[#bbb] hover:text-[#0a0a0a] transition-colors"><TiktokIcon /></a>
                <a href="mailto:rehanalay9@gmail.com" className="text-[#bbb] hover:text-[#0a0a0a] transition-colors"><MailIcon /></a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-[1px] h-8 bg-[#ccc]" />
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT — dark ── */}
      <section id="about" className="py-24 bg-[#0a0a0a] border-t border-[#1a1a1a]">
        <div className="px-6 md:px-12 max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <motion.p variants={fadeUp} className="text-[11px] tracking-[0.25em] uppercase text-[#555]">about</motion.p>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl leading-tight text-[#f0f0f0]" style={{ fontWeight: 300 }}>
                always learning,<br />always building.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-[#888] leading-relaxed text-sm">
                18 tahun, dari indonesia. saya adalah seseorang yang percaya bahwa desain yang baik tidak perlu teriak keras — cukup berbicara tepat. belajar dari setiap project, setiap revision, setiap feedback.
              </motion.p>
              <motion.p variants={fadeUp} className="text-[#666] leading-relaxed text-sm">
                fokus di web development dan ui/ux design. juga mengerjakan graphic design dan branding.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="space-y-4">
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#555] mb-6">stack & tools</p>
              {[
                { label: "languages", items: ["HTML", "TypeScript", "JavaScript"] },
                { label: "framework", items: ["Next.js", "React", "Tailwind CSS"] },
                { label: "tools", items: ["Codex", "Hermes Agent", "Antigravity", "GPT", "Canva"] },
              ].map(({ label, items }) => (
                <div key={label} className="border-t border-[#1a1a1a] pt-4">
                  <p className="text-[10px] tracking-widest uppercase text-[#444] mb-3">{label}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item}
                        className="text-[11px] font-mono border border-[#1f1f1f] px-3 py-1 text-[#666] hover:text-[#f0f0f0] hover:border-[#444] transition-colors cursor-default">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <div className="border-t border-[#1a1a1a] pt-6 grid grid-cols-3 gap-4 mt-4">
                {[{ num: "8+", label: "projects" }, { num: "2+", label: "years learning" }, { num: "3", label: "disciplines" }].map(({ num, label }) => (
                  <div key={label}>
                    <p className="text-2xl text-[#f0f0f0]" style={{ fontWeight: 300 }}>{num}</p>
                    <p className="text-[10px] tracking-wider uppercase text-[#444] mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── PORTFOLIO — light ── */}
      <section id="portfolio" className="py-24 border-t border-[#e5e5e0]">
        <div className="px-6 md:px-12 max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-[11px] tracking-[0.25em] uppercase text-[#aaa] mb-3">portfolio</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl text-[#0a0a0a] mb-12" style={{ fontWeight: 300 }}>
              selected work
            </motion.h2>

            {/* Main tab: web / design */}
            <motion.div variants={fadeUp} className="flex items-end justify-between border-b border-[#e5e5e0] mb-6">
              <div className="flex">
                {(["web", "desain"] as const).map((tab) => (
                  <button key={tab} onClick={() => setActiveTab(tab)}
                    className={`relative pb-3 mr-8 text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 ${activeTab === tab ? "text-[#0a0a0a]" : "text-[#bbb] hover:text-[#888]"}`}>
                    {tab === "web" ? "web portfolio" : "design work"}
                    {activeTab === tab && (
                      <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#0a0a0a]"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                    )}
                  </button>
                ))}
              </div>

              {/* web sub-filter */}
              {activeTab === "web" && (
                <div className="flex items-center gap-4 pb-3">
                  {(["static", "dynamic"] as ProjectType[]).map((t) => (
                    <button key={t} onClick={() => { setWebType(t); setWebFilter("all"); }}
                      className={`text-[10px] tracking-wider uppercase transition-colors ${webType === t ? "text-[#0a0a0a]" : "text-[#bbb] hover:text-[#888]"}`}>
                      {t} ({webProjects.filter(p => p.type === t).length})
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* category sub-filter for static */}
            <AnimatePresence>
              {activeTab === "web" && webType === "static" && (
                <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="flex gap-3 mb-8 flex-wrap">
                  {(["all", "travel", "cafe", "company"] as WebFilter[]).map((f) => (
                    <button key={f} onClick={() => setWebFilter(f)}
                      className={`text-[10px] tracking-wider uppercase px-3 py-1 border transition-colors ${webFilter === f ? "border-[#0a0a0a] text-[#0a0a0a]" : "border-[#e5e5e0] text-[#bbb] hover:text-[#888] hover:border-[#ccc]"}`}>
                      {f}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* design category sub-filter */}
            <AnimatePresence>
              {activeTab === "desain" && (
                <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="flex gap-3 mb-8 flex-wrap">
                  {(["all", "logo", "poster", "instagram"] as DesignFilter[]).map((f) => (
                    <button key={f} onClick={() => setDesignFilter(f)}
                      className={`text-[10px] tracking-wider uppercase px-3 py-1 border transition-colors ${designFilter === f ? "border-[#0a0a0a] text-[#0a0a0a]" : "border-[#e5e5e0] text-[#bbb] hover:text-[#888] hover:border-[#ccc]"}`}>
                      {f}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Content grid */}
            <AnimatePresence mode="wait">
              {activeTab === "web" ? (
                <motion.div key={`web-${webType}-${webFilter}`} variants={stagger} initial="hidden" animate="visible" exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e5e5e0]">
                  {filteredWeb.map((project) => (
                    <motion.div key={project.id} variants={cardFade}
                      className="bg-[#faf9f5] flex flex-col group hover:bg-white transition-colors duration-300">
                      {/* thumbnail — klik buka live site */}
                      <a href={project.live} target="_blank" rel="noreferrer" className="block overflow-hidden bg-[#f0f0ea]">
                        <div className="overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={project.image} alt={project.title}
                            className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500 opacity-90 group-hover:opacity-100"
                            loading="lazy" />
                        </div>
                      </a>
                      {/* info */}
                      <div className="p-6 flex flex-col flex-grow justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-3">
                            <span className="text-[10px] font-mono text-[#ccc] tracking-wider">{String(project.id).padStart(2, "0")}</span>
                            <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              {project.github && (
                                <a href={project.github} target="_blank" rel="noreferrer" className="text-[#bbb] hover:text-[#0a0a0a] transition-colors">
                                  <GithubIcon />
                                </a>
                              )}
                              {project.live && (
                                <a href={project.live} target="_blank" rel="noreferrer" className="text-[#bbb] hover:text-[#0a0a0a] transition-colors">
                                  <ArrowUpRight />
                                </a>
                              )}
                            </div>
                          </div>
                          <h3 className="text-sm text-[#222] mb-1 group-hover:text-[#0a0a0a] transition-colors" style={{ fontWeight: 400 }}>
                            {project.title}
                          </h3>
                          <p className="text-[11px] text-[#aaa] leading-relaxed">{project.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-1.5 mt-4">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-[9px] font-mono text-[#bbb] border border-[#e5e5e0] px-2 py-0.5">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div key={`desain-${designFilter}`} variants={stagger} initial="hidden" animate="visible" exit={{ opacity: 0 }}
                  className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
                  {filteredDesign.map((d) => (
                    <motion.div key={d.id} variants={cardFade} className="bg-[#faf9f5] border border-[#e5e5e0] group overflow-hidden break-inside-avoid">
                      <a href={d.image} target="_blank" rel="noreferrer" className="block overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={d.image} alt={d.title}
                          className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500"
                          loading="lazy" />
                      </a>
                      <div className="px-5 py-4 border-t border-[#e5e5e0] flex justify-between items-center bg-[#faf9f5]">
                        <span className="text-xs text-[#555]" style={{ fontWeight: 400 }}>{d.title}</span>
                        <span className="text-[9px] font-mono text-[#bbb]">{d.tags[0]}</span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT — dark ── */}
      <section id="contact" className="py-32 bg-[#0a0a0a] border-t border-[#1a1a1a]">
        <div className="px-6 md:px-12 max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}
            className="text-center space-y-8">
            <motion.p variants={fadeUp} className="text-[11px] tracking-[0.25em] uppercase text-[#555]">contact</motion.p>
            <motion.h2 variants={fadeUp} className="text-[clamp(2.5rem,7vw,6rem)] leading-none text-[#f0f0f0]" style={{ fontWeight: 300 }}>
              let's work<br />together
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#666] text-sm max-w-md mx-auto">
              open for freelance projects, collaborations, or just a conversation about design and development.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a href="mailto:rehanalay9@gmail.com"
                className="inline-flex items-center gap-3 border border-[#2a2a2a] px-8 py-4 text-sm tracking-[0.15em] uppercase text-[#888] hover:text-[#f0f0f0] hover:border-[#555] transition-all duration-300">
                rehanalay9@gmail.com
                <ArrowUpRight />
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="flex justify-center gap-8 pt-4">
              {[
                { label: "github", href: "https://github.com/ggaku3076-ux" },
                { label: "instagram", href: "https://instagram.com/raihnnf.a" },
                { label: "tiktok", href: "https://tiktok.com/@raihnnfa" },
              ].map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  className="text-[11px] tracking-widest uppercase text-[#444] hover:text-[#f0f0f0] transition-colors">
                  {label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER — dark ── */}
      <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a] py-8">
        <div className="px-6 md:px-12 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[10px] font-mono text-[#333] tracking-widest">© 2026 raihan fajar aly</span>
          <span className="text-[10px] font-mono text-[#333] tracking-widest">web developer & ui/ux designer</span>
        </div>
      </footer>
    </div>
  );
}
