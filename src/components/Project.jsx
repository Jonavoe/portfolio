import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import planet from "../assets/Imagen/planet.webp";
import ecommerce from "../assets/Imagen/ecommerce.webp";
import rick from "../assets/Imagen/rick.webp";
import shit from "../assets/Imagen/shit.webp";
import pokedex from "../assets/Imagen/pokedex.webp";
import Gestion_de_empleados from "../assets/Imagen/Gestion_de_empleados.webp";
import gestion_de_leads from "../assets/Imagen/gestion_de_leads.webp";
import Gestion_de_ventas from "../assets/Imagen/Gestion_de_ventas.webp";
import sml_general from "../assets/Imagen/sml_general.webp";
import clientes from "../assets/Imagen/clientes.webp";
import { Link } from "react-scroll";

function Projects({ es }) {
  const [detail, setDetail] = useState(false);
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

    window.addEventListener("resize", checkWindowSize);

    checkWindowSize();

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  const project = [
    {
      title: "Social Media Lab App",
      img: sml_general,
      text: es
        ? "Esta aplicación, desarrollada para la empresa Social Media Lab, tiene como objetivo clasificar y completar la información de clientes potenciales."
        : "This application, developed for the company Social Media Lab, aims to classify and complete the information of potential clients.",
      github: "https://github.com/Jonavoe/Ventas",
      vercel: "https://ventas-jonavoe.vercel.app/",
      tecnologias: [
        "ReactJS",
        "JavaScript",
        "NodeJS",
        "mongoDb",
        "Clerk",
        "Redux",
        "MUI",
        "Tailwind",
      ],
    },
    {
      title: es ? "Gestion de Empleados" : "Employee Management",
      img: Gestion_de_empleados,
      text: es
        ? "La gestión de empleados es una funcionalidad clave de la aplicación SML, que permite llevar a cabo diversas acciones, incluyendo la creación de nuevos empleados, la edición de sus datos, la capacidad de suspender o rehabilitar cuentas, así como la asignación de leads a los freelancers."
        : "Employee management is a key functionality of the SML application, allowing various actions to be carried out, including the creation of new employees, editing their data, the ability to suspend or reactivate accounts, as well as assigning leads to freelancers.",
      github: "https://github.com/Jonavoe/Ventas",
      vercel: "https://ventas-jonavoe.vercel.app/",
      tecnologias: [
        "ReactJS",
        "JavaScript",
        "NodeJS",
        "mongoDb",
        "Clerk",
        "Redux",
        "MUI",
        "Tailwind",
      ],
    },
    {
      title: es ? "Gestion de leads" : "Customer Classification",
      img: gestion_de_leads,
      text: es
        ? "Esta aplicación, desarrollada para la empresa Social Media Lab, tiene como objetivo clasificar y completar la información de clientes potenciales."
        : "This application, developed for the company Social Media Lab, aims to classify and complete the information of potential clients.",
      github: "https://github.com/Jonavoe/Ventas",
      vercel: "https://ventas-jonavoe.vercel.app/",
      tecnologias: [
        "ReactJS",
        "JavaScript",
        "NodeJS",
        "mongoDb",
        "Clerk",
        "Redux",
        "MUI",
        "Tailwind",
      ],
    },
    {
      title: es ? "Gestion de ventas" : "Sales Management",
      img: Gestion_de_ventas,
      text: es
        ? "La gestión de ventas en la aplicación SML ofrece un seguimiento completo de todas las transacciones, desde prospectos hasta conversiones, para optimizar el proceso comercial."
        : "The sales management in the SML application provides comprehensive tracking of all transactions, from leads to conversions, to optimize the business process",
      github: "https://github.com/Jonavoe/Ventas",
      vercel: "https://ventas-jonavoe.vercel.app/",
      tecnologias: [
        "ReactJS",
        "JavaScript",
        "NodeJS",
        "mongoDb",
        "Clerk",
        "Redux",
        "MUI",
        "Tailwind",
      ],
    },
    {
      title: es ? "Aplicacion de Clientes" : "Client Application",
      img: clientes,
      text: es
        ? "Nuestra aplicación de clientes permite a los usuarios rastrear sus estadísticas en redes sociales, visualizar su crecimiento y consultar el estado de sus pagos de manera conveniente y efectiva."
        : "Our client application allows users to track their social media statistics, visualize their growth, and conveniently check the status of their payments",
      github: "https://github.com/Jonavoe/Ventas",
      vercel: "https://ventas-jonavoe.vercel.app/clientes-home",
      tecnologias: [
        "ReactJS",
        "JavaScript",
        "NodeJS",
        "mongoDb",
        "Clerk",
        "Redux",
        "MUI",
        "Tailwind",
      ],
    },
  ];

  const project1 = [
    {
      title: "Pokedex",
      img: pokedex,
      text: es
        ? "Discover and save your favorite Pokémon with our Pokédex. Create an account to access detailed statistics for each Pokémon."
        : "Discover and save your favorite Pokémon with our Pokédex. Create an account to access detailed statistics for each Pokémon",
      github: "https://github.com/Jonavoe",
      vercel: "https://github.com/Jonavoe",
      tecnologias: ["React Native", "JavaScript", "API Pokemen", "Tailwind"],
    },
    {
      title: "Actived Planet",
      img: planet,
      text: es
        ? "Explore los países del mundo es una aplicación web que te permite descubrir información interesante sobre diferentes países y planificar actividades turísticas. Desarrollado en React y Redux, esta aplicación utiliza una base de datos en PostgreSQL y Sequelize como ORM"
        : "Explore the countries of the world is a web application that allows you to discover interesting information about different countries and plan tourist activities. Developed in React and Redux, this application uses a PostgreSQL database and Sequelize as its ORM.",
      github: "https://github.com/Jonavoe/PI-Countries-main",
      vercel: "https://pi-countries-main-green.vercel.app/",
      tecnologias: [
        "ReactJS",
        "JavaScript",
        "Redux",
        "API Planet",
        "PostgreSQL",
        "Express",
        "Sequelize",
      ],
    },
    {
      title: "eCommerce Gamer",
      img: ecommerce,
      text: es
        ? "La aplicación de eCommerce ofrece una experiencia de compra fácil y agradable. Los usuarios pueden agregar productos al carrito y filtrarlos por tipo. La aplicación fue desarrollada con tecnologías modernas como React y sus librerias. Es una herramienta esencial para los compradores en línea."
        : "The eCommerce application offers an easy and pleasant shopping experience. Users can add products to their cart and filter them by type. The application was developed using modern technologies like React and its libraries. It is an essential tool for online shoppers.",
      github: "https://github.com/Jonavoe/ecommerce",
      vercel: "https://ecommerce-jonavoe.vercel.app/",
      tecnologias: [
        "ReactJS",
        "JavaScript",
        "Redux",
        "API Planet",
        "PostgreSQL",
        "Express",
        "Sequelize",
      ],
    },
    {
      title: "Rick and Morty",
      img: rick,
      text: es
        ? "La app de Rick and Morty permite buscar personajes por ID, seleccionar aleatoriamente, tener favoritos y filtros. La interfaz es moderna y fácil de usar con tecnologías avanzadas como React, Redux, Axios, HTML y CSS."
        : "The Rick and Morty app allows you to search for characters by ID, select them randomly, have favorites, and apply filters. The interface is modern and user-friendly, built with advanced technologies like React, Redux, Axios, HTML, and CSS",
      github: "https://github.com/Jonavoe/Proyecto-rick-and-morty",
      vercel: "https://rick-and-morty-jonavoe.vercel.app",
      tecnologias: [
        "ReactJS",
        "JavaScript",
        "Redux",
        "API Planet",
        "PostgreSQL",
        "Express",
        "Sequelize",
      ],
    },
    {
      title: es ? "Buscador de Imagenes" : "Image Search App",
      img: shit,
      text: es
        ? "App de búsqueda de imágenes con la API de Pixabay. Interfaz intuitiva y adaptable. Desarrollada con HTML, CSS, React y Bootstrap. Perfecta para proyectos que requieran imágenes de alta calidad."
        : "An image search application that uses the Pixabay API. It features an intuitive and responsive interface. Developed with HTML, CSS, React, and Bootstrap, it's perfect for projects requiring high-quality images.",
      github: "https://github.com/Jonavoe/searchImagesPixabai",
      vercel: "https://search-images-pixabai.vercel.app/",
      tecnologias: ["ReactJS", "JavaScript", "Redux", "API Pixabay"],
    },
  ];

  const openDetail = (item) => {
    setDetail(true);
    setProjectDetail(item);
  };

  const closeDetail = () => {
    setDetail(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      id="projects"
      name="projects"
      className="py-5 md:h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-center mx-auto items-center z-0"
    >
      {detail && (
        <div
          className="z-50 absolute top-0 right-0 h-screen w-screen bg-[rgba(0,0,0,0.5)]   flex justify-center items-center"
          onClick={() => closeDetail()}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className={` flex flex-col justify-between p-5 items-center rounded-xl bg-[#222222] md:w-[40rem] w-[22rem] md:h-fit h-[38rem]`}
          >
            <div className="w-full flex items-center justify-end">
              <div
                className="rounded-full bg-[rgba(1,1,1,.5)] hover:bg-[rgba(68,214,44,0.5)] px-3 py-1"
                onClick={() => closeDetail()}
              >
                X
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-5 p-5">
              <div className="">
                <h2 className="font-semibold md:text-5xl text-2xl text-center">
                  {projectDetail?.title}
                </h2>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className=""
              >
                <Link to={projectDetail.vercel} target="_blank">
                  <img
                    className={` md:w-auto md:h-auto w-52 ${"icon"}`}
                    src={projectDetail.img}
                    alt="mui icon"
                  />
                </Link>
              </motion.div>
              <div className="flex flex-col gap-5 text-white">
                <p className="text-center">{projectDetail?.text}</p>
                <p className="text-center">
                  Tecnologias: {projectDetail.tecnologias.join(", ")}
                </p>
              </div>
              <div className=""></div>
            </div>
          </motion.div>
        </div>
      )}

      <div className="flex flex-col justify-center items-center w-10/12">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl mb-5">
          Proyectos
        </h3>
        <motion.hr
          className="border-2 mt-5 mb-5 border-[#44D62C]  rounded-2xl md:h-5/6 opacity-0 md:opacity-100 h-0 hidden md:block"
          initial={{ width: 0, height: 0 }}
          whileInView={{ width: "100%", height: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
        <div className="flex md:flex-col items-center justify-center  gap-2 md:gap-5">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5">
            {project.map((item, index) => (
              <motion.div
                initial={initialAnimation2}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
                onClick={() => openDetail(item)}
                className=" cursor-pointer"
                key={index}
              >
                <section className="projects-section">
                  <div
                    className={`flex items-center justify-center ${"projects-box"}`}
                    style={{ "--clr": "#44D62C", "--i": 0 }}
                  >
                    <img
                      className={`pt-1 md:w-auto md:h-auto w-24 h-20 ${"icon"}`}
                      src={item.img}
                      alt="mui icon"
                    />
                    <span className="">
                      <p className="text-[0.7rem] md:text-xl font-normal md:font-semibold text-center pb-1">
                        {item.title}
                      </p>
                    </span>
                  </div>
                </section>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5">
            {project1.map((item, index) => (
              <motion.div
                initial={initialAnimation1}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
                onClick={() => openDetail(item)}
                className=" cursor-pointer"
                key={index}
              >
                <section className="projects-section">
                  <div
                    className={`flex items-center justify-center ${"projects-box"}`}
                    style={{ "--clr": "#44D62C", "--i": 0 }}
                  >
                    <img
                      className={`pt-1 md:w-auto md:h-auto w-24 h-20 ${"icon"}`}
                      src={item.img}
                      alt="mui icon"
                    />
                    <span className="">
                      <p className="text-[0.7rem] md:text-xl font-normal md:font-semibold text-center pb-1">
                        {item.title}
                      </p>
                    </span>
                  </div>
                </section>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.hr
          className=" border-2  mt-5 border-[#44D62C]  rounded-2xl md:h-5/6 opacity-0 md:opacity-100 h-0 hidden md:block"
          initial={{ width: 0, height: 0 }}
          whileInView={{ width: "100%", height: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default Projects;
