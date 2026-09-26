import NeuralBackground from './NeuralBackground';

const NAV_LINKS = [
  { label: 'Home', href: '#', active: true },
  { label: 'Modules', href: '#modules', active: false },
  { label: 'Team', href: '#team', active: false },
  { label: 'Projects', href: '#projects', active: false },
  { label: 'Events', href: '#events', active: false },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
      {/* ── Neural canvas background (behind everything) ── */}
      <NeuralBackground />

      {/* ── Video background ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        aria-hidden="true"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
          type="video/mp4"
        />
      </video>

      {/* ── Minimal dark vignette at very edges only (no scrims) ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 140px 0px rgba(0,0,0,0.45)',
        }}
      />

      {/* ── Navigation ── */}
      <nav className="relative z-10 w-full">
        <div className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
          {/* Logo */}
          <a
            href="/"
            className="text-3xl tracking-tight text-foreground select-none"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            ML Club<sup className="text-xs align-super ml-[1px]">®</sup>
          </a>

          {/* Nav links */}
          <ul className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(({ label, href, active }) => (
              <li key={label}>
                <a
                  href={href}
                  className={`text-sm transition-colors duration-200 ${
                    active
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <button
            type="button"
            id="nav-join-cta"
            className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground
                       transition-transform duration-200 hover:scale-[1.03] cursor-pointer"
          >
            Join the Club
          </button>
        </div>
      </nav>

      {/* ── Hero content ── */}
      <div
        className="relative z-10 flex flex-col items-center text-center
                   px-6 py-[90px] flex-1 justify-center"
      >
        {/* Eyebrow tag */}
        <div className="liquid-glass rounded-full px-4 py-1.5 mb-10
                        text-xs tracking-[0.18em] uppercase text-muted-foreground
                        animate-fade-rise">
          Srinivas Institute of Technology
        </div>

        {/* H1 */}
        <h1
          className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl
                     leading-[0.95] max-w-7xl font-normal text-foreground"
          style={{
            fontFamily: "'Instrument Serif', serif",
            letterSpacing: '-2.46px',
          }}
        >
          Where{' '}
          <em className="not-italic text-muted-foreground">ideas</em>{' '}
          learn{' '}
          <em className="not-italic text-muted-foreground">to think.</em>
        </h1>

        {/* Subtext */}
        <p
          className="animate-fade-rise-delay text-muted-foreground text-base
                     sm:text-lg max-w-2xl mt-8 leading-relaxed"
        >
          The Machine Learning Club at Srinivas Institute of Technology.
          We build, break and teach intelligent systems&nbsp;—&nbsp;from
          first notebooks to models that ship.
        </p>

        {/* Hero CTA */}
        <button
          type="button"
          id="hero-begin-journey"
          className="animate-fade-rise-delay-2 liquid-glass rounded-full
                     px-14 py-5 text-base mt-12 text-foreground
                     hover:scale-[1.03] cursor-pointer
                     transition-transform duration-200"
        >
          Begin Journey
        </button>
      </div>
    </section>
  );
}
