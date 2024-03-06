import React from 'react'
import GithubIcons from './icons/GithubIcons'
import Share from './icons/Share'
import { Link } from 'react-router-dom'

export default function CardLeftMobile({ image, title, description, technologies, git, page }) {
    return (
        <div className='relative justify-end w-full h-full mb-14 md:hidden flex'>
            <div className='absolute w-7/12 z-0 rounded-md'>
                <div className='div-1 z-50 absolute w-full h-full rounded-md'></div>
                <img className='z-40 rounded-md' src={image} alt="profile" />
            </div>
            <div className='flex justify-start items-start'>
                <div className='flex w-1/2 z-10'>
                    <div className='flex flex-col justify-start items-start gap-3'>
                        <div className='text-[--green]'>
                            Featured Project
                        </div>
                        <div className='text-[--lightest-slate] text-[1.5rem] font-semibold transition duration-300 hover:text-[--green] hover-underline-animation-work'>
                            {title}
                        </div>
                        <div className='py-3 px-4 text-sm bg-[--light-navy] text-[--light-slate] text-start rounded-md'>
                            {description}
                        </div>
                        <div className='flex gap-2 text-[--slate]'>
                            {technologies && technologies.map(tech =>
                                < div className='transition duration-300 text-sm hover:text-[--green]' > {tech}</div>
                            )}
                        </div>
                        <div className='flex gap-3 '>
                            {git !== "" &&
                                <Link className='w-6' to={git} target='_blank'>
                                    <GithubIcons />
                                </Link>
                            }

                            {page !== "" &&
                                <Link className='w-6' to={page} target='_blank'>
                                    <Share />
                                </Link>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}