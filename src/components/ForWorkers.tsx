import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Clock,
  DollarSign,
  TrendingUp,
  Users,
  Shield
} from 'lucide-react';

const ForWorkers: React.FC = () => {
  const benefits = [
    {
      icon: MapPin,
      title: 'Get Nearby Customers',
      description: 'Receive job requests from customers in your local area.',
    },
    {
      icon: DollarSign,
      title: 'Daily Earnings',
      description: 'Earn consistent income with jobs each day.',
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Choose jobs that fit your schedule and lifestyle.',
    },
    {
      icon: TrendingUp,
      title: 'Build Reputation',
      description: 'Grow your profile with ratings and repeat customers.',
    },
    {
      icon: Users,
      title: 'Growing Network',
      description: 'Join a community of skilled professionals.',
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Get paid instantly after completing work.',
    }
  ];

  return (
    <section id="for-workers" className="py-20 bg-[#1E293B]">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-[#F97316]/10 px-5 py-3 text-sm font-semibold text-[#FDBA74] mb-6">
              <Users className="h-5 w-5" />
              For Skilled Workers
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Earn more with flexible local jobs.
            </h2>
            <p className="text-base text-[#CBD5E1] mb-8 leading-relaxed">
              Join thousands of skilled workers getting consistent work through an app built for trusted local services.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 mb-8">
              <div className="glass-card rounded-[28px] border border-[rgba(255,255,255,0.12)] p-6 shadow-soft">
                <p className="text-3xl font-bold text-white mb-2">₹1,500</p>
                <p className="text-[#CBD5E1]">Average Daily Earnings</p>
              </div>
              <div className="glass-card rounded-[28px] border border-[rgba(255,255,255,0.12)] p-6 shadow-soft">
                <p className="text-3xl font-bold text-white mb-2">50+</p>
                <p className="text-[#CBD5E1]">Jobs Per Month</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary rounded-full px-8 py-4 text-base font-semibold shadow-glow"
            >
              Join as a Worker
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass-card rounded-[28px] border border-[rgba(255,255,255,0.12)] p-6 shadow-soft transition-all duration-300"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-[#F97316]/15 text-[#F97316] shadow-glow">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[#CBD5E1] text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForWorkers;
