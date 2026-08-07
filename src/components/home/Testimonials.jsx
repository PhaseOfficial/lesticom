import { motion } from "framer-motion";

const Testimonials = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section className="py-stack-lg bg-surface-container-highest/30 text-left">
      <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div 
          {...fadeInUp}
          className="bg-white p-stack-lg rounded-2xl shadow-xl flex flex-col md:flex-row gap-stack-lg items-center"
        >
          <div className="w-24 h-24 shrink-0 rounded-full bg-secondary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-4xl text-on-secondary-container">format_quote</span>
          </div>
          <div>
            <div className="flex gap-1 text-secondary mb-stack-sm">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            <p className="font-headline-md text-headline-md italic text-primary leading-relaxed mb-stack-sm uppercase tracking-tight">
              "The attention to detail during our home skimming and tiling was simply unparalleled. Professional, reliable, and they truly understood our vision for a modern Zimbabwean home."
            </p>
            <p className="font-label-lg text-label-lg text-secondary uppercase tracking-widest">— John M., Harare Resident</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
