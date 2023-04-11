/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

type Props = {};

function Projects({ }: Props) {
	const projects = [
		{
			title: 'eCommerce Gamer',
			img: 'https://i.postimg.cc/ZKQvpRDY/project-2-ecommerce.png',
			text: 'La aplicación de eCommerce ofrece una experiencia de compra fácil y agradable. Los usuarios pueden agregar productos al carrito y filtrarlos por tipo. La aplicación fue desarrollada con tecnologías modernas como React y sus librerias. Es una herramienta esencial para los compradores en línea.',
			github: 'https://github.com/Jonavoe/ecommerce',
			vercel: 'https://ecommerce-jonavoe.vercel.app/',
		},
		{
			title: 'Rick and Morty Fanpages',
			img: 'https://i.postimg.cc/HxD3k8L7/project-1-rym.png',
			text: 'La app de Rick and Morty permite buscar personajes por ID, seleccionar aleatoriamente, tener favoritos y filtros. La interfaz es moderna y fácil de usar con tecnologías avanzadas como React, Redux, Axios, HTML y CSS.',
			github: 'https://github.com/Jonavoe/Proyecto-rick-and-morty',
			vercel: 'https://rick-and-morty-jonavoe.vercel.app',
		},
		{
			title: 'Buscador de Imagenes',
			img: 'https://i.postimg.cc/jSJwXbGH/project-3-pixabai.png',
			text: 'App de búsqueda de imágenes con la API de Pixabay. Interfaz intuitiva y adaptable. Desarrollada con HTML, CSS, React y Bootstrap. Perfecta para proyectos que requieran imágenes de alta calidad.',
			github: 'https://github.com/Jonavoe/searchImagesPixabai',
			vercel: 'https://search-images-pixabai.vercel.app/',
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

			<div className='relative w-full flex overflow-auto snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-w-px scrollbar-thumb-[#799ee6]/80 top-[-10px]'>
				{projects.map((project, key) => (
					<div
						key={key}
						className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
						<Link
							rel='stylesheet'
							target='_blank'
							href='https://proyecto-rick-and-morty-ixri3lzeh-jonavoe.vercel.app/'>
							<motion.img
								className='mt-5'
								initial={{ y: -100, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{ duration: 1.2 }}
								src={project.img}
								alt=''
							/>
						</Link>

						<div className='space-y-2 pc-0 md:px-10 max-w-6xl'>
							<div className='flex items-center justify-center'>
								<h4 className='text-lg md:text-2xl'>
									<span className='underline decoration-[#799ee6]/50'>
										{' '}
										Project {key + 1} of {projects.length}
									</span>
									: {project.title}
								</h4>
								<div className='flex flex-col md:flex-row items-center justify-center'>
									<SocialIcon
										style={{ width: '60px', height: '60px' }}
										url={project.github}
										target='_blank'
										fgColor='gray'
										bgColor='transparent'
									/>
									<Link
										target='_blank'
										href={project.vercel}>
										<img
											style={{
												color: 'gray',
												background: 'transparent',
												width: '2.2rem',
											}}
											src='https://i.postimg.cc/JhbNrV1c/vercel.png'
											alt='logo vercel'
										/>
									</Link>
								</div>
							</div>

							<p className='text-sm md:text-2xl text-left'>{project.text}</p>
						</div>
					</div>
				))}
			</div>

			<div className='w-full absolute top-[30%] bg-[#799ee6]/10 left-0 h-[500px] -skew-y-12'></div>
		</motion.div>
	);
}

export default Projects;
