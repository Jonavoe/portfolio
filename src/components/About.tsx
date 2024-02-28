import React from 'react'
import FotoCv from "../assets/Imagen/FotoCv.jpg";

export default function About() {
    return (
        <div id='about' className='flex justify-center gap-10 my-96'>
            <div className='w-3/4 md:w-3/6 flex  justify-center gap-10'>
                <div className='flex w-3/4 flex-col gap-4 '>

                    <h2 className='text-4xl font-bold text-[--lightest-slate]'><span className='text-[--green]'>01.</span> About Me</h2>
                    <p className=' text-[--light-slate]'>Hello! I'm Jonathan Voeffray, a web developer with a passion for creating digital solutions. My journey in web development began in 2021 when I started learning HTML, CSS, and React.</p>
                    <p className='text-[--light-slate]'>Since then, I've gained experience at two companies: one specializing in <a className='text-[--green] hover-underline-animation' href="https://www.socialmedialab.ai/" target='_blank'>SML</a> applying artificial intelligence to social media and the other in automating processes for car dealerships, called <a className='text-[--green] hover-underline-animation' href="https://www.autoflow.com.ar/" target='_blank'>Autoflow</a>.</p>
                    <p className='text-[--light-slate]'>My current focus is on creating accessible and inclusive digital products for diverse clients. Here are some of the technologies I've been working with:</p>
                    <ul className='grid grid-cols-2 grid-rows-3 gap-4 text-[--light-slate]'>
                        <li><span className='text-[--green]'>▹</span> JavaScript (ES6+)</li>
                        <li><span className='text-[--green]'>▹</span> React</li>
                        <li><span className='text-[--green]'>▹</span> Next</li>
                        <li><span className='text-[--green]'>▹</span> Node.js</li>
                        <li><span className='text-[--green]'>▹</span> TypeScript</li>
                        <li><span className='text-[--green]'>▹</span> Docker</li>
                    </ul>

                </div>
                <div className='relative w-64 h-60 mt-14'>
                    <div className='div-1 absolute z-20 top-0 left-0 w-60 h-60'></div>
                    <img className='div-2 z-10 absolute top-0 left-0 w-72' src={FotoCv} alt="profile" />
                    <div className='div-3 border-2 border-[--green] absolute z-0 top-0 left-0 w-60 h-60'></div>
                </div>

            </div>
        </div >
    )
}
