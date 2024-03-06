import React from 'react'
import Logo from "./icons/Logo";
import { Link, animateScroll as scroll } from "react-scroll";
import LogoBack from './icons/LogoBack';
import arg from '../assets/argentina.jpg'
import us from '../assets/us.jpg'


export default function Header({ es, handleLenguage }) {
    return (
        <div id='header' className=' justify-between items-center mx-10 my-4 header flex'>
            <div className='w-14 h-14 relative cursor-pointer'>
                <div className='absolute top-0 left-0 w-full h-full'>
                    <LogoBack />
                </div>
                <div className='moveHover absolute top-0 left-0 w-full h-full'>
                    <Logo />
                </div>
            </div>

            <div className="gap-8 items-center justify-center hidden md:flex">

                <ul className='flex items-center justify-center gap-8'>
                    <li>
                        <Link
                            className="hover:text-[--green] transition-all duration-500"
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <span className="text-[--green]">01. </span>{es ? "Sobre mí" : "About"}
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="hover:text-[--green] transition-all duration-500"
                            activeClass="active"
                            to="experience"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <span className="text-[--green]">02. </span>{es ? "Experiencia" : "Experience"}
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="hover:text-[--green] transition-all duration-500"
                            activeClass="active"
                            to="work"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <span className="text-[--green]">03. </span>{es ? "Proyectos" : "Work"}
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="hover:text-[--green] transition-all duration-500"
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <span className="text-[--green]">04. </span>{es ? "Contacto" : "Contact"}
                        </Link>
                    </li>
                </ul>
                <a className="border rounded-sm border-[--green] px-2 py-1 cursor-pointer hover:text-[--green]" href={`${es ? "https://drive.google.com/file/d/19xLz9cup3NS1R7cB9P5kUHDrLa6lT5f_/view?usp=sharing" : "https://drive.google.com/file/d/12FmML7tNOXSdCl0lCtTYDBZE7YyYvMvp/view?usp=sharing"}`} target='_blank'>
                    {es ? "Resumen" : "Resume"}
                </a>
                {es ?
                    <div className="w-10" onClick={() => handleLenguage()}>
                        <img src={us} alt="" />
                    </div>
                    :
                    <div className="w-10" onClick={() => handleLenguage()}>
                        <img src={arg} alt="" />
                    </div>
                }
            </div>
        </div>
    )
}
