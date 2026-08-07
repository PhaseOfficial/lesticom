import { Link } from "react-router-dom";
import { FaFacebook, FaTiktok, FaWhatsapp, FaDownload } from "react-icons/fa";
import logo from "../../assets/Takaz Homes Logo Design.png";
import companyProfile from "../../assets/Takaz Investments Company Profile 1.pdf";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-tertiary-container text-on-tertiary-container w-full mt-auto">
      <div className="bg-neutral-900/5 backdrop-contrast-125 px-margin-mobile md:px-margin-desktop py-stack-lg">
        <div className="max-w-container-max-width mx-auto flex flex-col md:flex-row justify-between items-start gap-gutter">
          <div className="space-y-stack-sm max-w-md">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Takaz Homes" className="h-10 w-auto brightness-0 invert" />
              <span className="font-headline-md text-headline-md text-white">TAKAZ HOMES</span>
            </div>
            <p className="font-body-md text-body-md opacity-70 text-white/80">
              Zimbabwe's premier construction finishing experts. Specializing in high-precision skimming, tiling, and modern architecture.
            </p>
            <div className="pt-2">
              <a href="mailto:sales@takazhomes.co.zw" className="text-secondary-fixed hover:underline font-label-md">
                sales@takazhomes.co.zw
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-stack-lg md:grid-cols-3">
            <div className="flex flex-col gap-2">
              <span className="font-label-lg text-label-lg text-white uppercase tracking-widest mb-2">Navigation</span>
              <Link to="/" className="font-label-sm text-label-sm text-secondary-fixed font-bold">Home</Link>
              <Link to="/services" className="font-label-sm text-label-sm text-on-tertiary-container/70 hover:text-secondary-fixed transition-colors">Services</Link>
              <Link to="/contact" className="font-label-sm text-label-sm text-on-tertiary-container/70 hover:text-secondary-fixed transition-colors">Contact</Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-label-lg text-label-lg text-white uppercase tracking-widest mb-2">Connect</span>
              <a className="font-label-sm text-label-sm text-on-tertiary-container/70 hover:text-secondary-fixed transition-colors flex items-center gap-2" href="https://www.facebook.com/talent.karawe" target="_blank" rel="noreferrer">
                <FaFacebook /> Facebook
              </a>
              <a className="font-label-sm text-label-sm text-on-tertiary-container/70 hover:text-secondary-fixed transition-colors flex items-center gap-2" href="https://tiktok.com/@talentkarawe431" target="_blank" rel="noreferrer">
                <FaTiktok /> TikTok
              </a>
              <a className="font-label-sm text-label-sm text-on-tertiary-container/70 hover:text-secondary-fixed transition-colors flex items-center gap-2" href="https://whatsapp.com/channel/0029VaFL8qjLSmbZz8LC4J1n" target="_blank" rel="noreferrer">
                <FaWhatsapp /> WhatsApp Channel
              </a>
              <a className="font-label-sm text-label-sm text-on-tertiary-container/70 hover:text-secondary-fixed transition-colors flex items-center gap-2" href="https://chat.whatsapp.com/BxHHHYUjiuwHNE2Sn70Tqn?mode=gi_t" target="_blank" rel="noreferrer">
                <FaWhatsapp /> WhatsApp Group
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-label-lg text-label-lg text-white uppercase tracking-widest mb-2">Resources</span>
              <a href={companyProfile} download className="font-label-sm text-label-sm text-on-tertiary-container/70 hover:text-secondary-fixed transition-colors flex items-center gap-2">
                <FaDownload /> Company Profile
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-container-max-width mx-auto border-t border-white/10 mt-stack-lg pt-stack-md flex flex-col md:flex-row justify-between items-center gap-gutter text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <span className="font-label-sm text-label-sm opacity-50 uppercase tracking-widest text-white/60">
              © 2026 TAKAZ HOMES CONSTRUCTION. ALL RIGHTS RESERVED.
            </span>
            <span className="hidden md:block opacity-30 text-white">|</span>
            <a 
              href="https://www.redcupseries.co.zw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-label-sm text-label-sm opacity-50 hover:opacity-100 uppercase tracking-widest text-white/60 transition-opacity"
            >
              MADE BY RED CUP SERIES
            </a>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary transition-all"
            >
              <span className="material-symbols-outlined text-white">arrow_upward</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
