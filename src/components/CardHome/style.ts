import styled from "styled-components";
import { colors } from "../../style";
import { Link } from "react-router-dom";

export const Card = styled.div`
  max-width: 472px;
  min-height: 400px;
  border: 2px solid ${colors.red};
  background-color: ${colors.white};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;

  .restaurantImage {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 216px;
    object-fit: cover;
    object-position: center;
  }
`;

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
  justify-content: end;
`;

export const Tag = styled.div`
  padding: 6px 4px;
  background-color: ${colors.red};
  color: ${colors.orange};
  font-size: 12px;
  font-weight: bold;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin-top: 216px;
`;

export const Grade = styled.div`
  display: flex;
  align-items: center;
  margin-top: 216px;
  justify-content: center;
  gap: 8px;

  h1 {
    font-size: 18px;
    font-weight: bold;
  }

  img {
    width: 21px;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const Button = styled(Link)`
  width: 82px;
  border: none;
  padding: 4px 6px;
  background-color: ${colors.red};
  color: ${colors.orange};
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
`;
