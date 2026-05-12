import React from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, MapPin } from 'lucide-react';

const SearchNearby: React.FC = () => {
  const tags = ['Electrician', 'Plumber', 'AC Repair', 'Carpenter', 'Painter', 'Mechanic'];

  return (
    <section
      id="search"
      className="relative py-20 bg-[#0F172A] bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/local-service-background.png')" }}
    >
      <div className="absolute inset-0 bg-[#0F172A]/80" />
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl rounded-[32px] border border-[rgba(255,255,255,0.12)] bg-[#111827]/80 p-8 shadow-soft backdrop-blur-2xl"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.32em] text-[#FDBA74]">Search nearby workers</p>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Find trusted technicians in your neighborhood.
              </h2>
              <p className="max-w-2xl text-base text-[#CBD5E1] leading-relaxed">
                Search electricians near me, plumbers near me, AC repair near me, and nearby home repair professionals available within minutes.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-[28px] bg-[#0F172A]/70 p-4 text-[#CBD5E1] shadow-glow sm:max-w-sm">
              <Search className="h-5 w-5 text-[#FDBA74]" aria-hidden="true" />
              <span className="text-sm font-medium">Search local services powered by live availability</span>
            </div>
          </div>

          <form className="mt-10 grid gap-4 sm:grid-cols-[1fr_auto]">
            <label htmlFor="local-search" className="sr-only">Search nearby workers</label>
            <div className="relative rounded-[24px] border border-[rgba(255,255,255,0.12)] bg-[#0F172A]/90 p-4 shadow-soft">
              <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#FDBA74]" aria-hidden="true" />
              <input
                id="local-search"
                type="search"
                placeholder="e.g. electrician near me, plumber near me"
                className="w-full border-none bg-transparent pl-12 text-base text-white placeholder:text-[#94A3B8] focus:outline-none focus:ring-0"
                aria-label="Search for nearby service workers"
              />
            </div>
            <button
              type="submit"
              className="btn-primary rounded-full px-8 py-4 text-base font-semibold shadow-glow"
              aria-label="Start search for nearby workers"
            >
              Search now
            </button>
          </form>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-[#CBD5E1]">
            <MapPin className="h-4 w-4 text-[#FDBA74]" aria-hidden="true" />
            <span>Instantly connect with nearby workers in Mumbai, Delhi, Bangalore, Chennai and Ahmedabad.</span>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {tags.map((tag) => (
              <motion.button
                key={tag}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="inline-flex items-center justify-between rounded-3xl border border-[rgba(255,255,255,0.12)] bg-white/5 px-5 py-3 text-left text-sm text-[#CBD5E1] transition hover:border-[#FDBA74]/40 hover:text-white"
              >
                <span>{tag}</span>
                <ArrowRight className="h-4 w-4 text-[#FDBA74]" aria-hidden="true" />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SearchNearby;
