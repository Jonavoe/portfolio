import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {};

function Header({}: Props) {
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
				/>
				<SocialIcon
					url='https://github.com/Jonavoe'
					fgColor='gray'
					bgColor='transparent'
				/>
				<SocialIcon
					url='https://twitter.com/VoeffrayJona'
					fgColor='gray'
					bgColor='transparent'
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
				className='flex flex-row items-center text-gray-300 cursor-pointer'>
				<SocialIcon
					className='cursor-pointer'
					network='email'
					fgColor='gray'
					bgColor='transparent'
				/>
				<Link href='#contactme'>
					<p className='uppercase'>Get In Touch</p>
				</Link>
			</motion.div>
		</header>
	);
}

export default Header;
