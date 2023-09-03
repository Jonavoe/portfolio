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
import Image from 'next/image';

type Props = {};

function Projects({ }: Props) {
	const [detail, setDetail] = useState(false)
	// const [projectDetail, setProjectDetail] = useState<{ title: string; img: string; text: string; github: string; vercel: string } | undefined>();
	const [projectDetail, setProjectDetail] = useState(Object);

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
		{
			title: 'Rick and Morty Fanpages',
			// img: 'https://i.postimg.cc/HxD3k8L7/project-1-rym.png',
			img: rick.src,
			text: 'La app de Rick and Morty permite buscar personajes por ID, seleccionar aleatoriamente, tener favoritos y filtros. La interfaz es moderna y fácil de usar con tecnologías avanzadas como React, Redux, Axios, HTML y CSS.',
			github: 'https://github.com/Jonavoe/Proyecto-rick-and-morty',
			vercel: 'https://rick-and-morty-jonavoe.vercel.app',
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
		{
			title: 'Buscador de Imagenes',
			// img: 'https://i.postimg.cc/jSJwXbGH/project-3-pixabai.png',
			img: shit.src,
			text: 'App de búsqueda de imágenes con la API de Pixabay. Interfaz intuitiva y adaptable. Desarrollada con HTML, CSS, React y Bootstrap. Perfecta para proyectos que requieran imágenes de alta calidad.',
			github: 'https://github.com/Jonavoe/searchImagesPixabai',
			vercel: 'https://search-images-pixabai.vercel.app/',
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

	const openDetail = (item: object) => {
		setDetail(true)
		setProjectDetail(item)
	}

	const closeDetail = () => {
		setDetail(false)
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-center mx-auto items-center z-0'
		>
			{detail &&
				<div className='z-50 absolute top-0 right-0 h-screen w-screen bg-[rgba(0,0,0,0.5)]   flex justify-center items-center' onClick={() => closeDetail()}>

					<motion.div
						initial={{ opacity: 0, y: 500, x: -500 }}
						whileInView={{ opacity: 1, y: 0, x: 0 }}
						transition={{ duration: 1 }}
						className={` flex flex-col justify-between p-5 items-center rounded-xl bg-[#222222] w-[40rem] h-fit`}
					>
						<div className='w-full flex items-center justify-end'>
							<div className='rounded-full bg-[rgba(1,1,1,.5)] hover:bg-[rgba(200,200,200,0.5)] px-3 py-1' onClick={() => closeDetail()}>X</div>
						</div>
						<div className='flex flex-col items-center justify-center gap-5 p-5'>
							<div className=''>
								<h2 className='font-semibold text-5xl'>
									{projectDetail?.title}
								</h2>
							</div>
							<div className=''>
								<Link href={projectDetail.vercel} target='_blank'>
									<Image
										src={projectDetail.img}
										alt={projectDetail.title}
										width={1000}
										height={1000} />
								</Link>
							</div>
							<div className=''>
								<p>
									{projectDetail?.text}
								</p>
							</div>
						</div>
					</motion.div>
				</div >

			}
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Proyectos
			</h3>
			<div className='flex flex-col gap-5'>

				<div className='flex items-center justify-center gap-5'>

					{project.map((item, index) => (
						<motion.div
							initial={{ x: -500, opacity: 0 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 2 }}
							viewport={{ once: true }}
							onClick={() => openDetail(item)}
							className=' cursor-pointer'
						>
							<section className="projects-section" >

								<div
									className={`flex items-center justify-center ${"projects-box"}`}
									style={{ "--clr": "#44D62C", "--i": 0 }}
								>
									<img
										className="icon"
										style={{ width: "auto", height: "auto", padding: "10px" }}
										src={item.img}
										alt="mui icon"
									/>
									<span>
										{item.title}</span>
								</div>

							</section>
						</motion.div>
					))
					}
				</div >
				<div className='flex items-center justify-center gap-5'>

					{project1.map((item, index) => (
						<motion.div
							initial={{ x: 500, opacity: 0 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 2 }}
							viewport={{ once: true }}
							onClick={() => openDetail(item)}
							className=' cursor-pointer'
						>
							<section className="projects-section" >

								<div
									className={`flex items-center justify-center ${"projects-box"}`}
									style={{ "--clr": "#44D62C", "--i": 0 }}
								>
									<img
										className="icon"
										style={{ width: "auto", height: "auto", padding: "10px" }}
										src={item.img}
										alt="mui icon"
									/>
									<span>
										{item.title}</span>
								</div>

							</section>
						</motion.div>
					))
					}
				</div >
				{/* <div className='flex items-center justify-center gap-5'>

					{project1.map((item, index) => (
						<motion.div
							initial={{ x: 500, opacity: 0 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 2 }}
							viewport={{ once: true }}
							onClick={() => openDetail(item)}
							className=' cursor-pointer'
						>
							<section className="projects-section" >

								<div
									className={`flex items-center justify-center ${"projects-box"}`}
									style={{ "--clr": "#44D62C", "--i": 0 }}
								>
									<img
										className="icon"
										style={{ width: "auto", height: "auto", padding: "10px" }}
										src={item.img}
										alt="mui icon"
									/>
									<span>
										{item.title}</span>
								</div>

							</section>
						</motion.div>
					))
					}
				</div > */}


			</div>

			{/* <div className='w-full absolute top-[30%] bg-[#799ee6]/10 left-0 h-[500px] -skew-y-12'></div> */}
		</motion.div >
	);
}

export default Projects;
