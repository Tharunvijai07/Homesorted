import React from 'react';
import { motion } from 'framer-motion';

interface FinalCTAProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <section id="download" className="relative overflow-hidden bg-[#0F172A] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.18),transparent_25%)]" />
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-[#FB923C]/15 blur-3xl" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Book trusted local workers in seconds and manage service flow from your phone.
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-base text-[#CBD5E1] leading-relaxed">
            Local technicians are one tap away. Get worker arrival times, chat instantly, and pay securely after the job is complete.
          </p>

          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsModalOpen(true)}
              className="btn-primary inline-flex items-center justify-center rounded-full px-12 py-4 text-xl font-bold shadow-glow cursor-pointer"
            >
              Download App
            </motion.button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-[#CBD5E1]">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#F97316]" />
              Free download
            </div>
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#F97316]" />
              No registration fee
            </div>
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#F97316]" />
              24/7 support
            </div>
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#F97316]" />
              Secure payments
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
