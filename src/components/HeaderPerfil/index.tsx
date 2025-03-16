import bgHeader from "../../assets/images/fundo.png";
import logo from "../../assets/images/logo.svg";
import { Back, Header } from "./style";

const HeaderPerfil = () => (
  <Header style={{ backgroundImage: `url(${bgHeader})` }}>
    <Back to={"/"}>Restaurantes</Back>
    <img src={logo} alt="Logo Efood" />
    <p>0 produto(s) no carrinho</p>
  </Header>
);

export default HeaderPerfil;
