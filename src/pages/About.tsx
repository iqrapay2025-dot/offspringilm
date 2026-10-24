import { Link } from 'react-router';
import ScrollReveal from '../components/ScrollReveal';
import aboutImg from '@/assets/images/559181857_813817207709621_3929165494222016148_n.jpeg';

const values = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#C9A227" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 2L3 6v6c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V6l-8-4z"/>
      </svg>
    ),
    title: 'Integrity',
    desc: 'Honesty, transparency, and Islamic ethics in everything we do.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#C9A227" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 10h18M10 2v18M10 2l3 3M10 2L7 5M10 20l3-3M10 20l-3-3"/>
      </svg>
    ),
    title: 'Excellence',
    desc: 'Striving for the highest standard in academics and character.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#C9A227" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="8" r="4"/><path d="M3 20c0-4 3.6-7 8-7s8 3 8 7"/>
        <path d="M15 7a4 4 0 010-6M18 17c0-2.5 1.5-4 3-4"/>
      </svg>
    ),
    title: 'Community',
    desc: 'Family-centred partnerships that extend beyond school walls.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#C9A227" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C12 2 7 5.5 7 11a5 5 0 0010 0C17 5.5 12 2 12 2z"/>
        <path d="M12 8v6M10 10l2-2 2 2"/>
      </svg>
    ),
    title: 'Faith',
    desc: 'Rooted in Islamic values, guiding every decision and curriculum.',
  },
];

export default function About() {
  return (
    <div className="pt-0">
      {/* Page hero */}
      <div className="relative bg-forest pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-sprout -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <ScrollReveal>
            <span className="text-xs uppercase tracking-widest font-semibold text-aurum/70 block mb-3">About Us</span>
            <h1 className="text-[clamp(2.2rem,4vw,3.5rem)] font-bold text-white leading-tight max-w-2xl" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              A School Built on Purpose, Guided by Faith
            </h1>
            <p className="text-white/60 text-lg mt-4 max-w-xl leading-relaxed">
              Since 2016, Offsprings Ilm School has been shaping young minds in Ilorin — preparing scholars who excel in both the classroom and in character.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Story section */}
      <section className="bg-parchment py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal direction="left">
              <div className="relative rounded-[20px] overflow-hidden aspect-[4/3]">
                <img
                  src={aboutImg}
                  alt="Teacher standing in front of a group of students"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-forest/30 to-transparent" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <span className="text-xs uppercase tracking-widest font-semibold text-forest/50 block mb-4">Our Story</span>
              <h2 className="text-[clamp(1.7rem,2.8vw,2.4rem)] font-bold text-ink mb-5 leading-tight" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                From a Vision to a Thriving Institution
              </h2>
              <p className="text-ink/65 text-[15px] leading-relaxed mb-4">
                Offsprings Ilm School was founded in 2016 in the heart of Tanke, Ilorin — born from a conviction that Nigerian Muslim families deserved a school that honoured both rigorous academics and the moral formation Islam demands.
              </p>
              <p className="text-ink/65 text-[15px] leading-relaxed mb-6">
                Today, we serve learners from Nursery through Secondary, offering a fully integrated curriculum where every WAEC subject and every Quranic verse is held with equal seriousness.
              </p>
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-3xl font-bold text-forest" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>2016</div>
                  <div className="text-xs text-ink/50 font-medium">Year Founded</div>
                </div>
                <div className="w-px h-10 bg-bark" />
                <div>
                  <div className="text-3xl font-bold text-forest" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>3</div>
                  <div className="text-xs text-ink/50 font-medium">School Levels</div>
                </div>
                <div className="w-px h-10 bg-bark" />
                <div>
                  <div className="text-3xl font-bold text-forest" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Ilorin</div>
                  <div className="text-xs text-ink/50 font-medium">Kwara State</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-[clamp(1.7rem,2.8vw,2.4rem)] font-bold text-ink" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              Our Core Values
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 90} className="card-hover">
                <div className="bg-parchment rounded-[18px] p-7 h-full">
                  <div className="w-11 h-11 rounded-full bg-forest flex items-center justify-center mb-4">
                    {v.icon}
                  </div>
                  <h3 className="font-bold text-forest text-[15px] mb-2" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>{v.title}</h3>
                  <p className="text-ink/60 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission statement */}
      <section className="bg-forest py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <ScrollReveal>
            <svg className="mx-auto mb-6 text-aurum" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <path d="M16 3C16 3 6 8 6 17a10 10 0 0020 0C26 8 16 3 16 3z" fill="#C9A227" opacity="0.2"/>
              <path d="M16 3C16 3 6 8 6 17a10 10 0 0020 0C26 8 16 3 16 3z" stroke="#C9A227" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 11v8M13 14l3-3 3 3" stroke="#C9A227" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <blockquote className="text-[clamp(1.3rem,2.5vw,1.8rem)] font-bold text-white leading-snug italic mb-5" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              "To raise scholars who are rooted in faith, rigorous in learning, and ready for the world."
            </blockquote>
            <p className="text-white/50 text-sm">— Offsprings Ilm School Mission Statement</p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-parchment py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-ink mb-4" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              Join Our Community
            </h3>
            <p className="text-ink/55 mb-6 text-[15px]">Ready to give your child a guided beginning?</p>
            <Link to="/admissions" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-forest text-white font-semibold
              text-[15px] hover:bg-forest-hover transition-colors duration-200">
              Start Admissions
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
