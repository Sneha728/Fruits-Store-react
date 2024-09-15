import React from 'react';
import {motion} from "framer-motion";
import {  FadeLeft,FadeRight} from './Animation';
import {IoBagHandleOutline} from "react-icons/io5";

const bgStyle = {
    backgroundImage :' url("https://fruits-selling-tcj.netlify.app/assets/banner-bg-z4y1lx0D.jpg")',
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat :"no-repeat",
    backgroundAttachment : "fixed",
   
}

const Banner3 = () => {
  return<section className='w-full py-14'>
    <div style={bgStyle} className='container  mx-auto grid grid-cols-1 md:grid-cols-2  space-y-6  md:space-y-0 py-14 rounded-3xl'>
        <div></div>
           

        <div className='flex flex-col justify-center'>
            <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                <motion.h1
                variants={FadeLeft(0.5)}
                initial="hidden"
               whileInView="visible"
               viewport={{once:true}}
                className='text-3xl lg:text-4xl  font-bold uppercase'

                >Get Fresh Fruits Today</motion.h1>
            
            <motion.p
            variants={FadeLeft(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
            >Why wait for a taste of freshness? At Fruits Store , we bring you a vibrant selection of hand-picked, farm-fresh fruits delivered right to your doorstep. Whether you're craving sweet, succulent apples, zesty oranges, or any other seasonal delight, our fruits are carefully chosen to guarantee the highest quality and flavor.</motion.p>
          
             <motion.div 
             variants={FadeLeft(1.3)}
             initial="hidden"
             animate="visible"
               className=' flex justify-center md:justify-start'>
                <button className= ' flex items-center gap-2 bg-primary py-3 px-6 text-white font-semibold rounded-xl shadow-[0px_10px_14px_-7px_#de0029] hover:!scale-110 duration-300 '>
                <span>
                    <IoBagHandleOutline />

                </span>
                Order Now</button>

            </motion.div>
        </div>
        </div>
        </div> 
      
  </section>
}

export default Banner3;
