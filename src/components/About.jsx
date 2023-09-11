import React from "react";
import { motion } from "framer-motion";
import aboutme from "../assets/Imagen/aboutme.webp";

export default function About({ es }) {
  return (
    <div
      id="about"
      name="about"
      className="flex md:h-screen flex-col text-center md:text-left md:flex-row w-10/12 justify-center mx-auto items-center"
    >
      <div className="flex flex-col w-10/12justify-center items-center gap-5">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl p-5">
          {es ? "Sobre mi" : "About me"}
        </h3>
        <motion.hr
          className=" border-2 border-[#44D62C]  rounded-2xl md:h-5/6 opacity-0 md:opacity-100 h-0 hidden md:block"
          initial={{ width: 0, height: 0 }}
          whileInView={{ width: "100%", height: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
        />

        <div className="flex flex-col md:flex-row items-center justify-center gap-2">
          <motion.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            src={aboutme}
            className="items-center justify-center flex w-50 h-50 rounded-lg object-cover md:rounded-lg md:w-80 md:h-80 xl:w-[400px] xl:h-[400px]"
          />

          <div className="">
            <div className="text-sm md:text-xl text-left text-gray-400">
              <p>
                {es
                  ? "Hola, soy Jonathan Emanuel Voeffray, un apasionado desarrollador Full Stack con experiencia en React, Node.js, MongoDB y SQL. Mi   objetivo es contribuir al desarrollo de aplicaciones web innovadoras que aprovechen al máximo las tecnologías modernas."
                  : "Hello, I'm Jonathan Emanuel Voeffray, a passionate Full Stack developer with experience in React, Node.js, MongoDB, and SQL. My goal is to contribute to the development of innovative web applications that harness the power of modern technologies."}
              </p>

              <p>
                {es
                  ? "Con una sólida formación técnica y experiencia en proyectos importantes, he adquirido habilidades en el desarrollo tanto en el frontend como en el backend. Mi enfoque es crear soluciones efectivas y escalables que resuelvan problemas de manera eficiente."
                  : "With a strong technical background and experience in significant projects, I have gained skills in both frontend and backend development. My focus is on creating efficient and scalable solutions that effectively solve problems."}
              </p>

              <p>
                {es
                  ? "Siempre estoy en busca de nuevos desafíos y oportunidades paraaprender y crecer en el mundo del desarrollo web. Si deseasconocer más sobre mis proyectos o habilidades, no dudes en contactarme."
                  : "I'm always on the lookout for new challenges and opportunities to learn and grow in the world of web development. If you'd like to learn more about my projects or skills, please don't hesitate to reach out."}
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
