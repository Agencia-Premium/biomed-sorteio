import { Formulario } from "../../components/Form";
import { Container } from "./styles";

export function HomeTemplate() {
  return (
    <Container>
      <div className="left">
        <img src="./images/homeFoto.png" alt="BioMed Sorteio" />
      </div>

      <div className="right">
        <img src="./images/logo.png" alt="Logo" />

        <Formulario />
      </div>
    </Container>
  );
}
