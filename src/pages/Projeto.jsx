import { useParams } from "react-router-dom";
import projetos from "../data/projetos";

function Projeto() {
  const { id } = useParams();
  const projeto = projetos.find(p => p.id == id);

  if (!projeto) return <p>Projeto não encontrado</p>;

  return (
    <div className="container">
      <h1>{projeto.nome}</h1>

      <img src={projeto.imagem} className="img-projeto" />

      <p>{projeto.descricao}</p>

      <p><strong>Tecnologias:</strong> {projeto.tecnologias.join(", ")}</p>

      <a href={projeto.github} target="_blank">GitHub</a>
      <br />
      <a href={projeto.deploy} target="_blank">Ver projeto</a>

      <p>{projeto.participacao}</p>
    </div>
  );
}

export default Projeto;