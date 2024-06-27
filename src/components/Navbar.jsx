import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";
import resume from "../assets/final_resume.pdf"; // Adjust the path according to your project structure

const container = (delay) => ({
  hidden1: { x: -100, opacity: 0 },
  hidden2: { y: -100, opacity: 0 },
  visible1: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
  visible2: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
  visible3: {
    y: 0,
    opacity: 1,
    transition: { rotate:5, duration: 0.5, delay: delay },
  },
});

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <motion.div
        variants={container(0.2)}
        initial="hidden2"
        animate="visible3"
        className="flex flex-shrink-0 items-center"
        style={{ marginRight: '2rem' }} // Adjust this value to shift right components to the left
      >
        <h1 className="flex text-3xl text-purple-300 rounded-3xl border-2 border-purple-300 p-3">
          SC
        </h1>
      </motion.div>
      <motion.div
        variants={container(0.2)}
        initial="hidden2"
        animate="visible2"
        className="flex items-center justify-center gap-4 text-3xl text-purple-300"
        style={{ marginLeft: '-2rem', paddingRight:'1rem' }} // Adjust this value to shift right components to the left
      >
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition-transform duration-300 hover:scale-100"
        >
          <button className="hover:bg-purple-500 hover:border-purple-500 hover:scale-100 hover:text-black transition-transform duration-300 border-2 border-purple-300 text-purple-300 rounded-3xl p-2 px-4 text-xl">
            Resume
          </button>
        </a>

        <a
          href="https://www.linkedin.com/in/subhadeep1710/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition-transform duration-300 hover:scale-125"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/SUBHADEEP1710"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition-transform duration-300 hover:scale-125"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/subha__depp/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition-transform duration-300 hover:scale-125"
        >
          <FaInstagram />
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
