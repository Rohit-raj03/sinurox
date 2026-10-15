import React, { useState } from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import {
  Mail,
  MessageCircle,
  Send,
  Sparkles,
  CheckCircle2,
  Copy,
  ExternalLink,
  MapPin,
  Clock,
  ChevronDown,
  HelpCircle,
} from "lucide-react";
import { CREATOR_INFO, FAQ_ITEMS } from "../data/portfolioData";
import { playSound } from "../utils/effects";

const BookingContact = ({ preselectedPackage, soundEnabled }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    collabType: preselectedPackage || "Dedicated Short / Reel Integration",
    budget: "₹2,00,000 - ₹5,00,000",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCopyEmail = () => {
    if (soundEnabled) playSound("click");
    navigator.clipboard.writeText(CREATOR_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (soundEnabled) playSound("celebrate");
    setSubmitted(true);

    const subject = encodeURIComponent(
      `Collab Inquiry: ${formData.collabType} - ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hello Sinu Rox Team,\n\nName / Brand: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCollaboration Type: ${formData.collabType}\nBudget: ${formData.budget}\n\nProject Scope:\n${formData.message}\n\nSent via Official Portfolio`
    );

    window.open(
      `mailto:${CREATOR_INFO.email}?subject=${subject}&body=${body}`,
      "_blank"
    );
  };

  const toggleFaq = (idx) => {
    if (soundEnabled) playSound("click");
    setOpenFaqIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-[#070b16] bg-mesh-pattern"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-120 h-120 bg-red-600/10 rounded-full blur-[160px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Direct Commercial Portal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Book Sinu Rox for Your Next Big Hit
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Have a brand campaign, college fest invitation, or acting proposal?
            Reach out directly to the management team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0b101d] border border-white/10 shadow-2xl space-y-6">
              <h3 className="text-xl font-black text-white flex items-center">
                <Sparkles className="w-5 h-5 text-amber-400 mr-2" />
                <span>Official Booking Details</span>
              </h3>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Official Business Email
                    </p>
                    <p className="text-sm font-bold text-white select-all">
                      {CREATOR_INFO.email}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Copied!
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* WhatsApp Direct Link */}
              <a
                href={CREATOR_INFO.whatsappChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEnabled && playSound("click")}
                className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                      Official WhatsApp Channel
                    </p>
                    <p className="text-sm font-bold text-white">
                      Join Verified Broadcast
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Location & Turnaround */}
              <div className="space-y-3 pt-2 text-xs text-slate-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Headquarters: Hajipur, Bihar & Mumbai, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Average Response Time: Under 24 Business Hours</span>
                </div>
              </div>

              {/* Direct Social Handles */}
              <div className="pt-4 border-t border-white/10 flex items-center space-x-3">
                <a
                  href={CREATOR_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEnabled && playSound("click")}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-slate-200 flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <FaInstagram className="w-4 h-4 text-pink-400" />
                  <span>{CREATOR_INFO.instagramHandle}</span>
                </a>
                <a
                  href={CREATOR_INFO.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEnabled && playSound("click")}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-slate-200 flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <FaYoutube className="w-4 h-4 text-red-500" />
                  <span>{CREATOR_INFO.handle}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#0b101d] border border-white/10 shadow-2xl relative">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    Inquiry Prepared Successfully!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you! An email draft has been generated for{" "}
                    <strong>{CREATOR_INFO.email}</strong>. Our business team
                    will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-black text-white">
                    Send Collaboration Proposal
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Your Name / Brand Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Netflix / Pepsi / College Fest Team"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="brand@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Collaboration Format *
                      </label>
                      <select
                        name="collabType"
                        value={formData.collabType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-red-500 transition-colors cursor-pointer"
                      >
                        <option value="Dedicated Short / Reel Integration">
                          Dedicated Short / Reel Integration
                        </option>
                        <option value="Omnichannel 360° Viral Blast">
                          Omnichannel 360° Viral Blast
                        </option>
                        <option value="College Fest & Live Event">
                          College Fest & Live Event Appearance
                        </option>
                        <option value="Acting / Web Series / Film Role">
                          Acting / Web Series / Film Role
                        </option>
                        <option value="Media / Podcast / Interview">
                          Media / Podcast / Interview
                        </option>
                        <option value="Other Custom Proposal">
                          Other Custom Proposal
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Estimated Campaign Budget *
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-red-500 transition-colors cursor-pointer"
                    >
                      <option value="Under ₹1,00,000">Under ₹1,00,000</option>
                      <option value="₹1,00,000 - ₹3,00,000">
                        ₹1,00,000 - ₹3,00,000
                      </option>
                      <option value="₹3,00,000 - ₹8,00,000">
                        ₹3,00,000 - ₹8,00,000
                      </option>
                      <option value="₹8,00,000+ (Omnichannel / Multi-video)">
                        ₹8,00,000+ (Omnichannel / Multi-video)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Campaign Brief & Deliverable Details *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your brand/event, target dates, creative requirements, and goals..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-linear-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Official Booking Inquiry</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-500">
                    By submitting, your inquiry is securely dispatched directly
                    to Sinu Rox's management desk.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Brand FAQ Accordion Section */}
        <div className="max-w-4xl mx-auto pt-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Frequently Asked Questions</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Brand Partnership & Booking FAQs
            </h3>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#0c1222] border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-white font-bold text-sm sm:text-base hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180 text-amber-400" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingContact;
