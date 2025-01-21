import { Container } from "./styles";
import Logo from "../../public/logo-cruz-betel.png";
import { MobileMenu } from "../../components/mobileMenu";

export function Header() {
  
  return (
    <Container>
      <img src={Logo} alt="Logo da Igreja Betel" />
      <MobileMenu />
    </Container>
  );
}
