/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {};

function Projects({}: Props) {
	const projects = [
		{
			title: 'Rick and Morty Fanpages',
			img: 'https://i.postimg.cc/HxD3k8L7/project-1-rym.png',
		},
		{
			title: '2',
			img: 'https://i.postimg.cc/HxD3k8L7/project-1-rym.png',
		},
		{
			title: '2',
			img: 'https://i.postimg.cc/HxD3k8L7/project-1-rym.png',
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

			<div className='relative w-full flex overflow-auto snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#799ee6]/80'>
				{projects.map((project, key) => (
					<div
						key={key}
						className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
						<Link
							rel='stylesheet'
							target='_blank'
							href='https://proyecto-rick-and-morty-ixri3lzeh-jonavoe.vercel.app/'>
							<motion.img
								initial={{ y: -100, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{ duration: 1.2 }}
								src={project.img}
								alt=''
							/>
						</Link>

						<div className='space-y-10 pc-0 md:px-10 max-w-6xl'>
							<h4 className='text-2xl'>
								<span
									className='underline
                             decoration-[#799ee6]/50'>
									{' '}
									Project {key + 1} of {projects.length}
								</span>
								: {project.title}
							</h4>

							<p className='text-1xl md:text-2xl text-center md:text-left'>
								La aplicación de Rick and Morty es una herramienta diseñada para
								los fans de la serie de televisión que les permite buscar
								personajes por ID, mostrar personajes aleatorios, agregar
								personajes a favoritos y ordenarlos y filtrarlos por género.
							</p>
						</div>
					</div>
				))}
			</div>

			<div className='w-full absolute top-[30%] bg-[#799ee6]/10 left-0 h-[500px] -skew-y-12'></div>
		</motion.div>
	);
}

export default Projects;
