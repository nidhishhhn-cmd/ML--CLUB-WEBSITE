import React, { useState } from 'react';

interface Founder {
  name: string;
  role: string;
  initial: string;
  photo: string;
  github?: string;
  linkedin?: string;
}

const FOUNDERS: Founder[] = [
  {
    name: 'Nidhish',
    role: 'Club Manager',
    initial: 'N',
    photo: '/team/nidhish.jpg',
    github: 'https://github.com/nidhishhhn-cmd',
    linkedin: '#',
  },
  {
    name: 'Anaf Ismail',
    role: 'Co-Founder',
    initial: 'IA',
    photo: '/team/ismail.jpg',
    github: '#',
    linkedin: '#',
  },
  {
    name: 'Puneetha',
    role: 'Co-Founder',
    initial: 'P',
    photo: '/team/puneetha.jpg',
    github: '#',
    linkedin: '#',
  },
  {
    name: 'Shanushkha',
    role: 'Co-Founder',
    initial: 'S',
    photo: '/team/shanushkha.jpg',
    github: '#',
    linkedin: '#',
  },
  {
    name: 'Shriparna',
    role: 'Co-Founder',
    initial: 'Sh',
    photo: '/team/shriparna.jpg',
    github: '#',
    linkedin: '#',
  },
  {
    name: 'Shreya',
    role: 'Co-Founder',
    initial: 'Sh',
    photo: '/team/shreya.jpg',
    github: '#',
    linkedin: '#',
  },
  {
    name: 'Rahil',
    role: 'Co-Founder',
    initial: 'R',
    photo: '/team/rahil.jpg',
    github: '#',
    linkedin: '#',
  },
];

function TeamMemberCard({ member }: { member: Founder }) {
  const [imgError, setImgError] = useState(false);
  const isManager = member.role.toLowerCase().includes('manager') || member.role.toLowerCase().includes('lead');

  return (
    <div
      className={`w-full max-w-[260px] liquid-glass rounded-2xl p-7 flex flex-col items-center
                 text-center gap-4 transition-all duration-300 hover:-translate-y-2
                 hover:bg-white/[0.04] hover:shadow-2xl cursor-default ${
                   isManager ? 'border border-white/20' : ''
                 }`}
    >
      {/* Photo Frame */}
      <div className="relative w-28 h-28 rounded-full p-[3px] bg-gradient-to-br from-white/30 to-white/5 shadow-xl transition-transform duration-300 group-hover:scale-105">
        <div className="w-full h-full rounded-full overflow-hidden bg-white/[0.03] flex items-center justify-center">
          {!imgError ? (
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center text-foreground text-2xl font-normal bg-gradient-to-br from-white/10 to-transparent"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {member.initial}
            </div>
          )}
        </div>
      </div>

      {/* Name & Role */}
      <div>
        <p
          className="text-foreground font-normal text-xl tracking-tight leading-tight"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {member.name}
        </p>
        <span
          className={`inline-block text-[0.7rem] mt-2 px-3 py-0.5 rounded-full tracking-wider uppercase ${
            isManager
              ? 'bg-white/10 text-white border border-white/20'
              : 'bg-white/[0.03] text-muted-foreground border border-white/[0.07]'
          }`}
        >
          {member.role}
        </span>
      </div>

      {/* Social Badges */}
      <div className="flex items-center gap-3 mt-1 opacity-60 hover:opacity-100 transition-opacity">
        {member.github && (
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-white transition-colors p-1"
            title="GitHub"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
            </svg>
          </a>
        )}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-white transition-colors p-1"
            title="LinkedIn"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0-.02-3.28 1.64 1.64 0 0 0 .02 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section
      id="team"
      className="relative z-10 w-full py-28 px-6 border-t border-white/[0.08]"
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
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {FOUNDERS.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
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
