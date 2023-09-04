import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

type Props = {};

function ContactMe({ }: Props) {
	const { register, handleSubmit } = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		window.location.href = `mailto:voeffray.jonathan@gmail.com?subject=${formData.subject}&body=Hi, mi name is ${formData.name}. ${formData.message} (${formData.email})`;
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='h-screen flex relative flex-col text-center md:text-left max-w-full px-10 justify-center mx-auto items-center'>
			<h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Contacto
			</h3>

			<div className='flex flex-col space-y-2 items-center justify-center'>
				<h4 className='text-1xl md:text-4xl my-5 font-semibold text-center'>
					Desarrollador Full Stack {' '}
					<span className='underline decoration-[#44D62C]/50'>
						Trabajemos juntos!
					</span>
				</h4>
			</div>
			<div className="w-10/12">
				<motion.hr
					className=" border-2 mb-10 mt-10 border-[#44D62C]  rounded-2xl md:h-5/6 opacity-0 md:opacity-100 h-0 hidden md:block"
					initial={{ width: 0, height: 0 }}
					whileInView={{ width: "100%", height: 0 }}
					transition={{ duration: 3, ease: "easeOut" }}
				/>

				<div className='flex flex-col items-center justify-center space-y-2'>
					<div className='flex items-center space-x-2 justify-start'>
						<PhoneIcon className='text-[#44D62C] my-1 h-5 w-5 animate-pulse' />
						<p className='text-2xl:'>+543487229328</p>
					</div>

					<div className='flex items-center space-x-2 justify-start'>
						<EnvelopeIcon className='text-[#44D62C]  my-1 h-5 w-5 animate-pulse' />
						<p className='text-2xl:'>voeffray.jonathan@gmail.com</p>
					</div>

					<div className='flex items-center space-x-2 justify-start'>
						<MapPinIcon className='text-[#44D62C] my-1 h-5 w-5 animate-pulse' />
						<p className='text-2xl:'>Concepcion del Uruguay, Entre Rios</p>
					</div>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className='flex flex-col space-y-2 w-fit mx-auto'>
						<div className='flex flex-col md:flex-row md:space-x-2 space-y-1 md:space-y-0'>
							<input
								{...register('name')}
								placeholder='Nombre'
								className='contactInput'
								type='text'
							/>
							<input
								{...register('email')}
								placeholder='Email'
								className='contactInput'
								type='email'
							/>
						</div>

						<input
							{...register('subject')}
							className='contactInput'
							type='text'
							placeholder='Asunto'
						/>

						<textarea
							{...register('message')}
							placeholder='Mensaje'
							className='contactInput'
						/>

						<button
							type='submit'
							className='bg-[#44D62C] hover:bg-[#44D62C] py-2 px-10 rounded-md text-black font-bold text-lg'>
							Enviar
						</button>
					</form>
				</div>
				<motion.hr
					className=" border-2 mb-10 mt-10 border-[#44D62C]  rounded-2xl md:h-5/6 opacity-0 md:opacity-100 h-0 hidden md:block"
					initial={{ width: 0, height: 0 }}
					whileInView={{ width: "100%", height: 0 }}
					transition={{ duration: 3, ease: "easeOut" }}
				/>
			</div>
		</motion.div>
	);
}

export default ContactMe;
