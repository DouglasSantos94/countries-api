import React from "react";
import CountryView from "../CountryView";
import Container from "./Container";

interface IProps {
  alpha3code: string;
  capital: string;
  name: string;
  flag: string;
  population: number;
  region: string;
}

const CountryItem: React.FC<IProps> = ({
  alpha3code,
  flag,
  name,
  population,
  region,
  capital,
}) => {
  return (
    <Container key={alpha3code}>
      <img src={flag} alt={`${name} flag`} />
      <div>
        <h1>{name}</h1>
        <p>
          <span>Population:</span> {population}
        </p>
        <p>
          <span>Region:</span> {region}
        </p>
        <p>
          <span>Capital:</span> {capital}
        </p>
      </div>
    </Container>
  );
};

export default CountryItem;
