import { BlackScreen, Container, Title, Type } from "./style";

type Props = {
  foto: string;
  nome: string;
  tipo: string;
};

const Hero = ({ foto, nome, tipo }: Props) => {
  return (
    <Container style={{ backgroundImage: `url(${foto})` }}>
      <BlackScreen />
      <Type>{nome}</Type>
      <Title>{tipo}</Title>
    </Container>
  );
};

export default Hero;
