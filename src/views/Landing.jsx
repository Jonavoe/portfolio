import { Link } from "react-scroll";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Landing() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <About />
      </div>
      <div className="flex items-center justify-center">
        <Link
          className="hover:text-[--green] transition-all duration-500 mb-5"
          activeClass="active"
          to="header"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <span className="text-[--green]"></span>up
        </Link>
      </div>
    </>
  );
}
