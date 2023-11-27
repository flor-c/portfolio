import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {Link} from 'react-scroll'

const Hero = () => {
  return (
    <div name='hero' className='w-full h-screen'>
       
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-8 flex flex-col justify-center h-full'>
            <p className='text-slate-500'>Hi there, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold  text-pink-600'>Flor Cief</h1>
            <h2 className='text-4xl sm:text-7xl '>I'm a Frontend Developer.</h2>
            <p className='text-slate-500 py-4 max-w-[700px]'>I'm a frontend developer specialasing in building and creating exceptional digital experiences. Currently, I'm focusing on building responsive web applications.</p>
            <div>
                <button className='group text-slate-400 border-2 border-slate-400 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 hover:text-slate-300'>
                  <Link to="work" smooth={true} duration={500} >
                   View Work
                  </Link>
                <span className='group-hover:rotate-90 duration-700 group-hover:-translate-y-1 group-hover:scale-90'>
                    <HiArrowNarrowRight className='ml-3'/>
                </span>
                </button>
            </div>
        </div>



    </div>
  )
}

export default Hero