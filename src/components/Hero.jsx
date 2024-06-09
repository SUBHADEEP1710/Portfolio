import { useState, useEffect } from 'react';
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/sub_profile_pic (2).jpg";
import { motion, AnimatePresence } from "framer-motion";

const roles = ["Full Stack Developer", "Software Engineer", "ML enthusiast", "Frontend Developer", "Programmer"];

const roleVariants = {
  enter: {
    x: -100,
    opacity: 0,
    transition: { duration: 0.5 }
  },
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: { duration: 0.5 }
  }
};

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    },); // Show loading animation for 3 seconds

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const interval = setInterval(() => {
        setCurrentRoleIndex(prevIndex => (prevIndex + 1) % roles.length);
      }, 2500);

      return () => clearInterval(interval);
    }
  }, [isLoading]);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay:0.1 }} className="pb-16 text-6xl font-thin tracking-light lg:mt-16 lg:text-7xl">
              Subhadeep Chakraborty
            </motion.h1>
            {isLoading ? (
              <div className="laser-box"></div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRoleIndex}
                  variants={roleVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            )}
            <motion.p initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex items-center justify-center">
            <img className="rounded-3xl border-1 bg-black opacity-90 pointer-events-none" src={profilePic} alt="Subhadeep Chakraborty"></img>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
