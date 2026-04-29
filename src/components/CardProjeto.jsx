import { Link } from "react-router-dom";
import "../styles/CardProjeto.css";

function CardProjeto({ projeto }) {
  return (
    <div className="projeto-card">
      <div className="projeto-info">
        <h3>{projeto.nome}</h3>
        <p>{projeto.descricao}</p>
        
        <div className="tech-stack">
          {projeto.tecnologias.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>
      </div>

      <Link to={`/projeto/${projeto.id}`} className="projeto-link">
        Ver Detalhes →
      </Link>
    </div>
  );
}

export default CardProjeto;