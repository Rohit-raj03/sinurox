import React, { useState } from "react";
import {
  TrendingUp,
  Users,
  ExternalLink,
  Flame,
  Award,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import {
  YoutubeIcon,
  FacebookIcon,
  InstagramIcon,
  SnapchatIcon,
} from "./Icons";
import { STATS_METRICS, CREATOR_INFO } from "../data/portfolioData";
import { playSound, triggerConfetti } from "../utils/effects";

const iconMap = {
  youtube: YoutubeIcon,
  trendingUp: TrendingUp,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  snapchat: SnapchatIcon,
  users: Users,
};

const LiveStats = ({ soundEnabled }) => {
  const [celebrated, setCelebrated] = useState(false);

  const handleCelebrate = () => {
    if (soundEnabled) playSound("celebrate");
    triggerConfetti();
    setCelebrated(true);
    setTimeout(() => setCelebrated(false), 3000);
  };

  return (
    <section
      id="stats"
      className="py-24 relative overflow-hidden bg-[#070b14]/80 border-y border-white/5 bg-mesh-pattern"
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Audience Scale & Global Reach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Live Audience Reach & Impact
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Consistent viral retention with over 3 Billion lifetime views and a
            fiercely loyal 11.8M+ pan-India family.
          </p>
        </div>

        {/* Milestone Progress Card: Road to Diamond Creator Award */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-linear-to-r from-slate-900/90 via-red-950/40 to-slate-900/90 border border-red-500/30 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Award className="w-56 h-56 text-red-500" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-red-600/30">
                  Historic Milestone
                </span>
                <span className="text-amber-400 font-semibold text-xs sm:text-sm flex items-center">
                  <Award className="w-4 h-4 mr-1 text-amber-400" />
                  YouTube Diamond Play Button Tracker (10,000,000 Subs)
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                9,730,000+ Strong • Just 270K Away from 10 Million!
              </h3>
              <p className="text-slate-300 text-sm max-w-xl leading-relaxed">
                Having earned both the Silver (100K) and Gold (1M) Creator
                Awards, Sinu Rox is in the final lap to receive the
                coveted YouTube Diamond Creator Award.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={handleCelebrate}
                  className="px-4 py-2 rounded-xl bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{celebrated ? "🎊 Celebrating 9.73M!" : "Celebrate Milestone"}</span>
                </button>
                <a
                  href={CREATOR_INFO.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEnabled && playSound("click")}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs flex items-center gap-1.5 border border-white/10 transition-all"
                >
                  <span>Subscribe on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-black/50 p-5 sm:p-6 rounded-2xl border border-white/10 backdrop-blur-xl space-y-4">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-slate-400">Current: 9.73M</span>
                <span className="text-amber-400 font-black text-sm">
                  97.3% Completed
                </span>
              </div>
              {/* Progress bar */}
              <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-white/10 relative">
                <div
                  className="h-full bg-linear-to-r from-red-600 via-rose-500 to-amber-400 rounded-full transition-all duration-1000 shadow-sm"
                  style={{ width: "97.3%" }}
                ></div>
              </div>
              <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                <span>Target: 10,000,000 Subs</span>
                <span className="text-red-400 font-bold">270,000 To Go</span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Grid Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STATS_METRICS.map((metric, idx) => {
            const IconComponent = iconMap[metric.icon] || TrendingUp;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl p-6 sm:p-7 bg-[#0b101e] border border-white/10 hover:border-white/25 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-linear-to-tr ${metric.color} flex items-center justify-center text-white shadow-lg`}
                    >
                      <IconComponent className="w-6 h-6 fill-current" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold text-slate-300">
                      {metric.badge}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                      {metric.platform}
                    </p>
                    <h4 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                      {metric.count}
                    </h4>
                    <p className="text-sm font-semibold text-slate-200 pt-1">
                      {metric.label}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed pt-1">
                      {metric.subLabel}
                    </p>
                  </div>
                </div>

                {metric.link && (
                  <div className="pt-5 mt-5 border-t border-white/5 flex items-center justify-between">
                    <a
                      href={metric.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundEnabled && playSound("click")}
                      className="text-xs font-bold text-slate-300 hover:text-white flex items-center space-x-1.5 transition-colors"
                    >
                      <span>View Official Page</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1 text-slate-400 group-hover:text-red-400" />
                    </a>
                    <span className="text-[11px] text-emerald-400 font-semibold flex items-center">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Verified
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LiveStats;
