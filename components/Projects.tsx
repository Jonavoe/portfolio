/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import planet from "../public/planet.webp"
import ecommerce from "../public/ecommerce.webp"
import rick from "../public/rick.webp"
import shit from "../public/shit.webp"
import pokedex from "../public/pokedex.webp"
import Gestion_de_empleados from "../public/Gestion_de_empleados.webp"
import gestion_de_leads from "../public/gestion_de_leads.webp"
import Gestion_de_ventas from "../public/Gestion_de_ventas.webp"
import sml_general from "../public/sml_general.webp"
import clientes from "../public/clientes.webp"
import { CSSProperties } from 'react';


type Props = {};

function Projects({ }: Props) {
	const [detail, setDetail] = useState(false)
	const [projectDetail, setProjectDetail] = useState(Object);
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	const initialAnimation1 = isSmallScreen
		? { x: 500, opacity: 0 }
		: { x: 100, opacity: 0 };
	const initialAnimation2 = isSmallScreen
		? { x: -500, opacity: 0 }
		: { x: -100, opacity: 0 };

	useEffect(() => {
		const checkWindowSize = () => {
			setIsSmallScreen(window.innerWidth <= 768);
		};

		window.addEventListener('resize', checkWindowSize);

		checkWindowSize();

		return () => {
			window.removeEventListener('resize', checkWindowSize);
		};
	}, []);

	const project = [
		{
			title: 'Social Media Lab App',
			img: sml_general.src,
			text: 'Esta aplicación, desarrollada para la empresa Social Media Lab, tiene como objetivo clasificar y completar la información de clientes potenciales.',
			github: 'https://github.com/Jonavoe/Ventas',
			vercel: 'https://ventas-jonavoe.vercel.app/',
			tecnologias: ["ReactJS", "JavaScript", "NodeJS", "mongoDb", "Clerk", "Redux", "MUI", "Tailwind"]
		},
		{
			title: 'Gestion de Empleados',
			img: Gestion_de_empleados.src,
			text: 'Esta aplicación, desarrollada para la empresa Social Media Lab, tiene como objetivo clasificar y completar la información de clientes potenciales.',
			github: 'https://github.com/Jonavoe/Ventas',
			vercel: 'https://ventas-jonavoe.vercel.app/',
			tecnologias: ["ReactJS", "JavaScript", "NodeJS", "mongoDb", "Clerk", "Redux", "MUI", "Tailwind"]
		},
		{
			title: 'Clasificacion de Clientes',
			img: gestion_de_leads.src,
			text: 'Esta aplicación, desarrollada para la empresa Social Media Lab, tiene como objetivo clasificar y completar la información de clientes potenciales.',
			github: 'https://github.com/Jonavoe/Ventas',
			vercel: 'https://ventas-jonavoe.vercel.app/',
			tecnologias: ["ReactJS", "JavaScript", "NodeJS", "mongoDb", "Clerk", "Redux", "MUI", "Tailwind"]
		},
		{
			title: 'Gestion de ventas',
			img: Gestion_de_ventas.src,
			text: 'Esta aplicación, desarrollada para la empresa Social Media Lab, tiene como objetivo clasificar y completar la información de clientes potenciales.',
			github: 'https://github.com/Jonavoe/Ventas',
			vercel: 'https://ventas-jonavoe.vercel.app/',
			tecnologias: ["ReactJS", "JavaScript", "NodeJS", "mongoDb", "Clerk", "Redux", "MUI", "Tailwind"]
		}, {
			title: 'Aplicacion de Clientes',
			img: clientes.src,
			text: 'Explore los países del mundo es una aplicación web que te permite descubrir información interesante sobre diferentes países y planificar actividades turísticas. Desarrollado en React y Redux, esta aplicación utiliza una base de datos en PostgreSQL y Sequelize como ORM',
			github: 'https://github.com/Jonavoe/PI-Countries-main',
			vercel: 'https://pi-countries-main-green.vercel.app/',
			tecnologias: ["ReactJS", "JavaScript", "NodeJS", "mongoDb", "Clerk", "Redux", "MUI", "Tailwind"]
		},
	];

	const project1 = [
		{
			title: 'Pokedex',
			img: pokedex.src,
			text: 'Explore los países del mundo es una aplicación web que te permite descubrir información interesante sobre diferentes países y planificar actividades turísticas. Desarrollado en React y Redux, esta aplicación utiliza una base de datos en PostgreSQL y Sequelize como ORM',
			github: 'https://github.com/Jonavoe/PI-Countries-main',
			vercel: 'https://pi-countries-main-green.vercel.app/',
			tecnologias: ["React Native", "JavaScript", "API Pokemen", "Tailwind"]
		},
		{
			title: 'Actived Planet',
			img: planet.src,
			text: 'Explore los países del mundo es una aplicación web que te permite descubrir información interesante sobre diferentes países y planificar actividades turísticas. Desarrollado en React y Redux, esta aplicación utiliza una base de datos en PostgreSQL y Sequelize como ORM',
			github: 'https://github.com/Jonavoe/PI-Countries-main',
			vercel: 'https://pi-countries-main-green.vercel.app/', tecnologias: ["ReactJS", "JavaScript", "Redux", "API Planet", "PostgreSQL", "Express", "Sequelize"]
		},
		{
			title: 'eCommerce Gamer',
			img: ecommerce.src,
			text: 'La aplicación de eCommerce ofrece una experiencia de compra fácil y agradable. Los usuarios pueden agregar productos al carrito y filtrarlos por tipo. La aplicación fue desarrollada con tecnologías modernas como React y sus librerias. Es una herramienta esencial para los compradores en línea.',
			github: 'https://github.com/Jonavoe/ecommerce',
			vercel: 'https://ecommerce-jonavoe.vercel.app/', tecnologias: ["ReactJS", "JavaScript", "Redux", "API Planet", "PostgreSQL", "Express", "Sequelize"]
		},
		{
			title: 'Rick and Morty',
			img: rick.src,
			text: 'La app de Rick and Morty permite buscar personajes por ID, seleccionar aleatoriamente, tener favoritos y filtros. La interfaz es moderna y fácil de usar con tecnologías avanzadas como React, Redux, Axios, HTML y CSS.',
			github: 'https://github.com/Jonavoe/Proyecto-rick-and-morty',
			vercel: 'https://rick-and-morty-jonavoe.vercel.app', tecnologias: ["ReactJS", "JavaScript", "Redux", "API Planet", "PostgreSQL", "Express", "Sequelize"]
		},
		{
			title: 'Buscador de Imagenes',
			img: shit.src,
			text: 'App de búsqueda de imágenes con la API de Pixabay. Interfaz intuitiva y adaptable. Desarrollada con HTML, CSS, React y Bootstrap. Perfecta para proyectos que requieran imágenes de alta calidad.',
			github: 'https://github.com/Jonavoe/searchImagesPixabai',
			vercel: 'https://search-images-pixabai.vercel.app/', tecnologias: ["ReactJS", "JavaScript", "Redux", "API Pixabay"]
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
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1.5 }}
						className={` flex flex-col justify-between p-5 items-center rounded-xl bg-[#222222] w-[40rem] h-fit`}
					>
						<div className='w-full flex items-center justify-end'>
							<div className='rounded-full bg-[rgba(1,1,1,.5)] hover:bg-[rgba(200,200,200,0.5)] px-3 py-1' onClick={() => closeDetail()}>X</div>
						</div>
						<div className='flex flex-col items-center justify-center gap-5 p-5'>
							<div className=''>
								<h2 className='font-semibold text-5xl text-center'>
									{projectDetail?.title}
								</h2>
							</div>
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 1.5 }} className=''>
								<Link href={projectDetail.vercel} target='_blank'>
									<img
										className="icon"
										style={{ width: "auto", height: "auto", padding: "10px" }}
										src={projectDetail.img}
										alt="mui icon"
									/>
								</Link>
							</motion.div>
							<div className='flex flex-col gap-5'>
								<p className='text-center'>
									{projectDetail?.text}
								</p>
								<p className='text-center'>Tecnologias: {projectDetail.tecnologias.join(', ')}</p>

							</div>
							<div className=''>


							</div>
						</div>
					</motion.div>
				</div >

			}
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Proyectos
			</h3>
			<div className="w-10/12">
				<motion.hr
					className=" border-2 mb-10 mt-10 border-[#44D62C]  rounded-2xl md:h-5/6 opacity-0 md:opacity-100 h-0 hidden md:block"
					initial={{ width: 0, height: 0 }}
					whileInView={{ width: "100%", height: 0 }}
					transition={{ duration: 3, ease: "easeOut" }}
				/>
				<div className='flex flex-row items-center justify-center md:flex-col gap-2 md:gap-5'>

					<div className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5'>

						{project.map((item, index) => (
							<motion.div
								initial={initialAnimation2}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 2 }}
								viewport={{ once: true }}
								onClick={() => openDetail(item)}
								className=' cursor-pointer'
								key={index}
							>
								<section className="projects-section" >

									<div
										className={`flex items-center justify-center ${"projects-box"}`}
										style={{ "--clr": "#44D62C", "--i": 0 } as CSSProperties}
									>
										<img
											className={`pt-1 md:w-auto md:h-auto w-24 h-20 ${"icon"}`}
											src={item.img}
											alt="mui icon"
										/>
										<span className=''>
											<p className='text-[0.7rem] md:text-xl font-normal md:font-semibold text-center pb-1'>
												{item.title}
											</p>
										</span>
									</div>

								</section>
							</motion.div>
						))
						}
					</div >
					<div className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5'>

						{project1.map((item, index) => (
							<motion.div
								initial={initialAnimation1}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 2 }}
								viewport={{ once: true }}
								onClick={() => openDetail(item)}
								className=' cursor-pointer'
								key={index}
							>
								<section className="projects-section" >

									<div
										className={`flex items-center justify-center ${"projects-box"}`}
										style={{ "--clr": "#44D62C", "--i": 0 } as CSSProperties}
									>
										<img
											className={`pt-1 md:w-auto md:h-auto w-24 h-20 ${"icon"}`}
											src={item.img}
											alt="mui icon"
										/>
										<span className=''>
											<p className='text-[0.7rem] md:text-xl font-normal md:font-semibold text-center pb-1'>
												{item.title}
											</p>
										</span>
									</div>

								</section>
							</motion.div>
						))
						}
					</div >
					<motion.hr
						className=" border-2  mt-5 border-[#44D62C]  rounded-2xl md:h-5/6 opacity-0 md:opacity-100 h-0 hidden md:block"
						initial={{ width: 0, height: 0 }}
						whileInView={{ width: "100%", height: 0 }}
						transition={{ duration: 3, ease: "easeOut" }}
					/>
				</div>

			</div>
		</motion.div >
	);
}

export default Projects;
