import { CERTIFICATIONS } from "../constants";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden1: { x: -100, opacity: 0 },
  hidden2: { x: 100, opacity: 0 },
  hidden3: { y: -100, opacity: 0 },
  visible1: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
  visible2: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
  visible3: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Certifications = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        variants={container(0)}
        initial="hidden3"
        whileInView="visible3"
        className="my-20 text-center text-4xl  text-purple-400"
      >
        Certifications
      </motion.h2>
      <div>
        {CERTIFICATIONS.map((certificates, index) => (
          <motion.a
            key={index}
            href={certificates.link} // Adding the link here
            className="mb-8 flex flex-wrap lg:justify-center no-underline"
            
          >
            <motion.div
              variants={container(0)}
              initial="hidden1"
              whileInView="visible1"
              className="w-full lg:w-1/3"
              whileHover={{ scale: 1.2 }}
            >
              <img
                src={certificates.image}
                width={320}
                height={160}
                alt={certificates.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              variants={container(0)}
              initial="hidden2"
              whileInView="visible2"
              className="w-full max-w-xl lg:w-3/4"
            >
              <h5 className="mb-4 text-m font-bold">{certificates.title}</h5>
              <p className="mb-4 text-neutral-400">{certificates.description}</p>
              {certificates.year.map((year, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
                >
                  {year}
                </span>
              ))}
            </motion.div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
