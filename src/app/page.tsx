"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { webProjects, designProjects, ProjectType } from "../data/projects";

// SVG Icons to avoid lucide-react version mismatches
const ArrowUpRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

export default function Home() {
  const [webType, setWebType] = useState<ProjectType>("static");
  const [activeTab, setActiveTab] = useState<"web" | "desain">("web");

  const filteredWeb = webProjects.filter((p) => p.type === webType);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] font-light selection:bg-[#f5f5f5] selection:text-[#0a0a0a] px-4 md:px-8 py-16 max-w-5xl mx-auto flex flex-col justify-between">
      {/* Header / Hero */}
      <header className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl md:text-3xl tracking-wide font-normal text-[#f5f5f5]">
                raihan fajar aly
              </h1>
              <p className="text-xs text-[#6b6b6b] mt-1 tracking-widest uppercase">
                web developer & ui/ux designer • 18 y.o.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="mailto:rehanalay9@gmail.com"
                className="text-[#6b6b6b] hover:text-[#f5f5f5] transition-colors"
                aria-label="Email"
              >
                <MailIcon />
              </a>
              <a
                href="https://github.com/ggaku3076-ux"
                target="_blank"
                rel="noreferrer"
                className="text-[#6b6b6b] hover:text-[#f5f5f5] transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
              <a
                href="https://instagram.com/raihnnf.a"
                target="_blank"
                rel="noreferrer"
                className="text-[#6b6b6b] hover:text-[#f5f5f5] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          <p className="text-lg md:text-xl font-light text-[#a3a3a3] max-w-xl leading-relaxed mt-4">
            building with intent, designing with purpose. interested in creating
            highly responsive web applications and clean aesthetic interface
            layouts.
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Figma"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-[11px] font-mono tracking-wider border border-[#1f1f1f] text-[#888]"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </motion.div>
      </header>

      {/* Navigation Tabs */}
      <main className="flex-grow">
        <div className="border-b border-[#1f1f1f] mb-12 flex justify-between items-end">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("web")}
              className={`pb-3 text-sm tracking-widest uppercase transition-colors relative ${
                activeTab === "web" ? "text-[#f5f5f5]" : "text-[#6b6b6b] hover:text-[#a3a3a3]"
              }`}
            >
              web portfolio
              {activeTab === "web" && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#f5f5f5]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab("desain")}
              className={`pb-3 text-sm tracking-widest uppercase transition-colors relative ${
                activeTab === "desain" ? "text-[#f5f5f5]" : "text-[#6b6b6b] hover:text-[#a3a3a3]"
              }`}
            >
              design work
              {activeTab === "desain" && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#f5f5f5]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          </div>

          {activeTab === "web" && (
            <div className="flex gap-4 pb-3">
              <button
                onClick={() => setWebType("static")}
                className={`text-xs tracking-wider transition-colors ${
                  webType === "static" ? "text-[#f5f5f5]" : "text-[#6b6b6b] hover:text-[#a3a3a3]"
                }`}
              >
                static ({webProjects.filter((p) => p.type === "static").length})
              </button>
              <span className="text-[#1f1f1f]">|</span>
              <button
                onClick={() => setWebType("dynamic")}
                className={`text-xs tracking-wider transition-colors ${
                  webType === "dynamic" ? "text-[#f5f5f5]" : "text-[#6b6b6b] hover:text-[#a3a3a3]"
                }`}
              >
                dynamic ({webProjects.filter((p) => p.type === "dynamic").length})
              </button>
            </div>
          )}
        </div>

        {/* Portfolio Content */}
        <AnimatePresence mode="wait">
          {activeTab === "web" ? (
            <motion.div
              key={`web-${webType}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filteredWeb.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="border border-[#1f1f1f] bg-[#111111]/30 p-6 flex flex-col justify-between hover:border-[#333333] transition-colors group duration-300"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[10px] font-mono text-[#6b6b6b]">
                        {project.year}
                      </span>
                      <div className="flex gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#6b6b6b] hover:text-[#f5f5f5] transition-colors"
                          >
                            <GithubIcon />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#6b6b6b] hover:text-[#f5f5f5] transition-colors"
                          >
                            <ArrowUpRightIcon />
                          </a>
                        )}
                      </div>
                    </div>
                    <h3 className="text-[16px] font-normal mb-2 text-[#f5f5f5] group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#888888] leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono border border-[#1f1f1f] px-2 py-0.5 text-[#555555]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="desain"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            >
              {designProjects.map((design) => (
                <motion.div
                  key={design.id}
                  variants={itemVariants}
                  className="border border-[#1f1f1f] bg-[#111111]/30 overflow-hidden group hover:border-[#333333] transition-colors duration-300"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#0d0d0d] relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={design.image}
                      alt={design.title}
                      className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 border-t border-[#1f1f1f]">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xs font-normal text-[#f5f5f5]">
                        {design.title}
                      </h3>
                      <span className="text-[9px] font-mono text-[#555]">
                        {design.tags[0]}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="mt-32 pt-8 border-t border-[#1f1f1f] flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-[#555555] font-mono">
        <div>© 2026 raihan fajar aly. all rights reserved.</div>
        <div className="flex gap-4">
          <a
            href="https://tiktok.com/@raihnnfa"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#a3a3a3] transition-colors"
          >
            tiktok
          </a>
          <span>/</span>
          <a
            href="https://instagram.com/raihnnf.a"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#a3a3a3] transition-colors"
          >
            instagram
          </a>
        </div>
      </footer>
    </div>
  );
}
