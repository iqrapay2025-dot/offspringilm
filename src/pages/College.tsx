import { Link } from 'react-router';
import ScrollReveal from '../components/ScrollReveal';

const examSubjects = [
  'English Language', 'Mathematics', 'Biology', 'Chemistry', 'Physics',
  'Economics', 'Agricultural Science', 'Literature in English',
  'Civic Education', 'Further Mathematics', 'Arabic', 'Islamic Studies',
];

const achievements = [
  { value: 'NECO', label: 'Examination Board' },
  { value: 'BECE', label: 'Junior Certificate' },
  { value: 'JSS1–SS1', label: 'Classes Offered' },
  { value: '100%', label: 'Values Integration' },
];

export default function College() {
  return (
    <div>
      {/* Hero */}
      <div className="relative bg-forest pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-sprout translate-x-1/4 translate-y-1/4" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <ScrollReveal>
            <span className="text-xs uppercase tracking-widest font-semibold text-aurum/70 block mb-3">Secondary College</span>
            <h1 className="text-[clamp(2.2rem,4vw,3.5rem)] font-bold text-white leading-tight max-w-2xl" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              Where Scholars Become Leaders
            </h1>
            <p className="text-white/60 text-lg mt-4 max-w-xl leading-relaxed">
              Our Secondary College programme prepares JSS1–SS1 students for national examinations while grounding them in Islamic values and real-world skills.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-aurum py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold text-forest" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>{value}</div>
                <div className="text-forest/60 text-xs font-medium mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="bg-parchment py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal direction="left">
              <div className="relative rounded-[20px] overflow-hidden aspect-[4/3]">
                <img
                  src="https://scontent.flos3-2.fna.fbcdn.net/v/t1.6435-9/204173451_1266903067058553_1075551530797947883_n.jpg?stp=c0.80.719.719a_dst-jpg_tt6&cstp=mx719x719&ctp=s206x206&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=TF1fKexDe2QQ7kNvwG7gMA8&_nc_oc=AdouPkjAatI_GAQPYqt5Tadaav0R7jYcwCZglQTNxOqvzH2D6FvKz427usxOtEB5p_g&_nc_zt=23&_nc_ht=scontent.flos3-2.fna&_nc_gid=4P-xKWDL4TXlUw4kMEkyLg&_nc_ss=7b289&oh=00_AQKm5my1aG1VsiFsSRIF3-XpDZBtVqJF8aXPGfZUQHIFTw&oe=6AD21897"
                  alt="Offsprings Ilm School secondary college students"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-forest/30 to-transparent" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <span className="text-xs uppercase tracking-widest font-semibold text-forest/50 block mb-4">Programme Overview</span>
              <h2 className="text-[clamp(1.7rem,2.8vw,2.4rem)] font-bold text-ink mb-5" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                Academic Rigor, Islamic Character
              </h2>
              <p className="text-ink/65 text-[15px] leading-relaxed mb-4">
                Our Secondary College runs from Junior Secondary School 1 (JSS1) through Senior Secondary 1 (SS1+), preparing students for the West African Examinations Council (WAEC/NECO) and the Basic Education Certificate Examination (BECE).
              </p>
              <p className="text-ink/65 text-[15px] leading-relaxed mb-6">
                Students benefit from a dual-track model: a full national curriculum delivered by qualified teachers, alongside structured Arabic lessons, Quranic studies, and Islamic ethics woven into every school day.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-forest/8 text-forest text-sm font-medium">JSS1–JSS3 (BECE)</span>
                <span className="px-4 py-2 rounded-full bg-forest/8 text-forest text-sm font-medium">SS1+ (WAEC/NECO)</span>
                <span className="px-4 py-2 rounded-full bg-aurum/15 text-forest text-sm font-medium">Islamic Formation</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-[clamp(1.7rem,2.8vw,2.4rem)] font-bold text-ink" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              Subjects & Examinations
            </h2>
            <p className="text-ink/50 mt-2 text-sm">All subjects listed qualify for national examinations.</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {examSubjects.map((s, i) => (
              <ScrollReveal key={s} delay={i * 40} className="card-hover">
                <div className="bg-parchment rounded-[14px] p-4 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-sprout flex items-center justify-center shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6l2.5 2.5L10 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-ink/70 text-sm font-medium">{s}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Academics */}
      <section className="bg-forest py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-aurum/60 block mb-3">Student Development</span>
            <h2 className="text-[clamp(1.7rem,2.8vw,2.4rem)] font-bold text-white" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              Skills Beyond the Syllabus
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: 'Debate & Public Speaking',
                desc: 'Weekly debate and oratory sessions building articulate, confident communicators.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M8 10.5h8M8 14h5M7 18.5V6.8A1.8 1.8 0 0 1 8.8 5h6.4A1.8 1.8 0 0 1 17 6.8v11.7l-3.8-2.6H8.8A1.8 1.8 0 0 1 7 14.1z" />
                  </svg>
                ),
              },
              {
                title: 'Quiz Competitions',
                desc: 'Inter-school quiz competitions sharpening academic knowledge and quick thinking.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 4.5h10a2 2 0 0 1 2 2V15a2 2 0 0 1-2 2H12l-3 3v-3H7a2 2 0 0 1-2-2V6.5a2 2 0 0 1 2-2z" />
                    <path d="M9 9.5h6M9 12.5h6" />
                  </svg>
                ),
              },
              {
                title: 'Career Orientation',
                desc: 'Exposure to professions, university pathways, and Islamic perspectives on vocation.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 3.5l8 4.5v8L12 20.5l-8-4.5v-8l8-4.5z" />
                    <path d="M12 12l8-4.5M12 12v8.5M12 12L4 7.5" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="bg-forest-hover rounded-[18px] p-7 border border-white/10">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-aurum">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-white text-[15px] mb-2" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>{item.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-parchment py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-ink mb-3" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              Ready to Apply for Secondary College?
            </h3>
            <p className="text-ink/55 mb-6 text-sm">Entrance exams for JSS1 are ongoing. Apply today.</p>
            <Link to="/admissions" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-forest text-white font-semibold
              text-[15px] hover:bg-forest-hover transition-colors duration-200">
              Start Application
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
