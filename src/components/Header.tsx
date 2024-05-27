import React, { useEffect, useState } from 'react'
import Logo from "./icons/Logo";
import { Link, animateScroll as scroll } from "react-scroll";
import LogoBack from './icons/LogoBack';
import arg from '../assets/argentina.jpg'
import us from '../assets/us.jpg'
import Close from './icons/Close';
import Burger from './icons/Burger';


export default function Header({ es, handleLenguage }) {
    const [scrollDir, setScrollDir] = useState(0);
    const [scroll, setScroll] = useState(false);
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            let previousScrollY = scrollDir;

            if (currentScrollY > previousScrollY) {
                setScroll(true)
            } else {
                setScroll(false)
            }

            setScrollDir(currentScrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollDir]);

    const handleMenu = () => {
        setMenu(!menu)
    }

    return (
        <div id='header' className={`${scroll ? "headerOut" : "headerIn"}  fixed w-full `}>
            <div className='w-full left-0 justify-between items-center header flex  mx-10 my-4'>

                <div className='w-14 h-14 relative cursor-pointer'>
                    <div className='absolute -top-1 left-0 w-full h-full'>
                        <LogoBack />
                    </div>
                    <div className='moveHover absolute -top-1 left-0 w-full h-full'>
                        <Logo />
                    </div>
                </div>
                <div className='mr-16 md:hidden'>
                    <div className={`${!menu && "hidden"} w-10 h-10`} onClick={() => handleMenu()}>
                        <Close />
                    </div>
                    <div className={`${menu && "hidden"} w-10 h-10`} onClick={() => handleMenu()}>
                        <Burger />
                    </div>
                </div>

                <div className="gap-8 items-center justify-center hidden md:flex md:mr-16 ">

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
                    <a className="border rounded-sm border-[--green] px-2 py-1 cursor-pointer hover:text-[--green]" href={`${es ? "https://drive.google.com/file/d/1iLhO3n9er37J0QFQbVX-FzawySfKK0Az/view?usp=sharing" : "https://drive.google.com/file/d/1GmeoJzjo3V3BBoi3u0xFHR34qnvPUrtb/view?usp=sharing"}`} target='_blank'>
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
            <div className={`${menu ? "menuIn" : "menuOut"} w-full h-64 bg-[--navy-opacity] md:hidden`}>

                <div className={`${menu ? "menuVisible" : "menuInvisible"} flex flex-col   gap-4 items-end`}>

                    <ul className='flex flex-col items-end justify-end gap-4 pr-8'>
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
                    <a className=" mr-8 border rounded-sm border-[--green] px-2 py-1 cursor-pointer hover:text-[--green]" href={`${es ? "https://drive.google.com/file/d/19xLz9cup3NS1R7cB9P5kUHDrLa6lT5f_/view?usp=sharing" : "https://drive.google.com/file/d/12FmML7tNOXSdCl0lCtTYDBZE7YyYvMvp/view?usp=sharing"}`} target='_blank'>
                        {es ? "Resumen" : "Resume"}
                    </a>
                    {es ?
                        <div className="w-10 mr-8" onClick={() => handleLenguage()}>
                            <img src={us} alt="" />
                        </div>
                        :
                        <div className="w-10 mr-8" onClick={() => handleLenguage()}>
                            <img src={arg} alt="" />
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}
