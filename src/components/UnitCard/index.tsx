import { ContainerCard } from "./style";

export function UnitCard() {
  return (
    <ContainerCard>
      <div className="containerCards">
        <div className="imagem">
          <img
            src="../../../images/enterprisesImg/PortoVelho01.png"
            alt="imagem do estabelecimento biomed"
            className="imgCard"
          />
        </div>
        <div className="contextCard">
          <h2>Unidade 01</h2>
          <p>Porto Velho</p>
        </div>
      </div>
    </ContainerCard>
  );
}
