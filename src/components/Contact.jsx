import {CONTACT} from "../constants"
import { motion } from "framer-motion"

const container = (delay) => ({
  
  hidden1: {x:-100, opacity:0},
  hidden2: {y: 100, opacity:0},
  hidden3: {y: -100, opacity:0},
  visible1:{
    x:0,
    opacity:1,
    transition:{duration: 0.5, delay:delay},
  },
  visible2:{
    y:0,
    opacity:1,
    transition:{duration: 0.5, delay:delay},
  },
  visible3:{
    y:0,
    opacity:1,
    transition:{duration: 0.5, delay:delay},
  },
  
});

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
    <motion.h2 variants={container(0)} initial="hidden3" whileInView="visible3" className="my-10 text-center text-4xl  text-purple-400">Get In Touch</motion.h2>
    <motion.div variants={container(0)} initial="hidden1" whileInView="visible1" className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">
        {CONTACT.email}</a>
    </motion.div>
    </div>
  )
}

export default Contact