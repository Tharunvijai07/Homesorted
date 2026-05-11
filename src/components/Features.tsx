import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe2,
  ShieldCheck,
  MessageSquare,
  MapPin,
  Tag,
  BellRing,
  Star,
  Clock3,
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Live Location',
      description: 'Track your worker’s arrival in real time.',
      icon: MapPin,
    },
    {
      title: 'Instant Chat',
      description: 'Message your technician before and during service.',
      icon: MessageSquare,
    },
    {
      title: 'Transparent Pricing',
      description: 'Get clear cost estimates before booking.',
      icon: Tag,
    },
    {
      title: 'Verified Professionals',
      description: 'Every worker is identity and skill checked.',
      icon: ShieldCheck,
    },
    {
      title: 'Emergency Support',
      description: 'Priority dispatch for urgent repairs.',
      icon: BellRing,
    },
    {
      title: 'Regional Support',
      description: 'Connect with local techs who speak your language.',
      icon: Globe2,
    },
    {
      title: 'Ratings & Reviews',
      description: 'Choose workers based on real customer feedback.',
      icon: Star,
    },
    {
      title: 'Fast Response',
      description: 'Average technician arrival under 30 minutes.',
      icon: Clock3,
    },
    {
      title: 'Flexible Scheduling',
      description: 'Book slots that fit your day with easy rescheduling.',
      icon: Globe2,
    },
  ];

  return (
    <section id="features" className="py-20 bg-[#0F172A]">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.32em] text-[#F97316]">Features</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Our Features & Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-[#CBD5E1] leading-relaxed">
            Nisl purus in mollis nunc sed id semper. Rhoncus aenean vel elit scelerisque mauris.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group rounded-[32px] border border-white/10 bg-[#111827]/80 p-8 shadow-soft transition duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-[#F97316]/40 hover:bg-[#111827]/95 hover:shadow-[0_30px_60px_-20px_rgba(249,115,22,0.45)]"
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-[#F97316]/10 text-[#F97316] shadow-soft transition duration-500 group-hover:bg-[#F97316] group-hover:text-[#0F172A] group-hover:shadow-[0_20px_40px_-20px_rgba(249,115,22,0.8)]">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 transition duration-500 group-hover:text-[#F97316]">{feature.title}</h3>
                <p className="text-[#CBD5E1] leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
