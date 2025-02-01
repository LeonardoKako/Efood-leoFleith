import star from "../../assets/images/estrela.svg";
import { Button, Card, Description, Grade, Tag, Tags, Title } from "./style";

type Props = {
  id: number;
  img: string;
  type: string;
  title: string;
  grade: number;
  description: string;
  highlight: boolean;
};

const CardHome = ({
  id,
  img,
  type,
  title,
  grade,
  description,
  highlight,
}: Props) => {
  return (
    <Card>
      <div>
        <img className="restaurantImage" src={img} alt="Image Restaurante" />
        <Tags>
          {highlight && <Tag>Destaque da semana</Tag>}
          <Tag>{type}</Tag>
        </Tags>
        <div className="flex" style={{ justifyContent: "space-between" }}>
          <Title>{title}</Title>
          <Grade>
            <h1>{grade}</h1>
            <img src={star} alt="Estrela" />
          </Grade>
        </div>
        <Description>{description}</Description>
      </div>
      <Button to={`/perfil/${id}`}>Saiba mais</Button>
    </Card>
  );
};

export default CardHome;
