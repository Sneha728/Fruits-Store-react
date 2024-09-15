import React from 'react'
import { FaFacebook, FaInstagram, FaLeaf, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {motion} from "framer-motion";
const Footer = () => {
  return (
    <footer className='bg-primary/10  py-10 mt-10 '>
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition = {{duration:1 , delay:0.2}}
     className='container mx-auto flex items-center justify-between py-4 md:pt-4'>
    <div className='logo flex items-center gap-2 font-bold text-2xl '>
      <p className='text-primary uppercase'> Fruit</p>
      <p className='text-secondary uppercase'> Store</p>
      <FaLeaf className='text-green-500' />
    </div>
    <div className='text-3xl flex gap-4 mt-6 items-center text-gray-700'>
        <FaInstagram />
        <FaTwitter />
        <FaFacebook />
        <FaLinkedin />

    </div>
 
    </motion.div>
    </footer>

 
  )
}

export default Footer;
