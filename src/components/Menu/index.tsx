import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CardMenu from "../CardMenu";
import { Container } from "./style";
import { Restaurant } from "../../pages/Home";

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
      {restaurant.cardapio &&
        restaurant.cardapio.map((item) => (
          <CardMenu key={item.id} food={item} />
        ))}
    </Container>
  );
};

export default Menu;
