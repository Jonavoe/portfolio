import React, { useState } from 'react'

export default function Experience() {
    const [select, setSelect] = useState("autoflow")

    const handleClick = (value: string) => {
        setSelect(value)
    }

    return (
        <div id='experience' className='flex justify-center my-40'>
            <div className='w-3/4 md:w-3/6'>
                <div className='flex w-3/4 flex-col gap-4 '>

                    <h2 className='text-3xl font-bold text-[--lightest-slate]'><span className='text-[--green]'>02.</span> Where I’ve Worked</h2>

                    <div className='flex gap-10'>
                        <div className='flex flex-col'>
                            <div className={`p-2 borderLeft ${select === "autoflow" ? "text-[--green] borderLeftSelect" : "text-[--slate] borderLeft w-[10rem]"}`} onClick={() => handleClick("autoflow")}>Autoflow</div>
                            <div className={`p-2  ${select === "freelancer" ? "text-[--green] borderLeftSelect" : "text-[--slate] borderLeft w-[10rem]"}`} onClick={() => handleClick("freelancer")}>Freelancer</div>
                            <div className={`p-2  ${select === "sml" ? "text-[--green] borderLeftSelect" : "text-[--slate] borderLeft w-[10rem]"}`} onClick={() => handleClick("sml")}>Social Media Lab</div>
                        </div>
                        <div className='relative w-full h-full pb-20'>
                            <div className={`absolute ${select === "autoflow" ? "visible opacity-100 transition-opacity duration-500" : "invisible opacity-0"}`}>
                                <h3>
                                    Full Stack Developer <span className='text-[--green]'> <span className='text-[--green]'>@</span> <a className='hover-underline-animation' href="https://www.autoflow.com.ar/" target='_blank'>Autoflow</a>
                                    </span>
                                </h3>
                                <p className='text-sm text-[--slate]'>October 2023 - Present</p>
                                <div className='mt-6'>
                                    <div className='flex gap-4'>
                                        <span className='text-[--green]'>▹</span>
                                        <p className='text-[--slate]'>
                                            Developed a new web application for car dealerships using React and Next.js.
                                        </p>
                                    </div>
                                    <div className='flex gap-4'>
                                        <span className='text-[--green]'>▹</span>
                                        <p className='text-[--slate]'>
                                            Collaborated with the backend team to integrate the application with the data management system, ensuring seamless data flow.
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className={`absolute ${select === "freelancer" ? "visible opacity-100 transition-opacity duration-500" : "invisible opacity-0"}`}>
                                <h3>
                                    Full Stack Developer <span className='text-[--green]'>@ </span><span className='text-[--green] hover-underline-animation'> Freelancer
                                    </span>
                                </h3>
                                <p className='text-sm text-[--slate]'>September 2023 - Present</p>
                                <div className='mt-6'>
                                    <div className='flex gap-4'>
                                        <span className='text-[--green]'>▹</span>
                                        <p className='text-[--slate]'>
                                            Provided freelance services specializing in creating landing pages and blogs for various clients, exceeding their expectations for functionality and design.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className={`absolute
                             ${select === "sml" ? "visible opacity-100 transition-opacity duration-500" : "invisible opacity-0"}`}>
                                <h3>
                                    Full Stack Developer <span className='text-[--green] '><span className='text-[--green]'>@ </span><a className='hover-underline-animation' href="https://www.socialmedialab.ai/" target="_blank" rel="noopener noreferrer">Social Media Lab AI</a>
                                    </span>
                                </h3>
                                <p className='text-sm text-[--slate]'>April 2023 - September 2023</p>
                                <div className='mt-6'>
                                    <div className='flex gap-4'>
                                        <span className='text-[--green]'>▹</span>
                                        <p className='text-[--slate]'>
                                            Contributed to the development of innovative web applications, including "Employee Application" and "Client Application," utilizing React and Node.js.
                                        </p>
                                    </div>
                                    <div className='flex gap-4'>
                                        <span className='text-[--green]'>▹</span>
                                        <p className='text-[--slate]'>
                                            Played a key role in enhancing the functionality and user experience of the platform, contributing to improved client management and employee engagement.

                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
