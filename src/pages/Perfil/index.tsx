import { useParams } from "react-router-dom";

import HeaderPerfil from "../../components/HeaderPerfil";
import Hero from "../../components/Hero";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import { useGetRestaurantSoloQuery } from "../../services/api";

const Perfil = () => {
  const { id } = useParams();

  const { data: restaurant, isLoading, error} = useGetRestaurantSoloQuery(id!);

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar os restaurantes</p>;

  return (
    <>
      <HeaderPerfil />
      <Hero
        titulo={restaurant?.titulo}
        tipo={restaurant?.tipo}
        capa={restaurant?.capa}
      />
      <Menu />
      <Footer />
    </>
  );
};

export default Perfil;
