import React from 'react'
import JJ from "../assets/work/jandj.jpg"
import Portfolio from "../assets/work/portfolio.jpg"
import Wordly from "../assets/work/Wordly.jpg"

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen ml-2'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
                <p className='py-6 text-slate-500'>Check some of our recent work</p>
            </div>
            
            {/* Card container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {/* Card item */}

                <div 
                    style={{backgroundImage: `url(${JJ})`}}
                    className='shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <div>
                            <span className='text-2xl font-bold text-white tracking-wide m-2'>
                                J&J WebSite
                            </span>
                            <div className='pt-8 items-center justify-center flex'>
                                <a href='https://www.jenningsjoinery.co.nz/' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 mr-4 bg-white text-slate-500 font-bold hover:text-pink-600'>Demo</button>
                                </a>
                                <a href='https://github.com/flor-c/jennings-joinery' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 bg-white text-slate-500 font-bold hover:text-pink-600'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div 
                    style={{backgroundImage: `url(${Portfolio})`}}
                    className='shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <div>
                            <span className='text-2xl font-bold text-white tracking-wide m-2'>
                                Personal Portfolio
                            </span>
                            <div className='pt-8 items-center justify-center flex'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 mr-4 bg-white text-slate-500 font-bold hover:text-pink-600'>Demo</button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 bg-white text-slate-500 font-bold hover:text-pink-600'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div 
                    style={{backgroundImage: `url(${Wordly})`}}
                    className='shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <div>
                            <span className='text-2xl font-bold text-white tracking-wide m-2'>
                                Wordly Game
                            </span>
                            <div className='pt-8 items-center justify-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 mr-4 bg-white text-slate-500 font-bold hover:text-pink-600'>Demo</button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 bg-white text-slate-500 font-bold hover:text-pink-600'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>

    </div>
  )
}

export default Work