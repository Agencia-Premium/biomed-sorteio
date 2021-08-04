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
          <label htmlFor="1"></label>
          <input type="text" id="1" />
        </div>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
    </Container>
  );
}
