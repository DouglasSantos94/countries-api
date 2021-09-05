import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const Base = createGlobalStyle`
  body {
    font-family: "Nunito Sans", sans-serif;
    color: hsl(200, 15%, 8%);
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
  max-width: 150px;

  @media screen and (max-width: 500px) {
    max-width: 100%;
  }

  span {
    font-weight: 600;
  }
`;

export { Base, InfoField, StyledLink };
