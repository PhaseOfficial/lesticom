import { motion } from "framer-motion";

// Import remaining images for the gallery
import kitchenWithCounters from "../../assets/finished kitchen with counters.jpeg";
import poolJacoozi from "../../assets/finished small pool or jacoozi.jpeg";
import finishedTilling from "../../assets/finished tilling.jpeg";
import finishedToilet from "../../assets/finished toilet.jpeg";
import finishedKitchenCounters from "../../assets/finnished kitchen counters.jpeg";
import finishedStairs from "../../assets/finished stairs.jpeg";
import roofPainting from "../../assets/roof painting.jpeg";
import selfieCieling from "../../assets/builders selfy working on cieling.jpeg";
import roofingImg from "../../assets/builders working on roof.jpeg";

const Gallery = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const images = [
    { src: kitchenWithCounters, title: "Modern Kitchen" },
    { src: poolJacoozi, title: "Outdoor Spa" },
    { src: finishedTilling, title: "Precision Tiling" },
    { src: finishedToilet, title: "Bathroom Finish" },
    { src: finishedKitchenCounters, title: "Sleek Countertops" },
    { src: finishedStairs, title: "Architectural Stairs" },
    { src: roofPainting, title: "Roof Restoration" },
    { src: selfieCieling, title: "Expert Workmanship" },
    { src: roofingImg, title: "Roofing Installation" }
  ];

  return (
    <section className="py-stack-lg bg-surface">
      <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center mb-stack-lg">
        <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tight">Our Recent Projects</h2>
        <p className="font-body-md text-on-surface-variant mt-stack-sm">Witness the Takaz standard of excellence in every detail.</p>
      </div>
      <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            {...fadeInUp}
            transition={{ delay: index * 0.1 }}
            className="relative aspect-square overflow-hidden rounded-xl shadow-md group"
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <p className="text-white font-label-lg uppercase tracking-widest">{image.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
