import bgHeader from "../../assets/images/fundoHeader.png";
import logo from "../../assets/images/logo.svg";

import {} from "./";
import { Header, Title } from "./style";

const HeaderHome = () => (
  <Header style={{ backgroundImage: `url(${bgHeader})` }}>
    <img src={logo} alt="Logo Efood" />
    <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
  </Header>
);

export default HeaderHome;
