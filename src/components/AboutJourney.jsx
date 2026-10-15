import React, { useState } from "react";
import {
  Sparkles,
  MapPin,
  Award,
  Quote,
  Flame,
  CheckCircle2,
  Smile,
} from "lucide-react";
import { TIMELINE_MILESTONES, CREATOR_CHARACTERS } from "../data/portfolioData";
import { playSound } from "../utils/effects";

const AboutJourney = ({ soundEnabled }) => {
  const [activeCharId, setActiveCharId] = useState(CREATOR_CHARACTERS[0].id);
  const activeChar = CREATOR_CHARACTERS.find((c) => c.id === activeCharId) || CREATOR_CHARACTERS[0];

  const handleSelectChar = (id) => {
    if (soundEnabled) playSound("click");
    setActiveCharId(id);
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#05070c]">
      {/* Background ambient gradient */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-rose-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Creator Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            The Boy from Hajipur Who Made India Laugh
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            From humble beginnings observing classroom antics in Bihar to
            commanding an empire of over 11.8 Million dedicated followers.
          </p>
        </div>

        {/* 2-Column Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column: Visual Story Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-slate-900 shadow-2xl">
              <div className="aspect-3/4 relative">
                <img
                  src="/images/IMG_9011.PNG"
                  alt="Sinu Rox Portrait"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#05070b] via-transparent to-transparent opacity-85"></div>
              </div>

              {/* Floating Quote Box */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl">
                <Quote className="w-6 h-6 text-amber-400 mb-2 opacity-80" />
                <p className="text-sm italic text-slate-200 leading-relaxed font-serif">
                  "Har backbencher ke dil me ek kahani hoti hai. Maine bas un
                  kahaniyon ko hasi ke rang me dhaal diya."
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-2">
                  <span className="font-bold text-white">— Sinu Rox</span>
                  <span className="text-amber-400 font-semibold">
                    1,160+ Original Sketches
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Stat Pill */}
            <div className="absolute -top-4 -left-3 sm:-left-6 px-4 py-2.5 rounded-2xl bg-[#0b101d] border border-white/15 shadow-xl flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center font-bold">
                <MapPin className="w-4 h-4 text-red-500" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400">
                  Roots & Origin
                </p>
                <p className="text-xs sm:text-sm font-extrabold text-white">
                  Hajipur, Bihar
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                Starting his official YouTube channel on{" "}
                <strong className="text-white font-semibold">December 29, 2016</strong>, Sinu
                Rox began with zero budget and simple phone recordings, fueled only by raw comedic timing and sharp observation of Indian student life.
              </p>
              <p>
                Whether it's the dread of an unannounced math test, secret code words exchanged across the back benches, or chaotic tuition romances, his signature sketches captured the pulse of youth across small towns and metropolitan campuses alike.
              </p>
              <p>
                Today, his flagship series{" "}
                <span className="text-amber-300 font-semibold">"Backbencher Ka Pyar"</span> and{" "}
                <span className="text-red-400 font-semibold">"The Classroom Life"</span> have become cultural milestones, driving hundreds of millions of views per episode.
              </p>
            </div>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-[#0c1222] border border-white/10">
                <Smile className="w-6 h-6 text-amber-400 mb-2" />
                <h4 className="text-sm font-bold text-white">Relatable Comedy</h4>
                <p className="text-xs text-slate-400 mt-1">Ground-level nostalgia that every Indian student instantly connects with.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#0c1222] border border-white/10">
                <Flame className="w-6 h-6 text-red-500 mb-2" />
                <h4 className="text-sm font-bold text-white">Viral Consistency</h4>
                <p className="text-xs text-slate-400 mt-1">Over 1,160 sketches produced with multiple 100M+ view shorts.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#0c1222] border border-white/10">
                <Award className="w-6 h-6 text-emerald-400 mb-2" />
                <h4 className="text-sm font-bold text-white">Family Clean Humor</h4>
                <p className="text-xs text-slate-400 mt-1">Wholesome comedy safe for pan-India family viewing and top brand sponsors.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Character Universe Showcase */}
        <div className="mb-20 p-6 sm:p-10 rounded-3xl bg-linear-to-b from-[#0e1628] to-[#070b14] border border-white/10 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400">
              Interactive Cast & Roles
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
              The Sinu Rox Character Universe
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Click any character to explore Sinu Rox's iconic sketch personas and hilarious catchphrases.
            </p>
          </div>

          {/* Character Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8">
            {CREATOR_CHARACTERS.map((char) => (
              <button
                key={char.id}
                onClick={() => handleSelectChar(char.id)}
                className={`p-3 rounded-2xl border transition-all text-left flex items-center gap-3 cursor-pointer ${
                  activeCharId === char.id
                    ? "bg-red-600/20 border-red-500 text-white shadow-lg shadow-red-500/20"
                    : "bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
                }`}
              >
                <img
                  src={char.avatar}
                  alt={char.name}
                  className="w-10 h-10 rounded-xl object-cover"
                />
                <div className="overflow-hidden">
                  <div className="font-bold text-xs truncate text-white">{char.name}</div>
                  <div className="text-[10px] text-amber-300 truncate">{char.role}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Character Detail Card */}
          <div className="p-6 rounded-2xl bg-black/40 border border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 flex items-center gap-4">
              <img
                src={activeChar.avatar}
                alt={activeChar.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border border-white/20 shadow-xl"
              />
              <div>
                <h4 className="text-lg font-black text-white">{activeChar.name}</h4>
                <p className="text-xs font-semibold text-amber-400">{activeChar.role}</p>
                <div className="mt-2 p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-xs italic text-red-300">
                  "{activeChar.catchphrase}"
                </div>
              </div>
            </div>

            <div className="md:col-span-8 space-y-3">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeChar.bio}
              </p>
              {/* Character Trait Meters */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {activeChar.traits.map((trait, tIdx) => (
                  <div key={tIdx} className="space-y-1">
                    <div className="flex justify-between text-[11px] font-semibold text-slate-300">
                      <span>{trait.name}</span>
                      <span className="text-amber-400">{trait.val}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-red-500 to-amber-400 rounded-full"
                        style={{ width: `${trait.val}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="relative">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-black text-white">Journey Highlights</h3>
            <p className="text-xs text-slate-400 mt-1">From December 2016 to the 10M Diamond Milestone</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIMELINE_MILESTONES.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#090e1a] border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between space-y-4 hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-extrabold text-red-500 uppercase">
                      {m.year}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 text-[10px] font-bold border border-amber-500/20">
                      {m.badge}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white">{m.title}</h4>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {m.description}
                  </p>
                </div>
                <div className="flex items-center text-[11px] text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                  <span>Verified History</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutJourney;
