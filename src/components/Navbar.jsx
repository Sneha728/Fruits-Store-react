import React, { useState } from 'react';
import {FaLeaf} from "react-icons/fa";
import {MdMenu, MdOutlineShoppingCart} from "react-icons/md"
import ResponsiveMenu from './ResponsiveMenu';
import {motion} from "framer-motion";
const NavbarItems = [
    {
        id :1,
        title : "Home" ,
        Link : "/"
    },
    {
        id :2,
        title : "Products" ,
        Link : "#"
    },
    {
        id :3,
        title : "About" ,
        Link : "#"
    },
    {
        id :4,
        title : "Shop" ,
        Link : "#"
    },
    {
        id :5,
        title : "Contactus" ,
        Link : "#"
    }

]


const Navbar = () => {
    const [open , setOpen ] = useState(false);
  return <section className='w-full'>
    
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5 , delay:0.5}}
    className='container flex mx-auto items-center justify-between py-4 md:pt-4'>
    <div className='logo flex items-center gap-2 font-bold text-xl '>
      <p className='text-primary uppercase'> Fruit</p>
      <p className='text-secondary uppercase'> Store</p>
      <FaLeaf className='text-green-500' />
    </div>
 
  <div className='hidden md:block '>
    <ul className='flex items-center gap-8'>
        {
            NavbarItems.map((menu)=>(
                <li key = {menu.id} className=' text-gray-600  '>
                <a href={menu.Link} className='inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold' >{menu.title}</a>
                </li>
            ))
        }
        <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2' >
            <MdOutlineShoppingCart  />
        </button>

    </ul>

  </div>
  <div className='md:hidden' onClick={()=>setOpen(!open)}>
    <MdMenu className='text-4xl' />

  </div>
  </motion.div>
  <ResponsiveMenu open={open}  />
 
  </section>
  
   
 
  
}

export default Navbar;
