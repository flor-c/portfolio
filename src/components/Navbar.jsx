import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillFileEarmarkPersonFill} from 'react-icons/bs'
import {Link} from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-slate-500 bg-white drop-shadow'>
        <div className='uppercase font-semibold text-3xl text-pink-600 pl-2 cursor-pointer'>
            <Link to="hero" smooth={true} duration={500} >
                FC
            </Link>
        </div>
       
        {/* Menu */}
            <ul className='hidden md:flex font-medium'>
                <li className='hover:underline underline-offset-8 decoration-pink-600 decoration-[3px]'>
                    <Link to="about" smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li className='hover:underline underline-offset-8 decoration-pink-600 decoration-[3px]'>
                    <Link to="skills" smooth={true} duration={500} >
                        Skills
                    </Link>
                </li>
                <li className='hover:underline underline-offset-8 decoration-pink-600 decoration-[3px]'>
                    <Link to="work" smooth={true} duration={500} >
                        Work
                    </Link>
                </li>
                <li className='hover:underline underline-offset-8 decoration-pink-600 decoration-[3px]'>
                    <Link to="contact" smooth={true} duration={500} >
                        Contact
                    </Link>
                </li>
            </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 text-2xl'>
            {!nav ? <FaBars className='text-slate-500'/> : <FaTimes className='text-slate-300 hover:rotate-90 duration-300'/>}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 bg-pink-600 text-slate-300 w-full h-screen flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl hover:scale-125 duration-500'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:scale-125 duration-500'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:scale-125 duration-500'>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500} >
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:scale-125 duration-500'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
                        Contact
                    </Link>
                </li>
            </ul>

    </div>
  )
}

export default Navbar