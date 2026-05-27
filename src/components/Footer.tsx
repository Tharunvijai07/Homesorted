import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = [
    { name: 'About', href: '/' },
    { name: 'Features', href: '#features' },
    { name: 'Services', href: '#services' }
  ];

  const legalLinks = [
    { name: 'Terms & Conditions', href: '#faq' },
    { name: 'Cookie Policy', href: '#faq' },
    { name: 'Privacy Policy', href: '#faq' }
  ];

  return (
    <footer className="bg-[#0F172A] text-[#CBD5E1]">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr]"
        >
          <div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#F97316] to-[#FDBA74] bg-clip-text text-transparent">
              HomeSorted
            </h3>
            <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed max-w-md">
              Trusted local workers on demand for home repairs, maintenance, and emergency help.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Quick links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 flex items-center justify-between gap-4">
              <h4 className="font-semibold text-white">Legal</h4>
            </div>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="mt-12 border-t border-[#FFFFFF]/10 pt-8 text-sm text-[#CBD5E1]">
          © 2026 HomeSorted. All rights reserved. Made with <Heart className="inline h-4 w-4 text-[#F97316]" /> in India.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
