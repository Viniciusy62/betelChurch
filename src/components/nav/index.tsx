import { Container } from "./styles";
import { FaAngleDown } from "react-icons/fa6";

export function Nav() {
  return(
    <Container>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">
            Categorias
            <FaAngleDown />  
          </a>
        </li>
        <li>
          <a href="#">
            Ministérios
            <FaAngleDown /> 
          </a>
        </li>
        <li>
          <a href="#">Pedido de Oração</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Doe</a>
        </li>
      </ul>
    </Container>
  )
}