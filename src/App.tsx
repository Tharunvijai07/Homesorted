import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import WorkerVerification from './components/WorkerVerification';
import Features from './components/Features';
import AppPreview from './components/AppPreview';
import CustomerReviews from './components/CustomerReviews';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import PreRegisterModal from './components/PreRegisterModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="App bg-[var(--bg)] text-[var(--text)]">
      <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <WorkerVerification />
        <Features />
        <AppPreview />
        <CustomerReviews />
        <Testimonials />
        <FAQ />
        <FinalCTA isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </main>
      <Footer />
      <PreRegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <a
        href="#services"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-[#F97316] px-5 py-4 text-sm font-semibold text-white shadow-glow transition-transform duration-200 hover:-translate-y-1 md:hidden"
        aria-label="Book a nearby worker now"
      >
        
        Book now
      </a>
    </div>
  );
}

export default App;
