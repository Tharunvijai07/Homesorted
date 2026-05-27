import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setIsModalOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['home', 'services', 'how-it-works', 'verified', 'features', 'reviews', 'faq'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    let ticking = false;

    const updateActiveSection = () => {
      const navOffset = 86; // fixed navbar height + buffer
      const positions = sections.map((section) => ({
        id: section.id,
        top: section.getBoundingClientRect().top
      }));

      const above = positions.filter((item) => item.top <= navOffset);
      const active = above.length
        ? above.reduce((prev, current) => (current.top > prev.top ? current : prev)).id
        : positions.reduce((prev, current) => (current.top < prev.top ? current : prev)).id;

      setActiveSection(active);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    updateActiveSection();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Categories', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Verified', href: '#verified' },
    { name: 'Features', href: '#features' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(255,255,255,0.12)] bg-[#0F172A]/90 backdrop-blur-xl shadow-soft"
      role="navigation"
      aria-label="Primary navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F97316] to-[#FB923C] text-white shadow-glow font-black">
              H
            </div>
            <span className="text-xl font-semibold tracking-tight text-white">HomeSorted</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const active = activeSection === item.href.slice(1);
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className={`relative font-medium transition-all duration-200 px-4 py-2 rounded-full ${
                    active
                      ? 'text-[#FDBA74] bg-[#F97316]/15 shadow-[0_0_12px_rgba(249,115,22,0.4)]'
                      : 'text-[#CBD5E1] hover:text-white'
                  }`}
                >
                  {item.name}
                </motion.a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsModalOpen(true)}
              className="btn-primary rounded-full px-6 py-2 text-sm font-semibold tracking-wide cursor-pointer"
            >
              Download App
            </motion.button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-xl border border-[rgba(255,255,255,0.12)] bg-white/5 p-2 text-white md:hidden"
            aria-label="Toggle mobile navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[#14203A]/95 border-t border-[rgba(255,255,255,0.12)]"
          >
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-2xl px-4 py-3 font-medium transition-colors ${activeSection === item.href.slice(1) ? 'bg-[#F97316]/10 text-[#FDBA74]' : 'text-[#CBD5E1] hover:bg-white/10 hover:text-white'}`}
                >
                  {item.name}
                </a>
              ))}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setIsModalOpen(true);
                  setIsOpen(false);
                }}
                className="w-full btn-primary rounded-full px-5 py-3 text-center font-semibold cursor-pointer"
              >
                Download App
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
