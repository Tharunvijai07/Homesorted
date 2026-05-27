import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertCircle } from 'lucide-react';

interface PreRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  state?: string;
}

const PreRegisterModal: React.FC<PreRegisterModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    state: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generalError, setGeneralError] = useState('');

  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  // Validate phone number (10 digits for Indian numbers)
  const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) {
      return 'Phone number is required';
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.replace(/\s+/g, ''))) {
      return 'Phone number must be 10 digits';
    }
    return undefined;
  };

  // Validate email
  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) {
      return 'Email is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return undefined;
  };

  // Validate all fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    const phoneError = validatePhone(formData.phone);
    if (phoneError) {
      newErrors.phone = phoneError;
    }

    const emailError = validateEmail(formData.email);
    if (emailError) {
      newErrors.email = emailError;
    }

    if (!formData.state) {
      newErrors.state = 'Please select a state';
    }

    setErrors(newErrors);
    setGeneralError(Object.keys(newErrors).length > 0 ? 'Please fill all details correctly' : '');

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof FormErrors];
        return newErrors;
      });
    }
    setGeneralError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:4000/api/pre-register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Submission failed');
      }

      setFormData({ name: '', phone: '', email: '', state: '' });
      setErrors({});
      setGeneralError('');
      onClose();
    } catch (error) {
      console.error('Submission error:', error);
      setGeneralError(error instanceof Error ? error.message : 'Unable to submit. Try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-[32px] border border-[rgba(249,115,22,0.3)] bg-[#111827]/95 p-8 shadow-glow max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute right-6 top-6 text-[#CBD5E1] hover:text-white transition"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">Pre-Register</h2>
              <p className="text-[#CBD5E1]">Join HomeSorted and get instant access to verified local workers.</p>
            </div>

            {/* General Error Alert */}
            {generalError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 flex items-start gap-3 rounded-2xl bg-red-500/15 border border-red-500/30 p-4"
              >
                <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-300">{generalError}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#FDBA74] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full rounded-2xl border px-4 py-3 text-white placeholder-[#94A3B8] transition focus:outline-none focus:ring-1 bg-[#0F172A] ${
                    errors.name
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                      : 'border-[rgba(255,255,255,0.12)] focus:border-[#F97316] focus:ring-[#F97316]'
                  }`}
                  placeholder="Enter your name"
                />
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#FDBA74] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full rounded-2xl border px-4 py-3 text-white placeholder-[#94A3B8] transition focus:outline-none focus:ring-1 bg-[#0F172A] ${
                    errors.phone
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                      : 'border-[rgba(255,255,255,0.12)] focus:border-[#F97316] focus:ring-[#F97316]'
                  }`}
                  placeholder="10-digit phone number"
                  maxLength={10}
                />
                {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#FDBA74] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full rounded-2xl border px-4 py-3 text-white placeholder-[#94A3B8] transition focus:outline-none focus:ring-1 bg-[#0F172A] ${
                    errors.email
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                      : 'border-[rgba(255,255,255,0.12)] focus:border-[#F97316] focus:ring-[#F97316]'
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="state" className="block text-sm font-medium text-[#FDBA74] mb-2">
                  State
                </label>
                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={`w-full rounded-2xl border px-4 py-3 text-white transition focus:outline-none focus:ring-1 bg-[#0F172A] ${
                    errors.state
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                      : 'border-[rgba(255,255,255,0.12)] focus:border-[#F97316] focus:ring-[#F97316]'
                  }`}
                >
                  <option value="">Select your state</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                {errors.state && <p className="mt-1 text-xs text-red-400">{errors.state}</p>}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-gradient-to-r from-[#F97316] to-[#FB923C] px-6 py-3 font-semibold text-white shadow-glow transition hover:shadow-[0_20px_40px_-20px_rgba(249,115,22,0.8)] disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? 'Registering...' : 'Pre Register'}
              </motion.button>
            </form>

            <p className="mt-6 text-center text-xs text-[#94A3B8]">
              By registering, you agree to our Terms of Service and Privacy Policy
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreRegisterModal;
