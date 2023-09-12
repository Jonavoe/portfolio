import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink, Element } from "react-scroll";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import arg from "../assets/Imagen/argentina.jpg";
import us from "../assets/Imagen/us.jpg";

function Header({ changeLenguage, es }) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto p-5 z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://linkedin.com/in/voeffray-jonathan/"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
          className="rounded-full hover:bg-[#44D62C]"
        />
        <SocialIcon
          url="https://github.com/Jonavoe"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
          className="rounded-full hover:bg-[#44D62C]"
        />
        <SocialIcon
          url="https://twitter.com/VoeffrayJona"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
          className="rounded-full hover:bg-[#44D62C]"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row space-x-5 justify-center items-center text-gray-300 cursor-pointer"
      >
        <div className="cursor-pointer" onClick={changeLenguage}>
          {es ? (
            <img className="w-10 h-8" src={arg} />
          ) : (
            <img className="w-10 h-8" src={us} />
          )}
        </div>
        {es ? (
          <Link
            to="https://drive.google.com/file/d/1INUXzWUmFu43xHWjs0UEJ9cWR7YnstoU/view?usp=sharing"
            target="_blank"
          >
            <div className="uppercase cursor-pointer rounded-full hover:bg-[#44D62C] py-2 px-3">
              CV
            </div>
          </Link>
        ) : (
          <Link
            to="https://drive.google.com/file/d/1KfymKBpmIW2I0_cgWopsmJHUkd7wOuCO/view?usp=sharing"
            target="_blank"
          >
            <div className="uppercase cursor-pointer rounded-full hover:bg-[#44D62C] py-2 px-3">
              CV
            </div>
          </Link>
        )}

        <ScrollLink
          className="uppercase w-[5rem] "
          to="contactme"
          smooth={true}
          duration={1500}
        >
          {es ? <p>Contacto</p> : <p> Contact </p>}
        </ScrollLink>
        <SocialIcon
          className="cursor-pointer rounded-full hover:bg-[#44D62C]"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
      </motion.div>
    </header>
  );
}

export default Header;
