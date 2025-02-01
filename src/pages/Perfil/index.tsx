import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Restaurant } from "../Home";

import HeaderPerfil from "../../components/HeaderPerfil";
import Hero from "../../components/Hero";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

const Perfil = () => {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res));
  }, [id]);

  if (!restaurant) {
    return <h3>Carregando...</h3>;
  }

  return (
    <>
      <HeaderPerfil />
      <Hero
        nome={restaurant.titulo}
        tipo={restaurant.tipo}
        foto={restaurant.capa}
      />
      <Menu />
      <Footer />
    </>
  );
};

export default Perfil;
