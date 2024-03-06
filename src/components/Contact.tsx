import React from 'react'
import FotoCv from "../assets/FotoCv.jpg";

export default function Contact() {
    return (
        <div id='contact' className='flex justify-center items-center gap-10 mt-20 mb-20'>
            <div className=' flex justify-center gap-10'>
                <div className='flex w-4/12 justify-center items-center flex-col gap-8 '>
                    <h2 className='text-lg font-bold text-[--lightest-slate]'><span className='text-[--green]'>01.</span> What’s Next?</h2>
                    <p className='text-4xl font-bold text-[--lightest-slate]'>Get In Touch</p>
                    <p className='text-[--light-slate] text-center'>I am currently seeking new professional opportunities. If you have any offers or simply want to get in touch with me, feel free to do so! I am open to new opportunities and would be happy to hear from you!</p>


                    <a
                        className="mt-8 border text-[--light-slate] rounded-sm border-[--green] px-2 py-1 cursor-pointer hover:text-[--green]"
                        href='mailto:voeffray.jonathan@gmail.com'
                        target='_blank'
                        rel="noreferrer"
                    >
                        Say Hello
                    </a>

                </div>

            </div>
        </div >
    )
}
