import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
}
