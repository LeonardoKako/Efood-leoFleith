import styled from "styled-components";
import { colors } from "../../style";
import trash from "../../assets/images/trash.svg";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`;

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is_open {
    display: flex;
  }
`;

export const Sidebar = styled.aside`
  background-color: ${colors.red};
  z-index: 1;
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;

  ul {
    gap: 16px;
    display: flex;
    flex-direction: column;
  }
`;
export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 40px;
  p {
    font-weight: 700;
    font-size: 14px;
    color: ${colors.orange};
  }

  span {
    font-size: 14px;
    font-weight: 700;
    color: ${colors.orange};
  }
`;

export const CartItem = styled.li`
  width: 100%;
  height: 100px;
  display: flex;
  padding: 8px;
  position: relative;
  background-color: ${colors.orange};

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${colors.red};
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
    color: ${colors.red};
  }

  button {
    background-image: url(${trash});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 24px;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.orange};
  color: ${colors.red};
  border: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;
