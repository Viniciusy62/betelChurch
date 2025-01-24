import { Container } from "./styles";

export function Menu() {
  return (
    <Container>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">Quem somos</a>
        </li>
        <li>
          <a href="#worship-times">Cultos</a>
        </li>
        <li>
          <a href="#events">Eventos</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </Container>
  );
}
