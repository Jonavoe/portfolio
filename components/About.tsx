import React from 'react';
import { motion } from 'framer-motion';

// https://live.staticflickr.com/65535/52774866720_5fe7ec93b1_z.jpg

type Props = {};

export default function About({}: Props) {
	return (
		<div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
			<h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
				About
			</h3>

			<motion.img
				initial={{
					x: -200,
					opacity: 0,
				}}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ duration: 1.2 }}
				src='https://live.staticflickr.com/65535/52774866720_bd2203d612_z.jpg'
				className='mt-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-80 md:h-80 xl:w-[600px] xl:h-[600px]'
			/>

			<div className='space-y-10 px-0 md:px-10'>
				<h4 className='text-4xl font-semibold text-gray-400'>
					Aquí está mi{' '}
					<span className='underline decoration-[#F7AB0A]/50'>
						presentación
					</span>:
				</h4>
				<p className='text-sm text-gray-400'>
					Soy un desarrollador Front End Junior apasionado por la tecnología y
					el diseño. Desde muy joven, siempre he sentido una gran curiosidad por
					todo lo relacionado con la tecnología y cómo funciona. Me encanta
					crear cosas nuevas y encontrar soluciones innovadoras para resolver
					problemas. En el mundo de la tecnología, descubrí una pasión por el
					desarrollo web, lo que me permitió unir mi pasión por la tecnología y
					el diseño. Durante mi carrera como desarrollador Front End Junior, he
					adquirido una amplia experiencia en el desarrollo de aplicaciones web
					utilizando tecnologías como{' '}
					<span className='underline decoration-[#F7AB0A]/50'>
						JavaScript, React ,Next.js y Node.js
					</span>
					. Además, he trabajado en el diseño e implementación de bases de datos
					utilizando SQL. Cada proyecto en el que he trabajado me ha brindado la
					oportunidad de mejorar mis habilidades y aprender cosas nuevas.
				</p>
			</div>
		</div>
	);
}
