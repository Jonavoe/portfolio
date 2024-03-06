import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing";
import GitHub from "./components/icons/Github";
import Linkedin from "./components/icons/Linkedin";
import Mail from "./components/icons/Mail";

export default function App() {
  return (
    <>
      <div className="fixed bottom-1 left-6">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="w-5 h-5">
            <GitHub />
          </div>
          <div className="w-5 h-5">
            <Linkedin />
          </div>
          <a
            className="w-5 h-5 text-[--light-slate]cursor-pointer hover:text-[--green]"
            href="mailto:voeffray.jonathan@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Mail />
          </a>
          <div className="h-36 bg-[--slate] w-0.5"></div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
}
