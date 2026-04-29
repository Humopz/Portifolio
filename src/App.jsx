import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projeto from "./pages/Projeto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projeto/:id" element={<Projeto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;