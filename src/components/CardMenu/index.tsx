import { useState } from "react";
import {
  Card,
  Button,
  Description,
  Title,
  Modal,
  BackGroundBlack,
  Item,
  CloseModal,
} from "./style";

import { Cardapio } from "../../pages/Home";
import { add, open } from "../../store/reducers/cart";
import { useDispatch } from "react-redux";

type Props = {
  food: Cardapio;
};

const CardMenu = ({ food }: Props) => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const addCart = () => {
    dispatch(add(food));
    dispatch(open());
  };

  return (
    <>
      {modal && (
        <Modal>
          <BackGroundBlack onClick={() => setModal(false)} />
          <Item>
            <CloseModal onClick={() => setModal(false)} />
            <img src={food.foto} alt="Foto Comida" />
            <div>
              <Title style={{ marginTop: "0px" }} fontWeight={"18px"}>
                {food.nome}
              </Title>
              <Description>{food.descricao}</Description>
              <Description>Serve: de {food.porcao}</Description>
              <Button onClick={addCart}>
                Adicionar ao carrinho - R${food.preco}0
              </Button>
            </div>
          </Item>
        </Modal>
      )}
      <Card>
        <div onClick={() => setModal(true)}>
          <img src={food.foto} alt="Foto Comida" />
          <Title fontWeight={"16px"}>{food.nome}</Title>
          <Description>{food.descricao}</Description>
        </div>
        <Button onClick={() => setModal(true)}>Adicionar ao carrinho</Button>
      </Card>
    </>
  );
};

export default CardMenu;
