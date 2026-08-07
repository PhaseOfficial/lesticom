import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../../assets/lesticom-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const primaryLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services", hasSubmenu: true },
    { name: "FAQs", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceLinks = [
    { name: "Cyber Security", path: "/services/cyber-security" },
    { name: "IT Consultancy", path: "/services/it-consultancy" },
    { name: "App Development", path: "/services/app-development" },
    { name: "Secure Hosting", path: "/services/secure-hosting" },
    { name: "AI Training", path: "/services/ai-training" },
    { name: "Hardware Sales", path: "/services/hardware" },
    { name: "SMS Services", path: "/services/sms" },
    { name: "UI/UX Design", path: "/services/ui-ux-design" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61565038980422",
      icon: <FaFacebook />,
    },
    {
      name: "Twitter",
      href: "https://www.twitter.com/",
      icon: <FaTwitter />,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/",
      icon: <FaYoutube />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/",
      icon: <FaInstagram />,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/263775222513",
      icon: <FaWhatsapp />,
    },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm h-16 flex justify-between items-center px-4 md:px-10">
      {/* Logo + Mobile Menu */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleMenu}
          className="md:hidden text-slate-900 flex items-center justify-center p-2 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl cursor-pointer">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>

        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Lesticom"
            className="h-12 w-auto object-contain"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 items-center">
        {primaryLinks.map((link) =>
          link.hasSubmenu ? (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-[16px] font-medium transition-colors duration-300 border-b-2 pb-1 flex items-center gap-1 ${
                    isActive
                      ? "text-brand-blue border-brand-blue"
                      : "text-slate-700 border-transparent hover:text-brand-blue"
                  }`
                }
              >
                {link.name}
                <span className="material-symbols-outlined text-base">
                  expand_more
                </span>
              </NavLink>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full mt-2 w-64 bg-white border border-slate-200 shadow-xl rounded-lg p-2 z-50"
                  >
                    {serviceLinks.map((s) => (
                      <NavLink
                        key={s.name}
                        to={s.path}
                        className={({ isActive }) =>
                          `block px-4 py-2 text-sm rounded-md transition-colors ${
                            isActive
                              ? "bg-brand-blue text-white"
                              : "text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
                          }`
                        }
                      >
                        {s.name}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-[16px] font-medium transition-colors duration-300 border-b-2 pb-1 ${
                  isActive
                    ? "text-brand-blue border-brand-blue"
                    : "text-slate-700 border-transparent hover:text-brand-blue"
                }`
              }
            >
              {link.name}
            </NavLink>
          )
        )}
      </nav>

      {/* Desktop CTA */}
      <Link
        to="/contact"
        className="hidden md:flex bg-brand-blue hover:bg-brand-blue-dark text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors shadow-md"
      >
        GET A QUOTE
      </Link>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] md:hidden"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-screen w-[85%] max-w-sm bg-white shadow-2xl z-[100] md:hidden flex flex-col p-6 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-8">
                <Link to="/" onClick={toggleMenu} className="flex items-center gap-2">
                  <img src={logo} alt="Lesticom" className="h-12 w-auto" />
                </Link>
                <button
                  onClick={toggleMenu}
                  className="text-slate-900 hover:text-brand-blue transition-colors"
                  aria-label="Close menu"
                >
                  <span className="material-symbols-outlined text-3xl">
                    close
                  </span>
                </button>
              </div>

              <nav className="flex flex-col flex-1 gap-1">
                {primaryLinks.map((link) => (
                  <div key={link.name} className="border-b border-slate-100">
                    <NavLink
                      to={link.path}
                      onClick={toggleMenu}
                      className={({ isActive }) =>
                        `text-lg py-3 w-full text-left flex justify-between items-center transition-colors ${
                          isActive
                            ? "text-brand-blue font-semibold"
                            : "text-slate-800 hover:text-brand-blue"
                        }`
                      }
                    >
                      {link.name}
                      <span className="material-symbols-outlined text-sm text-slate-400">
                        arrow_forward
                      </span>
                    </NavLink>
                    {link.hasSubmenu && (
                      <div className="pl-4 pb-2 space-y-1">
                        {serviceLinks.map((s) => (
                          <NavLink
                            key={s.name}
                            to={s.path}
                            onClick={toggleMenu}
                            className={({ isActive }) =>
                              `block text-sm py-1 transition-colors ${
                                isActive
                                  ? "text-brand-blue font-semibold"
                                  : "text-slate-600 hover:text-brand-blue"
                              }`
                            }
                          >
                            {s.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="py-6 flex flex-col gap-3">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Follow Us
                </p>
                <div className="flex gap-3 flex-wrap">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-blue hover:text-white transition-all"
                      title={social.name}
                    >
                      <span className="text-lg">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-slate-200">
                <Link
                  to="/contact"
                  onClick={toggleMenu}
                  className="flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white p-4 rounded-xl shadow-lg text-sm font-bold uppercase transition-colors"
                >
                  Get A Quote
                </Link>
                <a
                  href="https://cipz.pfms.gov.zw:8090/Info/Checkacompany?=38482A0242025"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center mt-3 text-xs text-slate-500 hover:text-brand-blue"
                >
                  CIPZ Verified Company
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
