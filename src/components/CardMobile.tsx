import React from 'react'
import GithubIcons from './icons/GithubIcons'
import Share from './icons/Share'
import { Link } from 'react-router-dom'

export default function CardMobile({ image, title, description, technologies, git, page }) {
    return (
        <div className='relative justify-start items-start w-full h-full mb-14  md:hidden flex'>
            <div className='flex flex-col justify-start items-start gap-3'>
                <div className='text-[--green]'>
                    Featured Project
                </div>
                <div className='text-[--lightest-slate] text-[1.5rem] font-semibold transition duration-300 hover:text-[--green] hover-underline-animation-work'>
                    {title}
                </div>

                <img className=' rounded-md' src={image} alt="profile" />
                <div className='py-3 px-4 bg-[--light-navy] text-[--light-slate] text-start rounded-md text-sm'>
                    {description}
                </div>
                <div className='flex gap-2 text-[--slate]'>
                    {technologies && technologies.map((tech: string, index: number) =>
                        < div key={index} className='transition duration-300 text-sm hover:text-[--green]' > {tech}</div>
                    )}
                </div>
                <div className='flex gap-3 '>
                    {git !== "" &&
                        <a className='w-6' href={git} target='_blank'>
                            <GithubIcons />
                        </a>
                    }

                    {page !== "" &&
                        <a className='w-6' href={page} target='_blank'>
                            <Share />
                        </a>
                    }
                </div>

            </div>
        </div>
    )
}
