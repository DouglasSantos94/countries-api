import React from "react";
import styled from "styled-components";

interface CountryProps {
  alpha2code: string;
  borders: string[];
  capital: string;
  currencies: Array<string>;
  flag: string;
  nativeName: string;
  name: string;
  languages: string[];
  population: number;
  region: string;
  subregion: string;
  topLevelDomain: string[];
}

const CountryView: React.FC<CountryProps> = ({
  nativeName,
  name,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  flag,
  borders,
}) => {
  return <h1>Country view</h1>;
};

export default CountryView;
