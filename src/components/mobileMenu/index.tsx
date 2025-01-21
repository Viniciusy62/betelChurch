import { FiX, FiMenu } from "react-icons/fi";
import { useState } from "react";
import { Container, ContainerBtn } from "./styles";
import { Button } from "../button";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <ContainerBtn>
        <Button title={isOpen ? <FiX size={24} /> : <FiMenu size={24} />} onClick={toggleMenu} />
      </ContainerBtn>
      
      {isOpen && (
        <Container>
          <Button title={isOpen ? <FiX size={24}/> : <FiMenu size={24} />} onClick={toggleMenu} />
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Quem somos</a>
            </li>
            <li>
              <a href="#">Ministérios</a>
            </li>
            <li>
              <a href="#">Eventos</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </Container>
      )}
    </>
  );
}
