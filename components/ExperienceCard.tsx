x/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

export default function ExperienceCard({}: Props) {
	return (
		<div>
			<article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200'>
				<motion.img
					initial={{ y: -100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 1.5 }}
					viewport={{ once: true }}
					className='w-32 h.32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
					src='https://live.staticflickr.com/65535/52772764227_b573223194_z.jpg'
					alt='Image experience'
				/>

				<div className='px-0 md:px-10'>
					<h4 className='text-4xl font-light'>Ceo of Harrito company</h4>
					<p className='font-bold text-2xl mt-1'>harito funcionario</p>
					<div className='flex space-x-2 my-2'>
						<img
							className='w-5 h-5'
							src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png'
							alt=''
						/>
						<img
							className='w-5 h-5'
							src='https://cdn-icons-png.flaticon.com/512/1126/1126012.png'
							alt=''
						/>
						<img
							className='w-5 h-5'
							src='https://cdn-icons-png.flaticon.com/512/732/732190.png'
							alt=''
						/>
						<img
							className='w-5 h-5'
							src='https://cdn-icons-png.flaticon.com/512/1051/1051277.png'
							alt=''
						/>
						<img
							className='w-5 h-5'
							src='https://cdn-icons-png.flaticon.com/512/906/906324.png'
							alt=''
						/>
						<img
							className='w-5 h-5'
							src='https://cdn-icons-png.flaticon.com/512/2111/2111432.png'
							alt=''
						/>
						<img
							className='w-5 h-5'
							src='https://cdn-icons-png.flaticon.com/512/5968/5968358.png'
							alt=''
						/>
						<img
							className='w-5 h-5'
							src='https://cdn-icons-png.flaticon.com/512/5968/5968342.png'
							alt=''
						/>
						{/* tech used */}
						{/* tech used */}
						{/* tech used */}
					</div>
					<p className='uppercase py-5 text-gray-300'>started work... - ended...</p>

					<ul className='list-disc space-y-4 ml-5 text-lg '>
						<li>Sumary Points</li>
						<li>Sumary Points</li>
						<li>Sumary Points</li>
						<li>Sumary Points</li>
						<li>Sumary Points</li>
					</ul>
				</div>
			</article>
		</div>
	);
}
