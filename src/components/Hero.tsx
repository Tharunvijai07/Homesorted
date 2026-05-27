import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0F172A] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-background.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/80 via-[#111827]/80 to-[#1E293B]/80" />
      <div className="absolute -top-16 -left-16 h-72 w-72 rounded-full bg-[#F97316]/15 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-[#FB923C]/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-28 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F97316]/20 bg-[#F97316]/10 px-4 py-2 text-sm font-semibold text-[#FDBA74] shadow-glow">
              Premium local service marketplace
            </span>

            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Instant access to trusted local workers nearby.
            </h1>

            <p className="max-w-2xl text-lg text-[#CBD5E1] leading-relaxed sm:text-xl">
              Book verified electricians, plumbers, AC technicians, and home service experts with transparent pricing, live status updates, and same-day availability.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full bg-[#F97316] px-8 py-4 text-base font-semibold text-[#0F172A] transition hover:bg-[#FB923C]"
                aria-label="Explore features"
              >
                Explore services
              </a>
              <a
                href="#faq"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
                aria-label="Read FAQ"
              >
                Learn more
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center sm:grid-cols-3">
              <div className="glass-card rounded-3xl p-5 shadow-soft">
                <p className="text-3xl font-bold text-white">10K+</p>
                <p className="text-sm text-[#CBD5E1]">Bookings delivered</p>
              </div>
              <div className="glass-card rounded-3xl p-5 shadow-soft">
                <p className="text-3xl font-bold text-white">50+</p>
                <p className="text-sm text-[#CBD5E1]">Cities covered</p>
              </div>
              <div className="glass-card rounded-3xl p-5 shadow-soft">
                <p className="text-3xl font-bold text-white">4.9/5</p>
                <p className="text-sm text-[#CBD5E1]">Average rating</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="glass-card relative w-full max-w-2xl overflow-hidden rounded-[40px] p-6 shadow-soft">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.18),transparent_40%)]" />
              <div className="relative rounded-[32px] bg-[#0F172A]/70 p-6">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.32em] text-[#CBD5E1]">Live booking</p>
                    <h3 className="text-xl font-semibold text-white">AC service in 12 mins</h3>
                  </div>
                  <div className="rounded-full bg-[#F97316]/15 px-4 py-2 text-sm font-semibold text-[#FDBA74]">Instant match</div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="glass-card rounded-[28px] p-5 shadow-soft">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-[#CBD5E1]">Worker</p>
                        <p className="mt-2 text-lg font-semibold text-white">Verified Electrician</p>
                      </div>
                      <div className="rounded-3xl bg-[#FB923C]/15 px-4 py-2 text-sm font-semibold text-[#FDBA74]">4.9 ★</div>
                    </div>
                  </div>
                  <div className="glass-card rounded-[28px] p-5 shadow-soft">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-[#CBD5E1]">ETA</p>
                        <p className="mt-2 text-lg font-semibold text-white">12 mins</p>
                      </div>
                      <div className="rounded-3xl bg-[#F97316]/15 px-4 py-2 text-sm font-semibold text-[#FDBA74]">Near you</div>
                    </div>
                  </div>
                </div>

                <div className="glass-card mt-7 rounded-[32px] p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-[#CBD5E1]">Current service</p>
                      <p className="mt-2 text-lg font-semibold text-white">Plumbing repair</p>
                    </div>
                    <div className="rounded-3xl bg-[#FDBA74]/15 px-4 py-2 text-sm font-semibold text-[#FDBA74]">₹ 549</div>
                  </div>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="glass-card rounded-3xl p-4">
                      <p className="text-sm text-[#CBD5E1]">Location</p>
                      <p className="mt-2 text-base font-semibold text-white">Bandra West, Mumbai</p>
                    </div>
                    <div className="glass-card rounded-3xl p-4">
                      <p className="text-sm text-[#CBD5E1]">Status</p>
                      <p className="mt-2 text-base font-semibold text-white">Confirmed & en route</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
