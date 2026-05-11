import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Users, MessageCircle, Truck } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    { icon: Upload, title: 'Post your request', description: 'Enter your service need and choose your preferred time slot.' },
    { icon: Users, title: 'Receive local matches', description: 'Verified technicians in your area get notified instantly.' },
    { icon: MessageCircle, title: 'Confirm with chat', description: 'Review profiles, compare ratings, and message your worker.' },
    { icon: Truck, title: 'Track arrival live', description: 'Follow your worker’s route and get real-time ETA updates.' }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#0F172A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.32em] text-[#FDBA74]">Easy booking flow</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Book a local worker in four simple steps.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-[#CBD5E1] leading-relaxed">
            Designed for fast service, transparent pricing, and a seamless customer experience from request to repair.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="glass-card relative rounded-[28px] border border-[rgba(255,255,255,0.12)] p-8 shadow-soft transition-all duration-300"
            >
              <div className="absolute -top-5 -left-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#F97316] text-white shadow-glow">
                {index + 1}
              </div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#F97316]/15 text-[#F97316] shadow-glow">
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-[#CBD5E1] text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
