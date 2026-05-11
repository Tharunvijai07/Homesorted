import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, ShieldCheck } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#111827]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-2 items-center"
        >
          <div>
            <div className="inline-flex items-center gap-3 rounded-full bg-[#F97316]/10 px-4 py-2 text-sm font-semibold text-[#FDBA74] mb-6">
              <Sparkles className="h-5 w-5" />
              About HomeSorted
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Building trust for every service request.
            </h2>
            <p className="max-w-xl text-[#CBD5E1] leading-relaxed text-lg mb-8">
              We connect verified local professionals with customers through a fast, reliable app. Clear pricing, live updates, and verified reviews make every booking feel premium.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-card rounded-[28px] p-6 shadow-soft border border-[rgba(255,255,255,0.12)]">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-3xl bg-[#F97316]/15 text-[#FDBA74]">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Community first</h3>
                <p className="text-[#CBD5E1] text-sm leading-relaxed">
                  Verified local workers, trusted reviews, and clear service options.
                </p>
              </div>
              <div className="glass-card rounded-[28px] p-6 shadow-soft border border-[rgba(255,255,255,0.12)]">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-3xl bg-[#F97316]/15 text-[#FDBA74]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Safe & reliable</h3>
                <p className="text-[#CBD5E1] text-sm leading-relaxed">
                  Every worker is vetted and every service backed by secure booking support.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-[40px] border border-[rgba(255,255,255,0.12)] p-10 shadow-glow bg-[#0F172A]/70">
            <p className="text-[#FDBA74] uppercase tracking-[0.3em] font-semibold mb-4">Our mission</p>
            <h3 className="text-3xl font-bold text-white mb-4">
              Deliver service confidence across every neighborhood.
            </h3>
            <p className="text-[#CBD5E1] leading-relaxed mb-8">
              We make it easier to find nearby certified experts, compare reviews, and book with full confidence—all in one beautifully designed app.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F97316] text-white font-bold">01</span>
                <div>
                  <p className="font-semibold text-white">Fast booking</p>
                  <p className="text-[#CBD5E1] text-sm leading-relaxed">Find qualified professionals in minutes without the wait.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F97316] text-white font-bold">02</span>
                <div>
                  <p className="font-semibold text-white">Clear pricing</p>
                  <p className="text-[#CBD5E1] text-sm leading-relaxed">Transparent estimates help you choose the right service every time.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
