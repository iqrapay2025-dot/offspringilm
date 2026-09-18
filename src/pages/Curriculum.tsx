import { useState } from 'react';
import { Link } from 'react-router';
import ScrollReveal from '../components/ScrollReveal';

const levels = [
  {
    id: 'nursery',
    label: 'Pre-School & Daycare',
    age: 'Ages 1–5',
    color: 'bg-aurum/15 text-aurum',
    subjects: [
      'Phonics & Early Literacy',
      'Numeracy & Counting',
      'Arabic Alphabets (Alif Ba Ta)',
      'Quranic Recitation (Juz Amma)',
      'Art & Craft',
      'Music & Movement',
      'Physical Play & Sports',
      'Social & Emotional Learning',
    ],
    desc: 'Our early years programme creates a safe, stimulating environment where young learners discover the joy of curiosity. Every morning begins with group Duas, setting a tone of gratitude and mindfulness.',
  },
  {
    id: 'primary',
    label: 'Primary School',
    age: 'Primary 1–4+',
    color: 'bg-aurum/15 text-forest',
    subjects: [
      'English Language & Composition',
      'Mathematics',
      'Basic Science & Technology',
      'Social Studies',
      'Civic Education',
      'Arabic Language',
      'Islamic Religious Studies',
      'Quranic Memorisation',
      'Physical & Health Education',
      'Creative & Cultural Arts',
    ],
    desc: 'Primary learners build the foundational skills they will carry for life — strong literacy, mathematical reasoning, and a deepening relationship with the Quran and Islamic history.',
  },
  {
    id: 'secondary',
    label: 'Secondary / College',
    age: 'JSS1–SS1+',
    color: 'bg-forest/10 text-forest',
    subjects: [
      'English Language',
      'Mathematics',
      'Further Mathematics',
      'Biology',
      'Chemistry',
      'Physics',
      'Economics',
      'Civic Education',
      'Agricultural Science',
      'Arabic & Islamic Studies',
      'Quranic Studies (Advanced)',
      'Literature in English',
    ],
    desc: 'Our secondary programme prepares students for NECO and BECE examinations while deepening their Islamic formation. Students emerge academically rigorous, articulate, and morally grounded.',
  },
];

export default function Curriculum() {
  const [active, setActive] = useState('nursery');
  const activeLevel = levels.find(l => l.id === active)!;

  return (
    <div>
      {/* Header */}
      <div className="relative bg-forest pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-5">
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-sprout" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <ScrollReveal>
            <span className="text-xs uppercase tracking-widest font-semibold text-aurum/70 block mb-3">Curriculum</span>
            <h1 className="text-[clamp(2.2rem,4vw,3.5rem)] font-bold text-white leading-tight max-w-2xl" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              An Integrated Academic & Islamic Programme
            </h1>
            <p className="text-white/60 text-lg mt-4 max-w-xl leading-relaxed">
              Every subject, every lesson — designed to build excellence in both deen and dunya.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Level switcher */}
      <section className="bg-parchment py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal className="flex flex-wrap gap-3 mb-12">
            {levels.map(l => (
              <button
                key={l.id}
                onClick={() => setActive(l.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200
                  ${active === l.id
                    ? 'bg-forest text-white shadow-md'
                    : 'bg-white text-ink/65 hover:text-forest hover:bg-bark border border-bark'
                  }`}
              >
                {l.label}
              </button>
            ))}
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <ScrollReveal direction="left" className="lg:col-span-2">
              <div className="bg-forest rounded-[18px] p-8 h-full">
                <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5 ${activeLevel.color}`}>
                  {activeLevel.age}
                </span>
                <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                  {activeLevel.label}
                </h2>
                <p className="text-white/60 text-sm leading-relaxed mb-8">{activeLevel.desc}</p>
                <Link to="/admissions" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sprout text-white font-semibold text-sm
                  hover:bg-sprout-dark transition-colors duration-200">
                  Apply for This Level
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="lg:col-span-3">
              <div className="bg-white rounded-[18px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                <h3 className="font-bold text-forest text-[15px] mb-5 uppercase tracking-wider" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                  Subjects Offered
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeLevel.subjects.map(s => (
                    <li key={s} className="flex items-center gap-3 text-sm text-ink/70">
                      <div className="w-5 h-5 rounded-full bg-sprout flex items-center justify-center shrink-0">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                          <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Islamic integration */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <span className="text-xs uppercase tracking-widest font-semibold text-forest/50 block mb-4">Islamic Formation</span>
              <h2 className="text-[clamp(1.7rem,2.8vw,2.4rem)] font-bold text-ink mb-5 leading-tight" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                Faith Woven Into Every School Day
              </h2>
              <div className="space-y-4">
                {[
                  { time: '7:30am', event: 'Morning assembly with group Duas (supplications)' },
                  { time: '8:00am', event: 'Quranic recitation or Arabic class (by level)' },
                  { time: 'Zuhr', event: 'Congregational prayer for upper school' },
                  { time: 'Weekly', event: 'Islamic Studies lecture and character discussion' },
                ].map(row => (
                  <div key={row.time} className="flex gap-4 items-start">
                    <span className="text-xs font-bold text-aurum bg-forest px-3 py-1 rounded-full shrink-0">{row.time}</span>
                    <span className="text-ink/65 text-sm">{row.event}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative rounded-[20px] overflow-hidden aspect-[4/3]">
                <img
                  src="https://scontent.flos2-2.fna.fbcdn.net/v/t39.30808-6/488733863_2186415975107253_3076230263987925920_n.jpg?stp=c210.0.540.540a_dst-jpg_tt6&cstp=mx540x540&ctp=s206x206&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=2B0mo2veAuYQ7kNvwEGucej&_nc_oc=AdrWrKPzV37FqN3FjohnqHSUUEierDGuBnlDzFGQ86UwYeckAxu-0zLUUsYKnEQEWhw&_nc_zt=23&_nc_ht=scontent.flos2-2.fna&_nc_gid=DgqJpvn25TF7mya7jth__w&_nc_ss=7b289&oh=00_AQIkaNn7QAALrNS86JGjci-WmuVJg1kLbzehYZ0KuqJk4Q&oe=6AB08981"
                  alt="Offsprings Ilm School classroom session"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-forest/40 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-forest py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <ScrollReveal direction="left">
            <h3 className="text-[1.6rem] font-bold text-white" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              Ready to enrol your child?
            </h3>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <Link to="/admissions" className="px-7 py-3.5 rounded-full bg-sprout text-white font-semibold text-[15px]
              hover:bg-sprout-dark transition-colors duration-200 whitespace-nowrap">
              Start Admissions
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
