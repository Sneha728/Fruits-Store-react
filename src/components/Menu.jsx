import React from 'react'
import {motion , delay} from "framer-motion";
import {FadeLeft } from "../components/Animation";
const MenusData = [
    {
        id: 1,
        title: "Fresh red Apples",
        Link: "/",
        price: "$3.99",
        image: "https://fruits-selling-tcj.netlify.app/assets/apple-dU8UKi7U.png",
        delay:0.3,
    },
    {
        id: 2,
        title: "Fresh Oranges",
        Link: "/",
        price: "$4.99",
        image: "https://fruits-selling-tcj.netlify.app/assets/orange-SYYSet8r.png",
        delay:0.6,
    },
    {
        id: 3,
        title: "Fresh Avocado",
        Link: "/",
        price: "$5.99",
        image: "https://fruits-selling-tcj.netlify.app/assets/avocado-CLmYh0bp.png",
        delay:0.9,
    },
    {
        id: 4,
        title: "Fresh Cherries",
        Link: "/",
        price: "$2.99",
        image: "https://fruits-selling-tcj.netlify.app/assets/cherry-K8SpylM9.png",
        delay:1.2,
    }
]

const Menu = () => {
    return (
        <section className='w-full py-12 '>
            <div className='container  mx-auto'>
                <motion.h1 
                 initial={{opacity:0 , x: -200}}
                 whileInView={{opacity:1,x:0}}
                 transition={{duration:1 , delay:0.3}}
                className='text-2xl font-bold text-left pb-10 uppercase'>Our Menu</motion.h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
                    {
                        MenusData.map((item) => (
                            <motion.div 
                            variants={FadeLeft(item.delay)}
                            initial="hidden"
                            whileInView={"visible"}
                            whileHover={{scale: 1.1 }}
                            className='bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center gap-3'>
                                <img src={item.image} alt="" className='w-[60px] mb-4 scale-110 transform-translate-y-6'/>
                            <div>
                                 <h1 className='text-lg font-semibold'>{item.title}</h1>
                                 <p className='text-lg font-semibold text-secondary'>{item.price}</p>

                            </div>
                            </motion.div>

                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Menu;
