import React from 'react'
import FotoCv from "../assets/FotoCv.jpg";

export default function Contact({ es }) {
    return (
        <div id='contact' className='flex justify-center items-center gap-10 md:mt-20 md:mb-20'>
            <div className=' flex justify-center gap-4 md:gap-10'>
                <div className='flex w-3/4 md:w-4/12 justify-center items-center flex-col gap-8 '>
                    <h2 className='text-lg font-bold text-[--lightest-slate]'><span className='text-[--green]'>04.</span> {es ? "¿Cuál es el siguiente paso?" : "What’s Next?"}</h2>
                    <p className='text-4xl font-bold text-[--lightest-slate]'>{es ? "No dudes en contactarme" : "Get In Touch"}</p>
                    <p className='text-[--light-slate] text-center'>{es ? "Actualmente estoy buscando nuevas oportunidades profesionales. Si tienes alguna oferta o simplemente quieres ponerte en contacto conmigo, ¡no dudes en hacerlo! Estoy abierto a nuevas oportunidades y me encantaría saber de ti." : "I am currently seeking new professional opportunities. If you have any offers or simply want to get in touch with me, feel free to do so! I am open to new opportunities and would be happy to hear from you!"}</p>


                    <a
                        className="mt-8 border text-[--light-slate] rounded-sm border-[--green] px-2 py-1 cursor-pointer hover:text-[--green]"
                        href='mailto:voeffray.jonathan@gmail.com'
                        target='_blank'
                        rel="noreferrer"
                    >
                        {es ? "¡Hola!" : "Say Hello"}
                    </a>

                </div>

            </div>
        </div >
    )
}
