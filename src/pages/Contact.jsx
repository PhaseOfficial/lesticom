import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";
import contactHero from "../assets/finished kitchen with counters.jpeg";
import mapPlaceholder from "../assets/finished stairs.jpeg";
import Layout from "../components/common/Layout";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "Residential Construction",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value, name } = e.target;
    // Handle both select (no id) and input (with id)
    const fieldName = id || name;
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const whatsappNumber = "263715818857";
    const text = `*New Inquiry from Takaz Homes Website*%0A%0A*Name:* ${formData.fullName}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Service:* ${formData.service}%0A%0A*Message:* ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const contactInfo = [
    {
      icon: "location_on",
      title: "Location",
      details: "849 Rujeko Glendale",
      subDetails: "Glendale, Zimbabwe",
    },
    {
      icon: "call",
      title: "Contact",
      details: "+263 71 581 8857",
      subDetails:
        "+263 78 773 4588 | +263 77 106 5327",
      whatsapp: true,
    },
    {
      icon: "mail",
      title: "Email",
      details: "talent@takazhomes.co.zw",
      subDetails: "sales@takazhomes.co.zw | marketing@takazhomes.co.zw",
    },
    {
      icon: "schedule",
      title: "Working Hours",
      details: "Mon - Fri: 08:00 - 17:00",
      subDetails: "Saturday: 09:00 - 13:00",
    },
  ];

  return (
    <Layout>
      <main className="bg-white text-gray-900 overflow-hidden text-left">
        
        {/* HERO SECTION */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={contactHero}
              alt="Construction workers"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60"></div>

            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(#ffffff 0.5px, transparent 0.5px)",
                backgroundSize: "32px 32px",
              }}
            ></div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Get In Touch
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-lg md:text-xl text-gray-200 leading-relaxed"
            >
              Crafting exceptional homes and refined interior finishes across
              Zimbabwe with precision and professionalism.
            </motion.p>
          </div>
        </section>

        {/* CONTACT CARDS */}
        <section className="relative z-20 -mt-20 px-4 md:px-10 mb-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-red-600 text-3xl">
                    {info.icon}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {info.title}
                </h3>

                <p className="text-gray-700 font-medium">{info.details}</p>

                <p className="text-gray-500 mt-2 leading-relaxed text-sm">
                  {info.subDetails}
                </p>

                {info.whatsapp && (
                  <div className="flex items-center gap-2 mt-4 text-green-600">
                    <span className="material-symbols-outlined text-sm">
                      chat
                    </span>
                    <span className="text-sm font-medium">
                      For inquiries, send a detailed message via WhatsApp
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* FORM + IMAGE */}
        <section className="bg-gray-950 py-24 px-4 md:px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* FORM */}
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-bold text-white mb-4">
                Send Us A Message
              </h2>

              <p className="text-gray-400 mb-10 text-lg">
                Fill in the form below and our team will contact you within 24
                hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full bg-transparent border border-gray-700 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500"
                  />

                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full bg-transparent border border-gray-700 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500"
                  />
                </div>

                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full bg-transparent border border-gray-700 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500"
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-gray-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-500"
                >
                  <option className="text-black" value="Residential Construction">
                    Residential Construction
                  </option>
                  <option className="text-black" value="Interior Finishing">
                    Interior Finishing
                  </option>
                  <option className="text-black" value="Commercial Refurbishment">
                    Commercial Refurbishment
                  </option>
                  <option className="text-black" value="Architectural Planning">
                    Architectural Planning
                  </option>
                </select>

                <textarea
                  id="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="w-full bg-transparent border border-gray-700 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 resize-none focus:outline-none focus:border-red-500"
                ></textarea>

                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 flex items-center gap-3"
                >
                  SEND VIA WHATSAPP
                  <span className="material-symbols-outlined">send</span>
                </button>
              </form>
            </motion.div>

            {/* IMAGE SECTION */}
            <motion.div
              {...fadeInUp}
              className="relative rounded-3xl overflow-hidden min-h-[500px] shadow-2xl"
            >
              <img
                src={mapPlaceholder}
                alt="Takaz Homes"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-red-600 flex items-center justify-center shadow-2xl animate-pulse">
                  <span className="material-symbols-outlined text-white text-5xl">
                    location_on
                  </span>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-5 shadow-xl flex items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-gray-900">
                    849 Rujeko Glendale
                  </p>

                  <p className="text-gray-500 text-sm">
                    Glendale, Zimbabwe
                  </p>
                </div>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-red-600 font-semibold hover:underline"
                >
                  Open Maps
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Social Media Hub */}
        <section className="py-24 px-4 md:px-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2
              {...fadeInUp}
              className="text-4xl font-bold mb-12"
            >
              Follow Our Journey
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-5">
              {[
                { name: "FACEBOOK", link: "https://www.facebook.com/talent.karawe", icon: <FaFacebook className="text-2xl" /> },
                { name: "TIKTOK", link: "https://tiktok.com/@talentkarawe431", icon: <FaTiktok className="text-2xl" /> },
                { name: "WHATSAPP CHANNEL", link: "https://whatsapp.com/channel/0029VaFL8qjLSmbZz8LC4J1n", icon: <FaWhatsapp className="text-2xl" /> },
                { name: "WHATSAPP GROUP", link: "https://chat.whatsapp.com/BxHHHYUjiuwHNE2Sn70Tqn?mode=gi_t", icon: <FaWhatsapp className="text-2xl" /> }
              ].map(
                (platform, i) => (
                  <motion.a
                    key={platform.name}
                    {...fadeInUp}
                    transition={{ delay: i * 0.1 }}
                    href={platform.link}
                    target="_blank"
                    rel="noreferrer"
                    className="px-8 py-4 rounded-full border border-gray-300 hover:border-red-600 hover:bg-red-50 transition-all flex items-center gap-3"
                  >
                    <span className="text-red-600">
                      {platform.icon}
                    </span>

                    <span className="font-semibold">{platform.name}</span>
                  </motion.a>
                )
              )}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-4 md:px-10 pb-24">
          <motion.div
            {...fadeInUp}
            className="max-w-7xl mx-auto bg-red-600 rounded-[40px] p-10 md:p-20 text-center relative overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(#ffffff 0.5px, transparent 0.5px)",
                backgroundSize: "30px 30px",
              }}
            ></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Ready To Build Your Dream?
              </h2>

              <p className="text-red-100 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
                Partner with Takaz Homes Construction for quality workmanship,
                modern finishes, and reliable project delivery.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-5">
                <Link
                  to="/contact"
                  className="bg-white text-red-600 px-10 py-4 rounded-xl font-bold hover:scale-95 transition-transform"
                >
                  GET A QUOTE
                </Link>

                <button className="border border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-red-600 transition-all">
                  VIEW OUR PROJECTS
                </button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </Layout>
  );
};

export default Contact;
