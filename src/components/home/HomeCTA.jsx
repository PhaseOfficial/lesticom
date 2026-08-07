import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import ctaBg from "../../assets/builders working on roof.jpeg";

const HomeCTA = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section ref={ref} className="relative py-stack-lg overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img 
          style={{ y }}
          className="w-full h-full object-cover grayscale scale-110" 
          src={ctaBg} 
          alt="Construction Site"
        />
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
      </div>
      <div className="relative z-10 max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center text-white">
        <motion.h2 
          {...fadeInUp}
          className="font-display-lg text-display-lg-mobile md:text-display-lg mb-stack-md uppercase tracking-tight font-bold"
        >
          Let’s Build Something Amazing Together
        </motion.h2>
        <motion.p 
          {...fadeInUp}
          className="font-body-lg text-body-lg text-surface-variant max-w-2xl mx-auto mb-stack-lg"
        >
          Ready to elevate your space with precision-engineered construction and premium finishing? Our team is standing by to bring your vision to life.
        </motion.p>
        <motion.div 
          {...fadeInUp}
          className="flex flex-col sm:flex-row justify-center gap-gutter"
        >
          <Link 
            to="/contact"
            className="bg-secondary-fixed text-on-secondary-fixed font-headline-md text-headline-md px-12 py-5 rounded-none hover:scale-105 transition-transform shadow-2xl text-center"
          >
            START YOUR QUOTE
          </Link>
          <Link 
            to="/contact"
            className="border border-white text-white font-headline-md text-headline-md px-12 py-5 rounded-none hover:bg-white hover:text-primary transition-all text-center"
          >
            CONTACT US
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCTA;
