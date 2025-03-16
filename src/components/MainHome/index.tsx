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

  if (!restaurants) {
    return <h3>Carregando...</h3>;
  }

  return (
    <Container>
      {restaurants.map((item) => (
        <CardHome
          id={item.id}
          key={item.id}
          capa={item.capa}
          titulo={item.titulo}
          avaliacao={item.avaliacao}
          tipo={item.tipo}
          destacado={item.destacado}
          descricao={item.descricao}
        />
      ))}
    </Container>
  );
};

export default MainHome;
