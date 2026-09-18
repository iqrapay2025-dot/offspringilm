import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import logoIlm from '@/imports/logo_ilm.jpg';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About', end: false },
  { to: '/curriculum', label: 'Curriculum', end: false },
  { to: '/admissions', label: 'Admissions', end: false },
  { to: '/college', label: 'College', end: false },
  { to: '/contact', label: 'Contact', end: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 56);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-forest/96 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.22)]'
          : 'bg-transparent'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between gap-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group" onClick={() => setOpen(false)}>
          <div className="bg-white rounded-xl p-1 shadow-sm transition-transform duration-200 group-hover:scale-105">
            <img
              src={logoIlm}
              alt="Offsprings Ilm School"
              className="h-10 w-10 object-contain rounded-lg"
            />
          </div>
          <div className="leading-tight hidden sm:block">
            <span className="block text-[14px] font-bold text-white tracking-tight" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              Offsprings Ilm School
            </span>
            <span className="block text-[10px] text-aurum/80 tracking-widest uppercase font-medium">
              Nursery • Primary • Secondary
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  `nav-link px-3 py-1.5 text-sm font-medium transition-colors duration-200
                   ${isActive ? 'text-aurum active-link' : 'text-white/85 hover:text-white'}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Link
            to="/admissions"
            className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-sprout text-white
              text-sm font-semibold transition-all duration-200 hover:bg-sprout-dark hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-aurum"
          >
            Apply Now
          </Link>
          <button
            className="lg:hidden w-9 h-9 flex flex-col justify-center items-center gap-[5px] rounded-lg
              text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-aurum"
            aria-label="Toggle menu"
            onClick={() => setOpen(v => !v)}
          >
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-forest/97 backdrop-blur-md
          ${open ? 'max-h-[480px] border-t border-white/10' : 'max-h-0'}`}
      >
        <ul className="px-6 py-4 flex flex-col gap-1">
          {links.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-sm font-medium transition-colors
                   ${isActive ? 'bg-sprout/15 text-aurum' : 'text-white/85 hover:bg-white/8 hover:text-white'}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2">
            <Link
              to="/admissions"
              onClick={() => setOpen(false)}
              className="block w-full text-center px-5 py-3 rounded-full bg-sprout text-white text-sm font-semibold
                transition-colors hover:bg-sprout-dark"
            >
              Apply Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
