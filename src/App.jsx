import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LiveStats from "./components/LiveStats";
import AboutJourney from "./components/AboutJourney";
import ViralWorks from "./components/ViralWorks";
import SignatureSeries from "./components/SignatureSeries";
import SponsorshipCalculator from "./components/SponsorshipCalculator";
import BookingContact from "./components/BookingContact";
import VideoModal from "./components/VideoModal";
import Footer from "./components/Footer";
import { MessageCircle } from "lucide-react";
import { CREATOR_INFO } from "./data/portfolioData";
import { playSound } from "./utils/effects";

function App() {
  const [activeModalVideoId, setActiveModalVideoId] = useState(null);
  const [selectedCollabPackage, setSelectedCollabPackage] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const handleToggleSound = () => {
    setSoundEnabled((prev) => {
      const next = !prev;
      if (next) playSound("click");
      return next;
    });
  };

  const handleOpenVideo = (videoId) => {
    if (soundEnabled) playSound("click");
    setActiveModalVideoId(videoId);
  };

  const handleCloseVideo = () => {
    if (soundEnabled) playSound("click");
    setActiveModalVideoId(null);
  };

  const handleSelectPackage = (pkgTitle) => {
    if (soundEnabled) playSound("click");
    setSelectedCollabPackage(pkgTitle);
  };

  return (
    <div className="min-h-screen bg-[#05070b] text-slate-100 selection:bg-red-600 selection:text-white font-sans antialiased relative">
      {/* Top Fixed Navbar */}
      <Navbar
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Spotlight */}
        <Hero
          onOpenVideoModal={handleOpenVideo}
          soundEnabled={soundEnabled}
        />

        {/* 2. Live Audience Reach & Milestones */}
        <LiveStats soundEnabled={soundEnabled} />

        {/* 3. About Me & Hajipur to Stardom Journey */}
        <AboutJourney soundEnabled={soundEnabled} />

        {/* 4. Hall of Viral Masterpieces */}
        <ViralWorks
          onSelectVideo={handleOpenVideo}
          soundEnabled={soundEnabled}
        />

        {/* 5. Signature Content Universes */}
        <SignatureSeries soundEnabled={soundEnabled} />

        {/* 6. Brand Sponsorships & ROI Calculator */}
        <SponsorshipCalculator
          onSelectPackage={handleSelectPackage}
          soundEnabled={soundEnabled}
        />

        {/* 7. Direct Booking & Contact Portal */}
        <BookingContact
          key={selectedCollabPackage || "default"}
          preselectedPackage={selectedCollabPackage}
          soundEnabled={soundEnabled}
        />
      </main>

      {/* Footer */}
      <Footer soundEnabled={soundEnabled} />

      {/* Video Preview / Details Modal */}
      {activeModalVideoId && (
        <VideoModal
          videoId={activeModalVideoId}
          onClose={handleCloseVideo}
          soundEnabled={soundEnabled}
        />
      )}

      {/* Floating Action Button: WhatsApp Direct Support */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <a
          href={CREATOR_INFO.whatsappChannelUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => soundEnabled && playSound("click")}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all group"
          title="Direct WhatsApp Community & Booking"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">WhatsApp Channel</span>
        </a>
      </div>
    </div>
  );
}

export default App;
