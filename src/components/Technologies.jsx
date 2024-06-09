import { RiReactjsLine } from "react-icons/ri"
import { DiJavascript } from "react-icons/di"
import { SiTailwindcss } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa6"
import { DiHtml5 } from "react-icons/di"
import { DiCss3 } from "react-icons/di"
import { motion } from "framer-motion"
import { DiMysql } from "react-icons/di"
import { FaAws } from "react-icons/fa6"
import { FaJava } from "react-icons/fa6"

const container = (delay) => ({
  
  hidden1: {x:-100, opacity:0},
  hidden2: {x: 100, opacity:0},
  hidden3: {y: -100, opacity:0},
  visible1:{
    x:0,
    opacity:1,
    transition:{duration: 0.5, delay:delay},
  },
  visible2:{
    x:0,
    opacity:1,
    transition:{duration: 0.5, delay:delay},
  },
  visible3:{
    y:0,
    opacity:1,
    transition:{duration: 0.5, delay:delay},
  },
  
});

const iconVariants=(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
    <motion.h2 variants={container(0)} initial="hidden3" whileInView="visible3" className="my-20 text-center text-4xl  text-purple-400">Technologies</motion.h2>
    <motion.div variants={container(0)} initial="hidden1" whileInView="visible1" className="flex flex-wrap items-center justify-center gap-4">

    <motion.div variants={iconVariants(1.7)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
    <RiReactjsLine className="text-7xl text-cyan-400"/>
    </motion.div>
    <motion.div variants={iconVariants(3.3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
    <FaNodeJs className="text-7xl text-green-400"/>
    </motion.div>    
    <motion.div variants={iconVariants(5.9)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
    <DiMysql className="text-7xl text-blue-600"/>
    </motion.div>
    <motion.div variants={iconVariants(2.6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
    <SiTailwindcss className="text-7xl text-cyan-500"/>
    </motion.div>
    <motion.div variants={iconVariants(2.1)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
    <DiHtml5 className="text-7xl text-red-400"/>
    </motion.div>
    
    <motion.div variants={iconVariants(5.7)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
    <DiCss3 className="text-7xl text-blue-500"/>
    </motion.div>
   
    <motion.div variants={iconVariants(4.1)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
    <DiJavascript className="text-7xl text-yellow-300"/>
    </motion.div>
    <motion.div variants={iconVariants(1.1)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
    <FaAws className="text-7xl text-orange-400"/>
    </motion.div>
    <motion.div variants={iconVariants(1.1)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
    <FaJava className="text-7xl text-white-200"/>
    </motion.div>
    
    </motion.div>
    </div>
  )
}

export default Technologies