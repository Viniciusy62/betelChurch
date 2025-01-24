import { useState, useEffect } from "react";
import Logo from "../../public/logo/logo-cruz-betel.png";
import { Container } from "./styles";
import { MobileMenu } from "../../components/mobileMenu";
import { Menu } from "../menu";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints';

export function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= DEVICE_BREAKPOINTS.MD);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= DEVICE_BREAKPOINTS.MD);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <img src={Logo} alt="Logo da Igreja Betel" />

      {isMobile ? <MobileMenu/> : <Menu/>}
    </Container>
  );
}
