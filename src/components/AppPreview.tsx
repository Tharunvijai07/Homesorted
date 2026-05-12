import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe } from 'lucide-react';
import mapPreview from '../assets/map-preview.svg';

const AppPreview: React.FC = () => {
  return (
    <section
      id="coverage"
      className="relative py-20 bg-[#1E293B] bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/coverage-background.png')" }}
    >
      <div className="absolute inset-0 bg-[#0F172A]/75" />
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.32em] text-[#FDBA74]">Local service coverage</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Available across 50+ cities with live worker availability.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-[#CBD5E1] leading-relaxed">
            Mumbai, Delhi, Bangalore, Chennai, Ahmedabad and more — find nearby electricians, plumbers, mechanics and home repair professionals wherever you are.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card rounded-[40px] border border-[rgba(255,255,255,0.12)] bg-[#0F172A]/70 p-8 shadow-soft"
          >
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-[#FDBA74]">Map integration</p>
                <h3 className="text-3xl font-bold text-white">Find workers near you with confidence.</h3>
              </div>
              <div className="rounded-3xl bg-[#F97316]/15 px-4 py-2 text-sm font-semibold text-[#FDBA74]">Nearby first</div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-card rounded-[28px] p-6">
                <Smartphone className="mb-4 h-8 w-8 text-[#FDBA74]" />
                <h4 className="text-xl font-semibold text-white mb-2">Mobile booking</h4>
                <p className="text-[#CBD5E1] text-sm leading-relaxed">Find and book local workers instantly from your smartphone.</p>
              </div>
              <div className="glass-card rounded-[28px] p-6">
                <Globe className="mb-4 h-8 w-8 text-[#FDBA74]" />
                <h4 className="text-xl font-semibold text-white mb-2">City coverage</h4>
                <p className="text-[#CBD5E1] text-sm leading-relaxed">Active in major metro and satellite cities with growing local coverage.</p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="glass-card rounded-[28px] p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-[#CBD5E1]">Top cities</p>
                <p className="mt-2 text-lg font-semibold text-white">Mumbai, Delhi, Bangalore, Chennai</p>
              </div>
              <div className="glass-card rounded-[28px] p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-[#CBD5E1]">Service types</p>
                <p className="mt-2 text-lg font-semibold text-white">Electricians, plumbers, mechanics, carpenters</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card relative rounded-[40px] p-6 shadow-glow"
          >
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#F97316]/15 to-transparent" />
            <div className="glass-card relative rounded-[32px] p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-[#CBD5E1]">Live route</p>
                  <h3 className="text-xl font-semibold text-white">Map preview</h3>
                </div>
                <div className="rounded-3xl bg-[#F97316]/15 px-3 py-1 text-sm font-semibold text-[#FDBA74]">Active</div>
              </div>
              <div className="glass-card h-[360px] rounded-[28px] border border-[#FFFFFF]/10 p-6">
                <img
                  src={mapPreview}
                  alt="Map preview"
                  className="h-full w-full rounded-[24px] object-cover shadow-soft"
                />
              </div>
              <div className="mt-6 grid gap-4">
                <div className="glass-card rounded-3xl p-4">
                  <p className="text-sm text-[#CBD5E1]">Nearby worker activity</p>
                  <p className="mt-2 font-semibold text-white">150+ technicians active in your city</p>
                </div>
                <div className="glass-card rounded-3xl p-4">
                  <p className="text-sm text-[#CBD5E1]">Fast matching</p>
                  <p className="mt-2 font-semibold text-white">Most requests get matched in under 2 minutes</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
