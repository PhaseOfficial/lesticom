import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import heroImg from "../../assets/builders working on roof.jpeg";
import PaintStroke from "../common/PaintStroke";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img 
          style={{ y }}
          className="w-full h-full object-cover" 
          src={heroImg} 
          alt="Luxury Home"
        />
        <div className="absolute inset-0 bg-primary/40" style={{
          backgroundSize: '40px 40px',
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)'
        }}></div>
      </div>
      <div className="relative z-10 max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop text-white text-left">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-stack-sm leading-tight">
            Building Quality Homes With <PaintStroke color="var(--secondary)" className="text-secondary-fixed">Precision</PaintStroke> & Excellence
          </h1>
          <p className="font-body-lg text-body-lg text-surface-variant mb-stack-lg">
            Professional construction and finishing services for modern homes and commercial spaces. Commissioning legacies through architectural integrity.
          </p>
          <div className="flex flex-wrap gap-gutter">
            <Link 
              to="/contact"
              className="bg-secondary text-white font-label-lg text-label-lg px-8 py-4 rounded-none hover:bg-on-secondary-container transition-all shadow-xl"
            >
              GET A QUOTE
            </Link>
            <Link 
              to="/services"
              className="border-2 border-white/50 backdrop-blur-md text-white font-label-lg text-label-lg px-8 py-4 rounded-none hover:bg-white hover:text-primary transition-all"
            >
              OUR SERVICES
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
