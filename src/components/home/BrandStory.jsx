import { motion } from "framer-motion";
import PaintStroke from "../common/PaintStroke";

const BrandStory = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section className="py-stack-lg bg-tertiary-container text-white text-left">
      <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid md:grid-cols-2 gap-stack-lg">
          <motion.div {...fadeInUp}>
            <h2 className="font-headline-lg text-headline-lg mb-stack-md uppercase tracking-tight">
              The <PaintStroke color="var(--secondary)">Takaz</PaintStroke> Standard
            </h2>
            <p className="text-surface-variant mb-stack-lg opacity-80">
We don't just build structures; we craft environments that stand the test of time through rigorous standards and modern innovation.</p>
            <div className="space-y-stack-md">
              <div className="flex gap-stack-sm items-start">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary">verified</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-headline-md text-white">Skilled Workmanship</h4>
                  <p className="text-surface-variant opacity-60">Every artisan in our team is a master of their trade, ensuring flawless execution.</p>
                </div>
              </div>
              <div className="flex gap-stack-sm items-start">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary">precision_manufacturing</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-headline-md text-white">Modern Techniques</h4>
                  <p className="text-surface-variant opacity-60">We utilize cutting-edge equipment and materials for superior durability and finish.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
            <motion.div 
              {...fadeInUp}
              className="bg-white/5 backdrop-blur-sm p-stack-md border border-white/10 flex flex-col justify-between"
            >
              <span className="material-symbols-outlined text-secondary text-4xl">payments</span>
              <div>
                <h4 className="font-headline-md text-headline-md mt-stack-sm">Affordable Pricing</h4>
                <p className="text-surface-variant text-sm opacity-60 mt-unit">Premium quality that fits your investment budget perfectly.</p>
              </div>
            </motion.div>
            <motion.div 
              {...fadeInUp}
              className="bg-white/5 backdrop-blur-sm p-stack-md border border-white/10 flex flex-col justify-between"
            >
              <span className="material-symbols-outlined text-secondary text-4xl">local_shipping</span>
              <div>
                <h4 className="font-headline-md text-headline-md mt-stack-sm">Reliable Delivery</h4>
                <p className="text-surface-variant text-sm opacity-60 mt-unit">Sticking to timelines and milestones without compromising on detail.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
