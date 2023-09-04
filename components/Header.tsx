import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {};

function Header({ }: Props) {
	return (
		<header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto p-5 z-20 xl:items-center'>
			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className='flex flex-row items-center'>
				{/* Solcia Icons */}
				<SocialIcon
					url='https://linkedin.com/in/voeffray-jonathan/'
					fgColor='gray'
					bgColor='transparent'
					target='_blank'
					className='rounded-full hover:bg-[#44D62C]'
				/>
				<SocialIcon
					url='https://github.com/Jonavoe'
					fgColor='gray'
					bgColor='transparent'
					target='_blank'
					className='rounded-full hover:bg-[#44D62C]'
				/>
				<SocialIcon
					url='https://twitter.com/VoeffrayJona'
					fgColor='gray'
					bgColor='transparent'
					target='_blank'
					className='rounded-full hover:bg-[#44D62C]'
				/>
			</motion.div>
			<motion.div
				initial={{
					x: 500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className='flex flex-row space-x-5 items-center text-gray-300 cursor-pointer'>

				<Link target='_blank' href='https://drive.google.com/file/d/1PBn7cyR6wWolOCxbpeTdnkUcKBSOXOWu/view?usp=sharing'>
					<p className='uppercase s'>CV</p>
				</Link>

				<div className='flex items-center'>
					<Link href='#contactme' >
						<p className='uppercase'>Contacto</p>
					</Link>
					<SocialIcon
						className='cursor-pointer rounded-full hover:bg-[#44D62C]'
						network='email'
						fgColor='gray'
						bgColor='transparent'
						target='_blank'
					/>
				</div>
			</motion.div>
		</header>
	);
}

export default Header;
