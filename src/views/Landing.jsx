import { Link } from "react-scroll";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Up from "../components/icons/Up";

export default function Landing() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <About />
        <Experience />
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
