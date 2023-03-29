/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {};

export default function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: ['Front-End Developer'],
		loop: true,
		delaySpeed: 2000,
	});

	return (
		<div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
			<BackgroundCircles />
			<img
				className=' relative rounded-full h-32 w-32 mx-auto object-cover'
				src='https://live.staticflickr.com/65535/52772764227_b573223194_z.jpg'
				alt='avatar'
			/>
			<div className='z-20'>
				<h2 className='text-3xl uppercase text-gray-500 pb-2 tracking-[15px]'>
					Jonathan Voeffray
				</h2>
				<h1>
					<span className='text-2xl uppercase text-gray-500 pb-2 tracking-[15px]'>
						{text}
					</span>
					<Cursor cursorColor='#F7AB0A' />
				</h1>

				<div className='pt-5'>
					<Link href='#about'>
						<button className='heroButton shadow hover:shadow-[#F7AB0A]/50 '>About</button>
					</Link>
					<Link href='#experience'>
						<button className='heroButton shadow hover:shadow-[#F7AB0A]/50'>Experiencie</button>
					</Link>
					<Link href='#skills'>
						<button className='heroButton shadow hover:shadow-[#F7AB0A]/50'>Skills</button>
					</Link>
					<Link href='#projects'>
						<button className='heroButton shadow hover:shadow-[#F7AB0A]/50'>
							Projects
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
