import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

// Service detail pages
import CyberSecurity from "./pages/CyberSecurity";
import Consultancy from "./pages/Consultancy";
import AppDev from "./pages/AppDev";
import Hosting from "./pages/Hosting";
import Intelligence from "./pages/Intelligence";
import Hardware from "./pages/Hardware";
import SmsServices from "./pages/SmsServices";
import UxDesign from "./pages/UxDesign";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms />} />

      {/* Service detail pages */}
      <Route path="/services/cyber-security" element={<CyberSecurity />} />
      <Route path="/services/it-consultancy" element={<Consultancy />} />
      <Route path="/services/app-development" element={<AppDev />} />
      <Route path="/services/secure-hosting" element={<Hosting />} />
      <Route path="/services/ai-training" element={<Intelligence />} />
      <Route path="/services/hardware" element={<Hardware />} />
      <Route path="/services/sms" element={<SmsServices />} />
      <Route path="/services/ui-ux-design" element={<UxDesign />} />

      <Route
        path="*"
        element={
          <div className="text-center mt-40 text-2xl font-headline-lg text-primary uppercase tracking-widest">
            404 — Page Not Found
          </div>
        }
      />
    </Routes>
  );
};

export default App;
