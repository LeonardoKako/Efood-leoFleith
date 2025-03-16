import Footer from "../../components/Footer";
import HeaderHome from "../../components/HeaderHome";
import MainHome from "../../components/MainHome";

export type Cardapio = {
  foto?: string;
  preco?: number;
  id?: number;
  nome?: string;
  descricao?: string;
  porcao?: string;
};

export type Restaurant = {
  id?: number;
  titulo?: string;
  destacado?: boolean;
  tipo?: string;
  avaliacao?: number;
  descricao?: string;
  capa?: string;
  cardapio?: Cardapio[];
};

const Home = () => {
  return (
    <>
      <HeaderHome />
      <MainHome />
      <Footer />
    </>
  );
};

export default Home;
