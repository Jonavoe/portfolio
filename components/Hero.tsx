/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {};

export default function Hero({ }: Props) {
	const [text, count] = useTypewriter({
		words: ['Full-Stack'],
		typeSpeed: 150,
		deleteSpeed: 50,
		loop: true,
		delaySpeed: 3000,
	});

	const [text2, count2] = useTypewriter({
		words: ['Developer'],
		typeSpeed: 150,
		deleteSpeed: 50,
		loop: true,
		delaySpeed: 3000,
	});

	return (
		<div className='h-screen flex flex-col space-y-4 items-center justify-start md:justify-center md:pt-0 pt-32 text-center overflow-hidden'>
			<BackgroundCircles />
			<img
				className=' relative rounded-full h-28 w-28 md:h-40 md:w-40 mx-auto object-cover'
				// src='https://live.staticflickr.com/65535/52772764227_b573223194_z.jpg'
				src='https://live.staticflickr.com/65535/52786300693_d55aee5bfb.jpg'
				alt='avatar'
			/>
			<div className='z-20'>
				<h2 className='text-3xl uppercase text-gray-500 pb-2 tracking-[15px]'>
					Jonathan Voeffray
				</h2>
				<div className='flex flex-col justify-center items-center'>
					<div className='flex'>
						<p className='text-2xl uppercase text-gray-500 pb-2 tracking-[15px]'>
							<span className='opacity-0'>.</span>
							{text}
							<span className='opacity-0'>.</span>
						</p>
						<Cursor cursorColor='#799ee6' />
					</div>
					<div className='flex'>
						<p className='text-2xl uppercase text-gray-500 pb-2 tracking-[15px]'>
							<span className='opacity-0'>.</span>
							{text2}
							<span className='opacity-0'>.</span>
						</p>
						<Cursor cursorColor='#799ee6' />
					</div>
				</div>

				<div className='pt-5'>
					<Link href='#about'>
						<button className='heroButton shadow hover:shadow-[#799ee6]/50 text-sm'>
							About
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
							Projects
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
