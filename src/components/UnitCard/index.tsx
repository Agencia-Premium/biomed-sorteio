import { ContainerCard } from "./style";

export function UnitCard() {
  return (
    <ContainerCard>
      <div className="imagem">
        <img
          src="#"
          alt="imagem do estabelecimento biomed"
          className="imgCard"
        />
      </div>
      <div className="contextCard">
        <h2>Unidade 01</h2>
        <p>unidade</p>
      </div>
    </ContainerCard>
  );
}
