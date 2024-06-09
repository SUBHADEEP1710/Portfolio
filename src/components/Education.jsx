
import {EDUCATION} from "../constants";
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

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
    <motion.h2 variants={container(0)} initial="hidden3" whileInView="visible3" className="my-20 text-center text-4xl  text-purple-400">Education</motion.h2>
    <div>
    {EDUCATION.map((education, index)=>(
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
        <motion.div variants={container(0)} initial="hidden1" whileInView="visible1" className="w-full lg:w-1/4">
            <p className="mb-2 text-m text-neutral-400">{education.year}</p>
            </motion.div>
        <motion.div variants={container(0.1)} initial="hidden3" whileInView="visible3"  className="w-full lg:w-1/4">
        <img         
        src={education.image}
        width={100}
        height={100}
        alt={education.title}
        className="mb-6 rounded"  />
        </motion.div>
        <motion.div variants={container(0.2)} initial="hidden2" whileInView="visible2" className="w-full max-w-xl lg:w-3/4" >
            <h6 className="mb-2 font-semibold">{education.title}</h6>
            <p className="mb-4 text-neutral-400 ">{education.description}</p>
        {education.technologies.map((tech, index)=>(
            <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400">
            {tech}
            </span>))}
        </motion.div>
        </div>
    ))}
        
        </div>
    </div>
  )
}

export default Education