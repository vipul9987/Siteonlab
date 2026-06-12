import { motion } from 'motion/react';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    'Branding',
    'SEO Services',
    'PPC Management',
    'Social Media Marketing',
    'Advertising Services',
    'Website Design',
    'Website Development',
    'WordPress Development',
    'Shopify Development',
    'eCommerce Development',
    'Content Writing',
  ];

  const industries = [
    'Healthcare',
    'Travel & Hospitality',
    'Law Firms',
    'E-commerce & Retail',
    'Jewellery',
  ];

  const locations = [
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Hyderabad',
    'Chennai',
    'Kolkata',
    'Pune',
    'Jaipur',
  ];

  const quickLinks = [
    'Home',
    'About Us',
    'Contact us',
    'Blogs',
    'Case Studies',
  ];

  return (
    <footer className="w-full bg-[#05060a] border-t border-white/[0.03] pt-20 pb-8 text-gray-400 font-sans selection:bg-orange-500/30">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Five columns layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col items-start gap-6 lg:col-span-1">
            <div className="flex items-center gap-2 font-display font-bold text-xl tracking-wider text-white">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
              SYNTASK Lab
            </div>
            <p className="text-sm text-gray-400/90 leading-relaxed font-light font-sans">
              Syntask Lab is a full-service digital marketing agency helping businesses grow with SEO, PPC, website development, and performance marketing.
            </p>
            {/* Social media icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-fb-icon"
                className="w-9 h-9 rounded bg-[#0c0e16] border border-white/[0.05] hover:border-orange-500/40 hover:text-orange-500 flex items-center justify-center transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-ig-icon"
                className="w-9 h-9 rounded bg-[#0c0e16] border border-white/[0.05] hover:border-orange-500/40 hover:text-orange-500 flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-li-icon"
                className="w-9 h-9 rounded bg-[#0c0e16] border border-white/[0.05] hover:border-orange-500/40 hover:text-orange-500 flex items-center justify-center transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h4 className="text-white font-semibold font-display text-sm tracking-wide mb-6">Our Services</h4>
            <ul className="flex flex-col gap-3 text-xs font-light">
              {services.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="hover:text-orange-400 transition-colors duration-200 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h4 className="text-white font-semibold font-display text-sm tracking-wide mb-6">Industries</h4>
            <ul className="flex flex-col gap-3 text-xs font-light">
              {industries.map((item) => (
                <li key={item}>
                  <a
                    href="#portfolio"
                    className="hover:text-orange-400 transition-colors duration-200 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Locations */}
          <div>
            <h4 className="text-white font-semibold font-display text-sm tracking-wide mb-6">Locations</h4>
            <ul className="flex flex-col gap-3 text-xs font-light">
              {locations.map((item) => (
                <li key={item}>
                  <span className="text-gray-400 hover:text-orange-400 transition-colors duration-200 cursor-default block">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Quick Links */}
          <div>
            <h4 className="text-white font-semibold font-display text-sm tracking-wide mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-xs font-light">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href={item.toLowerCase() === 'home' ? '#' : `#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-orange-400 transition-colors duration-200 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact credentials mid-row */}
        <div className="border-t border-white/[0.04] py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1: Phone 1 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/[0.015] border border-white/[0.04] flex items-center justify-center shrink-0 text-orange-500">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <a href="tel:+447441466959" className="text-white font-semibold font-display text-sm hover:text-orange-400 transition-colors duration-200 block">
                +447441466959
              </a>
              <p className="text-[11px] text-gray-500 leading-normal mt-1 font-light">
                Call us for the best solutions for your business to grow more.
              </p>
            </div>
          </div>

          {/* Card 2: Phone 2 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/[0.015] border border-white/[0.04] flex items-center justify-center shrink-0 text-orange-500">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <a href="tel:+918799001675" className="text-white font-semibold font-display text-sm hover:text-orange-400 transition-colors duration-200 block">
                +91 87990 01675
              </a>
              <p className="text-[11px] text-gray-500 leading-normal mt-1 font-light">
                Call us for the best solutions for your business to grow more.
              </p>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/[0.015] border border-white/[0.04] flex items-center justify-center shrink-0 text-orange-500">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <a href="mailto:hello@siteonlab.com" className="text-white font-semibold font-display text-sm hover:text-orange-400 transition-colors duration-200 block">
                hello@siteonlab.com
              </a>
              <p className="text-[11px] text-gray-500 leading-normal mt-1 font-light">
                Get quote via email
              </p>
            </div>
          </div>

          {/* Card 4: Address */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/[0.015] border border-white/[0.04] flex items-center justify-center shrink-0 text-orange-500">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-white font-semibold font-display text-sm block">
                Address
              </span>
              <p className="text-[11px] text-gray-500 leading-normal mt-1 font-light">
                F1, Bhagwati Complex, Near But Mata Mandir, Vejalpur, Ahmedabad, 380051
              </p>
            </div>
          </div>
        </div>

        {/* Bottom micro lines */}
        <div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-gray-500 font-light">
            &copy; {currentYear} Syntask Lab All Right reserved.
          </p>
          <div className="flex items-center gap-6 text-gray-500 font-light">
            <a href="#sitemap" className="hover:text-white transition-colors duration-200">Sitemap</a>
            <a href="#privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
