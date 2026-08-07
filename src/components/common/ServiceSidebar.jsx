import { Link, useLocation } from "react-router-dom";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

const allServices = [
  { name: "Cyber Security", slug: "cyber-security" },
  { name: "IT Consultancy", slug: "it-consultancy" },
  { name: "App Development", slug: "app-development" },
  { name: "Secure Hosting", slug: "secure-hosting" },
  { name: "SMS Services", slug: "sms" },
  { name: "AI Training", slug: "ai-training" },
  { name: "Hardware Sales", slug: "hardware" },
  { name: "UI/UX Design", slug: "ui-ux-design" },
];

const ServiceSidebar = ({
  activeSlug,
  openingHours = [
    { day: "Mon – Friday", hours: "08.30 AM – 5.00 PM" },
    { day: "Saturday", hours: "09.00 AM – 4.00 PM" },
    { day: "Sunday", hours: "Closed" },
    { day: "Emergency", hours: "24 hours" },
  ],
  phone = "+263 77 522 2513",
}) => {
  return (
    <aside className="lg:sticky lg:top-28 space-y-6">
      {/* All Services card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <h3 className="font-headline-md text-lg text-brand-charcoal mb-4 pb-3 border-b border-slate-100">
          All Services
        </h3>
        <ul className="space-y-2">
          {allServices.map((svc) => {
            const isActive = svc.slug === activeSlug;
            return (
              <li key={svc.slug}>
                <Link
                  to={`/services/${svc.slug}`}
                  className={`block px-3 py-2 rounded-lg text-sm transition-all ${
                    isActive
                      ? "bg-brand-blue text-white font-semibold shadow-md"
                      : "text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
                  }`}
                >
                  {svc.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Opening Hours */}
      <div className="bg-brand-charcoal text-white rounded-2xl p-6 shadow-sm">
        <h3 className="font-headline-md text-lg mb-4 pb-3 border-b border-white/10">
          Opening Hours
        </h3>
        <ul className="space-y-2 text-sm">
          {openingHours.map((oh, i) => (
            <li
              key={i}
              className="flex justify-between items-center text-slate-300"
            >
              <span className="text-white font-medium">{oh.day}</span>
              <span className="text-slate-400">{oh.hours}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Need Help */}
      <div className="bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white rounded-2xl p-6 shadow-md">
        <p className="text-xs uppercase tracking-widest text-brand-gold-light font-semibold mb-2">
          Need Help? Call Here
        </p>
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="block text-2xl font-bold hover:text-brand-gold-light transition-colors"
        >
          {phone}
        </a>
        <a
          href={`https://wa.me/${phone.replace(/[^0-9]/g, "")}`}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
        >
          <FaWhatsapp /> Chat on WhatsApp
        </a>
      </div>
    </aside>
  );
};

export default ServiceSidebar;
