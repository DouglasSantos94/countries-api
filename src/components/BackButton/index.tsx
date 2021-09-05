import React from "react";
import { StyledLink } from "styles/elements";
import Button from "./styles";

const BackButton: React.FC = () => (
  <StyledLink to="/">
    <Button type="button">
      <i className="fas fa-arrow-left" />
      Back
    </Button>
  </StyledLink>
);

export default BackButton;
