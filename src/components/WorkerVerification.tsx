import React from 'react';
import { motion } from 'framer-motion';
import { Shield, UserCheck, Phone, Star, Award, Lock } from 'lucide-react';

const WorkerVerification: React.FC = () => {
  const verifications = [
    { icon: UserCheck, title: 'Aadhaar verification', description: 'Identity and address checks for every worker.' },
    { icon: Phone, title: 'Phone OTP verification', description: 'Secure mobile verification for trusted communication.' },
    { icon: Star, title: 'Rating system', description: 'Customer reviews and certifications keep quality high.' },
    { icon: Award, title: 'Skill validation', description: 'Practical assessments for electricians, plumbers, and more.' },
    { icon: Shield, title: 'Background checks', description: 'Safety and reliability screening before booking.' },
    { icon: Lock, title: 'Secure platform', description: 'Encrypted booking and payment protection built in.' }
  ];

  return (
    <section id="verified" className="py-20 bg-[#0F172A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-[#F97316]/10 px-5 py-3 text-sm font-semibold text-[#FDBA74] mb-6">
            <Shield className="h-5 w-5" />
            Verified workers
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Trusted local professionals, verified for every job.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-[#CBD5E1] leading-relaxed">
            Skill checks, identity verification, and customer ratings make it easy to book confidently every time.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {verifications.map((verification, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-[28px] border border-[rgba(255,255,255,0.12)] p-8 shadow-soft transition-all duration-300"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#F97316]/15 text-[#F97316] shadow-glow">
                <verification.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{verification.title}</h3>
              <p className="text-[#CBD5E1] leading-relaxed text-sm">{verification.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="glass-card rounded-[32px] border border-[rgba(255,255,255,0.12)] bg-[#111827]/80 p-10 shadow-glow"
        >
          <div className="grid gap-6 md:grid-cols-4 text-center">
            <div>
              <p className="text-4xl font-bold text-white mb-2">99.9%</p>
              <p className="text-[#CBD5E1]">Verification rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">4.9★</p>
              <p className="text-[#CBD5E1]">Average rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">24/7</p>
              <p className="text-[#CBD5E1]">Support available</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">100%</p>
              <p className="text-[#CBD5E1]">Secure bookings</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkerVerification;
