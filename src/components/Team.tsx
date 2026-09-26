import React from 'react';

const FOUNDERS = [
  {
    name: 'Nidhish',
    role: 'Club Manager',
    initial: 'N',
  },
  {
    name: 'Ismail Anaf',
    role: 'Co-Founder',
    initial: 'IA',
  },
  {
    name: 'Puneetha',
    role: 'Co-Founder',
    initial: 'P',
  },
  {
    name: 'Shanushkha',
    role: 'Co-Founder',
    initial: 'S',
  },
  {
    name: 'Shriparna',
    role: 'Co-Founder',
    initial: 'Sh',
  },
  {
    name: 'Shreya',
    role: 'Co-Founder',
    initial: 'Sh',
  },
  {
    name: 'Rahil',
    role: 'Co-Founder',
    initial: 'R',
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="relative z-10 w-full py-24 px-6 border-t border-white/[0.08]"
    >
      {/* Section header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        {/* Eyebrow */}
        <div
          className="inline-block liquid-glass rounded-full px-5 py-1.5 mb-8
                     text-xs tracking-[0.2em] uppercase text-muted-foreground animate-fade-rise"
        >
          Founding Team
        </div>

        {/* Headline */}
        <h2
          className="animate-fade-rise text-4xl sm:text-5xl md:text-6xl font-normal
                     text-foreground leading-[1.05] mb-6"
          style={{
            fontFamily: "'Instrument Serif', serif",
            letterSpacing: '-2px',
          }}
        >
          The{' '}
          <em className="not-italic text-muted-foreground">people</em>{' '}
          behind the{' '}
          <em className="not-italic text-muted-foreground">mission.</em>
        </h2>

        {/* Tagline */}
        <p
          className="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg
                     max-w-2xl mx-auto leading-relaxed"
        >
          Passionate minds. One mission.{' '}
          <span className="text-foreground font-medium">Infinite learning.</span>
          <br />
          We started this club to make machine learning{' '}
          <span className="text-foreground font-medium">accessible, exciting, and real</span>{' '}
          for every student at SIT.
        </p>
      </div>

      {/* Cards grid */}
      <div
        className="max-w-5xl mx-auto flex flex-wrap justify-center gap-5"
      >
        {FOUNDERS.map((member) => (
          <div
            key={member.name}
            className="w-[190px] liquid-glass rounded-2xl p-7 flex flex-col items-center
                       text-center gap-4 transition-all duration-300 hover:-translate-y-1
                       hover:bg-white/[0.03] cursor-default"
          >
            {/* Avatar */}
            <div
              className="w-14 h-14 rounded-full liquid-glass flex items-center justify-center
                         text-foreground text-xl font-normal border border-white/15
                         shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {member.initial}
            </div>

            {/* Name & Role */}
            <div>
              <p
                className="text-foreground font-normal text-lg tracking-tight"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {member.name}
              </p>
              <p className="text-muted-foreground text-[0.72rem] mt-1 tracking-widest uppercase">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer strip */}
      <div className="mt-20 text-center">
        <p
          className="text-muted-foreground text-xs tracking-[0.18em] uppercase opacity-70"
        >
          Est. 2026 &nbsp;·&nbsp; Srinivas Institute of Technology &nbsp;·&nbsp; ML Club
        </p>
      </div>
    </section>
  );
}
