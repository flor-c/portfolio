import React from 'react'
import { FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";



const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='ml-2'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4 text-slate-500'>These are the technologies I've work with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='hover:scale-110 duration-500'>
                    <FaHtml5 size={70} className='text-orange-600 mx-auto'/>
                    <p className='my-2 text-sm'>HTML</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <IoLogoCss3 size={70} className='text-blue-600 mx-auto'/>
                    <p className='my-2 text-sm'>CSS</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <IoLogoJavascript size={70} className='text-yellow-300 mx-auto'/>
                    <p className='my-2 text-sm'>JAVASCRIPT</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <FaReact size={70} className='text-cyan-300 mx-auto'/>
                    <p className='my-2 text-sm'>REACT</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills