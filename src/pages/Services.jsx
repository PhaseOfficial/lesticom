import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import Layout from "../components/common/Layout";

// Import local images
import roofingImg from "../assets/builders working on roof.jpeg";
import servicesHero from "../assets/builder working on cieling.jpeg";
import ceilingImg from "../assets/cieling under construction.jpeg";
import skimmingImg from "../assets/indoor walls painting.png";
import tilingImg from "../assets/finished wall tilling.jpeg";
import paintingImg from "../assets/roof painting.jpeg";
import kitchenImg from "../assets/finished fitted kitchen cabinets .jpeg";
import tvStandsImg from "../assets/builder working on kitchen cabinets.jpeg";
import commercialImg from "../assets/builder working on kitchen counter.jpeg";
import processBg from "../assets/finnished stairs.jpeg";
import companyProfile from "../assets/Takaz Investments Company Profile 1.pdf";

const Services = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const services = [
    {
      id: "01",
      category: "Construction",
      title: "Roofing Installation & Repairs",
      description: "Our roofing solutions combine durability with architectural beauty. From brand new installations to critical structural repairs, we use weather-resistant materials designed to withstand the African sun and seasonal rains.",
      items: ["Concrete & Ceramic Tiling", "Leak Detection & Sealing", "Timber Roof Trusses"],
      image: roofingImg
    },
    {
      id: "02",
      category: "Finishing",
      title: "Ceiling: Suspended, PVC & Gypsum",
      description: "Transform your interior volume with our bespoke ceiling designs. We specialize in modern gypsum art, cost-effective PVC solutions, and professional suspended ceilings for commercial spaces.",
      items: ["Sound Insulation Properties", "Integrated Lighting Solutions", "Moisture Resistant Materials"],
      image: ceilingImg
    },
    {
      id: "03",
      category: "Finishing",
      title: "Wall Skimming",
      description: "Say goodbye to rough walls. Our skimming service provides a glass-smooth base for paint, ensuring a high-end luxury finish that reflects light perfectly throughout your home.",
      items: ["Ultra-Smooth Polish Finish", "Crack Repair & Reinforcement", "Decorative Wall Texturing"],
      image: skimmingImg
    },
    {
      id: "04",
      category: "Flooring",
      title: "Tiling: Kitchen, Bathroom & Floors",
      description: "Precision is our standard. We install ceramic, porcelain, and natural stone tiles with flawless alignment and durable grouting to create stunning kitchen backsplashes and high-traffic floor areas.",
      items: ["Precision Laser Alignment", "Waterproofing for Wet Areas", "Custom Mosaic Installations"],
      image: tilingImg
    },
    {
      id: "05",
      category: "Finishing",
      title: "Interior & Exterior Painting",
      description: "Our painting experts help you choose the right palette to evoke the right mood. We use premium weather-shield paints for exteriors and washable, high-pigment finishes for interiors.",
      items: ["Expert Color Consultation", "Weather-Shield Coating", "Eco-Friendly Low VOC Paints"],
      image: paintingImg
    },
    {
      id: "06",
      category: "Joinery",
      title: "Kitchen & Bedroom Cupboards",
      description: "Maximize your space with custom joinery. From sleek handleless kitchen cabinets to wall-to-wall fitted bedroom wardrobes, we build storage that is as beautiful as it is functional.",
      items: ["Soft-Close Technology", "Premium Hardware & Hinges", "Bespoke Space Planning"],
      image: kitchenImg
    },
    {
      id: "07",
      category: "Joinery",
      title: "TV Stands & Room Dividers",
      description: "Modern entertainment units and architectural room dividers designed to integrate technology and style into your living areas.",
      items: ["Integrated Cable Management", "Aesthetic Room Partitioning", "Custom Entertainment Units"],
      image: tvStandsImg
    },
    {
      id: "08",
      category: "Commercial",
      title: "Shop Fitting & Office Cupboards",
      description: "Professional retail and office interior solutions. We design and install durable shop fittings and organized office storage systems for modern businesses.",
      items: ["Retail Display Shelving", "Professional Office Cabinetry", "Reception & Counter Areas"],
      image: commercialImg
    }
  ];

  const processSteps = [
    { num: "1", title: "Consultation", desc: "We begin with a detailed meeting to understand your vision, requirements, and budget constraints." },
    { num: "2", title: "Site Inspection", desc: "Our experts conduct a physical assessment to evaluate structural conditions and take precise measurements." },
    { num: "3", title: "Planning & Quotation", desc: "We present a comprehensive project plan along with a transparent, itemized quote for your approval." },
    { num: "4", title: "Project Execution", desc: "Construction begins under strict supervision, adhering to the highest safety and quality standards." },
    { num: "5", title: "Final Finishing", desc: "The final touches are applied, followed by a joint walkthrough to ensure your complete satisfaction." }
  ];

  const faqs = [
    { q: "How long does a typical renovation take?", a: "The timeline depends on the project scope. A simple kitchen renovation might take 2-3 weeks, while a full home construction can span several months. We provide a detailed project schedule during the planning phase." },
    { q: "Is there a fee for site inspections and quotes?", a: "Initial quotes are generally free. However, for complex site inspections that require structural engineering assessments or travel beyond our primary service areas, a nominal consultation fee may apply, which is often credited back upon project approval." },
    { q: "Which areas do you provide services to?", a: "We currently operate primarily within Harare and surrounding metropolitan areas. For large-scale projects, we are open to discussing travel to other regions in Zimbabwe." },
    { q: "Do you provide the building materials?", a: "We offer both labor-only and full-package (labor + materials) options. We source materials from trusted premium suppliers to guarantee structural integrity and finishing quality, but we are happy to work with materials you have already purchased if they meet safety standards." }
  ];

  return (
    <Layout>
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Construction Hero" 
              className="w-full h-full object-cover grayscale-[20%]" 
              src={servicesHero} 
            />
            <div className="absolute inset-0 bg-primary/40 backdrop-brightness-75"></div>
          </div>
          <div className="relative z-10 text-center px-margin-mobile max-w-4xl text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display-lg text-display-lg-mobile md:text-display-lg font-bold leading-tight mb-stack-sm"
            >
              Our Construction Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-body-lg text-body-lg text-white/90 max-w-2xl mx-auto"
            >
              High-quality finishing and construction solutions tailored for your home or business. We build legacies, one detail at a time.
            </motion.p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-stack-lg container mx-auto px-margin-mobile md:px-margin-desktop relative">
          <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{
            backgroundImage: 'radial-gradient(#8E8E8E 0.5px, transparent 0.5px)',
            backgroundSize: '24px 24px'
          }}></div>
          <div className="space-y-stack-lg relative z-10">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                {...fadeInUp}
                className={`flex flex-col md:flex-row items-center gap-12 group ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-full md:w-1/2 overflow-hidden rounded-xl shadow-xl">
                  <img 
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700" 
                    src={service.image} 
                    alt={service.title} 
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-stack-sm text-left">
                  <span className="text-secondary font-label-lg uppercase tracking-widest">{service.id} / {service.category}</span>
                  <h2 className="font-headline-lg text-headline-lg text-primary">{service.title}</h2>
                  <p className="text-on-surface-variant font-body-md">{service.description}</p>
                  <ul className="space-y-2 text-on-surface">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary-container bg-primary rounded-full p-1 text-[16px]">check</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact"
                    className="inline-block mt-4 bg-secondary-container text-on-secondary-container px-8 py-3 rounded-lg font-label-lg hover:brightness-95 transition-all"
                  >
                    Request Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Timeline */}
        <section className="relative py-stack-lg overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={processBg} 
              alt="Process Background" 
              className="w-full h-full object-cover grayscale-[40%]"
            />
            <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
          </div>

          <div className="relative z-10 text-white">
            <div className="container mx-auto px-margin-mobile md:px-margin-desktop text-center mb-16">
              <motion.h2 {...fadeInUp} className="font-headline-lg text-headline-lg mb-4 uppercase tracking-tight font-bold">Our 5-Step Process</motion.h2>
              <motion.p {...fadeInUp} className="text-white/70 max-w-xl mx-auto">From the first handshake to the final polish, we ensure transparency and precision at every stage of the journey.</motion.p>
            </div>
            
            <div className="max-w-4xl mx-auto px-margin-mobile relative">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-secondary-fixed/30 -translate-x-1/2 hidden md:block"></div>
              <div className="space-y-16">
                {processSteps.map((step, index) => (
                  <motion.div 
                    key={step.num}
                    {...fadeInUp}
                    className={`relative flex flex-col md:flex-row items-center group ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                  >
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                      <h3 className="font-headline-md text-headline-md mb-2">{step.num}. {step.title}</h3>
                      <p className="text-white/60">{step.desc}</p>
                    </div>
                    <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-secondary text-primary font-bold rounded-full flex items-center justify-center -translate-x-1/2 z-10 border-4 border-primary shadow-xl">{step.num}</div>
                    <div className="md:w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-stack-lg container mx-auto px-margin-mobile md:px-margin-desktop text-left">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary">Frequently Asked Questions</h2>
            <p className="text-on-surface-variant font-body-md">Everything you need to know about starting your project with Takaz Homes.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-outline-variant/50 rounded-xl overflow-hidden bg-white">
                <button 
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-headline-md transition-colors hover:bg-surface-container-low"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.q}</span>
                  <motion.span 
                    animate={{ rotate: activeFaq === index ? 180 : 0 }}
                    className="material-symbols-outlined"
                  >
                    expand_more
                  </motion.span>
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-5 text-on-surface-variant bg-surface-bright border-t border-outline-variant/30">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-stack-lg bg-tertiary-container text-white text-center">
          <div className="container mx-auto px-margin-mobile">
            <motion.h2 {...fadeInUp} className="font-headline-lg text-headline-lg mb-6">Ready to start your dream project?</motion.h2>
            <motion.p {...fadeInUp} className="text-white/70 mb-10 max-w-2xl mx-auto">Our team of expert craftsmen and architectural specialists are ready to turn your vision into reality. Request a free consultation today.</motion.p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-secondary-fixed text-on-secondary-fixed px-10 py-4 rounded-lg font-label-lg font-bold hover:scale-105 transition-transform active:scale-95 text-center"
              >
                REQUEST A QUOTE
              </Link>
              <Link
                to="/contact"
                className="border border-white/30 text-white px-10 py-4 rounded-lg font-label-lg hover:bg-white/10 transition-colors text-center"
              >
                GET IN TOUCH
              </Link>
              <a
                href={companyProfile}
                download
                className="bg-white/20 border border-white/30 text-white px-10 py-4 rounded-lg font-label-lg hover:bg-white/30 transition-colors text-center flex items-center justify-center gap-2"
              >
                <FaDownload /> COMPANY PROFILE
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Services;
