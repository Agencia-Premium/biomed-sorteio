import { Container } from "./style";

export default function FormQuest() {
  return (
    <Container>
      <h2 className="tituloform">Continue avaliando para concorrer</h2>

      <div className="question1">
        <h3 className="question">
          Conte-nos qual foi seu grau de satisfação durante o atendimento:
        </h3>

        <div>
          <label>
            <input
              type="radio"
              name="OPCAO"
              value="Muito acima das expectativas"
            />
            Muito acima das expectativas
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="OPCAO" value="Acima das expectativas" />
            Acima das expectativas
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="OPCAO"
              value="Expectativas correspondidas"
            />
            Expectativas correspondidas
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="OPCAO" value="Abaixo das expectativas" />
            Abaixo das expectativas
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="OPCAO"
              value="Muito abaixo das expectativas"
            />
            Muito abaixo das expectativas
          </label>
        </div>
      </div>

      <div className="question2">
        <h3 className="question">
          Em uma escala de 0 a 10, o quanto você recomendaria o BioMed para seus
          familiares e amigos?:
        </h3>
        <label htmlFor="">
          <input type="text" />
        </label>
        <label htmlFor="">
          <input type="text" />
        </label>
        <label htmlFor="">
          <input type="text" />
        </label>
        <label htmlFor="">
          <input type="text" />
        </label>
        <label htmlFor="">
          <input type="text" />
        </label>
        <label htmlFor="">
          <input type="text" />
        </label>
        <label htmlFor="">
          <input type="text" />
        </label>
        <label htmlFor="">
          <input type="text" />
        </label>
        <label htmlFor="">
          <input type="text" />
        </label>
        <label htmlFor="">
          <input type="text" />
        </label>
        <label htmlFor="">
          <input type="text" />
        </label>
      </div>
    </Container>
  );
}
