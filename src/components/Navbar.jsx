import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Bolt, Phone, Menu } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClasses = scrolled
    ? 'bg-black/70 backdrop-blur-md shadow-xl shadow-yellow-500/10'
    : 'bg-transparent';

  const handleNav = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 text-white ${navClasses}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => handleNav('#home')}
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <Bolt className="h-6 w-6 text-yellow-400" />
            <span className="text-lg">VoltPro Electric</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => handleNav('#home')} className="hover:text-yellow-300 transition-colors">Home</button>
            <button onClick={() => handleNav('#about')} className="hover:text-yellow-300 transition-colors">About</button>
            <button onClick={() => handleNav('#services')} className="hover:text-yellow-300 transition-colors">Services</button>
            <button onClick={() => handleNav('#contact')} className="hover:text-yellow-300 transition-colors">Contact</button>
            <a href="tel:+1234567890" className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 font-medium text-black shadow-lg shadow-yellow-500/30 ring-1 ring-yellow-300 hover:brightness-105 transition">
              <Phone className="h-4 w-4" />
              Free Quote
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen((s) => !s)} aria-label="Menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {[
              { id: '#home', label: 'Home' },
              { id: '#about', label: 'About' },
              { id: '#services', label: 'Services' },
              { id: '#contact', label: 'Contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="block w-full text-left rounded-md px-3 py-2 hover:bg-white/5"
              >
                {item.label}
              </button>
            ))}
            <a href="tel:+1234567890" className="inline-flex items-center gap-2 rounded-md bg-yellow-400 px-4 py-2 font-medium text-black shadow-lg shadow-yellow-500/30 ring-1 ring-yellow-300 hover:brightness-105 transition">
              <Phone className="h-4 w-4" />Call Now
            </a>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
