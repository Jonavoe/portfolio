import React from 'react'

export default function Hero() {
    return (
        <div id='hero' className='flex justify-center my-20 md:my-60'>
            <div className='w-3/4 md:w-3/6'>
                <div className='flex flex-col gap-2 md:gap-6'>
                    <p className='text-[--green]   font-medium'>
                        Hi, my name is
                    </p>
                    <h1 className='text-[--lightest-slate] text-2xl md:text-7xl  font-semibold'>
                        Jonathan Voeffray.
                    </h1>
                    <h2 className='text-[--light-slate] text-2xl md:text-7xl font-medium'>
                        I build things for the web.
                    </h2>
                    <p className='w-3/4 text-[--slate]'>
                        I am a full-stack developer specializing in building exceptional digital experiences. Currently, I am focused on developing accessible, human-centered products at Upstatement, utilizing MERN technologies as my specialty in full-stack development.
                    </p>
                </div>
            </div>
        </div>
    )
}
