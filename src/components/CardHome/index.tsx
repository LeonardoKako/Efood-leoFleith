import star from "../../assets/images/estrela.svg";
import { Restaurant } from "../../pages/Home";
import { Button, Card, Description, Grade, Tag, Tags, Title } from "./style";

const CardHome = ({
  id,
  capa,
  tipo,
  titulo,
  avaliacao,
  descricao,
  destacado,
}: Restaurant) => {
  return (
    <Card>
      <div>
        <img className="restaurantImage" src={capa} alt="Image Restaurante" />
        <Tags>
          {destacado && <Tag>Destaque da semana</Tag>}
          <Tag>{tipo}</Tag>
        </Tags>
        <div className="flex" style={{ justifyContent: "space-between" }}>
          <Title>{titulo}</Title>
          <Grade>
            <h1>{avaliacao}</h1>
            <img src={star} alt="Estrela" />
          </Grade>
        </div>
        <Description>{descricao}</Description>
      </div>
      <Button to={`/perfil/${id}`}>Saiba mais</Button>
    </Card>
  );
};

export default CardHome;
