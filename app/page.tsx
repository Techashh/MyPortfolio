"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Skills from "@/component/Skills";
import Service from "@/component/Service";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";
import Project from "@/component/Project";
import About from "@/component/About";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const educations = Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    period: i === 0 ? "2021 – till date" : `201${i} – 201${i + 1}`,
    title:
      i === 0
        ? "Bachelor of Science in Computer Science"
        : "Senior Secondary Certificate",
    school:
      i === 0
        ? "Afe Babalola University"
        : "Moret Comprehensive College",
    description:
      "Studying Computer Science has provided me with a strong foundation in programming, algorithms, and software development.",
  }));

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Resume", link: "#resume" },
    { name: "Services", link: "#services" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <main className="bg-white text-black overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <div className="relative min-h-screen overflow-hidden">
        
        {/* ================= HEADER ================= */}
        <header className="fixed top-0 left-0 w-full bg-black z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4 sm:py-5 md:py-6 flex items-center justify-between">

            {/* Logo */}
            <Image
              src="/logo3.png"
              alt="Logo"
              width={100}
              height={50}
              priority
              className="w-[65px] sm:w-[80px] md:w-[100px] h-auto"
            />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-sm text-white">
              <ul className="flex items-center gap-8 lg:gap-10">
                {navLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1"
            >
              <span className="w-6 h-[2px] bg-white"></span>
              <span className="w-6 h-[2px] bg-white"></span>
              <span className="w-6 h-[2px] bg-white"></span>
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-black border-t border-gray-800"
              >
                <ul className="flex flex-col items-center gap-6 py-6 text-white text-sm">
                  {navLinks.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.link}
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-gray-300 transition"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* ================= BACKGROUND ================= */}
        <div className="absolute inset-0 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-1/2 md:h-full bg-gray-200" />
          <div className="w-full md:w-1/2 h-1/2 md:h-full bg-black" />
        </div>

        {/* Diagonal Divider (Desktop Only) */}
        <div className="hidden md:block absolute inset-y-0 left-1/2 w-[140px] bg-black skew-x-[-12deg] origin-top z-10" />

        {/* ================= HERO CONTENT ================= */}
        <section
          id="home"
          className="relative z-20 flex min-h-[90vh] md:min-h-screen items-center justify-center px-4 sm:px-6 md:px-4 text-center pt-24 sm:pt-28 md:pt-0"
        >
          <div className="max-w-xl sm:max-w-2xl md:max-w-none">
        <p className="text-xs sm:text-sm md:text-lg mb-4 font-semibold tracking-wide
              bg-gradient-to-r from-black to-gray-400 text-transparent bg-clip-text
              md:bg-none md:text-gray-400 md:bg-clip-border md:text-opacity-100">
  Hi, I am
</p>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 leading-snug md:leading-tight">

  {/* Mobile View */}
  <span className="block sm:hidden text-black">
    SULAIMAN
  </span>
  <span className="block sm:hidden text-white">
    SURURAH
  </span>

  {/* Desktop View */}
  <span className="hidden sm:inline text-black">
    SULAIM
  </span>
  <span className="hidden sm:inline text-white">
    AN
  </span>
  <span className="hidden sm:inline text-white ml-2">
    SURURAH
  </span>

</h1>

            <p className="text-xs sm:text-base md:text-lg text-gray-400 mb-6 md:mb-10 font-semibold tracking-wide">
              Software Developer
            </p>
          </div>
        </section>
      </div>

      {/* ================= OTHER SECTIONS ================= */}
      <About />
      <Skills />
      <Service />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}