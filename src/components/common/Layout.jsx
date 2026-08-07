import Header from "./Header";
import Footer from "./Footer";
import CookieConsent from "../Cookies";
import TechAesthetic from "./TechAesthetic";

const Layout = ({ children }) => {
  return (
    <div className="bg-brand-cream min-h-screen font-body-md selection:bg-brand-blue selection:text-white relative">
      {/* Soft brand-blue gradient overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05] bg-gradient-to-tr from-brand-blue via-brand-gold/30 to-transparent"></div>

      <TechAesthetic />

      <Header />

      <main className="min-h-screen relative z-10">{children}</main>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Layout;
