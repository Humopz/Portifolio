import { useState } from "react";
import projetos from "../data/projetos";
import CardProjeto from "../components/CardProjeto";
import "../styles/Home.css";
import foto from "../assets/Foto.png";

function Home() {
  const [mostrarMais, setMostrarMais] = useState(false);

  return (
    <div className="container">

      <header className="header">
        <h1>Kauan Pires</h1>
        <a href="https://github.com/Humopz" target="_blank">
          GitHub
        </a>
      </header>

      <section className="perfil">
       <img src={foto} alt="foto" className="foto" />

        <div>
          <h2>Sobre mim</h2>
          <p>Estudante de DSM na fatec zona leste</p>

          <button onClick={() => setMostrarMais(!mostrarMais)}>
            {mostrarMais ? "Mostrar menos" : "Mostrar mais"}
          </button>

          {mostrarMais && (
            <p>
              Interesse em desenvolvimento web.
            </p>
          )}
        </div>
      </section>

      <section>
        <h2>Curso</h2>
        <p>Faculdade: Fatec zona leste</p>
        <p>Curso: DMS</p>
        <p>Início:Agosto de 2023</p>
        <p>Previsão: Dezembro de 2026</p>
      </section>

      <section className="projetos">
        <h2>Projetos</h2>

        <div className="grid">
          {projetos.map((proj) => (
            <CardProjeto key={proj.id} projeto={proj} />
          ))}
        </div>
      </section>

    </div>
  );
}
export default Home;