import React, { useState } from "react";
import {
  Briefcase,
  Check,
  ArrowRight,
  Calculator,
  CheckCircle2,
} from "lucide-react";
import { BRAND_COLLAB_PACKAGES } from "../data/portfolioData";
import { playSound } from "../utils/effects";

const SponsorshipCalculator = ({ onSelectPackage, soundEnabled }) => {
  const [selectedPkgIndex, setSelectedPkgIndex] = useState(0);
  const [sliderViews, setSliderViews] = useState(3.5); // millions

  const handleChoosePackage = (pkgTitle) => {
    if (soundEnabled) playSound("click");
    if (onSelectPackage) {
      onSelectPackage(pkgTitle);
    }
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const calculateImpressions = () => {
    return (sliderViews * 1.5).toFixed(1);
  };

  return (
    <section id="sponsorships" className="py-24 relative overflow-hidden bg-[#050811] border-y border-white/5 bg-mesh-pattern">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Brand Collaborations & Sponsorships</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Connect Your Brand with 11.8M+ Youth
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            High-converting organic comedy integrations tailored for leading FMCG, gaming, fintech, education, and consumer brands.
          </p>
        </div>

        {/* Dynamic Interactive Campaign Estimator Tool */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-linear-to-r from-[#0c1428] via-[#091020] to-[#0c1428] border border-blue-500/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-amber-400" />
                <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400">
                  Interactive Campaign ROI Estimator
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Simulate Your Campaign Exposure
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Adjust your desired audience reach to view projected cross-platform impressions and engagement metrics.
              </p>

              {/* Slider */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-400">Target Organic Views</span>
                  <span className="text-amber-400 font-extrabold text-sm">{sliderViews}M Views</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="0.5"
                  value={sliderViews}
                  onChange={(e) => setSliderViews(parseFloat(e.target.value))}
                  className="w-full accent-red-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>1M (Niche Target)</span>
                  <span>7.5M (Average Sketch)</span>
                  <span>15M+ (Mega Viral)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-black/60 p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="text-xs uppercase font-bold text-slate-400">Projected Performance</div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-slate-400 font-medium">Est. Impressions</div>
                  <div className="text-xl font-black text-white mt-0.5">~{calculateImpressions()}M+</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-slate-400 font-medium">Avg. Engagement</div>
                  <div className="text-xl font-black text-emerald-400 mt-0.5">8.6% - 11.2%</div>
                </div>
              </div>

              <div className="text-xs text-slate-300 space-y-1.5 pt-1">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Permanent video placement with no expiry</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Pinned comment link + dedicated CTA</span>
                </div>
              </div>

              <button
                onClick={() => handleChoosePackage(BRAND_COLLAB_PACKAGES[0].title)}
                className="w-full py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition-all cursor-pointer"
              >
                <span>Inquire for This Scale</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Core Collaboration Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {BRAND_COLLAB_PACKAGES.map((pkg, idx) => (
            <div
              key={pkg.id}
              onClick={() => {
                if (soundEnabled) playSound("click");
                setSelectedPkgIndex(idx);
              }}
              className={`cursor-pointer rounded-3xl p-6 sm:p-8 transition-all duration-300 relative flex flex-col justify-between ${
                selectedPkgIndex === idx
                  ? "bg-[#0f172a] border-2 border-red-500 shadow-2xl shadow-red-500/20 scale-[1.02]"
                  : "bg-[#0b101d] border border-white/10 hover:border-white/20"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 right-6">
                  <span className="px-3.5 py-1 rounded-full bg-linear-to-r from-red-600 to-rose-600 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Campaign Tier {idx + 1}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                  {pkg.title}
                </h3>
                <p className="text-xs text-amber-400 font-semibold mb-4">
                  Best for: {pkg.bestFor}
                </p>

                {/* Estimated Impact Pill */}
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 mb-6">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Est. Reach:</span>
                    <span className="font-extrabold text-white text-sm">
                      {pkg.estimatedReach}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs mt-1">
                    <span className="text-slate-400">Duration:</span>
                    <span className="font-semibold text-slate-200">
                      {pkg.duration}
                    </span>
                  </div>
                </div>

                {/* Platforms supported */}
                <div className="mb-6">
                  <p className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-2">
                    Syndication Channels:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {pkg.platforms.map((p, pIdx) => (
                      <span
                        key={pIdx}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-medium text-slate-300"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deliverables checklist */}
                <div className="space-y-2.5 mb-8">
                  <p className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
                    Deliverables Included:
                  </p>
                  {pkg.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-red-600/20 text-red-400 flex items-center justify-center mr-2 shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleChoosePackage(pkg.title);
                }}
                className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                  selectedPkgIndex === idx
                    ? "bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/30"
                    : "bg-white/10 hover:bg-white/15 text-slate-200"
                }`}
              >
                <span>Select & Inquire</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorshipCalculator;
