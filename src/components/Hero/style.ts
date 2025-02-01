import styled from "styled-components";
import { colors } from "../../style";

export const Container = styled.div`
  width: 100%;
  height: 280px;
  padding-top: 24px;
  padding-bottom: 32px;
  padding-left: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const BlackScreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Type = styled.h1`
  font-size: 32px;
  font-weight: 100;
  color: ${colors.white};
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: ${colors.white};
  z-index: 1;
`;
