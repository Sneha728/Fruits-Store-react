import React from 'react';
import { motion } from 'framer-motion';
import { FadeUp } from './Animation';

const Banner = () => {
  return (
    <section className='w-full bg-secondary/10  mt-10'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 py-14'>
        <div className='flex justify-center items-center'>
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
            src='https://fruits-selling-tcj.netlify.app/assets/fruits-splash-BeZYLA1d.png'
            alt=''
            className='w-[300px] md:max-w-[400px] h-full object-cover'
          />
        </div>
        <div className='flex flex-col justify-center'>
          <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
            <motion.h1
              variants={FadeUp(0.5)}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='text-3xl lg:text-5xl font-bold uppercase'
            >
              Brand Info
            </motion.h1>
            <motion.p
              variants={FadeUp(0.7)}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              Welcome to Fruits Store!!, your trusted destination for the freshest, hand-picked fruits delivered right to your doorstep. Our mission is to provide you with fruits that are not only fresh but also packed with flavor and nutrition, ensuring you and your family enjoy the healthiest choices every day.
            </motion.p>
            <motion.p
              variants={FadeUp(0.9)}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              Whether you're looking for a healthy snack, ingredients for your next recipe, or a thoughtful gift for a loved one, we’ve got you covered with a wide variety of fresh, seasonal fruits.
            </motion.p>
            <motion.div
              variants={FadeUp(1.1)}
              initial='hidden'
              animate='visible'
              className='flex justify-center md:justify-start'
            >
              <button className='flex items-center gap-2 bg-primary py-3 px-6 text-white font-semibold rounded-xl shadow-[0px_10px_14px_-7px_#de0029] hover:!scale-110 duration-300'>
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
