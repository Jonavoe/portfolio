/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function Projects({}: Props) {
	const projects = [
		{
			title: 'Rick and Morty Fanpages',
			img: 'https://user-images.githubusercontent.com/39503844/161444912-34721a29-dfc9-4c30-8025-730a93a2fb92.png',
		},
		{
			title: '2',
			img: 'https://user-images.githubusercontent.com/39503844/161444912-34721a29-dfc9-4c30-8025-730a93a2fb92.png',
		},
		{
			title: '2',
			img: 'https://user-images.githubusercontent.com/39503844/161444912-34721a29-dfc9-4c30-8025-730a93a2fb92.png',
		},
	];
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Projects
			</h3>

			<div className='relative w-full flex overflow-auto snap-x snap-mandatory z-20 mb-4 scrollbar'>
				{projects.map((project, key) => (
					<div
						key={key}
						className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
						<motion.img
							initial={{ y: -100, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 1.2 }}
							src={project.img}
							alt=''
						/>

						<div className='space-y-10 pc-0 md:px-10 max-w-6xl'>
							<h4 className='text-2xl'>
								<span
									className='underline
                             decoration-[#F7AB0A]/50'>
									{' '}
									Project {key + 1} of {projects.length}
								</span>
								: {project.title}
							</h4>

							<p className='text-lg text-center md:text-left'>
								La aplicación de Rick and Morty es una herramienta diseñada para
								los fans de la serie de televisión que les permite buscar
								personajes por ID, mostrar personajes aleatorios, agregar
								personajes a favoritos y ordenarlos y filtrarlos por género. Es
								una forma fácil y divertida de explorar y conocer más sobre los
								personajes y la historia detrás de la serie.
							</p>
						</div>
					</div>
				))}
			</div>

			<div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
		</motion.div>
	);
}

export default Projects;
