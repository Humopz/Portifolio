import { useState } from "react";
import projetos from "../data/projetos";
import CardProjeto from "../components/CardProjeto";
import "../styles/Home.css";
import foto from "../assets/Foto.png";

function Home({ dark, setDark }) {
  const [mostrarMais, setMostrarMais] = useState(false);

  return (
    <div className="home-container">
      <header className="header">
        <h1>Kauan Pires</h1>
        <div className="header-actions">
          <button className="theme-toggle" onClick={() => setDark(!dark)}>
            {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
          <a href="https://github.com/Humopz" target="_blank" rel="noreferrer" className="btn-github">
            GitHub
          </a>
        </div>
      </header>

      <section className="perfil-section">
        <div className="perfil-content">
          <img src={foto} alt="Kauan Pires" className="foto-perfil" />
          <div className="perfil-text">
            <h2>Desenvolvedor Full Stack em formação</h2>
            <p>
              Atualmente cursando <strong>DSM na Fatec Zona Leste</strong>. 
              Focado em construir soluções modernas e interfaces intuitivas.
            </p>
            
            <button className="btn-inline" onClick={() => setMostrarMais(!mostrarMais)}>
              {mostrarMais ? "Ver menos" : "Saiba mais sobre meus objetivos"}
            </button>

            {mostrarMais && (
              <p className="fade-in">
                Busco oportunidades de estágio onde eu possa aplicar meus conhecimentos em 
                <strong> React, Node.js e TypeScript</strong>, contribuindo para projetos escaláveis.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="info-card">
        <h3>Formação Acadêmica</h3>
        <div className="curso-grid">
          <p><strong>Instituição:</strong> Fatec Zona Leste</p>
          <p><strong>Curso:</strong> Desenvolvimento de Software Multiplataforma</p>
          <p><strong>Período:</strong> Ago/2023 — Dez/2026</p>
        </div>
      </section>

      <section className="projetos-section">
        <h2>Projetos em Destaque</h2>
        <div className="projetos-grid">
          {projetos.map((proj) => (
            <CardProjeto key={proj.id} projeto={proj} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;