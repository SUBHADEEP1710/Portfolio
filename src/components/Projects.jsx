import { PROJECTS } from "../constants";
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

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        variants={container(0)}
        initial="hidden3"
        whileInView="visible3"
        className="my-20 text-center text-4xl  text-purple-400"
      >
        WebDev Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.a
            key={index}
            href={project.link} // Adding the link here
            className="mb-8 flex flex-wrap lg:justify-center no-underline"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              variants={container(0)}
              initial="hidden1"
              whileInView="visible1"
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={300}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              variants={container(0)}
              initial="hidden2"
              whileInView="visible2"
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
