import { ContainerCard } from "./style";
import { titleCard as TitleCard } from "./mock";

export const UnitCard: React.FC = ({}) => {
  return (
    <ContainerCard>
      {TitleCard.map((e, index) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="containerCards">
            <div className="imagem">
              <img
                src="../../../images/enterprisesImg/PortoVelho01.png"
                alt="imagem do estabelecimento biomed"
                className="imgCard"
              />
            </div>

            <div key={index} className="contextCard">
              <h2>{e.title}</h2>
              <p>{e.description}</p>
            </div>
          </div>
        );
      })}
    </ContainerCard>
  );
};
