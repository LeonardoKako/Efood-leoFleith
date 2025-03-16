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

const CardMenu = ({ descricao, foto, nome, porcao, preco }: Cardapio) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      {modal && (
        <Modal>
          <BackGroundBlack onClick={() => setModal(false)} />
          <Item>
            <CloseModal onClick={() => setModal(false)} />
            <img src={foto} alt="Foto Comida" />
            <div>
              <Title style={{ marginTop: "0px" }} fontWeight={"18px"}>
                {nome}
              </Title>
              <Description>{descricao}</Description>
              <Description>Serve: de {porcao}</Description>
              <Button>Adicionar ao carrinho - R${preco}0</Button>
            </div>
          </Item>
        </Modal>
      )}
      <Card>
        <div onClick={() => setModal(true)}>
          <img src={foto} alt="Foto Comida" />
          <Title fontWeight={"16px"}>{nome}</Title>
          <Description>{descricao}</Description>
        </div>
        <Button onClick={() => console.log("Adicionou ao carrinho")}>
          Adicionar ao carrinho
        </Button>
      </Card>
    </>
  );
};

export default CardMenu;
