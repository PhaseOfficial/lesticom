import { motion } from "framer-motion";
import expertiseImg from "../../assets/builder working on cieling.jpeg";
import cipzLogo from "../../assets/CIPZ Logo.png";

const Certification = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section className="py-stack-lg bg-surface text-left">
      <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-stack-lg items-center">
        <motion.div 
          {...fadeInUp}
          className="relative h-[500px] group overflow-hidden rounded-xl shadow-2xl"
        >
          <img 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            src={expertiseImg} 
            alt="Expertise"
          />
          <div className="absolute bottom-0 right-0 bg-primary p-gutter text-white">
            <p className="font-headline-md text-headline-md">10+ Years</p>
            <p className="font-label-sm text-label-sm opacity-70 uppercase tracking-widest">Industry Experience</p>
          </div>
        </motion.div>
        <motion.div {...fadeInUp}>
          <div className="flex items-center gap-4 mb-stack-md">
            {/* <img src={cipzLogo} alt="CIPZ Logo" className="h-16 w-auto" /> */}
            <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tight m-0">Quality Workmanship You Can Trust</h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg leading-relaxed">
            Takaz Homes Construction specializes in high-quality construction finishing services designed to transform houses into beautiful modern spaces. We blend raw industrial strength with sophisticated elegance, ensuring every brick and tile reflects our commitment to perfection.
          </p>
          <div className="grid grid-cols-2 gap-gutter">
            <div className="p-stack-sm border-l-2 border-secondary transition-all group">
              <span className="font-display-lg-mobile text-secondary block transition-transform group-hover:-translate-y-1">150+</span>
              <span className="font-label-lg text-label-lg uppercase tracking-tight text-on-surface">Projects Completed</span>
            </div>
            <div className="p-stack-sm border-l-2 border-secondary transition-all group">
              <span className="font-display-lg-mobile text-secondary block transition-transform group-hover:-translate-y-1">200+</span>
              <span className="font-label-lg text-label-lg uppercase tracking-tight text-on-surface">Happy Clients</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certification;
