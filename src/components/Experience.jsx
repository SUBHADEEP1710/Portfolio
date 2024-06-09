import { EXPERIENCES } from "../constants"
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


const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
    <motion.h2 variants={container(0)} initial="hidden3" whileInView="visible3" className="my-20 text-center text-4xl text-purple-400">
    Experience
    </motion.h2>
    <div>
        {EXPERIENCES.map((experience, index)=>(
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div variants={container(0)} initial="hidden1" whileInView="visible1" className="w-full lg:w-1/4">
            <p className="mb-2 text-m text-neutral-400">{experience.year}</p>
            </motion.div>

            <motion.div variants={container(0)} initial="hidden3" whileInView="visible3" className="w-full lg:w-1/4">
               <img 
               src={experience.image}
                width={120}
                height={120}
                alt={experience.title}
                className="mb-6 rounded"  />
            </motion.div>

            <motion.div variants={container(0)} initial="hidden2" whileInView="visible2" className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">{experience.role}- <span className="text-sm text-purple-100">
                    {experience.company}
                </span>
                </h6>
                <p className="mb-4 text-neutral-400">{experience.description}</p>
            {experience.technologies.map((tech, index)=>(
                <motion.span variants={container(0)} initial="hidden3" whileInView="visible3" key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400">{tech}</motion.span>
            ))}
            </motion.div>
            </div>

        ))}
    </div>
    </div>
  )
}

export default Experience