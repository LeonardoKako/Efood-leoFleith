import { useEffect, useState } from "react";

import CardHome from "../CardHome";
import { Container } from "./style";
import { Restaurant } from "../../pages/Home";

const MainHome = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((res) => setRestaurants(res));
  }, []);

  return (
    <Container>
      {restaurants.map((item) => (
        <CardHome
          id={item.id}
          key={item.id}
          img={item.capa}
          title={item.titulo}
          grade={item.avaliacao}
          type={item.tipo}
          highlight={item.destacado}
          description={item.descricao}
        />
      ))}
    </Container>
  );
};

export default MainHome;
