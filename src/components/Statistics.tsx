import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle, MapPin, TrendingUp } from 'lucide-react';

const Statistics: React.FC = () => {
  const [counters, setCounters] = useState({ workers: 0, services: 0, cities: 0, satisfaction: 0 });

  const stats = [
    { icon: Users, label: 'Active workers', value: 5000, suffix: '+' },
    { icon: CheckCircle, label: 'Jobs completed', value: 25000, suffix: '+' },
    { icon: MapPin, label: 'Cities covered', value: 50, suffix: '+' },
    { icon: TrendingUp, label: 'Customer satisfaction', value: 98, suffix: '%' }
  ];

  useEffect(() => {
    const animateCounters = () => {
      const duration = 1800;
      const steps = 60;
      const interval = duration / steps;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        setCounters({
          workers: Math.floor(stats[0].value * progress),
          services: Math.floor(stats[1].value * progress),
          cities: Math.floor(stats[2].value * progress),
          satisfaction: Math.floor(stats[3].value * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters({
            workers: stats[0].value,
            services: stats[1].value,
            cities: stats[2].value,
            satisfaction: stats[3].value
          });
        }
      }, interval);

      return () => clearInterval(timer);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('statistics');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="statistics" className="py-20 bg-[#0F172A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.32em] text-[#FDBA74]">Local service momentum</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            The metrics that prove our local impact.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-[#CBD5E1] leading-relaxed">
            Trusted by homeowners and businesses across multiple cities for fast repairs, skilled workers, and transparent pricing.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ scale: 1.03 }}
              className="glass-card rounded-[32px] border border-[rgba(255,255,255,0.12)] p-8 text-center shadow-soft hover:shadow-glow"
              role="status"
              aria-live="polite"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#F97316]/15 text-[#F97316] shadow-glow">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {index === 0 && counters.workers.toLocaleString()}
                {index === 1 && counters.services.toLocaleString()}
                {index === 2 && counters.cities}
                {index === 3 && counters.satisfaction}
                <span className="text-[#FDBA74]">{stat.suffix}</span>
              </div>
              <p className="text-[#CBD5E1]">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          <div className="glass-card rounded-[28px] border border-[rgba(255,255,255,0.12)] p-6 text-center shadow-soft">
            <p className="text-3xl font-bold text-white mb-2">15 mins</p>
            <p className="text-[#CBD5E1]">Average response time</p>
          </div>
          <div className="glass-card rounded-[28px] border border-[rgba(255,255,255,0.12)] p-6 text-center shadow-soft">
            <p className="text-3xl font-bold text-white mb-2">24/7</p>
            <p className="text-[#CBD5E1]">Service availability</p>
          </div>
          <div className="glass-card rounded-[28px] border border-[rgba(255,255,255,0.12)] p-6 text-center shadow-soft">
            <p className="text-3xl font-bold text-white mb-2">100%</p>
            <p className="text-[#CBD5E1]">Secure transactions</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
