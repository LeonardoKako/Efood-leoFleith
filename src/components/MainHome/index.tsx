import CardHome from "../CardHome";
import { Container } from "./style";
import { useGetRestaurantsQuery } from "../../services/api";

const MainHome = () => {
  const { data: restaurants, isLoading, error } = useGetRestaurantsQuery();

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar os restaurantes</p>;

  return (
    <Container>
      {restaurants?.map((item) => (
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
