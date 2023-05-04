import React from 'react';
import { motion } from 'framer-motion';

type Props = {
	directionLeft?: boolean;
	img: string;
};

export default function Skill({ directionLeft, img }: Props) {
	return (
		<div className='group relative flex cursor-pointer '>
			<motion.img
				initial={{ x:directionLeft ? -75 : 75, opacity: 0 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				src={img}
                className='rounded-full border border-gray-500 object-cover w-16 h-16 lg:w-32 lg:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
			/>
            <div className='absolute opacity-0 group-hover:opacity-20 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 lg:w-32 lg:h-32 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                </div>
            </div>
		</div>
	);
}
