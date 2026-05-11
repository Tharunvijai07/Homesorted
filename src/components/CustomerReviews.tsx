import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const CustomerReviews: React.FC = () => {
  const reviews = [
    {
      name: 'Meera Patel',
      role: 'Home Owner',
      rating: 5,
      quote: 'Booked a plumber for an urgent leak in less than 10 minutes. The technician was verified, polite, and the issue was fixed quickly.',
    },
    {
      name: 'Rohan Sharma',
      role: 'Small Business Owner',
      rating: 4,
      quote: 'The app recommended a trusted electrician within my area. Transparent pricing and live ETA made the experience effortless.',
    },
    {
      name: 'Aditi Rao',
      role: 'Apartment Manager',
      rating: 5,
      quote: 'Excellent local coverage in Mumbai. The worker arrived on time and completed the AC service with high quality.',
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-[#1E293B] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-[#FDBA74]">Customer reviews</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Rated 4.9+ by thousands of local customers.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#CBD5E1] leading-relaxed">
            Trusted local workers with real reviews from homeowners, businesses, and communities across India.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-[32px] border border-[rgba(255,255,255,0.12)] bg-[#0F172A]/80 p-8 shadow-soft transition hover:-translate-y-2 hover:shadow-glow"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-sm text-[#94A3B8]">{review.role}</p>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className={`h-4 w-4 transition ${
                        starIndex < review.rating
                          ? 'text-[#FDBA74]'
                          : 'text-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <Quote className="mb-4 h-8 w-8 text-[#FDBA74]" aria-hidden="true" />
              <p className="text-[#CBD5E1] leading-relaxed">{review.quote}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
