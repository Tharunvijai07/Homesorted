import React, { useState, type ElementType } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Home,
  Search,
  ShieldCheck,
  DollarSign,
  MapPin,
  Smile,
  UserPlus,
  Zap
} from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: { question: string; answer: string; Icon: ElementType }[] = [
    {
      question: 'What is HomeSorted?',
      answer:
        'HomeSorted is a trusted home services app that helps customers quickly find nearby local workers for plumbing, electrical work, cleaning, carpentry, AC repair, and other home repair services.',
      Icon: Home
    },
    {
      question: 'How does HomeSorted work?',
      answer:
        'Customers can search for local workers, compare fair pricing, chat directly with service providers, and book trusted home repair services through the HomeSorted app.',
      Icon: Search
    },
    {
      question: 'How are workers verified?',
      answer:
        'Every worker on HomeSorted goes through identity verification, phone verification, and profile screening to ensure customers connect with trusted local workers for safe home services.',
      Icon: ShieldCheck
    },
    {
      question: 'How is pricing decided?',
      answer:
        'HomeSorted uses fair and transparent pricing based on the type of home service, worker availability, and location. Customers can view estimated costs before confirming electrician booking, plumbing work, or other services.',
      Icon: DollarSign
    },
    {
      question: 'Can I track my worker in real time?',
      answer:
        'Yes. HomeSorted allows customers to track their worker’s live location and estimated arrival time after booking a home repair service.',
      Icon: MapPin
    },
    {
      question: 'What if I’m not satisfied with the service?',
      answer:
        'Customer satisfaction is important to HomeSorted. Users can report issues, leave reviews, and contact support if they are unhappy with any plumbing, electrical, or home maintenance service.',
      Icon: Smile
    },
    {
      question: 'Can workers join HomeSorted?',
      answer:
        'Yes. Skilled local workers including plumbers, electricians, painters, cleaners, and carpenters can register on HomeSorted to receive nearby job requests and grow their business.',
      Icon: UserPlus
    },
    {
      question: 'Does HomeSorted support emergency services?',
      answer:
        'Yes. Customers can request urgent home repair services like water leakage repairs, emergency electrician booking, or quick plumbing support through HomeSorted.',
      Icon: Zap
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-20 bg-[#0F172A] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/faq-background.png')" }}
    >
      <div className="absolute inset-0 bg-[#0F172A]/80" />
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[#F97316]/20 bg-[#F97316]/10 px-5 py-3 text-sm font-semibold text-[#FDBA74] mb-6">
            FAQ
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-[#CBD5E1] leading-relaxed">
            Everything you need to know about HomeSorted.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass-card group overflow-hidden rounded-[28px] border border-[rgba(255,255,255,0.12)] p-0 shadow-soft transition duration-500 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-[#F97316]/40 hover:bg-[#111827]/95 hover:shadow-[0_30px_60px_-20px_rgba(249,115,22,0.45)]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#F97316]/10 text-[#FDBA74] shadow-soft transition duration-500 group-hover:bg-[#F97316] group-hover:text-[#0F172A] group-hover:shadow-[0_20px_40px_-20px_rgba(249,115,22,0.8)]">
                    <faq.Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#94A3B8] mb-2">
                      FAQ {index + 1}
                    </p>
                    <h3 className="text-lg font-semibold text-white leading-tight">
                      {faq.question}
                    </h3>
                  </div>
                </div>
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.25 }}>
                  <ChevronDown className="h-6 w-6 text-[#FDBA74]" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden border-t border-[rgba(255,255,255,0.10)] bg-[#0F172A]/90 px-6 pb-6"
                  >
                    <p className="text-sm leading-relaxed text-[#CBD5E1] pt-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
