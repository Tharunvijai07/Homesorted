import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Wrench,
  Tv,
  Snowflake,
  Hammer,
  Palette,
  Shield,
  Clock
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    { icon: Zap, title: 'Electrician', description: 'Wiring, switches, outlets, and urgent electrical repairs' },
    { icon: Wrench, title: 'Plumber', description: 'Leak repairs, pipes, drainage, and bathroom plumbing' },
    { icon: Tv, title: 'AC Repair', description: 'Installation, cleaning, maintenance, and emergency AC fixes' },
    { icon: Snowflake, title: 'Carpenter', description: 'Furniture repair, door installation, cabinets, and woodwork' },
    { icon: Hammer, title: 'Painter', description: 'Interior and exterior painting with fast local support' },
    { icon: Palette, title: 'Home Repair', description: 'General maintenance, fixtures, and on-demand labour' },
    { icon: Shield, title: 'Verified Pros', description: 'Identity checks, skill screening, and customer-safe hiring' },
    { icon: Clock, title: 'Emergency Help', description: 'Priority response when you need a technician immediately' }
  ];

  return (
    <section
      id="services"
      className="relative py-20 bg-[#0F172A] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/category-background.png')" }}
    >
      <div className="absolute inset-0 bg-[#0F172A]/70" />
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.32em] text-[#FDBA74]">Trusted local categories</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Search by service, location, and availability.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-[#CBD5E1] leading-relaxed">
            Find electricians near me, plumbers near me, AC repair near me, and skilled technicians ready to start within minutes.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-[28px] p-6 shadow-soft transition-all duration-300 hover:shadow-glow"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#F97316] to-[#FB923C] text-white shadow-glow">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-[#CBD5E1] leading-relaxed text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
