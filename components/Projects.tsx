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
	const project = [
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
	];
	const project1 = [
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

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-center mx-auto items-center z-0'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Proyectos
			</h3>

			<div className='flex flex-col gap-5 items-center justify-center'>
				<div className='flex gap-5 mx-5'>

					{project.map((item, index) => (
						<div className='border-2'>
							<div className='flex flex-col fap5
					 items-center justify-center'>
								<div className=''>{item.title}</div>
								<div className=''>imagen</div>
								<div className=''>{item.text}</div>
							</div>
						</div>
					))}
				</div>
				<div className='border-2'>hola</div>
			</div>

			{/* <div className='w-full absolute top-[30%] bg-[#799ee6]/10 left-0 h-[500px] -skew-y-12'></div> */}
		</motion.div>
	);
}

export default Projects;
