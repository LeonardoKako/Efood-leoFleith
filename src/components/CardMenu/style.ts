import styled from "styled-components";
import { colors } from "../../style";

import close from "../../assets/images/close.svg";

type Props = {
  fontWeight: string;
};

export const Card = styled.div`
  width: 320px;
  min-height: 340px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.red};
  color: ${colors.orange};
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    max-width: 304px;
    height: 180px;
    object-fit: cover;
    object-position: center;
  }
`;

export const Title = styled.h1<Props>`
  font-size: ${(props) => props.fontWeight};
  font-weight: bold;
  margin-top: 8px;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const Button = styled.button`
  width: 304px;
  height: 24px;
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

export const Modal = styled.section`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackGroundBlack = styled.div`
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
`;

export const Item = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 1024px;
  height: 344px;
  padding: 32px;
  background-color: ${colors.red};
  color: ${colors.orange};
  display: flex;

  img {
    width: 280px;
    height: 280px;
    margin-right: 24px;
    object-fit: cover;
    object-position: center;
  }
`;

export const CloseModal = styled.div`
  position: absolute;
  background-image: url(${close});
  width: 16px;
  height: 16px;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;
