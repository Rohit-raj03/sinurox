import React, { useState } from "react";
import { X, Play, Flame, Heart, Clock, Share2, Check } from "lucide-react";
import { YoutubeIcon } from "./Icons";
import { VIRAL_WORKS, CREATOR_INFO } from "../data/portfolioData";
import { playSound } from "../utils/effects";

const VideoModal = ({ videoId, onClose, soundEnabled }) => {
  const [copied, setCopied] = useState(false);
  if (!videoId) return null;

  const video = VIRAL_WORKS.find((v) => v.id === videoId) || VIRAL_WORKS[0];

  const handleShare = () => {
    if (soundEnabled) playSound("click");
    navigator.clipboard.writeText(CREATOR_INFO.youtubeUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClose = () => {
    if (soundEnabled) playSound("click");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={handleClose}></div>

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#0c1222] border border-white/20 rounded-3xl overflow-hidden shadow-2xl z-10">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-black/90 text-white/80 hover:text-white transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Thumbnail Preview Header */}
        <div className="relative aspect-video w-full overflow-hidden bg-black">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0c1222] via-black/40 to-transparent"></div>

          {/* Large Center Play Link to YouTube */}
          <div className="absolute inset-0 flex items-center justify-center">
            <a
              href={CREATOR_INFO.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEnabled && playSound("click")}
              className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl shadow-red-600/60 hover:scale-110 transition-transform cursor-pointer"
            >
              <Play className="w-7 h-7 fill-white ml-1" />
            </a>
          </div>

          {/* View Badge */}
          <div className="absolute top-4 left-4 flex items-center space-x-1.5 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-black shadow-lg">
            <Flame className="w-4 h-4 fill-white" />
            <span>{video.views} Views</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-slate-400 mb-1">
              <span className="px-2 py-0.5 rounded bg-white/10 text-amber-300 uppercase">
                {video.category}
              </span>
              <span>•</span>
              <span className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {video.duration}
              </span>
              <span>•</span>
              <span className="flex items-center text-rose-400">
                <Heart className="w-3 h-3 mr-1 fill-rose-400" />
                {video.likes}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white">
              {video.title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {video.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {video.tags.map((t, i) => (
              <span
                key={i}
                className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300"
              >
                #{t}
              </span>
            ))}
          </div>

          {/* Action Strip */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
            <a
              href={CREATOR_INFO.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEnabled && playSound("click")}
              className="flex-1 py-3 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-lg shadow-red-600/30 transition-all cursor-pointer"
            >
              <YoutubeIcon className="w-4 h-4" />
              <span>Watch Video on YouTube</span>
            </a>

            <button
              onClick={handleShare}
              className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Channel Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  <span>Share Channel</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
