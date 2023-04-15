import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

type Props = {};

export default function Skills({}: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center items-center xl:space-y-0 mx-auto'>
			<h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Skills
			</h3>

			<h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
				Hover over a skill for currency proficiency
			</h3>

			<div className='grid grid-cols-3 gap-5 mt-20 md:mt-0'>
				<Skill
					directionLeft={true}
					img={'https://img.icons8.com/fluency/256/javascript.png'}
					percentage={73}
				/>
				<Skill
					directionLeft={true}
					img={'https://img.icons8.com/officel/256/react.png'}
					percentage={74}
				/>
				<Skill
					directionLeft={true}
					img={'https://img.icons8.com/color/256/css3.png'}
					percentage={93}
				/>
				<Skill
					directionLeft={true}
					img={'https://img.icons8.com/fluency/256/html-5.png'}
					percentage={82}
				/>
				<Skill
					directionLeft={true}
					img={'https://img.icons8.com/fluency/256/visual-studio-code-2019.png'}
					percentage={85}
				/>
				<Skill
					directionLeft={true}
					img={'https://img.icons8.com/ios-glyphs/256/github.png'}
					percentage={85}
				/>
				<Skill
					directionLeft={false}
					img={'https://img.icons8.com/color/256/sass.png'}
					percentage={82}
				/>
				<Skill
					directionLeft={false}
					img={'https://img.icons8.com/color/256/postgreesql.png'}
					percentage={77}
				/>
				<Skill
					directionLeft={false}
					img={'https://img.icons8.com/nolan/256/express-js.png'}
					percentage={73}
				/>
				<Skill
					directionLeft={false}
					img={'https://img.icons8.com/color/256/redux.png'}
					percentage={73}
				/>
				<Skill
					directionLeft={false}
					img={'https://img.icons8.com/fluency/256/node-js.png'}
					percentage={75}
				/>
				<Skill
					directionLeft={false}
					img={
						'https://framerusercontent.com/images/48ha9ZR9oZQGQ6gZ8YUfElP3T0A.png'
					}
					percentage={76}
				/>
			</div>
		</motion.div>
	);
}
