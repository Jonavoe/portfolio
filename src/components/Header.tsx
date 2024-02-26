import React from 'react'
import Logo from "./icons/Logo";
import { Link, animateScroll as scroll } from "react-scroll";


export default function Header() {
    return (
        <div id='header' className='flex justify-between items-center mx-10 my-4 header'>
            <div className='w-12 h-12 m-2'>
                <Logo />
            </div>
            <div className="flex gap-8">
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
                            <span className="text-[--green]">01. </span>About
                        </Link>
                    </li>
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
                            <span className="text-[--green]">02. </span>Experience
                        </Link>
                    </li>
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
                            <span className="text-[--green]">03. </span>Work
                        </Link>
                    </li>
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
                            <span className="text-[--green]">04. </span>Contact
                        </Link>
                    </li>
                </ul>
                <div className="border rounded-sm border-[--green] px-2 py-1 cursor-pointer text-[--green]">
                    Resume
                </div>
            </div>
        </div>
    )
}
