import React, { useState } from "react";
import {
  Play,
  Sparkles,
  ArrowRight,
  Award,
  Flame,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { CREATOR_INFO, GALLERY_IMAGES } from "../data/portfolioData";
import { playSound, triggerConfetti } from "../utils/effects";

const Hero = ({ onOpenVideoModal, soundEnabled }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeImage = GALLERY_IMAGES[activeImageIndex];

  const handlePushTo10M = (e) => {
    e.preventDefault();
    if (soundEnabled) playSound("celebrate");
    triggerConfetti();
    setTimeout(() => {
      window.open(CREATOR_INFO.youtubeUrl, "_blank");
    }, 400);
  };

  const handleSelectImage = (idx) => {
    if (soundEnabled) playSound("click");
    setActiveImageIndex(idx);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-mesh-pattern">
      {/* Dynamic Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-160 h-160 bg-red-600/15 rounded-full blur-[150px] pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute top-1/3 -right-20 w-120 h-120 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute -bottom-10 -left-20 w-130 h-130 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs sm:text-sm font-semibold tracking-wide shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping mr-1"></span>
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>11.8M+ Unified Community • Comedian & Actor</span>
            </div>

            {/* Main Punchy Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.08]">
              Crafting Laughter That Resonates Across{" "}
              <span className="bg-linear-to-r from-red-500 via-rose-500 to-amber-400 bg-clip-text text-transparent underline decoration-red-500/30 decoration-wavy decoration-2">
                3 Billion+
              </span>{" "}
              Views.
            </h1>

            {/* Subheading / Bio */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Welcome to the official digital portfolio of{" "}
              <strong className="text-white font-semibold">Sinu Rox</strong>.
              Born in Hajipur (Bihar), defining relatable classroom nostalgia,
              the iconic{" "}
              <span className="text-amber-300 font-medium">"Backbencher"</span>{" "}
              chronicles, and India's fastest-growing sketch comedy universe.
            </p>

            {/* Platform Quick Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-all">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                <span className="font-extrabold text-white">9.73M+</span>
                <span className="text-slate-400">YouTube</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="font-extrabold text-white">1.4M+</span>
                <span className="text-slate-400">Facebook</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-pink-500/30 transition-all">
                <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                <span className="font-extrabold text-white">465K+</span>
                <span className="text-slate-400">Instagram</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/30 transition-all">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span className="font-extrabold text-white">3.01B+</span>
                <span className="text-slate-400">Lifetime Views</span>
              </div>
            </div>

            {/* CTA Buttons Strip */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <a
                href="#works"
                onClick={() => soundEnabled && playSound("click")}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-linear-to-r from-red-600 via-rose-600 to-red-700 rounded-xl shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore Viral Works</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>

              <a
                href="#contact"
                onClick={() => soundEnabled && playSound("click")}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-bold text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-white/15 rounded-xl backdrop-blur-md transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4 mr-2 text-amber-400" />
                <span>Brand Collabs & Inquiries</span>
              </a>

              <button
                onClick={() => {
                  if (soundEnabled) playSound("click");
                  if (onOpenVideoModal) onOpenVideoModal("v1");
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-2 group-hover:bg-red-600 group-hover:text-white transition-all shadow-md">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch Reel Teaser</span>
              </button>
            </div>

            {/* Trust Micro-Proof & Push to 10M Button */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <div className="flex items-center space-x-2.5 text-xs text-slate-400">
                <div className="flex -space-x-1.5">
                  <span className="w-6 h-6 rounded-full bg-red-600 text-[10px] font-black text-white flex items-center justify-center border border-[#05070b]">
                    YT
                  </span>
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-[10px] font-black text-white flex items-center justify-center border border-[#05070b]">
                    FB
                  </span>
                  <span className="w-6 h-6 rounded-full bg-pink-600 text-[10px] font-black text-white flex items-center justify-center border border-[#05070b]">
                    IG
                  </span>
                </div>
                <span>
                  Verified Creator • Over <strong>1,160+ sketches</strong>
                </span>
              </div>

              {/* Diamond Celebration Action Button */}
              <button
                onClick={handlePushTo10M}
                className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-linear-to-r from-amber-500/20 to-red-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold hover:scale-105 active:scale-95 transition-all cursor-pointer"
                title="Celebrate & Push Sinu Rox to 10M Diamond Play Button!"
              >
                <span>🎉 Push to 10M</span>
                <span className="text-[10px] bg-amber-500 text-black px-1.5 py-0.5 rounded font-black">
                  97.3%
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Card with Photo Selector & Floating Badges */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            {/* Outer Decorative Gradient Rim */}
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              {/* Backlight Glow Behind Image */}
              <div className="absolute -inset-1.5 bg-linear-to-tr from-red-600 via-rose-600 to-amber-500 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-1000 -z-10"></div>

              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-white/15 shadow-2xl">
                <div className="aspect-4/5 sm:aspect-3/4 w-full relative overflow-hidden bg-[#070a12]">
                  <img
                    src={activeImage.url}
                    alt={activeImage.alt}
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#05070b] via-transparent to-transparent opacity-80"></div>

                  {/* Top Creator Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 mr-1.5" />
                      Official Portfolio
                    </span>
                  </div>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <div className="p-3.5 rounded-2xl bg-black/75 backdrop-blur-xl border border-white/10 flex items-center justify-between shadow-lg">
                      <div>
                        <p className="text-white font-extrabold text-sm sm:text-base">
                          {CREATOR_INFO.name}
                        </p>
                        <p className="text-slate-300 text-xs flex items-center gap-1.5 mt-0.5">
                          <span className="text-amber-400 font-semibold">{activeImage.tag}</span>
                          <span>•</span>
                          <span className="text-slate-400">Hajipur, Bihar</span>
                        </p>
                      </div>
                      <a
                        href={CREATOR_INFO.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundEnabled && playSound("click")}
                        className="px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold flex items-center gap-1 shadow-md shadow-red-600/30 transition-all"
                      >
                        <span>Channel</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top-Right Viral Record */}
              <div className="absolute -top-4 -right-2 sm:-right-4 z-20 animate-bounce duration-1000">
                <div className="px-3.5 py-2 rounded-2xl bg-[#0b0f19]/90 backdrop-blur-xl border border-red-500/40 shadow-xl flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-xl bg-red-600 flex items-center justify-center text-white">
                    <Flame className="w-4 h-4 fill-white" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 leading-tight">
                      Viral Peak
                    </p>
                    <p className="text-xs sm:text-sm font-extrabold text-white">
                      167M Views / Short
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom-Left Approaching Diamond Button */}
              <div className="absolute -bottom-5 -left-2 sm:-left-4 z-20">
                <div className="px-3.5 py-2 rounded-2xl bg-[#0b0f19]/90 backdrop-blur-xl border border-amber-500/40 shadow-xl flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-500 flex items-center justify-center text-black font-black">
                    <Award className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-amber-400 leading-tight">
                      YouTube Milestone
                    </p>
                    <p className="text-xs sm:text-sm font-extrabold text-white">
                      9.73M+ Racing to 10M
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail Photo Switcher */}
            <div className="mt-8 flex items-center space-x-2.5 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
              {GALLERY_IMAGES.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => handleSelectImage(idx)}
                  className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? "ring-2 ring-red-500 scale-105 shadow-lg shadow-red-500/40"
                      : "opacity-60 hover:opacity-100"
                  }`}
                  title={img.title}
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                  {activeImageIndex === idx && (
                    <div className="absolute inset-0 bg-red-600/20"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
