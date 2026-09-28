import React, { useEffect, useState } from 'react';

const STATUSES = [
  'Connecting neural nodes...',
  'Compiling PyTorch models...',
  'Synthesizing intelligence...',
  'Neural Core Online — Welcome',
];

interface IntroLoaderProps {
  onComplete?: () => void;
}

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.25;
    }
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const cur = videoRef.current.currentTime;
      const dur = videoRef.current.duration;
      const pct = Math.min(100, Math.floor((cur / dur) * 100));
      setProgress(pct);

      if (cur >= dur - 0.3) {
        completeIntro();
      }
    }
  };

  const completeIntro = () => {
    if (isCompleted) return;
    setIsCompleted(true);
    setProgress(100);

    setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 950);
    }, 250);
  };

  const getStatusText = () => {
    if (progress < 30) return STATUSES[0];
    if (progress < 65) return STATUSES[1];
    if (progress < 95) return STATUSES[2];
    return STATUSES[3];
  };

  return (
    <div
      className={`fixed inset-0 w-screen h-screen z-[99999] bg-[#02131e] flex flex-col items-center justify-center overflow-hidden transition-all duration-1000 ease-out ${
        isFadingOut ? 'opacity-0 scale-105 filter blur-md pointer-events-none invisible' : 'opacity-100 scale-100'
      }`}
      aria-label="Website Intro"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onEnded={completeIntro}
          className={`w-full h-full object-cover opacity-85 brightness-95 contrast-105 transition-transform duration-1000 ${
            isFadingOut ? 'scale-110' : 'scale-100'
          }`}
          aria-hidden="true"
        >
          <source src="/hero-video.mp4.mp4" type="video/mp4" />
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="hero-video.mp4.mp4" type="video/mp4" />
          <source src="hero-video.mp4" type="video/mp4" />
          <source src="public/hero-video.mp4" type="video/mp4" />
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,20,32,0.3)_0%,rgba(2,20,32,0.85)_75%,rgba(1,10,16,0.98)_100%)] [box-shadow:inset_0_0_160px_0_rgba(0,0,0,0.8)]" />
      </div>

      {/* Intro Center Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[540px] px-6">
        <div className="liquid-glass rounded-full px-4 py-1.5 mb-6 text-xs tracking-[0.2em] uppercase text-white/80 border border-white/15 shadow-[0_0_20px_rgba(0,212,255,0.15)]">
          Srinivas Institute of Technology
        </div>

        <h1
          className="text-5xl sm:text-7xl font-normal text-white mb-3 tracking-[-2px] drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          ML Club<sup className="text-xs align-super ml-[1px]">®</sup>
        </h1>

        <p className="text-sm sm:text-base text-muted-foreground tracking-wide mb-8">
          Initializing Intelligence &amp; Experience...
        </p>

        {/* Progress bar */}
        <div className="w-72 h-1 bg-white/10 rounded-full overflow-hidden relative mb-3 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">
          <div
            className="h-full bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 rounded-full transition-all duration-150 shadow-[0_0_12px_rgba(56,189,248,0.7)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status text & % */}
        <div className="flex justify-between w-72 text-xs text-muted-foreground tracking-wider mb-7">
          <span>{getStatusText()}</span>
          <span>{Math.floor(progress)}%</span>
        </div>

        {/* Enter Button */}
        <button
          type="button"
          onClick={completeIntro}
          className="liquid-glass rounded-full px-8 py-3 text-xs tracking-wider uppercase text-white border border-white/20 hover:border-white/40 hover:bg-white/15 hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
        >
          Enter Website &rarr;
        </button>
      </div>
    </div>
  );
}
