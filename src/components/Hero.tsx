import React from 'react'

export default function Hero({ es }) {
    return (
        <div id='hero' className='flex justify-center my-20 md:my-60'>
            <div className='w-3/4 md:w-3/6'>
                <div className='flex flex-col gap-2 md:gap-6'>
                    <p className='text-[--green]   font-medium'>
                        {es ? "Hola, mi nombre es" : "Hi, my name is"}
                    </p>
                    <h1 className='text-[--lightest-slate] text-2xl md:text-7xl  font-semibold'>
                        Jonathan Voeffray
                    </h1>
                    <h2 className='text-[--light-slate] text-2xl md:text-5xl font-medium'>
                        {es ? "Diseño y desarrollo para la web." : "I build things for the web."}
                    </h2>
                    <p className='w-3/4 text-[--slate]'>

                        {es ? "Soy un desarrollador full-stack especializado en crear experiencias digitales excepcionales. Me enfoco en desarrollar productos accesibles y centrados en el usuario, utilizando tecnologías MERN como mi especialidad en desarrollo full-stack." : "I am a full-stack developer specializing in building exceptional digital experiences. I am focused on developing accessible, human-centered products, utilizing MERN technologies as my specialty in full-stack development."}



                    </p>
                </div>
            </div>
        </div>
    )
}
