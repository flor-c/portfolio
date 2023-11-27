import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4'>
      <form action='https://getform.io/f/7b16338f-6af1-46dd-9822-d9a188dd3dd1' method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Contact</p>
                <p className='py-6 text-slate-500'>Let's Connect! You can find me on social media or you can send me a message here!</p>
            </div>
            <div>
              <ul className='flex pb-8 text-pink-600 justify-around'>
                <li>
                  <a href='https://www.linkedin.com/in/flor-cief/' target='_blank'>
                    <FaLinkedin size={30}/>
                  </a>
                </li>
                <li>
                  <a href='https://github.com/flor-c' target='_blank'>
                    <FaGithub size={30} />
                  </a>
                </li>
                <li>
                  <a href="mailto:cief.flor@gmail.com">
                    <HiOutlineMail size={30} />
                  </a>
                </li>
              </ul>
            </div>
            <input className='p-2 border-2 border-slate-300' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 border-2 border-slate-300' type='email' placeholder='Email' name='email' />
            <textarea className='p-2 border-2 border-slate-300' name='message' rows='10' placeholder='Message' ></textarea>
            <button className=' text-slate-400 border-2 border-slate-400 px-6 py-3 my-8 mx-auto items-center hover:bg-pink-600 hover:border-pink-600 hover:text-slate-300'>
              Send
            </button>

        </form>
    </div>
  )
}

export default Contact