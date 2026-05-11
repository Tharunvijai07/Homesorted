import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Home Owner',
      image: '👩‍💼',
      review: 'HomeSorted saved me during an emergency plumbing issue. The plumber arrived within 15 minutes and fixed everything perfectly.',
      location: 'Mumbai'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Worker Partner',
      image: '👨‍🔧',
      review: 'Being a partner has transformed my business. I get steady work and the platform handles all payments securely.',
      location: 'Delhi'
    },
    {
      name: 'Anita Patel',
      role: 'Small Business Owner',
      image: '👩‍💻',
      review: 'I needed urgent AC repair for my office. HomeSorted connected me with a certified technician who resolved the issue quickly.',
      location: 'Ahmedabad'
    },
    {
      name: 'Vikram Singh',
      role: 'Home Owner',
      image: '👨‍👩‍👧',
      review: 'The electrician was professional and skilled. The live tracking feature gave me peace of mind.',
      location: 'Bangalore'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-[#0F172A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.32em] text-[#FDBA74]">Worker testimonials</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            What our worker partners say.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-[#CBD5E1] leading-relaxed">
            Hear from local technicians who rely on HomeSorted for steady work and verified customer bookings.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-[40px] border border-[rgba(255,255,255,0.12)] bg-[#111827]/90 p-8 shadow-glow"
          >
            <div className="flex flex-col gap-8 md:flex-row items-center md:items-start">
              <div className="flex-shrink-0">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#F97316] to-[#FB923C] text-4xl shadow-glow">
                  {testimonials[currentIndex].image}
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <Quote className="mx-auto mb-4 h-12 w-12 text-[#FDBA74] opacity-90 md:mx-0" />
                <p className="text-lg text-[#CBD5E1] leading-relaxed italic mb-6">
                  "{testimonials[currentIndex].review}"
                </p>
                <div>
                  <h4 className="text-2xl font-semibold text-white">{testimonials[currentIndex].name}</h4>
                  <p className="text-[#FDBA74] font-medium">{testimonials[currentIndex].role}</p>
                  <p className="text-[#CBD5E1] text-sm">{testimonials[currentIndex].location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevTestimonial}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F97316] text-white shadow-glow"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 w-3 rounded-full transition ${index === currentIndex ? 'bg-[#F97316]' : 'bg-[#CBD5E1]/40'}`}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextTestimonial}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F97316] text-white shadow-glow"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
