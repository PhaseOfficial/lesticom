import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../../assets/lesticom-logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-slate-300 w-full mt-auto relative overflow-hidden">
      {/* Subtle African pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z'/%3E%3Cpath d='M30 10L50 30L30 50L10 30Z'/%3E%3Ccircle cx='30' cy='30' r='8'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative px-margin-mobile md:px-margin-desktop py-stack-lg">
        <div className="max-w-container-max-width mx-auto grid grid-cols-1 md:grid-cols-4 gap-stack-lg">
          {/* Brand column */}
          <div className="space-y-stack-sm md:col-span-2 max-w-md">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Lesticom"
                className="h-12 w-auto bg-white/95 rounded p-1"
              />
              <span className="font-headline-md text-xl text-white tracking-wide">
                LESTICOM
              </span>
            </div>
            <p className="font-body-md text-sm text-slate-400 leading-relaxed">
              Lesticom provides cutting-edge digital solutions including AI
              training, software &amp; app development, bulk SMS, secure
              hosting, IT consultancy, and quality hardware sales — empowering
              businesses across Africa.
            </p>

            <div className="space-y-2 pt-2 text-sm">
              <div className="flex items-start gap-2 text-slate-400">
                <FaMapMarkerAlt className="text-brand-gold mt-1 shrink-0" />
                <span>
                  275 Herbert Chitepo and 6th, Harare, Zimbabwe
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <FaEnvelope className="text-brand-gold shrink-0" />
                <a
                  href="mailto:support@lesticom.africa"
                  className="hover:text-brand-gold-light transition-colors"
                >
                  support@lesticom.africa
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <FaPhone className="text-brand-gold shrink-0" />
                <a
                  href="tel:+263775222513"
                  className="hover:text-brand-gold-light transition-colors"
                >
                  +263 77 522 2513
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="font-label-lg text-sm text-white uppercase tracking-widest mb-3 block">
              Quick Links
            </span>
            <div className="flex flex-col gap-2 text-sm">
              <Link
                to="/about"
                className="text-slate-400 hover:text-brand-gold-light transition-colors"
              >
                About Lesticom
              </Link>
              <Link
                to="/services"
                className="text-slate-400 hover:text-brand-gold-light transition-colors"
              >
                Our Services
              </Link>
              <Link
                to="/faq"
                className="text-slate-400 hover:text-brand-gold-light transition-colors"
              >
                FAQs
              </Link>
              <Link
                to="/contact"
                className="text-slate-400 hover:text-brand-gold-light transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/privacy-policy"
                className="text-slate-400 hover:text-brand-gold-light transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-slate-400 hover:text-brand-gold-light transition-colors"
              >
                Terms &amp; Conditions
              </Link>
            </div>
          </div>

          {/* Services + Social */}
          <div>
            <span className="font-label-lg text-sm text-white uppercase tracking-widest mb-3 block">
              Services
            </span>
            <div className="flex flex-col gap-2 text-sm">
              <Link
                to="/services/cyber-security"
                className="text-slate-400 hover:text-brand-gold-light transition-colors"
              >
                Cyber Security
              </Link>
              <Link
                to="/services/it-consultancy"
                className="text-slate-400 hover:text-brand-gold-light transition-colors"
              >
                IT Consultancy
              </Link>
              <Link
                to="/services/ai-training"
                className="text-slate-400 hover:text-brand-gold-light transition-colors"
              >
                AI Training
              </Link>
              <Link
                to="/services/sms"
                className="text-slate-400 hover:text-brand-gold-light transition-colors"
              >
                Bulk SMS
              </Link>
              <Link
                to="/services/hardware"
                className="text-slate-400 hover:text-brand-gold-light transition-colors"
              >
                Hardware Sales
              </Link>
            </div>

            <span className="font-label-lg text-sm text-white uppercase tracking-widest mt-6 mb-3 block">
              Follow Us
            </span>
            <div className="flex gap-2">
              {[
                {
                  name: "Facebook",
                  href: "https://www.facebook.com/profile.php?id=61565038980422",
                  icon: <FaFacebook />,
                },
                { name: "Twitter", href: "https://www.twitter.com/", icon: <FaTwitter /> },
                { name: "YouTube", href: "https://www.youtube.com/", icon: <FaYoutube /> },
                { name: "Instagram", href: "https://www.instagram.com/", icon: <FaInstagram /> },
                { name: "WhatsApp", href: "https://wa.me/263775222513", icon: <FaWhatsapp /> },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-slate-300 hover:bg-brand-blue hover:text-white transition-all"
                  title={s.name}
                >
                  <span className="text-base">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-container-max-width mx-auto border-t border-white/10 mt-stack-lg pt-stack-md flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xs text-slate-500">
            <span className="uppercase tracking-widest">
              © {year} LESTICOM WIRELESS. ALL RIGHTS RESERVED.
            </span>
            <span className="hidden md:block opacity-30">|</span>
            <a
              href="https://cipz.pfms.gov.zw:8090/Info/Checkacompany?=38482A0242025"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase tracking-widest hover:text-brand-gold-light transition-colors"
            >
              CIPZ Verified Company
            </a>
          </div>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-blue transition-all"
            aria-label="Scroll to top"
          >
            <span className="material-symbols-outlined text-white">
              arrow_upward
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
