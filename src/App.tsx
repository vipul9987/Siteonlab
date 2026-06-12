/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import HeroSection from './components/HeroSection';
import ValuesSection from './components/ValuesSection';
import Testimonials from './components/Testimonials';
import ServicesSection from './components/ServicesSection';
import PortfolioGrid from './components/PortfolioGrid';

// Newly added agency sections
import ProcessSection from './components/ProcessSection';
import TechStackSection from './components/TechStackSection';
import BlogSection from './components/BlogSection';
import ContactFormSection from './components/ContactFormSection';
import Footer from './components/Footer';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Services', href: '#services' },
    { name: 'Our Process', href: '#process' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Insights', href: '#blog' },
    { name: 'Contact', href: '#contact-form' },
  ];

  return (
    <div className="relative min-h-screen bg-[#07090e] text-white selection:bg-orange-500/30 selection:text-orange-200 flex flex-col justify-between">
      
      {/* Exact Top Minimal Logo Header */}
      <header className="w-full max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between relative z-50">
        <a href="#" className="flex items-center gap-1.5 font-display font-bold text-lg tracking-widest text-white">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          SYNTASK
        </a>
        
        {/* Desktop Nav list */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-[0.14em] text-gray-400 uppercase font-display">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="hover:text-white transition-colors duration-200">
              {item.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Hamburger menu */}
        <div className="flex items-center gap-4">
          <motion.a
            href="#contact-form"
            whileHover={{ scale: 1.05, borderColor: '#f97316' }}
            whileTap={{ scale: 0.98 }}
            className="hidden sm:inline-block px-5 py-2.5 rounded-full border border-gray-800 text-[11px] font-bold tracking-[0.14em] text-white uppercase font-display hover:text-orange-400 duration-300 transition-colors"
          >
            Get in Touch
          </motion.a>

          {/* Hamburger button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl border border-white/[0.05] bg-[#0c101a] text-gray-400 hover:text-white hover:border-gray-800 active:scale-95 transition-all outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Animated Nav Overlay Full Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 top-[76px] bg-[#080b13]/95 backdrop-blur-md border-b border-white/[0.04] z-40 py-8 px-6 flex flex-col gap-6 shadow-2xl"
          >
            <nav className="flex flex-col gap-5 text-sm font-semibold tracking-wider font-display uppercase">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-400 hover:text-white border-b border-white/[0.02] pb-3 transition-colors duration-200 block text-left"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="pt-2">
              <a
                href="#contact-form"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full block text-center py-3 bg-gradient-to-r from-orange-600 to-amber-500 text-white font-bold rounded-full text-xs uppercase tracking-widest font-display"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content layers */}
      <main className="flex-grow">
        {/* 1. Hero Section (with integrated LogoMarquee inside its flow) */}
        <HeroSection />

        {/* 2. Core Strategic Value Badges */}
        <ValuesSection />

        {/* 3. Branding Services Badging Matrix (Anchor: Services) */}
        <div id="services">
          <ServicesSection />
        </div>

        {/* 4. Strategic Methodological Timeline */}
        <ProcessSection />

        {/* 5. Interactive technology stack integrations */}
        <TechStackSection />

        {/* 6. High Fidelity grid portfolio showcasing */}
        <div id="portfolio">
          <PortfolioGrid />
        </div>

        {/* 7. Testimonial Client Asymmetric Quotes Grid */}
        <Testimonials />

        {/* 7.5 Latest insights blog slider carousel */}
        <BlogSection />

        {/* 9. Interactive Intake lead brief collection form */}
        <ContactFormSection />
      </main>

      {/* High Fidelity Agency Footer matching reference image layout */}
      <Footer />

    </div>
  );
}
