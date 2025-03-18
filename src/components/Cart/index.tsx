import {
  Button,
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Sidebar,
} from "./style";

import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { close, remove } from "../../store/reducers/cart";

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();
  const closeCart = () => {
    dispatch(close());
    console.log(isOpen);
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const getTotalPrice = () => {
    return items.reduce((acumulador: number, valorAtual) => {
      return (acumulador += valorAtual.preco!);
    }, 0);
  };

  return (
    <CartContainer className={isOpen ? "is_open" : ""}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>R${item.preco}0</span>
              </div>
              <button onClick={() => removeItem(item.id!)} />
            </CartItem>
          ))}
        </ul>
        <Prices>
          <p>Valor Total</p>
          {getTotalPrice() === 0 ? "" : <span>R$ {getTotalPrice()}0</span>}
        </Prices>
        <Button>Continuar com a compra</Button>
      </Sidebar>
    </CartContainer>
  );
};
export default Cart;
