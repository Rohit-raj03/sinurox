import React from "react";
import {
  ArrowUp,
  ShieldCheck,
} from "lucide-react";
import { YoutubeIcon, InstagramIcon, FacebookIcon, SnapchatIcon, WhatsAppIcon } from "./Icons";
import { CREATOR_INFO } from "../data/portfolioData";
import { playSound } from "../utils/effects";

const CURRENT_YEAR = new Date().getFullYear();

const Footer = ({ soundEnabled }) => {
  const scrollToTop = () => {
    if (soundEnabled) playSound("click");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#030509] border-t border-white/10 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-red-600 to-amber-500 flex items-center justify-center font-black text-white text-lg shadow-lg">
                SR
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">
                  SINU ROX
                </span>
                <span className="block text-xs text-slate-400">
                  Comedian • Actor • Digital Superstar
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Official digital portfolio of Sinu Rox. Transforming Indian
              classroom memories, student banter, and regional humor into 3+
              Billion viral impressions.
            </p>

            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>Verified Creator • 9.73M+ YouTube Family</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" onClick={() => soundEnabled && playSound("click")} className="hover:text-white transition-colors">
                  About & Journey
                </a>
              </li>
              <li>
                <a href="#stats" onClick={() => soundEnabled && playSound("click")} className="hover:text-white transition-colors">
                  Live Reach & Metrics
                </a>
              </li>
              <li>
                <a href="#works" onClick={() => soundEnabled && playSound("click")} className="hover:text-white transition-colors">
                  Viral Masterpieces
                </a>
              </li>
              <li>
                <a href="#series" onClick={() => soundEnabled && playSound("click")} className="hover:text-white transition-colors">
                  Signature Series
                </a>
              </li>
              <li>
                <a href="#sponsorships" onClick={() => soundEnabled && playSound("click")} className="hover:text-white transition-colors">
                  Brand Sponsorships
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => soundEnabled && playSound("click")} className="hover:text-white transition-colors">
                  Booking & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Channels */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Official Channels
            </p>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={CREATOR_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEnabled && playSound("click")}
                className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-red-600 hover:text-white border border-white/10 text-xs font-bold text-slate-300 transition-all cursor-pointer"
              >
                <YoutubeIcon className="w-4 h-4" />
                <span>YouTube (9.73M)</span>
              </a>

              <a
                href={CREATOR_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEnabled && playSound("click")}
                className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-pink-600 hover:text-white border border-white/10 text-xs font-bold text-slate-300 transition-all cursor-pointer"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram (465K)</span>
              </a>

              <a
                href={CREATOR_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEnabled && playSound("click")}
                className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-blue-600 hover:text-white border border-white/10 text-xs font-bold text-slate-300 transition-all cursor-pointer"
              >
                <FacebookIcon className="w-4 h-4" />
                <span>Facebook (1.4M)</span>
              </a>

              <a
                href={CREATOR_INFO.snapchatUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEnabled && playSound("click")}
                className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-black border border-white/10 text-xs font-bold text-slate-300 transition-all cursor-pointer"
              >
                <SnapchatIcon className="w-4 h-4" />
                <span>Snapchat</span>
              </a>

              <a
                href={CREATOR_INFO.whatsappChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEnabled && playSound("click")}
                className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-emerald-600 hover:text-white border border-white/10 text-xs font-bold text-slate-300 transition-all cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Channel</span>
              </a>
            </div>

            <div className="pt-2">
              <p className="text-xs text-slate-500">
                Direct Management:{" "}
                <a
                  href={`mailto:${CREATOR_INFO.email}`}
                  className="text-slate-300 hover:text-white underline"
                >
                  {CREATOR_INFO.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {CURRENT_YEAR} Sinu Rox. All Rights Reserved. Built with pride from Hajipur to the World.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-all cursor-pointer group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
