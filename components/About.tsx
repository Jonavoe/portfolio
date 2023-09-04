import React from 'react';
import { motion } from 'framer-motion';
import aboutme from "../public/aboutme.webp"

// https://live.staticflickr.com/65535/52774866720_5fe7ec93b1_z.jpg

type Props = {};

export default function About({ }: Props) {
	return (
		<div
			className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center'>
			<h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Sobre mi
			</h3>
			<div>

				<motion.hr
					className=" border-2 border-[#44D62C]  rounded-2xl md:h-5/6 opacity-0 md:opacity-100 h-0 hidden md:block"
					initial={{ width: 0, height: 0 }}
					whileInView={{ width: "100%", height: 0 }}
					transition={{ duration: 3, ease: "easeOut" }}
				/>
				<div className='flex flex-col md:flex-row items-center justify-center gap-2'>

					<motion.img
						initial={{
							x: -200,
							opacity: 0,
						}}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 1.2 }}
						src={aboutme.src}
						className='mt-20 md:mb-0 items-center justify-center flex w-40 h-40 rounded-lg object-cover md:rounded-lg md:w-80 md:h-80 xl:w-[400px] xl:h-[400px]'
					/>

					<div className='px-0 md:px-10'>
						<div className='text-sm md:text-xl text-left text-gray-400'>
							<p>
								¡Hola! Soy un desarrollador Full Stack con 6 meses de experiencia. En Social Media Lab, creé soluciones impactantes usando tecnología.
							</p>

							<p>
								Desarrollé dos apps centrales: una para clasificar leads y otra para gestionar ventas. También diseñé app para que clientes creen su marca personal y guiones a través de un roadmap. Trabajé frontend y backend en cada proyecto.
							</p>

							<p>
								Domino ReactJS (con Vite), MongoDB, PostgreSQL (Mongoose y Sequelize), Express para backend. Utilicé Clerk para autenticación, Tailwind para diseño, Framer Motion para animaciones y Redux para estado.
							</p>

							<p>
								En producción, desplegué en Vercel (frontend) y Render (backend) para optimizar. Utilicé hosting español Dongee para rendimiento y disponibilidad.
							</p>

						</div>


					</div>
				</div>
				<motion.hr
					className="mt-10 border-2 border-[#44D62C]   rounded-2xl md:h-5/6 opacity-0 md:opacity-100 h-0 hidden md:block"
					initial={{ width: 0, height: 0 }}
					whileInView={{ width: "100%", height: 0 }}
					transition={{ duration: 3, ease: "easeOut" }}
				/>
			</div>
		</div>
	);
}
