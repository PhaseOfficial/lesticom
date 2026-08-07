import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaTiktok, FaWhatsapp, FaDownload } from "react-icons/fa";
import logo from "../../assets/Takaz Homes Logo Design.png";
import companyProfile from "../../assets/Takaz Investments Company Profile 1.pdf";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "https://www.facebook.com/talent.karawe", icon: <FaFacebook /> },
    { name: "TikTok", href: "https://tiktok.com/@talentkarawe431", icon: <FaTiktok /> },
    { name: "WhatsApp Channel", href: "https://whatsapp.com/channel/0029VaFL8qjLSmbZz8LC4J1n", icon: <FaWhatsapp /> },
    { name: "WhatsApp Group", href: "https://chat.whatsapp.com/BxHHHYUjiuwHNE2Sn70Tqn?mode=gi_t", icon: <FaWhatsapp /> },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm h-16 flex justify-between items-center px-4 md:px-10">
      
      {/* Logo + Mobile Menu */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-900 flex items-center justify-center p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <span className="material-symbols-outlined text-2xl cursor-pointer">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>

        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Takaz Homes" className="h-20 w-auto" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `text-[16px] font-medium transition-colors duration-300 border-b-2 pb-1 ${
                isActive
                  ? "text-red-600 border-red-600"
                  : "text-gray-700 border-transparent hover:text-red-600"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      {/* Desktop CTA */}
      <Link
        to="/contact"
        className="hidden md:flex bg-red-600 text-white text-sm font-semibold px-6 py-3 rounded-lg hover:scale-95 transition-transform shadow-md"
      >
        GET A QUOTE
      </Link>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] md:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-screen w-[80%] max-w-sm bg-white shadow-2xl z-[100] md:hidden flex flex-col p-8"
            >
              
              {/* Sidebar Header */}
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-2">
                  <img
                    src={logo}
                    alt="Takaz Homes"
                    className="h-20 w-auto"
                  />
                </div>

                <button
                  onClick={toggleMenu}
                  className="text-black hover:text-red-600 transition-colors"
                >
                  <span className="material-symbols-outlined text-3xl">
                    close
                  </span>
                </button>
              </div>

              {/* Sidebar Navigation */}
              <nav className="flex flex-col flex-1 gap-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `text-2xl py-4 border-b border-gray-200 w-full text-left flex justify-between items-center transition-colors ${
                        isActive
                          ? "text-red-600 font-semibold"
                          : "text-gray-800 hover:text-red-600"
                      }`
                    }
                  >
                    {link.name}

                    <span className="material-symbols-outlined text-sm text-gray-400">
                      arrow_forward
                    </span>
                  </NavLink>
                ))}
              </nav>

              {/* Social Media Section in Sidebar */}
              <div className="py-8 flex flex-col gap-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Follow Us</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-all"
                      title={social.name}
                    >
                      <span className="text-xl">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Company Profile Download */}
              <a
                href={companyProfile}
                download
                className="flex items-center gap-2 bg-red-100 text-red-700 p-4 rounded-lg hover:bg-red-200 hover:text-red-800 transition-all font-semibold text-sm"
              >
                <FaDownload className="text-lg" />
                Download Company Profile
              </a>

              {/* Sidebar CTA */}
              <div className="mt-auto pt-8 border-t border-gray-200">
                <Link
                  to="/contact"
                  onClick={toggleMenu}
                  className="flex items-center gap-4 bg-red-600 text-white p-5 rounded-2xl shadow-xl text-sm font-bold uppercase text-center justify-center hover:scale-[0.98] transition-transform"
                >
                  START YOUR QUOTE
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;