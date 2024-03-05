import React, { useState } from 'react'
import AutoflowDesktop from "../assets/AutoflowDesktop.png"
export default function Projects() {
    const [select, setSelect] = useState("autoflow")

    const handleClick = (value: string) => {
        setSelect(value)
    }

    return (
        <div id='experience' className='flex justify-center my-40'>
            <div className='w-3/4 md:w-3/6 mb-24'>
                <div className='flex w-3/4 flex-col gap-4 '>

                    <h2 className='text-3xl font-bold text-[--lightest-slate]'><span className='text-[--green]'>03.</span> Some Things I’ve Built</h2>

                    <div className=''>
                        <div className='relative flex justify-end items-end w-full h-full'>
                            <div className='absolute w-3/4 border-2 top-0 left-0 z-0'>
                                <div className='div-1 z-50 absolute w-full h-full'></div>
                                <img className='z-40' src={AutoflowDesktop} alt="profile" />
                            </div>
                            <div className='w-1/2 z-10' >
                                <div className='border-2'>
                                    hola
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
