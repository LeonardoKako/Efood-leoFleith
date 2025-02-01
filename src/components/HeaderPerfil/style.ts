import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../style";

export const Header = styled.header`
  background-repeat: no-repeat;
  background-size: cover;
  height: 163px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 18px;
  font-weight: bold;
`;

export const Back = styled(Link)`
  text-decoration: none;
  color: ${colors.red};
`;
