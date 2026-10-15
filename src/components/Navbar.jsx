import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles, Volume2, VolumeX } from "lucide-react";
import { YoutubeIcon } from "./Icons";
import { CREATOR_INFO } from "../data/portfolioData";
import { playSound } from "../utils/effects";

const Navbar = ({ soundEnabled, onToggleSound }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "stats", "works", "series", "sponsorships", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Live Stats", href: "#stats", id: "stats" },
    { name: "Viral Works", href: "#works", id: "works" },
    { name: "Series", href: "#series", id: "series" },
    { name: "Sponsorships", href: "#sponsorships", id: "sponsorships" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (id) => {
    if (soundEnabled) playSound("click");
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070a12]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Live Badge */}
          <div className="flex items-center space-x-3">
            <a
              href="#"
              onClick={() => soundEnabled && playSound("click")}
              className="flex items-center space-x-2.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-red-600 via-rose-600 to-amber-500 flex items-center justify-center font-black text-white text-lg tracking-wider shadow-lg shadow-red-600/30 group-hover:scale-105 transition-transform">
                SR
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-black tracking-tight text-white group-hover:text-red-500 transition-colors">
                    SINU ROX
                  </span>
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-slate-400">
                    Official Creator Portfolio
                  </span>
                </div>
              </div>
            </a>

            {/* Live Status Pill */}
            <div className="hidden lg:flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Open for Collabs</span>
            </div>
          </div>

          {/* Desktop Navigation Links with Active Indicator */}
          <nav className="hidden md:flex items-center p-1 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 relative ${
                    isActive
                      ? "text-white bg-red-600/90 shadow-md shadow-red-600/30 font-bold"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA & Sound Toggle */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Audio Toggle Button */}
            {onToggleSound && (
              <button
                onClick={onToggleSound}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all text-xs flex items-center gap-1.5"
                title={soundEnabled ? "Mute Sound Effects" : "Enable Sound Effects"}
                aria-label="Sound Toggle"
              >
                {soundEnabled ? (
                  <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
                ) : (
                  <VolumeX className="w-4 h-4 text-slate-500" />
                )}
                <span className="hidden xl:inline text-[11px] font-medium">
                  {soundEnabled ? "Sound: ON" : "Sound: OFF"}
                </span>
              </button>
            )}

            <a
              href={CREATOR_INFO.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEnabled && playSound("click")}
              className="p-2 rounded-xl bg-red-600/10 border border-red-500/20 text-red-400 hover:text-white hover:bg-red-600 transition-all"
              title="Official YouTube Channel (9.73M Subs)"
            >
              <YoutubeIcon className="w-5 h-5" />
            </a>

            <a
              href="#contact"
              onClick={() => soundEnabled && playSound("click")}
              className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-white transition-all bg-linear-to-r from-red-600 via-rose-600 to-amber-500 rounded-xl hover:opacity-95 shadow-lg shadow-red-600/25 hover:shadow-red-600/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-4 h-4 mr-1.5 text-amber-200" />
              <span>Book Sinu Rox</span>
            </a>
          </div>

          {/* Mobile Menu & Sound Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            {onToggleSound && (
              <button
                onClick={onToggleSound}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300"
                aria-label="Toggle Sound"
              >
                {soundEnabled ? (
                  <Volume2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <VolumeX className="w-4 h-4 text-slate-500" />
                )}
              </button>
            )}

            <a
              href="#contact"
              onClick={() => soundEnabled && playSound("click")}
              className="px-3 py-1.5 text-xs font-bold text-white bg-red-600 rounded-lg shadow-sm"
            >
              Book
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#070a14]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2 mt-3 animate-fadeIn shadow-2xl">
          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium w-fit mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Available for Brand Campaigns & Fests</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleNavClick(link.id)}
              className={`block px-3 py-2 text-sm font-semibold rounded-xl transition-all ${
                activeSection === link.id
                  ? "bg-red-600 text-white font-bold"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col space-y-2">
            <a
              href={CREATOR_INFO.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 text-xs font-bold"
            >
              <YoutubeIcon className="w-4 h-4 text-red-500" />
              <span>Visit YouTube (9.73M Subscribers)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
