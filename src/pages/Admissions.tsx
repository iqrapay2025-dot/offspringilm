import { Link } from 'react-router';
import ScrollReveal from '../components/ScrollReveal';

const steps = [
  {
    num: '01',
    title: 'Download & Complete the Form',
    desc: 'Obtain the admission form from our school office or contact us to receive one. Fill in all required details carefully.',
  },
  {
    num: '02',
    title: 'Pay the Application Fee',
    desc: 'Pay the ₦5,000 non-refundable application fee. Retain your receipt — it will be required at submission.',
  },
  {
    num: '03',
    title: 'Submit Your Documents',
    desc: 'Submit your completed form with: leaving certificate or transfer letter, testimonials, and birth certificate or age declaration.',
  },
  {
    num: '04',
    title: 'Entrance Exam (JSS1 only)',
    desc: 'JSS1 applicants sit an entrance examination in core subjects. Results are communicated within 5 working days.',
  },
  {
    num: '05',
    title: 'Admission Offer',
    desc: 'Successful applicants receive an offer letter. School fees are then paid to confirm your child\'s place.',
  },
];

const feeTiers = [
  {
    level: 'Nursery / Pre-School',
    total: '₦62,500',
    breakdown: [
      { item: 'Tuition', amount: '₦30,000' },
      { item: 'Uniform', amount: '₦8,500' },
      { item: 'Cardigan', amount: '₦3,500' },
      { item: 'Sportswear', amount: '₦4,500' },
      { item: 'Books', amount: '₦12,000' },
      { item: 'Medical & Stationery', amount: '₦4,000' },
    ],
  },
  {
    level: 'Primary School (1–4+)',
    total: '₦64,000',
    breakdown: [
      { item: 'Tuition', amount: '₦32,000' },
      { item: 'Uniform', amount: '₦8,500' },
      { item: 'Cardigan', amount: '₦3,500' },
      { item: 'Sportswear', amount: '₦4,500' },
      { item: 'Books', amount: '₦11,500' },
      { item: 'Exam, Medical & Stationery', amount: '₦4,000' },
    ],
  },
  {
    level: 'Secondary / College (JSS1–SS1)',
    total: '₦75,500',
    breakdown: [
      { item: 'Tuition', amount: '₦40,000' },
      { item: 'Uniform', amount: '₦8,500' },
      { item: 'Cardigan', amount: '₦3,500' },
      { item: 'Sportswear', amount: '₦4,500' },
      { item: 'Books', amount: '₦14,000' },
      { item: 'Exam, Medical & Stationery', amount: '₦5,000' },
    ],
  },
];

export default function Admissions() {
  return (
    <div>
      {/* Hero */}
      <div className="relative bg-forest pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-sprout translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 bg-aurum/15 text-aurum text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-sprout inline-block animate-pulse" />
              Admissions Open — 2025/2026 Session
            </span>
            <h1 className="text-[clamp(2.2rem,4vw,3.5rem)] font-bold text-white leading-tight max-w-2xl" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              Begin the Guided Journey Today
            </h1>
            <p className="text-white/60 text-lg mt-4 max-w-xl leading-relaxed">
              A five-step process to secure your child's place at Offsprings Ilm School. Entrance exams are ongoing.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Steps */}
      <section className="bg-parchment py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal className="mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-forest/50 block mb-3">How to Apply</span>
            <h2 className="text-[clamp(1.7rem,2.8vw,2.4rem)] font-bold text-ink" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              5 Simple Steps to Enrolment
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* connector line */}
            <div className="hidden lg:block absolute left-6 top-0 bottom-0 w-px bg-bark" />
            <div className="space-y-8">
              {steps.map((step, i) => (
                <ScrollReveal key={step.num} delay={i * 80}>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-forest text-aurum flex items-center justify-center shrink-0 font-bold text-sm z-10 relative">
                      {step.num}
                    </div>
                    <div className="bg-white rounded-[18px] p-6 flex-1 shadow-[0_2px_16px_rgba(0,0,0,0.05)]">
                      <h3 className="font-bold text-forest text-[16px] mb-2" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                        {step.title}
                      </h3>
                      <p className="text-ink/60 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fee breakdown */}
      <section id="fees" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest font-semibold text-forest/50 block mb-3">Fee Structure</span>
            <h2 className="text-[clamp(1.7rem,2.8vw,2.4rem)] font-bold text-ink mb-3" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              Full Fee Breakdown
            </h2>
            <p className="text-ink/55 max-w-md mx-auto text-sm">
              Per-term fees including all compulsory items. Uniform upgrades or extra textbook bundles may affect totals.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {feeTiers.map((tier, i) => (
              <ScrollReveal key={tier.level} delay={i * 100} className="card-hover">
                <div className="bg-parchment rounded-[18px] p-7 h-full">
                  <h3 className="font-bold text-forest text-[15px] mb-1" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                    {tier.level}
                  </h3>
                  <div className="text-[2.2rem] font-bold text-forest mb-5" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                    {tier.total}
                    <span className="text-sm font-normal text-ink/40 ml-1">/ term</span>
                  </div>
                  <ul className="space-y-2.5 border-t border-bark pt-4">
                    {tier.breakdown.map(({ item, amount }) => (
                      <li key={item} className="flex items-center justify-between text-sm">
                        <span className="text-ink/60">{item}</span>
                        <span className="font-semibold text-forest">{amount}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-8 text-center">
            <p className="text-ink/40 text-xs max-w-xl mx-auto">
              Application fee of ₦5,000 is payable upon form submission and is non-refundable.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Documents required */}
      <section className="bg-parchment py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <ScrollReveal className="bg-forest rounded-[20px] p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                  Documents Required
                </h3>
                <ul className="space-y-3">
                  {[
                    'Completed admission form',
                    'Leaving certificate or transfer letter',
                    'Academic testimonials from previous school',
                    'Birth certificate or sworn age declaration',
                    'Two passport photographs',
                    'Proof of ₦5,000 application fee payment',
                  ].map(doc => (
                    <li key={doc} className="flex items-center gap-3 text-white/70 text-sm">
                      <div className="w-4 h-4 rounded-full bg-sprout/20 flex items-center justify-center shrink-0">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                          <path d="M1.5 4l2 2 3-3" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <Link to="/contact" className="w-full text-center py-3.5 rounded-full bg-sprout text-white font-semibold text-[15px]
                  hover:bg-sprout-dark transition-colors duration-200">
                  Contact Admissions Office
                </Link>
                <a
                  href="tel:+2347064368786"
                  className="w-full text-center py-3.5 rounded-full border-2 border-white/25 text-white font-semibold text-[15px]
                  hover:border-white hover:bg-white/8 transition-all duration-200"
                >
                  Call: +234 706 436 8786
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
