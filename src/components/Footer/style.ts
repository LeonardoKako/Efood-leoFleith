import styled from "styled-components";
import { colors } from "../../style";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 298px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: ${colors.orange};
`;

export const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const FooterDescription = styled.p`
  font-size: 10px;
  max-width: 480px;
  text-align: center;
`;
