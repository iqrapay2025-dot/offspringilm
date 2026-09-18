import { Link } from 'react-router';
import logoIlm from '@/imports/logo_ilm.jpg';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/curriculum', label: 'Curriculum' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/college', label: 'College' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-parchment">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-white rounded-xl p-1.5 shadow-sm shrink-0">
                <img
                  src={logoIlm}
                  alt="Offsprings Ilm School"
                  className="h-12 w-12 object-contain rounded-lg"
                />
              </div>
              <div>
                <span className="block text-[15px] font-bold leading-tight" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                  Offsprings Ilm School
                </span>
                <span className="block text-[10px] text-aurum/70 tracking-widest uppercase font-medium mt-0.5">
                  for a guided beginning
                </span>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              Nurturing scholars who are locally grounded and globally ready — blending rigorous academics with Islamic values since 2016.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/55
                  hover:border-aurum hover:text-aurum transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/55
                  hover:border-aurum hover:text-aurum transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-aurum mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-white/55 hover:text-aurum transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-aurum mb-4">Contact</h4>
            <address className="not-italic space-y-3 text-sm text-white/55">
              <p className="leading-relaxed">
                154, Tunde Idiagbon Road (Unilorin Road),<br/>
                Opp. Opeyemi Hall, Tanke,<br/>
                Ilorin, Kwara State, Nigeria
              </p>
              <p>
                <a href="tel:+2347064368786" className="hover:text-aurum transition-colors">
                  +234 706 436 8786
                </a>
              </p>
              <p>
                <a href="tel:+2349157778200" className="hover:text-aurum transition-colors">
                  +234 915 777 8200
                </a>
              </p>
              <p>
                <a href="mailto:offspringsilm@gmail.com" className="hover:text-aurum transition-colors break-all">
                  offspringsilm@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35">
          <p>© {new Date().getFullYear()} Offsprings Ilm School. All rights reserved.</p>
          <p>Ilorin, Kwara State · Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
