import React from "react";
import { Link } from "react-router-dom";
import cv from "../assets/Imagen/cv.jpg";
import { Link as ScrollLink, Element } from "react-scroll";

export default function Hero({ es }) {
  return (
    <div
      id="hero"
      name="hero"
      className="h-screen flex flex-col space-y-4 items-center justify-start md:justify-center text-center overflow-hidden"
    >
      <section className="hero-section">
        <div
          className={`flex items-center justify-center ${"hero-box"}`}
          style={{ "--clr": "#44D62C", "--i": 0 }}
        >
          <img
            className="icon rounded-full"
            style={{ width: "15rem", height: "15rem", padding: "10px" }}
            src={cv}
            alt="mui icon"
          />
          <span className="text-center">
            <h2 className="text-2xl md:text-3xl uppercase text-gray-500 pb-2 tracking-[15px]">
              Jonathan Voeffray
            </h2>
            <p className="text-lg md:text-2xl uppercase text-gray-500 pb-2 tracking-[15px]">
              DEVELOPER FULL STACK
            </p>

            <ScrollLink to="about" smooth={true} duration={1500}>
              <button className="heroButton shadow hover:shadow-[#44D62C]/50 text-sm">
                {es ? "Sobre mi" : "About me"}
              </button>
            </ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={1500}>
              <button className="heroButton shadow hover:shadow-[#44D62C]/50 text-sm">
                {es ? "Skills" : "Skills"}
              </button>
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={1500}>
              <button className="heroButton shadow hover:shadow-[#44D62C]/50 text-sm">
                {es ? "Proyectos" : "Projects"}
              </button>
            </ScrollLink>
          </span>
        </div>
      </section>
    </div>
  );
}
