import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl md:text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-5xl font-bold'>
                    <p>Hi, I'm Flor, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p className='text-slate-500 md:pr-4'>
                    Just graduated with a Diploma in Web Development and Design, and I'm beyond excited to dive into the professional world. I'm on the lookout for a vibrant team where I can keep the learning spirit alive, bring my fresh enthusiasm to the table, and soak up all the tech wisdom out there. Ready to turn my passion for web development into real magic with an awesome team!
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About