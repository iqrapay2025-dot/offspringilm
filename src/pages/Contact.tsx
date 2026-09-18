import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      {/* Hero */}
      <div className="relative bg-forest pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-sprout -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <ScrollReveal>
            <span className="text-xs uppercase tracking-widest font-semibold text-aurum/70 block mb-3">Get In Touch</span>
            <h1 className="text-[clamp(2.2rem,4vw,3.5rem)] font-bold text-white leading-tight max-w-xl" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              We're Here to Help
            </h1>
            <p className="text-white/60 text-lg mt-4 max-w-md leading-relaxed">
              Have a question about admissions, fees, or the curriculum? Reach out and our team will respond promptly.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <section className="bg-parchment py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact details */}
            <ScrollReveal direction="left" className="lg:col-span-1 space-y-5">
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#C9A227" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 2C7.24 2 5 4.24 5 7c0 4 5 9 5 9s5-5 5-9c0-2.76-2.24-5-5-5z"/>
                      <circle cx="10" cy="7" r="1.5"/>
                    </svg>
                  ),
                  label: 'Our Address',
                  value: '154, Tunde Idiagbon Road (Unilorin Road), Opp. Opeyemi Hall, Tanke, Ilorin, Kwara State',
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#C9A227" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 4h3l1.5 3.5L6 9a11 11 0 005 5l1.5-1.5L16 14v3a1 1 0 01-1 1C8 18 2 12 2 5a1 1 0 011-1z"/>
                    </svg>
                  ),
                  label: 'Phone',
                  value: '+234 706 436 8786',
                  href: 'tel:+2347064368786',
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#C9A227" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="16" height="12" rx="2"/>
                      <path d="M2 7l8 5 8-5"/>
                    </svg>
                  ),
                  label: 'Email',
                  value: 'offspringsilm@gmail.com',
                  href: 'mailto:offspringsilm@gmail.com',
                },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex gap-4 bg-white rounded-[16px] p-5 shadow-[0_2px_14px_rgba(0,0,0,0.05)]">
                  <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center shrink-0">
                    {icon}
                  </div>
                  <div>
                    <div className="text-xs text-ink/40 font-semibold uppercase tracking-wider mb-1">{label}</div>
                    {href ? (
                      <a href={href} className="text-forest font-medium text-sm hover:text-aurum transition-colors leading-relaxed block">
                        {value}
                      </a>
                    ) : (
                      <p className="text-ink/70 text-sm leading-relaxed">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Office hours */}
              <div className="bg-forest rounded-[16px] p-6">
                <h4 className="text-white font-bold text-[15px] mb-3" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Office Hours</h4>
                <div className="space-y-2 text-sm text-white/60">
                  <div className="flex justify-between"><span>Monday – Friday</span><span className="text-aurum font-medium">8:00am – 4:00pm</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span className="text-white/40">Closed</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="text-white/40">Closed</span></div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact form */}
            <ScrollReveal direction="right" className="lg:col-span-2">
              <div className="bg-white rounded-[20px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                {sent ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-sprout/20 flex items-center justify-center mx-auto mb-5">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                        <path d="M5 14l6 6L23 8" stroke="#173A2E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-forest mb-2" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                      Message Sent!
                    </h3>
                    <p className="text-ink/55 text-sm">
                      Thank you for reaching out. We'll get back to you within one business day, in sha Allah.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-forest mb-6" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                      Send Us a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-xs font-semibold text-ink/50 uppercase tracking-wider mb-1.5">Full Name</label>
                          <input
                            id="name" name="name" type="text" required
                            value={form.name} onChange={handleChange}
                            placeholder="e.g. Fatima Al-Amin"
                            className="w-full px-4 py-3 rounded-xl border border-bark bg-parchment text-ink text-sm
                              focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors placeholder:text-ink/30"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-xs font-semibold text-ink/50 uppercase tracking-wider mb-1.5">Email Address</label>
                          <input
                            id="email" name="email" type="email" required
                            value={form.email} onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-bark bg-parchment text-ink text-sm
                              focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors placeholder:text-ink/30"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="block text-xs font-semibold text-ink/50 uppercase tracking-wider mb-1.5">Phone (optional)</label>
                          <input
                            id="phone" name="phone" type="tel"
                            value={form.phone} onChange={handleChange}
                            placeholder="+234 8XX XXX XXXX"
                            className="w-full px-4 py-3 rounded-xl border border-bark bg-parchment text-ink text-sm
                              focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors placeholder:text-ink/30"
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-xs font-semibold text-ink/50 uppercase tracking-wider mb-1.5">Subject</label>
                          <select
                            id="subject" name="subject" required
                            value={form.subject} onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-bark bg-parchment text-ink text-sm
                              focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors"
                          >
                            <option value="">Select a topic</option>
                            <option value="admissions">Admissions Enquiry</option>
                            <option value="fees">Fee Structure</option>
                            <option value="curriculum">Curriculum Question</option>
                            <option value="tour">School Tour Request</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-xs font-semibold text-ink/50 uppercase tracking-wider mb-1.5">Message</label>
                        <textarea
                          id="message" name="message" required rows={5}
                          value={form.message} onChange={handleChange}
                          placeholder="Tell us how we can help..."
                          className="w-full px-4 py-3 rounded-xl border border-bark bg-parchment text-ink text-sm resize-none
                            focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors placeholder:text-ink/30"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-full bg-forest text-white font-semibold text-[15px]
                          hover:bg-forest-hover transition-colors duration-200"
                      >
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
