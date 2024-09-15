import React from 'react'
import {IoBagHandleOutline} from "react-icons/io5";
import {motion } from "framer-motion";
import {FadeRight , FadeLeft} from "../components/Animation";
const Hero = () => {
  return <section className='w-full'>
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[650px]'>
       <div className='flex flex-col justify-center py-14 md:py-0 relative z-10'>
        <div className='text-center md:text-left space-y-6 lg:max-w-[400px]'>
            <motion.h1 
            variants={FadeRight(0.6)}
            initial="hidden"
            animate="visible"
            className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia'>
                Healthy
            <br />
            Fresh <span className='text-secondary'>Fruits!</span>
            </motion.h1>
            < motion.p 
             variants={FadeRight(0.9)}
             initial="hidden"
             animate="visible"
            className='text-2xl tracking-wide'>Order Now For Fresh Healthy Life</motion.p>
            <motion.p
             variants={FadeRight(1.2)}
             initial="hidden"
             animate="visible"

             className='text-gray-400'>Healthy and yummy food for fresh morning breakfast. Eat Daily for good health and mind .Order now and get 20% off on your first order.</motion.p>

            <motion.div 
             variants={FadeRight(1.5)}
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
       {/* hero img */}

       <div 
       
        initial={{opacity:0 , x:200 , rotate:75}}
        animate={{opacity:1 , x:0, rotate:0}}
        transition={{duration:1 , delay :0.2}}
          className='flex justify-center items-center'>
          <motion.img
           initial={{opacity:0 , x:200 , rotate:75}}
           animate={{opacity:1 , x:0, rotate:0}}
           transition={{duration:1 , delay :0.2}}
           src='https://fruits-selling-tcj.netlify.app/assets/fruit-plate-DRbIgdOk.png'  alt=''  className='w-[350px] md:w-[550px] drop-shadow(-6px 8px 15px rgba(0,0,0,0.2)) '/>
       </div>

       {/* leaf image */}
       <div  className='absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg]'>
        <motion.img
         initial={{opacity:0 , y:-200 , rotate:75}}
         animate={{opacity:1 , y:0, rotate:0}}
         transition={{duration:1 , delay :0.2}}

         src='https://fruits-selling-tcj.netlify.app/assets/leaf-CCkW9aP6.png' alt='' className='w-full md:max-w-[300px]' />
  
       </div>
    </div>
  </section>
}

export default Hero;
