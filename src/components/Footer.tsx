import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#about' },
      { name: 'Blog', href: '#about' },
      { name: 'Press', href: '#about' }
    ],
    services: [
      { name: 'For Customers', href: '#search' },
      { name: 'For Workers', href: '#verified' },
      { name: 'Business Solutions', href: '#features' },
      { name: 'Emergency Help', href: '#services' }
    ],
    support: [
      { name: 'Help Center', href: '#faq' },
      { name: 'Contact Us', href: '#faq' },
      { name: 'Safety', href: '#verified' },
      { name: 'Terms of Service', href: '#faq' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#faq' },
      { name: 'Terms & Conditions', href: '#faq' },
      { name: 'Cookie Policy', href: '#faq' },
      { name: 'Disclaimer', href: '#faq' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-[#0F172A] text-[#CBD5E1]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#F97316] to-[#FDBA74] bg-clip-text text-transparent">
                HomeSorted
              </h3>
              <p className="text-[#CBD5E1] leading-relaxed mb-6">
                Connecting you with trusted local workers for electricians, plumbers, painters, carpenters and more.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#CBD5E1]">
                  <Mail className="h-5 w-5" />
                  <span>support@homesorted.com</span>
                </div>
                <div className="flex items-center gap-3 text-[#CBD5E1]">
                  <Phone className="h-5 w-5" />
                  <span>+91 1800-XXX-XXXX</span>
                </div>
                <div className="flex items-center gap-3 text-[#CBD5E1]">
                  <MapPin className="h-5 w-5" />
                  <span>Mumbai, India</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[#FFFFFF]/10 pt-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="text-[#CBD5E1] text-sm">
              © 2026 HomeSorted. All rights reserved. Made with <Heart className="inline h-4 w-4 text-[#F97316]" /> in India.
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#FFFFFF]/10 text-[#CBD5E1] hover:border-[#F97316]/40 hover:text-white hover:bg-[#F97316]/10 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
