import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Projeto from "./pages/Projeto";

function App() {
  const [dark, setDark] = useState(() => {
    const salvo = localStorage.getItem("theme");
    return salvo ? salvo === "dark" : true;
  });

  useEffect(() => {
    const tema = dark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", tema);
    localStorage.setItem("theme", tema);
  }, [dark]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home dark={dark} setDark={setDark} />} />
        <Route path="/projeto/:id" element={<Projeto dark={dark} setDark={setDark} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;