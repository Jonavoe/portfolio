import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function BackgroundCircles({}: Props) {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
				scale: [1, 2, 2, 3, 1],
			}}
			transition={{
				duration: 3,
			}}
			className='relative flex justify-center items-center'>
			<div className='absolute border border-[#363636] rounded-full h-[250px] w-[250px] mt-52 animate-ping' />
			<div className='rounded-full border border-[#F7AB0A] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse' />
		</motion.div>
	);
}

export default BackgroundCircles;
