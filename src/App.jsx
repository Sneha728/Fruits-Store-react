import { useState } from 'react'
import Navbar from './components/Navbar'
import ResponsiveMenu from './components/ResponsiveMenu'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Banner from './components/Banner'
import Banner2 from './components/Banner2'
import Banner3 from './components/Banner3'
import Footer from './components/Footer'
import { MdMargin } from 'react-icons/md'


function App() {
  
  return (
    <>
    < main className='overflow-x-hidden'>
    
   <Navbar />
   <Hero />
   <Menu />
   
   <Banner  />
   <Banner2 />
   <Banner3 />
   
  
   <Footer />
   </main>
   </>
  )
}

export default App
