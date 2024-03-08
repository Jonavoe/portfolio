import React, { useState } from 'react'

export default function Experience({ es }) {
    const [select, setSelect] = useState("autoflow")

    const handleClick = (value: string) => {
        setSelect(value)
    }

    return (
        <div id='experience' className='flex justify-center my-10 md:my-40'>
            <div className=' md:w-3/6'>
                <div className='flex md:w-3/4 flex-col gap-4 '>

                    <h2 className='text-3xl font-bold text-[--lightest-slate]'><span className='text-[--green]'>02.</span> {es ? "Experiencia Laboral" : "Where I’ve Worked"}</h2>

                    <div className='flex flex-col md:flex-row mb-60 md:mb-0 gap-10'>
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
                                <p className='text-sm text-[--slate]'>{es ? "Octubre 2023 - Marzo 2024" : "October 2023 - March 2024"}</p>
                                <div className='mt-6'>
                                    <div className='flex gap-4 '>
                                        <span className='text-[--green]'>▹</span>
                                        <p className='text-[--slate]'>{es ? "Desarrollé una nueva aplicación web para concesionarios de automóviles utilizando React y Next.js." : "Developed a new web application for car dealerships using React and Next.js."}

                                        </p>
                                    </div>
                                    <div className='flex gap-4'>
                                        <span className='text-[--green]'>▹</span>
                                        <p className='text-[--slate]'>
                                            {es ? "Trabajé en conjunto con el equipo de back-end para integrar la aplicación con el sistema de gestión de datos, garantizando un flujo de información continuo." : "Collaborated with the backend team to integrate the application with the data management system, ensuring seamless data flow."}
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className={`absolute ${select === "freelancer" ? "visible opacity-100 transition-opacity duration-500" : "invisible opacity-0"}`}>
                                <h3>
                                    Full Stack Developer <span className='text-[--green]'>@ </span><span className='text-[--green] hover-underline-animation'> Freelancer
                                    </span>
                                </h3>
                                <p className='text-sm text-[--slate]'>{es ? "Septiembre 2023 - Actualidad" : "September 2023 - Present"}</p>
                                <div className='mt-6'>
                                    <div className='flex gap-4'>
                                        <span className='text-[--green]'>▹</span>
                                        <p className='text-[--slate]'>
                                            {es ? "Ofrecí servicios freelance como especialista en la creación de páginas de aterrizaje y blogs para diversos clientes, superando sus expectativas en funcionalidad y diseño. " : "Provided freelance services specializing in creating landing pages and blogs for various clients, exceeding their expectations for functionality and design."}
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
                                <p className='text-sm text-[--slate]'>{es ? "Abril 2023 - Semptiembre 2023" : "April 2023 - September 2023"}</p>
                                <div className='mt-6'>
                                    <div className='flex gap-4'>
                                        <span className='text-[--green]'>▹</span>
                                        <p className='text-[--slate]'>
                                            {es ? 'Contribuí al desarrollo de innovadoras aplicaciones web, como la "Aplicación para Empleados" y la "Aplicación para Clientes", utilizando React y Node.js.' : 'Contributed to the development of innovative web applications, including "Employee Application" and "Client Application," utilizing React and Node.js.'}
                                        </p>
                                    </div>
                                    <div className='flex gap-4'>
                                        <span className='text-[--green]'>▹</span>
                                        <p className='text-[--slate]'>
                                            {es ? "Jugué un papel clave en la mejora de la funcionalidad y la experiencia de usuario de la plataforma, lo que contribuyó a una mejor gestión de clientes y al compromiso de los empleados." : "Played a key role in enhancing the functionality and user experience of the platform, contributing to improved client management and employee engagement."}

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
