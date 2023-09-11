import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Project";
import Contact from "../components/Contact";

export default function Landing() {
  const [es, setEs] = useState(false);

  const changeLenguage = () => {
    setEs(!es);
  };
  return (
    <div className="text-white w-full h-full bg-[#282828]">
      <Header changeLenguage={changeLenguage} es={es} />
      <Hero es={es} />
      <About es={es} />
      <Skills es={es} />
      <Projects es={es} />
      <Contact es={es} />
    </div>
  );
}
