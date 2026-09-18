import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

export default function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-parchment overflow-x-hidden">
      <Navbar />
      <main className="flex-1 page-enter">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
