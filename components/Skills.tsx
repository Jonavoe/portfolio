import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

type Props = {};

export default function Skills({}: Props) {
	return (
		<motion.div
        initial={{ opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{ duration: 1.5}}
        className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center items-center xl:space-y-0 mx-auto'>
			<h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Skills
			</h3>

            <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for currency proficiency</h3>

            <div className='grid grid-cols-4 gap-5'>
                <Skill directionLeft={true} img={'https://cdn-icons-png.flaticon.com/512/5968/5968292.png'} percentage={63}/>
                <Skill directionLeft={true} img={'https://cdn-icons-png.flaticon.com/512/1126/1126012.png'} percentage={64}/>
                <Skill directionLeft={true} img={'https://cdn-icons-png.flaticon.com/512/732/732190.png'} percentage={93}/>
                <Skill directionLeft={true} img={'https://cdn-icons-png.flaticon.com/512/1051/1051277.png'} percentage={82}/>
                <Skill img={'https://cdn-icons-png.flaticon.com/512/906/906324.png'} percentage={80}/>
                <Skill img={'https://cdn-icons-png.flaticon.com/512/2111/2111432.png'} percentage={52}/>
                <Skill img={'https://cdn-icons-png.flaticon.com/512/5968/5968358.png'} percentage={82}/>
                <Skill img={'https://cdn-icons-png.flaticon.com/512/5968/5968342.png'} percentage={43}/>
            </div>
		</motion.div>
	);
}
