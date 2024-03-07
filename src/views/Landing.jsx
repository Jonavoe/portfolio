import { Link } from "react-scroll";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Up from "../components/icons/Up";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { useState } from "react";
import OtherProjects from "../components/OtherProjects";

export default function Landing() {
  const [es, setEs] = useState(false);

  console.log(es);

  const handleLenguage = () => {
    setEs(!es);
  };
  return (
    <>
      <div>
        <Header es={es} handleLenguage={handleLenguage} />
        <Hero es={es} />
        <About es={es} />
        <Experience es={es} />
        <Projects es={es} />
        {/* <OtherProjects es={es} /> */}
        <Contact es={es} />
      </div>
      <div className="flex items-center justify-center ">
        <Link
          className="hover:text-[--green] transition-all duration-500 mb-5"
          activeClass="active"
          to="header"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Up />
        </Link>
      </div>
    </>
  );
}
