import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Projeto from "./pages/Projeto";

function App() {
  // Busca o tema salvo ou usa 'dark' como padrão
  const [dark, setDark] = useState(() => {
    const salvo = localStorage.getItem("theme");
    return salvo ? salvo === "dark" : true;
  });

  // Aplica o tema sempre que o estado 'dark' mudar
  useEffect(() => {
    const tema = dark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", tema);
    localStorage.setItem("theme", tema);
  }, [dark]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Passamos o estado e a função para a Home poder trocar o tema */}
        <Route path="/" element={<Home dark={dark} setDark={setDark} />} />
        {/* Passamos para o Projeto também, caso queira colocar o botão lá */}
        <Route path="/projeto/:id" element={<Projeto dark={dark} setDark={setDark} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;