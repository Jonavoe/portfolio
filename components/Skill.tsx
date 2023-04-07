import React from 'react';
import { motion } from 'framer-motion';

type Props = {
	directionLeft?: boolean;
	img: string;
	percentage: number;
};

export default function Skill({ directionLeft, img, percentage }: Props) {
	return (
		<div className='group relative flex cursor-pointer '>
			<motion.img
				initial={{ x:directionLeft ? -75 : 75, opacity: 0 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				src={img}
                className='rounded-full border border-gray-500 object-cover w-16 h-16 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
			/>
            <div className='absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 xl:w-32 xl:h-32 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>{percentage}%</p>
                </div>
            </div>
		</div>
	);
}
