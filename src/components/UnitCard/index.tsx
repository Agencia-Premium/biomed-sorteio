import { ContainerCard } from "./style";
import { titleCard as TitleCard } from "./mock";

export const UnitCard: React.FC = ({}) => {
  return (
    <ContainerCard>
      {TitleCard.map((e, index) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div key={index} className="containerCards">
            <div className="imagem">
              <img
                src={e.src}
                alt={`imagem do estabelecimento biomed ${e.description}`}
                className="imgCard"
              />
            </div>

            <div className="contextCard">
              <h2>{e.title}</h2>
              <p>{e.description}</p>
            </div>
          </div>
        );
      })}
    </ContainerCard>
  );
};
