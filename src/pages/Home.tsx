import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router';
import ScrollReveal from '../components/ScrollReveal';
import slide1 from '@/assets/images/487385044_1130437018882512_1531775478887903090_n.jpg';
import slide2 from '@/assets/images/488601137_1132076785385202_6373178735228579181_n.jpg';
import slide3 from '@/assets/images/523480641_1220542599871953_8663890231926990124_n.jpg';
import slide4 from '@/assets/images/523496786_1065479392334648_8992094653550319402_n.jpeg';
import homeImg1 from '@/assets/images/527063589_1227631009163112_4611810313079309974_n.jpg';
import homeImg2 from '@/assets/images/528608305_1229064382353108_536341932731661442_n.jpeg';

/* ─── Hero Carousel ────────────────────────────────────────────────── */
const carouselSlides = [
  {
    url: slide1,
    alt: 'Offsprings Ilm School students in class',
  },
  {
    url: slide2,
    alt: 'Offsprings Ilm School learning activity',
  },
  {
    url: slide3,
    alt: 'Offsprings Ilm School students at assembly',
  },
  {
    url: slide4,
    alt: 'Offsprings Ilm School courtyard and community',
  },
];

function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent(c => (c + 1) % carouselSlides.length), []);
  const prev = () => setCurrent(c => (c - 1 + carouselSlides.length) % carouselSlides.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section
      className="relative w-full min-h-screen flex flex-col"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Hero carousel"
    >
      {/* Slides */}
      <div className="absolute inset-0 overflow-hidden">
        {carouselSlides.map((slide, i) => (
          <div key={i} className={`carousel-slide ${i === current ? 'active' : ''}`}>
            <img
              src={slide.url}
              alt={slide.alt}
              className="w-full h-full object-cover object-center"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest/90 via-forest/65 to-ink/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/75 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sprout text-white text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
              Admissions Open — 2026/2027 Session
            </span>

            {/* Headline */}
            <h1
              className="text-[clamp(2.4rem,5.5vw,4.2rem)] font-bold text-white leading-[1.1] tracking-tight mb-5"
              style={{ fontFamily: 'Fraunces, Georgia, serif' }}
            >
              A Guided Beginning<br/>
              <span className="italic text-aurum">for Tomorrow's Leaders</span>
            </h1>

            {/* Subhead */}
            <p className="text-white/80 text-lg leading-relaxed max-w-xl mb-8">
              Offsprings Ilm School blends rigorous Western academics with Islamic values and character-building — nurturing scholars who are locally grounded and globally ready.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sprout text-white font-semibold
                  text-[15px] transition-all duration-200 hover:bg-sprout-dark hover:scale-[1.03] shadow-lg"
              >
                Book a School Tour
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                to="/admissions#fees"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-white/50 text-white
                  font-semibold text-[15px] transition-all duration-200 hover:border-aurum hover:text-aurum"
              >
                View Fee Schedule
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stat strip */}
      <div className="relative z-10 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Est.', value: '2016' },
              { label: 'Levels', value: 'Nursery – Secondary' },
              { label: 'Location', value: 'Ilorin, Kwara State' },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-5 py-3">
                <span className="text-aurum text-[11px] uppercase tracking-widest font-medium">{label}</span>
                <span className="w-px h-4 bg-white/25" />
                <span className="text-white font-semibold text-sm">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel side controls */}
      <div className="absolute right-8 bottom-1/2 translate-y-1/2 z-20 flex-col gap-3 hidden md:flex">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="w-10 h-10 rounded-full border border-white/30 bg-white/10 text-white
            flex items-center justify-center hover:bg-sprout hover:border-sprout transition-all duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="w-10 h-10 rounded-full border border-white/30 bg-white/10 text-white
            flex items-center justify-center hover:bg-sprout hover:border-sprout transition-all duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {carouselSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current ? 'w-7 h-2 bg-aurum' : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

/* ─── Icon Badge ───────────────────────────────────────────────────── */
function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-11 h-11 rounded-full bg-aurum flex items-center justify-center shrink-0 text-forest">
      {children}
    </div>
  );
}

/* ─── Who We Are ───────────────────────────────────────────────────── */
function WhoWeAreSection() {
  return (
    <section className="bg-parchment py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal className="mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-forest/50">Who We Are</span>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1 – Text */}
          <ScrollReveal delay={0} className="card-hover">
            <div className="bg-white rounded-[18px] p-8 h-full shadow-[0_4px_24px_rgba(0,0,0,0.06)] flex flex-col">
              <span className="inline-block w-8 h-[3px] bg-sprout mb-5 rounded-full" />
              <h3 className="text-xl font-bold text-forest mb-3" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                A Dual-Track Model
              </h3>
              <p className="text-ink/65 text-sm leading-relaxed flex-1">
                We seamlessly integrate the standard Nigerian academic curriculum with Islamic teachings, discipline, and Quranic learning — every school day begins with morning supplications (Duas).
              </p>
              <Link to="/curriculum" className="inline-flex items-center gap-1.5 mt-6 text-forest font-semibold text-sm hover:gap-3 transition-all duration-200">
                Our Curriculum
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </ScrollReveal>

          {/* Card 2 – Image */}
          <ScrollReveal delay={120} className="card-hover">
            <div className="relative rounded-[18px] overflow-hidden h-72 md:h-full min-h-64 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
              <img
                src={homeImg1}
                alt="Offsprings Ilm School students engaged in class activity"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/55 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span className="inline-flex items-center gap-2 bg-aurum text-forest text-xs font-bold px-3 py-1.5 rounded-full">
                  Since 2016
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3 – Highlight */}
          <ScrollReveal delay={240} className="card-hover">
            <div className="bg-forest rounded-[18px] p-8 h-full flex flex-col justify-between shadow-[0_4px_24px_rgba(59,26,109,0.22)]">
              <div>
                <span className="inline-flex items-center gap-2 bg-aurum/15 text-aurum text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5">
                  Community Trusted
                </span>
                <h3 className="text-xl font-bold text-white leading-snug mb-3" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                  "Recognized for nurturing both academic excellence and moral values"
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Families across Kwara State trust Offsprings Ilm to lay a foundation that no future challenge can shake.
                </p>
              </div>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-aurum/50 text-aurum text-sm font-semibold
                  hover:bg-aurum hover:text-forest transition-all duration-200 self-start"
              >
                Learn More
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── What We Offer ────────────────────────────────────────────────── */
const programs = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2H8C6.9 2 6 2.9 6 4v1H4a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-2V4a2 2 0 00-2-2zM8 4h4v1H8V4z"/>
        <path d="M9 10l2 2 3-3"/>
      </svg>
    ),
    title: 'Pre-School & Daycare',
    desc: 'Safety, healthy play, sensory growth, and early social development for little ones.',
    link: '/curriculum',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h16M2 7h11M2 11h16M2 15h11"/>
      </svg>
    ),
    title: 'Primary School (1–4+)',
    desc: 'Building strong literacy, numeracy, and early Islamic values alongside Nigerian curriculum.',
    link: '/curriculum',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2L2 6l8 4 8-4-8-4z"/>
        <path d="M2 10l8 4 8-4M2 14l8 4 8-4"/>
      </svg>
    ),
    title: 'Secondary / College',
    desc: 'Preparing scholars for NECO and BECE with rigour, purpose, and global confidence.',
    link: '/college',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C12 2 8 4.5 8 9a4 4 0 008 0C16 4.5 12 2 12 2z"/>
        <path d="M12 7v5M10 9l2-2 2 2"/>
        <path d="M6 18h8M10 14v4"/>
      </svg>
    ),
    title: 'Islamic & Spiritual Formation',
    desc: 'Structured Arabic learning, Quranic study, and daily Duas woven into every school day.',
    link: '/curriculum',
  },
];

function WhatWeOfferSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal className="text-center mb-14">
          <span className="text-xs uppercase tracking-widest font-semibold text-forest/50 block mb-3">Services</span>
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-ink leading-tight" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
            We Champion the Bold<br className="hidden sm:block"/>
            <span className="text-forest"> to Achieve the Extraordinary</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 100} className="card-hover">
              <div className="bg-parchment rounded-[18px] p-7 h-full flex flex-col gap-4 group hover:bg-forest transition-colors duration-300">
                <div className="flex items-start justify-between">
                  <IconBadge>{p.icon}</IconBadge>
                  <Link
                    to={p.link}
                    aria-label={`Learn about ${p.title}`}
                    className="w-8 h-8 rounded-full bg-white/70 group-hover:bg-aurum flex items-center justify-center
                      text-forest transition-colors duration-200"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 11L11 3M5 3h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
                <h3 className="font-bold text-forest group-hover:text-white text-[15px] transition-colors duration-300" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                  {p.title}
                </h3>
                <p className="text-ink/60 group-hover:text-white/70 text-sm leading-relaxed transition-colors duration-300 flex-1">
                  {p.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200} className="text-center mt-10">
          <Link
            to="/curriculum"
            className="inline-flex items-center gap-2 text-forest font-semibold hover:gap-4 transition-all duration-200"
          >
            View Our Full Curriculum
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Philosophy (dark band) ───────────────────────────────────────── */
const pillars = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#C9A227" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="12" y="3" width="7" height="7" rx="1.5"/>
        <rect x="3" y="12" width="7" height="7" rx="1.5"/><rect x="12" y="12" width="7" height="7" rx="1.5"/>
      </svg>
    ),
    title: 'Dual Curriculum',
    desc: 'Western academic rigour alongside Islamic character education — every day, seamlessly.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#C9A227" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="4"/><path d="M11 2v3M11 17v3M2 11h3M17 11h3M4.22 4.22l2.12 2.12M15.66 15.66l2.12 2.12M4.22 17.78l2.12-2.12M15.66 6.34l2.12-2.12"/>
      </svg>
    ),
    title: 'Daily Spiritual Practice',
    desc: 'Mornings begin with Duas and structured Quranic learning — faith before textbooks.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#C9A227" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 2l2.4 4.9L19 8l-3.6 3.5.85 5L11 14l-5.25 2.5.85-5L3 8l5.6-.1L11 2z"/>
      </svg>
    ),
    title: 'Discipline & Values',
    desc: 'Respect, discipline, and global citizenship are at the core of every interaction.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#C9A227" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 11h18M2 6h18M2 16h18"/>
        <circle cx="17" cy="6" r="2.5" fill="#C9A227" stroke="none"/>
      </svg>
    ),
    title: 'Real-World Confidence',
    desc: "Debate, quiz competitions, and public speaking programs building tomorrow's leaders.",
  },
];

const stats = [
  { value: '2016', label: 'Founded' },
  { value: '3', label: 'Levels (Nursery – College)' },
  { value: '₦5,000', label: 'Application Fee' },
  { value: '100%', label: 'Values-Led' },
];

function PhilosophySection() {
  return (
    <section className="bg-forest py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-aurum/60 block mb-3">Our Philosophy</span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.9rem)] font-bold text-white leading-tight" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
            Raising Leaders Who Are Locally Competitive, Globally Relevant
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 80}>
              <div>
                <div className="mb-4">{p.icon}</div>
                <h4 className="text-white font-bold text-[15px] mb-2" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                  {p.title}
                </h4>
                <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats row */}
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-white/10 pt-10 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div
                  className="text-[2.4rem] font-bold text-aurum leading-none mb-1"
                  style={{ fontFamily: 'Fraunces, Georgia, serif' }}
                >
                  {value}
                </div>
                <div className="text-white/50 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Fee Schedule ─────────────────────────────────────────────────── */
const feeTiers = [
  {
    level: 'Nursery',
    total: '₦62,500',
    highlight: false,
    note: 'Per term, base package',
    items: ['Tuition', 'Uniform & Cardigan', 'Sportswear', 'Books', 'Medical & Stationery'],
  },
  {
    level: 'Primary',
    total: '₦64,000',
    highlight: true,
    note: 'Per term, base package',
    items: ['Tuition', 'Uniform & Cardigan', 'Sportswear', 'Books', 'Exam, Medical & Stationery'],
  },
  {
    level: 'Secondary',
    total: '₦75,500',
    highlight: false,
    note: 'Per term, base package',
    items: ['Tuition', 'Uniform & Cardigan', 'Sportswear', 'Books', 'Exam, Medical & Stationery'],
  },
];

function FeeScheduleSection() {
  return (
    <section id="fees" className="bg-parchment py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal className="text-center mb-14">
          <span className="text-xs uppercase tracking-widest font-semibold text-forest/50 block mb-3">Transparent Pricing</span>
          <h2 className="text-[clamp(1.9rem,3vw,2.8rem)] font-bold text-ink mb-3" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
            Transparent Fee Structure
          </h2>
          <p className="text-ink/55 max-w-md mx-auto text-[15px]">
            A clear look at our base fee package across all sections.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          {feeTiers.map((tier, i) => (
            <ScrollReveal key={tier.level} delay={i * 100} className="card-hover">
              <div className={`rounded-[18px] p-8 h-full flex flex-col
                ${tier.highlight
                  ? 'bg-forest text-white shadow-[0_8px_32px_rgba(59,26,109,0.25)] ring-2 ring-aurum'
                  : 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]'
                }`}
              >
                {tier.highlight && (
                  <span className="inline-flex self-start bg-aurum text-forest text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5">
                    Most Popular
                  </span>
                )}
                <h3 className={`text-xl font-bold mb-1 ${tier.highlight ? 'text-white' : 'text-forest'}`} style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                  {tier.level}
                </h3>
                <p className={`text-sm mb-5 ${tier.highlight ? 'text-white/55' : 'text-ink/50'}`}>{tier.note}</p>
                <div className={`text-[2.4rem] font-bold leading-none mb-6 ${tier.highlight ? 'text-aurum' : 'text-forest'}`} style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                  {tier.total}
                </div>
                <ul className="space-y-2 flex-1">
                  {tier.items.map(item => (
                    <li key={item} className="flex items-center gap-2.5 text-sm">
                      <svg className={`shrink-0 ${tier.highlight ? 'text-aurum' : 'text-forest'}`} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <circle cx="7" cy="7" r="6" fill="currentColor" opacity="0.15"/>
                        <path d="M4.5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className={tier.highlight ? 'text-white/75' : 'text-ink/65'}>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/admissions"
                  className={`mt-7 w-full text-center py-3 rounded-full font-semibold text-sm transition-all duration-200
                    ${tier.highlight
                      ? 'bg-sprout text-white hover:bg-sprout-dark'
                      : 'border-2 border-forest text-forest hover:bg-forest hover:text-white'
                    }`}
                >
                  Apply Now
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center">
          <p className="text-ink/45 text-sm max-w-xl mx-auto mb-4">
            Includes tuition, uniform, cardigan, sportswear, books, and exam/medical/stationery fees. Uniform upgrades or textbook bundles may affect seasonal totals.
          </p>
          <Link
            to="/admissions#fees"
            className="inline-flex items-center gap-2 text-forest font-semibold text-sm hover:gap-3 transition-all duration-200"
          >
            Download Full Fee Breakdown
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 2v7M4 7l3 3 3-3M2 12h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Beyond the Classroom ─────────────────────────────────────────── */
const extras = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="8" r="5"/><path d="M6 13l-4 6h16l-4-6"/>
      </svg>
    ),
    title: 'Sports & Physical Education',
    desc: 'Weekly team sports teaching that caring for the body is an amanah (trust from Allah).',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 12h-5l-3 3-3-3H2V4a1 1 0 011-1h13a1 1 0 011 1v8z"/>
        <path d="M7 8h6M7 10.5h4"/>
      </svg>
    ),
    title: 'Public Seminars & Ramadan Lectures',
    desc: 'Communal events fostering parent-student-community dialogue and Islamic scholarship.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7c0 0 2-3 7-3s7 3 7 3v6c0 0-2 3-7 3s-7-3-7-3V7z"/>
        <path d="M10 4v12M3 10h14"/>
      </svg>
    ),
    title: 'Debate & Public Speaking',
    desc: 'Quiz competitions and career orientation programs building real-world confidence.',
  },
];

function BeyondClassroomSection() {
  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <ScrollReveal direction="left" className="relative">
            <div className="relative rounded-[20px] overflow-hidden aspect-[4/3]">
              <img
                src={homeImg2}
                alt="Offsprings Ilm School student learning activity"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-forest/30 to-transparent" />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl px-5 py-4 shadow-xl">
                <div className="text-2xl font-bold text-forest" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>3+</div>
                <div className="text-xs text-ink/60 font-medium">Extracurricular programs</div>
              </div>
            </div>
            {/* Gold accent circle */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-aurum/12 -z-10" />
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <span className="text-xs uppercase tracking-widest font-semibold text-forest/50 block mb-4">Student Life</span>
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold text-ink leading-tight mb-6" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              Beyond the Classroom
            </h2>
            <p className="text-ink/60 text-[15px] leading-relaxed mb-8">
              Education at Offsprings Ilm extends far beyond textbooks. We invest in the whole child — their body, their voice, and their community.
            </p>
            <div className="space-y-6">
              {extras.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 80}>
                  <div className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-forest/8 flex items-center justify-center shrink-0 text-forest
                      group-hover:bg-sprout group-hover:text-white transition-colors duration-200">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-forest text-[15px] mb-1" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                        {item.title}
                      </h4>
                      <p className="text-ink/55 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Admissions CTA Band ──────────────────────────────────────────── */
function AdmissionsCTASection() {
  return (
    <section className="bg-forest py-20 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-aurum/8 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-sprout/8 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 bg-aurum/15 text-aurum text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-aurum inline-block animate-pulse" />
              Admission In Progress
            </span>
            <h2 className="text-[clamp(1.9rem,3.5vw,3rem)] font-bold text-white leading-tight mb-4" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              Entrance Exams Ongoing — Enrol Your Child Today
            </h2>
            <p className="text-white/60 text-[15px] leading-relaxed mb-8 max-w-xl mx-auto">
              Application fee: ₦5,000. JSS1 entrants require an entrance exam. Required documents: leaving certificate/transfer letter, testimonials, and birth certificate/age declaration.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/admissions"
                className="px-8 py-3.5 rounded-full bg-sprout text-white font-semibold text-[15px]
                  transition-all duration-200 hover:bg-sprout-dark hover:scale-[1.03] shadow-lg"
              >
                Apply Now
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-full border-2 border-white/30 text-white font-semibold text-[15px]
                  transition-all duration-200 hover:border-aurum hover:text-aurum"
              >
                Contact Admissions
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Home ─────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
      <WhatWeOfferSection />
      <PhilosophySection />
      <FeeScheduleSection />
      <BeyondClassroomSection />
      <AdmissionsCTASection />
    </>
  );
}
