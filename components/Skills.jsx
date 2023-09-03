import React from "react";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import { mui } from "@fortawesome/free-brands-svg-icons";
import MUI from "../assets/mui.png";
import mysql from "../assets/mysql.png";

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-center mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      {/* 
			<h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
				Hover over a skill for currency proficiency
			</h3> */}

      <div className="flex items-center justify-center gap-2">
        <section className={"skills-section"}>
          <div
            className={`flex items-center justify-center ${"skills-box"}`}
            style={{ "--clr": "#44D62C", "--i": 0 }}
          >
            <FontAwesomeIcon className="icon" icon={faHtml5} />
            <span>HTML</span>
          </div>
          <div
            className={`flex items-center justify-center ${"skills-box"}`}
            style={{ "--clr": "#44D62C", "--i": 0 }}
          >
            <FontAwesomeIcon className="icon" icon={faCss3Alt} />
            <span>CSS</span>
          </div>
          <div
            className={`flex items-center justify-center ${"skills-box"}`}
            style={{ "--clr": "#44D62C", "--i": 0 }}
          >
            <FontAwesomeIcon className="icon" icon={faJs} />
            <span>JAVASCRIPT</span>
          </div>
          <div
            className={`flex items-center justify-center ${"skills-box"}`}
            style={{ "--clr": "#44D62C", "--i": 0 }}
          >
            <FontAwesomeIcon className="icon" icon={faReact} />
            <span>REACT</span>
          </div>
        </section>
        <section className="skills-section">
          <div
            className={`flex items-center justify-center ${"skills-box"}`}
            style={{ "--clr": "#44D62C", "--i": 0, alignItems: "center" }}
          >
            <img
              className="icon"
              style={{ width: "50px", height: "50px" }}
              src="https://i.postimg.cc/kG8Gdj0b/mui.png"
              alt="mui icon"
            />
            <span>MUI</span>
          </div>
          <div
            className={`flex items-center justify-center ${"skills-box"}`}
            style={{ "--clr": "#44D62C", "--i": 0 }}
          >
            <FontAwesomeIcon className="icon" icon={faSquareGithub} />
            <span>GITHUB</span>
          </div>
          <div
            data-aos="fade-up"
            className={`flex items-center justify-center ${"skills-box"}`}
            style={{ "--clr": "#44D62C", "--i": 0, alignItems: "center" }}
          >
            <img
              className="icon"
              style={{ width: "90px", height: "50px" }}
              src="https://i.postimg.cc/8c8kwR7P/mysql.png"
              alt="mysql"
            />
            <span>MYSQL</span>
          </div>
          <div
            className={`flex items-center justify-center ${"skills-box"}`}
            style={{ "--clr": "#44D62C", "--i": 0 }}
          >
            <FontAwesomeIcon className="icon" icon={faNode} />
            <span>NODE JS</span>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
