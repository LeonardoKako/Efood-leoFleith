import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CardMenu from "../CardMenu";
import { Container } from "./style";

type Cardapio = {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
};

type Restaurant = {
  id: number;
  nome: string;
  descricao: string;
  capa: string;
  cardapio: Cardapio[];
};

const Menu = () => {
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
    <Container>
      {restaurant.cardapio.map((item) => (
        <CardMenu
          key={item.id}
          foto={item.foto}
          preco={item.preco}
          nome={item.nome}
          descricao={item.descricao}
          porcao={item.porcao}
        />
      ))}
    </Container>
  );
};

export default Menu;
