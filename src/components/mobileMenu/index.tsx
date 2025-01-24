import { FiX, FiMenu } from "react-icons/fi";
import { useState } from "react";
import { Container, ButtonMobileStyle } from "./styles";
import { Button } from "../button";
import { Menu } from "../menu";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <ButtonMobileStyle>
        <Button
          title={isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          onClick={toggleMenu}
        />
      </ButtonMobileStyle>

      {isOpen && (
        <Container>
          <Button
            title={isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            onClick={toggleMenu}
          />
          <Menu />
        </Container>
      )}
    </>
  );
}
