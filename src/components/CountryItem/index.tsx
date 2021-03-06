import React from "react";
import { InfoField, StyledLink } from "styles/elements";
import { Container, InfoWrapper } from "./styles";

export type CountryItemProps = {
  alpha3code: string;
  capital: string;
  name: string;
  flag: string;
  population: number;
  region: string;
};

const CountryItem: React.FC<CountryItemProps> = ({
  alpha3code,
  flag,
  name,
  population,
  region,
  capital,
}) => {
  return (
    <Container key={alpha3code}>
      <StyledLink to={`/view-country/${name}`}>
        <img src={flag} alt={`${name} flag`} />
        <InfoWrapper>
          <h1>{name}</h1>
          <InfoField>
            <span>Population:</span> {population}
          </InfoField>
          <InfoField>
            <span>Region:</span> {region}
          </InfoField>
          <InfoField>
            <span>Capital:</span> {capital}
          </InfoField>
        </InfoWrapper>
      </StyledLink>
    </Container>
  );
};

export default CountryItem;
