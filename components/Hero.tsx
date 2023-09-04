/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import cv from "../public/cv.jpg"
import { CSSProperties } from 'react';

type Props = {};

export default function Hero({ }: Props) {
	const [text, count] = useTypewriter({
		words: ['Desarrollador'],
		typeSpeed: 150,
		deleteSpeed: 50,
		loop: true,
		delaySpeed: 3000,
	});

	const [text2, count2] = useTypewriter({
		words: ['Full-Stack'],
		typeSpeed: 150,
		deleteSpeed: 50,
		loop: true,
		delaySpeed: 3000,
	});

	return (
		<div className='h-screen flex flex-col space-y-4 items-center justify-start md:justify-center md:pt-0 pt-32 text-center overflow-hidden'>

			<section className="hero-section" >

				<div
					className={`flex items-center justify-center ${"hero-box"}`}
					style={{ "--clr": "#44D62C", "--i": 0 } as CSSProperties}
				>
					<img
						className="icon rounded-full"
						style={{ width: "15rem", height: "15rem", padding: "10px" }}
						src={cv.src}
						alt="mui icon"
					/>
					<span className="text-center">
						<h2 className='text-2xl md:text-3xl uppercase text-gray-500 pb-2 tracking-[15px]'>
							Jonathan Voeffray
						</h2>
						<p className='text-lg md:text-2xl uppercase text-gray-500 pb-2 tracking-[15px]'>
							DEVELOPER FULL STACK
						</p>

						<Link href='#about'>
							<button className='heroButton shadow hover:shadow-[#799ee6]/50 text-sm'>
								Sobre mi
							</button>
						</Link>
						{/* <Link href='#experience'>
						<button className='heroButton shadow hover:shadow-[#799ee6]/50 text-sm'>
							Experiencie
						</button>
					</Link> */}
						<Link href='#skills'>
							<button className='heroButton shadow hover:shadow-[#799ee6]/50 text-sm'>
								Skills
							</button>
						</Link>
						<Link href='#projects'>
							<button className='heroButton shadow hover:shadow-[#799ee6]/50 text-sm'>
								Proyectos
							</button>
						</Link></span>
				</div>

			</section>
		</div>
	);
}
