import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const Base = createGlobalStyle`
  body {
    font-family: "Nunito Sans", sans-serif;
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: inherit;
`;

const InfoField = styled.p`
  font-size: 14px;
  margin: 4px 0;

  span {
    font-weight: 600;
  }
`;

export { Base, InfoField, StyledLink };
