import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  Cpu, 
  Eye, 
  Bot, 
  Code, 
  Lock, 
  ShieldCheck, 
  ShieldAlert, 
  KeyRound, 
  ExternalLink, 
  Github, 
  UploadCloud, 
  Trash2, 
  Globe 
} from 'lucide-react';

export default function App() {
  const [hasCoreAccess, setHasCoreAccess] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [passkeyInput, setPasskeyInput] = useState('');
  const [authError, setAuthError] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  // Video background source
  const videoUrl = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanKey = passkeyInput.trim().toLowerCase();
    if (cleanKey === 'sitml2026' || cleanKey === 'mlclub' || cleanKey === 'sit') {
      setHasCoreAccess(true);
      setAuthModalOpen(false);
      setAuthError(false);
      alert("Access Granted! You now have Core Team permissions to upload module photos and publish projects.");
    } else {
      setAuthError(true);
    }
  };

  const requireAuth = (actionFn: () => void) => {
    if (hasCoreAccess) {
      actionFn();
    } else {
      setAuthModalOpen(true);
    }
  };

  return (
    <div className="relative min-h-screen text-foreground bg-[#001726] overflow-x-hidden selection:bg-cyan-500/30 selection:text-white">
      
      {/* Sticky Glassmorphic Navbar with only "ML CLUB" on top-left */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 transition-all">
        <nav className="flex items-center justify-between px-6 sm:px-8 py-3 max-w-7xl mx-auto liquid-glass rounded-full">
          
          {/* Logo strictly "ML CLUB" */}
          <a href="#hero" className="flex items-baseline gap-1 group no-underline">
            <span 
              className="text-2xl sm:text-3xl tracking-tight text-white font-normal hover:text-cyan-300 transition-colors"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              ML CLUB
            </span>
            <sup className="text-xs text-muted-foreground group-hover:text-cyan-400 transition-colors">®</sup>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a href="#hero" className="text-foreground hover:text-cyan-300 transition-colors">Home</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#modules" className="text-muted-foreground hover:text-foreground transition-colors">Modules & Hardware</a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Online Projects</a>
            <a href="#join" className="text-muted-foreground hover:text-foreground transition-colors">Join Club</a>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2.5">
            {/* Auth Badge */}
            <button
              onClick={() => hasCoreAccess ? setHasCoreAccess(false) : setAuthModalOpen(true)}
              className="liquid-glass rounded-full px-3 py-1.5 text-xs flex items-center gap-1.5 cursor-pointer text-muted-foreground hover:text-white"
            >
              <span className={`w-2 h-2 rounded-full ${hasCoreAccess ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <span className="font-mono text-[11px]">{hasCoreAccess ? 'Core Access' : 'Guest'}</span>
              {hasCoreAccess ? <ShieldCheck className="w-3 h-3 text-emerald-400" /> : <Lock className="w-3 h-3 opacity-60" />}
            </button>

            {/* Audio Toggle */}
            <button
              onClick={() => setIsAudioMuted(!isAudioMuted)}
              className="liquid-glass rounded-full p-2.5 text-muted-foreground hover:text-white hover:scale-105 transition-all"
            >
              {isAudioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Add Project Button */}
            <button
              onClick={() => requireAuth(() => setProjectModalOpen(true))}
              className="hidden sm:inline-flex liquid-glass rounded-full px-4 py-2 text-xs text-cyan-300 hover:text-white hover:scale-105 transition-all"
            >
              Add Project
            </button>

            <a
              href="#join"
              className="liquid-glass rounded-full px-5 py-2 text-xs sm:text-sm text-foreground hover:scale-105 transition-all font-medium flex items-center gap-2"
            >
              <span>Begin Journey</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 pb-24 overflow-hidden">
        <video
          autoPlay
          loop
          muted={isAudioMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#001726]/40 pointer-events-none z-0" />

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
          <h1 
            className="text-4xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-6xl font-normal text-foreground"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Where <em className="not-italic text-muted-foreground hover:text-white transition-colors">dreams</em> rise{' '}
            <em className="not-italic text-muted-foreground hover:text-white transition-colors">through the silence.</em>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
            We're designing tools for deep thinkers, bold creators, and quiet rebels. Amid the chaos, we build digital spaces for sharp focus and inspired work at Srinivas Institute of Technology.
          </p>
        </div>
      </section>

      {/* Auth Modal */}
      {authModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
          <div className="w-full max-w-md rounded-3xl p-6 sm:p-8 bg-[#04121e]/90 border border-white/15 backdrop-blur-xl relative">
            <button
              onClick={() => setAuthModalOpen(false)}
              className="absolute top-6 right-6 liquid-glass rounded-full p-2 text-muted-foreground hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-2xl text-white mb-2" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Core Team Verification
            </h3>
            <p className="text-xs text-muted-foreground mb-4">
              Enter the core passkey to unlock photo uploads and project submissions.
            </p>
            <form onSubmit={handleAuthSubmit} className="space-y-4">
              <input
                type="password"
                placeholder="Enter core access passkey..."
                value={passkeyInput}
                onChange={(e) => setPasskeyInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
              />
              {authError && (
                <div className="text-xs text-rose-400">Invalid passkey. Please check with your ML Club lead.</div>
              )}
              <button
                type="submit"
                className="liquid-glass w-full py-3 rounded-full text-white text-sm font-medium hover:scale-105 transition-transform"
              >
                Unlock Access
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
