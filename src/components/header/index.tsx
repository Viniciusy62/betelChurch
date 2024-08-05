import Logo from "../../public/logo-cruz-betel.png"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { Container } from "./styles";
export function Header() {

  return (
    <Container>
        <img src={Logo} alt="Logo" title="Igreja Betel" width={60}/>

        <h1>Igreja Betel</h1>

        <div>
          <a
            href="https://www.facebook.com/betelemnovabethania/"
            target="_blank"
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.instagram.com/betelnovabethania/"
            target="_blank"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.youtube.com/@igrejabetelnovabethania9024"
            target="_blank"
          >
            <FaYoutube />
          </a>
        </div>
      </Container>
  )
}