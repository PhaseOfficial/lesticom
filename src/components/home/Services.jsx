import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PaintStroke from "../common/PaintStroke";

const Services = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const services = [
    {
      icon: "roofing",
      title: "Roofing",
      description: "Durable, high-end roofing solutions that withstand the elements while enhancing curb appeal."
    },
    {
      icon: "architecture",
      title: "Ceiling Installation",
      description: "From classic board ceilings to modern bulkheads and intricate decorative designs."
    },
    {
      icon: "format_paint",
      title: "Wall Skimming",
      description: "Achieving the smoothest mirror-finish surfaces for a truly premium interior feel."
    },
    {
      icon: "grid_view",
      title: "Floor & Wall Tiling",
      description: "Precision alignment and expert installation of ceramic, porcelain, and natural stone tiles."
    },
    {
      icon: "imagesearch_roller",
      title: "House Painting",
      description: "Premium finishing using high-quality paints and meticulous surface preparation."
    },
    {
      icon: "kitchen",
      title: "Kitchens & Wardrobes",
      description: "Custom-fitted cabinetry for kitchens and bedrooms, blending storage with sleek design."
    },
    {
      icon: "tv",
      title: "TV Stands & Dividers",
      description: "Modern entertainment units and functional room dividers to enhance your living space."
    },
    {
      icon: "store",
      title: "Shop Fitting & Office Joinery",
      description: "Professional retail fit-outs and organized office storage solutions for businesses."
    }
  ];

  return (
    <section className="py-stack-lg bg-surface-container-low text-left" style={{
      backgroundSize: '40px 40px',
      backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)'
    }}>
      <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center mb-stack-lg">
        <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tight">
          Our <PaintStroke color="var(--secondary)">Expertise</PaintStroke>
        </h2>
      </div>
      <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {services.map((service, index) => (
          <motion.div 
            key={service.title}
            {...fadeInUp}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-stack-md rounded-xl shadow-sm border border-outline-variant/10 hover:shadow-xl transition-all group"
          >
            <span className="material-symbols-outlined text-secondary text-4xl mb-stack-sm">{service.icon}</span>
            <h3 className="font-headline-md text-headline-md mb-stack-sm">{service.title}</h3>
            <p className="font-body-md text-on-surface-variant mb-stack-md">{service.description}</p>
            <Link to="/services" className="text-secondary font-label-lg flex items-center gap-2 group-hover:gap-4 transition-all">
              Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
