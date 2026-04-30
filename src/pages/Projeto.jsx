import { useParams, useNavigate } from "react-router-dom";
import projetos from "../data/Projetos";
import "../styles/Home.css";

function Projeto({ dark, setDark }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const projeto = projetos.find(p => p.id == id);

  if (!projeto) return <p>Projeto não encontrado</p>;

  return (
    <div className="home-container">
      <header className="header" style={{ border: 'none' }}>
        <button className="btn-voltar" onClick={() => navigate("/")}>
          ← Voltar para o Início
        </button>

        <button className="theme-toggle" onClick={() => setDark(!dark)}>
          {dark ? "☀️" : "🌙"}
        </button>
      </header>

      <main className="projeto-detalhe-container">
        <h1>{projeto.nome}</h1>
        
        <img 
          src={projeto.imagem} 
          className="img-projeto" 
          alt={`Banner do projeto ${projeto.nome}`} 
        />

        <div className="projeto-info">
          <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>{projeto.descricao}</p>
          
          <p><strong> Tecnologias:</strong> {projeto.tecnologias.join(", ")}</p>
          <p><strong> Minha participação:</strong> {projeto.participacao}</p>

          <div className="projeto-links">
            <a href={projeto.github} target="_blank" rel="noreferrer" className="btn-link btn-github-link">
              Ver Código no GitHub
            </a>
            <a href={projeto.deploy} target="_blank" rel="noreferrer" className="btn-link btn-deploy-link">
              Acessar Projeto Online
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Projeto;