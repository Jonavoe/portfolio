/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import sml from "../public/sml.webp"
import planet from "../public/planet.webp"
import ecommerce from "../public/ecommerce.webp"
import rick from "../public/rick.webp"
import shit from "../public/shit.webp"

type Props = {};

function Projects({ }: Props) {
	const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

	const projects = [
		{
			title: 'Social Media Lab App',
			// img: 'https://i.postimg.cc/pL8gxS70/Copia-de-Copia-de-Copia-de-Dise-o-sin-t-tulo-removebg-preview.webp',
			img: sml.src,
			text: 'Esta aplicación, desarrollada para la empresa Social Media Lab, tiene como objetivo clasificar y completar la información de clientes potenciales.',
			github: 'https://github.com/Jonavoe/Ventas',
			vercel: 'https://ventas-jonavoe.vercel.app/',
		},
		{
			title: 'Actived Planet',
			// img: 'https://i.postimg.cc/t47zhChS/Project-pi.png',
			img: planet.src,
			text: 'Explore los países del mundo es una aplicación web que te permite descubrir información interesante sobre diferentes países y planificar actividades turísticas. Desarrollado en React y Redux, esta aplicación utiliza una base de datos en PostgreSQL y Sequelize como ORM',
			github: 'https://github.com/Jonavoe/PI-Countries-main',
			vercel: 'https://pi-countries-main-green.vercel.app/',
		},
		{
			title: 'eCommerce Gamer',
			// img: 'https://i.postimg.cc/ZKQvpRDY/project-2-ecommerce.png',
			img: ecommerce.src,
			text: 'La aplicación de eCommerce ofrece una experiencia de compra fácil y agradable. Los usuarios pueden agregar productos al carrito y filtrarlos por tipo. La aplicación fue desarrollada con tecnologías modernas como React y sus librerias. Es una herramienta esencial para los compradores en línea.',
			github: 'https://github.com/Jonavoe/ecommerce',
			vercel: 'https://ecommerce-jonavoe.vercel.app/',
		},
		{
			title: 'Rick and Morty Fanpages',
			// img: 'https://i.postimg.cc/HxD3k8L7/project-1-rym.png',
			img: rick.src,
			text: 'La app de Rick and Morty permite buscar personajes por ID, seleccionar aleatoriamente, tener favoritos y filtros. La interfaz es moderna y fácil de usar con tecnologías avanzadas como React, Redux, Axios, HTML y CSS.',
			github: 'https://github.com/Jonavoe/Proyecto-rick-and-morty',
			vercel: 'https://rick-and-morty-jonavoe.vercel.app',
		},
		{
			title: 'Buscador de Imagenes',
			// img: 'https://i.postimg.cc/jSJwXbGH/project-3-pixabai.png',
			img: shit.src,
			text: 'App de búsqueda de imágenes con la API de Pixabay. Interfaz intuitiva y adaptable. Desarrollada con HTML, CSS, React y Bootstrap. Perfecta para proyectos que requieran imágenes de alta calidad.',
			github: 'https://github.com/Jonavoe/searchImagesPixabai',
			vercel: 'https://search-images-pixabai.vercel.app/',
		},
	];


	const goToNextProject = () => {
		setCurrentProjectIndex((currentProjectIndex + 1) % projects.length);
	};

	const goToPreviousProject = () => {
		setCurrentProjectIndex(
			(currentProjectIndex - 1 + projects.length) % projects.length
		);
	};

	const currentProject = projects[currentProjectIndex];

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-center mx-auto items-center z-0'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Proyectos
			</h3>

			<div className='relative w-full flex justify-center items-center'>
				<button
					className='absolute top-1/2 text-5xl lg:text-9xl ml-5 md:ml-10 text transform -translate-y-1/2 left-0 text-gray-500 hover:text-gray-800 z-50'
					onClick={goToPreviousProject}
				>
					&#8249;
				</button>

				<button
					className='absolute text-5xl lg:text-9xl mr-5 md:mr-10 top-1/2 transform -translate-y-1/2 right-0 text-gray-500 hover:text-gray-800 z-50'
					onClick={goToNextProject}
				>
					&#8250;
				</button>
				<div
					className={`w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center p-20 md:p-44 h-screen`}
				>
					<div className='space-y-2 pc-0 md:px-10 max-w-6xl'>
						<div className='flex flex-col items-center justify-center'>
							<h4 className='text-5xl mt-0 md:mt-40'>
								{currentProject.title}
							</h4>
							<div className='flex z-10 flex-row items-center justify-center'>
								<SocialIcon
									style={{ width: '60px', height: '60px' }}
									url={currentProject.github}
									target='_blank'
									fgColor='gray'
									bgColor='transparent'
								/>
								<Link
									target='_blank'
									href={currentProject.vercel}>
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
							<Link className='mt-10 z-10 md:mt-0'
								rel='stylesheet'
								target='_blank'
								href={currentProject.vercel}>
								<motion.img
									className='mt-5'
									initial={{ y: -100, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									transition={{ duration: 1.2 }}
									src={currentProject.img}
									alt=''
								/>
							</Link>
						</div>

						<p className='text-sm md:text-2xl text-left'>{currentProject.text}</p>
					</div>
				</div>
			</div>

			<div className='w-full absolute top-[30%] bg-[#799ee6]/10 left-0 h-[500px] -skew-y-12'></div>
		</motion.div>
	);
}

export default Projects;
