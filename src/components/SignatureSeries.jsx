import React from "react";
import { Tv, CheckCircle2, PlayCircle, Flame } from "lucide-react";
import { SIGNATURE_SERIES, CREATOR_INFO } from "../data/portfolioData";
import { playSound } from "../utils/effects";

const SignatureSeries = ({ soundEnabled }) => {
  return (
    <section id="series" className="py-24 relative overflow-hidden bg-[#070b16]">
      {/* Ambient background light */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Tv className="w-3.5 h-3.5" />
            <span>Trademark Creator Franchises</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Signature Content Universes
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            High-retention episodic comedic intellectual properties built over a decade of continuous storytelling.
          </p>
        </div>

        {/* Series Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SIGNATURE_SERIES.map((series, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden bg-[#0d1424] border border-white/10 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-2 shadow-2xl flex flex-col justify-between"
            >
              {/* Media Image banner */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={series.image}
                  alt={series.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0d1424] via-black/40 to-transparent"></div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-amber-500 text-black text-xs font-black uppercase tracking-wider shadow-md">
                    {series.badge}
                  </span>
                </div>

                {/* Bottom stats overlay */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md font-bold text-amber-300 border border-white/10 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    {series.views}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md font-bold text-slate-300 border border-white/10">
                    {series.episodes}
                  </span>
                </div>
              </div>

              {/* Series Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-white group-hover:text-amber-400 transition-colors">
                    {series.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {series.description}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-5 space-y-2">
                    {series.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center text-xs text-slate-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mr-2 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom link to series */}
                <div className="pt-4 border-t border-white/10">
                  <a
                    href={CREATOR_INFO.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundEnabled && playSound("click")}
                    className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-black text-white text-xs font-bold transition-all border border-white/10 hover:border-transparent cursor-pointer"
                  >
                    <PlayCircle className="w-4 h-4" />
                    <span>Watch Series on YouTube</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureSeries;
