import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing";
import GitHub from "./components/icons/Github";
import Linkedin from "./components/icons/Linkedin";
import Mail from "./components/icons/Mail";

export default function App() {
  return (
    <>
      <div className="fixed bottom-1 left-1 md:left-6">
        <div className="flex flex-col justify-center items-center gap-3">
          <a
            className="w-5 h-5 text-[--light-slate]cursor-pointer hover:text-[--green]"
            href="https://www.linkedin.com/in/voeffray-jonathan/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
          <a
            className="w-5 h-5 text-[--light-slate]cursor-pointer hover:text-[--green]"
            href="https://github.com/Jonavoe"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub />
          </a>
          <a
            className="w-5 h-5 text-[--light-slate]cursor-pointer hover:text-[--green]"
            href="mailto:voeffray.jonathan@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Mail />
          </a>
          <div className="h-12 md:h-36 bg-[--slate] w-0.5"></div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
}
