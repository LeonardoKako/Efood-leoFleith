import { FooterContainer, FooterDescription, Socials } from "./style";

import logo from "../../assets/images/logo.svg";
import insta from "../../assets/images/instagram.svg";
import face from "../../assets/images/facebook.svg";
import tt from "../../assets/images/twitter.svg";

const Footer = () => (
  <FooterContainer>
    <img src={logo} alt="Logo Efood" />
    <Socials>
      <img src={insta} alt="Instagram" />
      <img src={face} alt="Facebook" />
      <img src={tt} alt="Twitter" />
    </Socials>
    <FooterDescription>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{" "}
    </FooterDescription>
  </FooterContainer>
);

export default Footer;
