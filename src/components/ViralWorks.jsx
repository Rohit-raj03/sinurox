import React, { useState, useMemo } from "react";
import {
  Play,
  Flame,
  Heart,
  Clock,
  Search,
  SlidersHorizontal,
  ExternalLink,
} from "lucide-react";
import { VIRAL_WORKS } from "../data/portfolioData";
import { playSound } from "../utils/effects";

const categories = [
  { id: "all", label: "All Masterpieces" },
  { id: "Shorts", label: "100M+ Shorts" },
  { id: "Classroom", label: "Classroom & Backbencher" },
  { id: "Festivals", label: "Festival Specials" },
  { id: "Sketches", label: "Relatable Sketches" },
];

const ViralWorks = ({ onSelectVideo, soundEnabled }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("views"); // 'views' | 'likes'

  const filteredAndSortedWorks = useMemo(() => {
    let result = [...VIRAL_WORKS];

    if (activeFilter !== "all") {
      result = result.filter((w) => w.category === activeFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (w) =>
          w.title.toLowerCase().includes(q) ||
          w.description.toLowerCase().includes(q) ||
          w.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (sortBy === "views") {
      result.sort((a, b) => {
        const aNum = parseFloat(a.views) || 0;
        const bNum = parseFloat(b.views) || 0;
        return bNum - aNum;
      });
    }

    return result;
  }, [activeFilter, searchQuery, sortBy]);

  const handleFilterClick = (catId) => {
    if (soundEnabled) playSound("click");
    setActiveFilter(catId);
  };

  const handleVideoCardClick = (id) => {
    if (soundEnabled) playSound("click");
    if (onSelectVideo) onSelectVideo(id);
  };

  return (
    <section id="works" className="py-24 relative overflow-hidden bg-[#060a14]/90 border-t border-white/5 bg-mesh-pattern">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>Proven Virality</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Hall of Viral Masterpieces
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            A curated showcase of record-breaking sketches that took social media by storm.
          </p>
        </div>

        {/* Filter Bar & Search Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-black/40 p-3 sm:p-4 rounded-3xl border border-white/10 backdrop-blur-md">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleFilterClick(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === cat.id
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/30 scale-102"
                    : "bg-white/5 text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="flex items-center gap-2.5 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search comedy sketches..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-900/90 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
              />
            </div>

            <div className="flex items-center gap-1.5 bg-slate-900/90 border border-white/10 rounded-xl px-2.5 py-2 text-xs text-slate-300">
              <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-xs text-white focus:outline-none cursor-pointer"
              >
                <option value="views" className="bg-slate-900">Highest Views</option>
                <option value="default" className="bg-slate-900">Featured</option>
              </select>
            </div>
          </div>
        </div>

        {/* Video Cards Grid */}
        {filteredAndSortedWorks.length === 0 ? (
          <div className="text-center py-16 bg-white/5 rounded-3xl border border-white/10">
            <p className="text-slate-400 text-sm">No sketches found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(""); setActiveFilter("all"); }}
              className="mt-3 px-4 py-2 bg-red-600 text-white text-xs font-bold rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredAndSortedWorks.map((work) => (
              <div
                key={work.id}
                onClick={() => handleVideoCardClick(work.id)}
                className="group relative rounded-3xl overflow-hidden bg-[#0c1222] border border-white/10 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-2 shadow-xl flex flex-col justify-between cursor-pointer"
              >
                {/* Media Preview Box */}
                <div className="relative aspect-[9/12] w-full overflow-hidden bg-black">
                  <img
                    src={work.thumbnail}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient vignette */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#0c1222] via-black/30 to-transparent"></div>

                  {/* Top View Badge */}
                  <div className="absolute top-3 left-3 z-10 flex items-center space-x-1.5 px-3 py-1 rounded-full bg-red-600/90 text-white text-xs font-black shadow-md backdrop-blur-sm">
                    <Flame className="w-3.5 h-3.5 fill-white" />
                    <span>{work.views}</span>
                  </div>

                  {/* Top Right Duration */}
                  <div className="absolute top-3 right-3 z-10 flex items-center space-x-1 px-2.5 py-1 rounded-full bg-black/75 text-slate-300 text-[11px] font-semibold backdrop-blur-sm">
                    <Clock className="w-3 h-3" />
                    <span>{work.duration}</span>
                  </div>

                  {/* Center Play Button Overlay on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-2xl shadow-red-600/60 group-hover:scale-115 transition-transform">
                      <Play className="w-6 h-6 fill-white ml-1" />
                    </div>
                  </div>

                  {/* Bottom title preview */}
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                      {work.category}
                    </span>
                    <h3 className="text-sm font-extrabold text-white mt-1 line-clamp-1 group-hover:text-red-400 transition-colors">
                      {work.title}
                    </h3>
                  </div>
                </div>

                {/* Card Meta Footer */}
                <div className="p-4 bg-[#0a0f1d] border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center space-x-1 text-rose-400 font-bold">
                    <Heart className="w-3.5 h-3.5 fill-rose-500" />
                    <span>{work.likes} Likes</span>
                  </div>
                  <span className="text-[11px] text-slate-400 hover:text-white font-medium flex items-center gap-1">
                    <span>Watch Details</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ViralWorks;
