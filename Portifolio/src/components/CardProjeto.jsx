import { Link } from "react-router-dom";

function CardProjeto({ projeto }) {
  return (
    <div className="card">
      <h3>{projeto.nome}</h3>
      <p>{projeto.descricao}</p>

      <Link to={`/projeto/${projeto.id}`}>
        Ver mais
      </Link>
    </div>
  );
}

export default CardProjeto;