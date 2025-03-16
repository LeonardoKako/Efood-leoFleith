import { Restaurant } from "../../pages/Home";
import { BlackScreen, Container, Title, Type } from "./style";

const Hero = ({ capa, titulo, tipo }: Restaurant) => {
  return (
    <Container style={{ backgroundImage: `url(${capa})` }}>
      <BlackScreen />
      <Type>{titulo}</Type>
      <Title>{tipo}</Title>
    </Container>
  );
};

export default Hero;
