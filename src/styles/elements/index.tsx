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

export { Base, StyledLink };
