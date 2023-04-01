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

function ContactMe({}: Props) {
	const { register, handleSubmit } = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		window.location.href = `mailto:voeffry.jonathan@gmail.com?subject=${formData.subject}&body=Hi, mi name is ${formData.name}. ${formData.message} (${formData.email})`;
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Contact
			</h3>

			<div className='flex flex-col space-y-10 md:mt-10'>
				<h4 className='text-4xl font-semibold text-center'>
					Desarrollador Front End Junior especializado en React{' '}
					<span className='underline decoration-[#F7AB0A]/50'>
						Trabajemos juntos!
					</span>
				</h4>
			</div>

			<div className='space-y-10'>
				<div className='flex items-center space-x-5 justify-center'>
					<PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
					<p className='text-2xl:'>+543487229328</p>
				</div>

				<div className='flex items-center space-x-5 justify-center'>
					<EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
					<p className='text-2xl:'>voeffray.jonathan@gmail.com</p>
				</div>

				<div className='flex items-center space-x-5 justify-center'>
					<MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
					<p className='text-2xl:'>123 developer lane</p>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col space-y-2 w-fit mx-auto'>
					<div className='flex space-x-2'>
						<input
							{...register('name')}
							placeholder='Name'
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
						placeholder='Subject'
					/>

					<textarea
						{...register('message')}
						placeholder='message'
						className='contactInput'
					/>

					<button
						type='submit'
						className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>
						Submit
					</button>
				</form>
			</div>
		</motion.div>
	);
}

export default ContactMe;
