import aboutImg from "../assets/about4.jpeg"
import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"


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

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
    <motion.h2 variants={container(0)}  initial="hidden3" whileInView="visible3" className="my-20 text-center text-4xl  text-purple-400">
    About
    <span className="text-purple-700">Me</span>
    </motion.h2>
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
            <motion.div variants={container(0)} initial="hidden1" whileInView="visible1"  className="flex items-center justify-center">
                <img className="rounded rounded-3xl border-1 bg-black opacity-90 pointer-events-none" src={aboutImg} width={500} height={500}alt="about" />
            </motion.div>
            
        </div>
        <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <motion.p variants={container(0.4)} initial="hidden2" whileInView="visible2" className="my-2 max-w-xl py-6">{ABOUT_TEXT}</motion.p>
                </div>
            </div>
    </div>
    </div>
  )
}

export default About