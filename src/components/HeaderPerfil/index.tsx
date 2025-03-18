import { useDispatch, useSelector } from "react-redux";
import bgHeader from "../../assets/images/fundo.png";
import logo from "../../assets/images/logo.svg";
import { Back, Header } from "./style";
import { open } from "../../store/reducers/cart";
import { RootReducer } from "../../store";

const HeaderPerfil = () => {
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart);

  const openCart = () => {
    dispatch(open());
    console.log(isOpen);
  };

  return (
    <Header style={{ backgroundImage: `url(${bgHeader})` }}>
      <Back to={"/"}>Restaurantes</Back>
      <img src={logo} alt="Logo Efood" />
      <p onClick={openCart}>{items.length} produto(s) no carrinho</p>
    </Header>
  );
};

export default HeaderPerfil;
