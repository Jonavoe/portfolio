import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import { ArrowLongUpIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-auto z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#799ee6]/80'>
			<Head>
				<title>Joni`s Portfolio</title>
			</Head>

			<Header />

			{/* Hero */}
			<section
				id='hero'
				className='snap-start'>
				<Hero />
			</section>

			{/* About */}
			<section
				id='about'
				className='snap-center'>
				<About />
			</section>

			{/* Experience */}
			{/* <section
				id='experience'
				className='snap-center'>
				<Experience />
			</section> */}

			{/* Skills */}
			<section
				id='skills'
				className='snap-start'>
				<Skills />
			</section>

			{/* Projects */}
			<section
				id='projects'
				className='snap-start'>
				<Projects />
			</section>

			{/* Contact Me */}
			<section
				id='contactme'
				className='snap-start'>
				<ContactMe />
			</section>

			<div className='sticky bottom-5 w-full cursor-pointer flex items-center justify-center'>
				<Link href='#hero'>
					<ArrowLongUpIcon className='h-7 w-7 rounded-full filter border border-[#343434] hover:border-[#799ee6] grayscale hover:grayscale-0 transition-all' />
				</Link>
			</div>
		</div>
	);
}
