import { Container } from "./styles";
// import Logo from "../../public/logo-cruz-betel.png";
import { Button } from "../../components/button";
// import { MobileMenu } from "../../components/mobileMenu";
import { Header } from "../../components/header";

export function Home() {

  return (
    <Container>
      <Header />

      <section className="apresentation-images">
        <p>Uma igreja que ama Jesus Cristo, que ama fazer discípulos e que ama pessoas</p>

        <h1>Igreja Betel</h1>

        <Button title="Venha participar conosco"/>

        <Button title="Confira nosso calendário" />
      </section>

      <section className="apresentation">
        <p>A Igreja Betel tem o propósito de estabelecer o Reino de Deus na terra  através da difusão do Evangelho de Jesus Cristo a todos os povos,  línguas e nações dentro de uma visão missionária</p>
        <p>“A colheita é grande, mas os trabalhadores são  poucos. Portanto, peçam ao Senhor da colheita que mande trabalhadores  para a sua colheita. Lc 10.2</p>
        <p>Somos uma família que cresce a cada dia com a missão de levar cada pessoa a ser um discípulo de Jesus Cristo em nossa comunidade local e afins. Servir em amor é o nosso  propósito de vida!</p>
      </section>

      <section className="whorship-time">
        <h2>CULTOS</h2>

        {/* <section className="images-worship-time">
          <img src={Logo} alt="" />
          <img src={Logo} alt="" />

          <h3>Há lugar para você no que Deus está fazendo em nosso meio</h3>
        </section> */}

        <p>
          <span>Venha participar conosco</span>
          <span>Quartas</span>
          <span>19h30</span>
          <span>Domingos</span>
          <span>18h</span>
        </p>
      </section>
    </Container>
  );
}
