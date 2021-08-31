import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import CountryItem from "./CountryItem";

interface IProps {
  countries: {
    alpha3code: string;
    capital: string;
    flag: string;
    name: string;
    population: number;
    region: string;
  }[];
}

const CountryList: React.FC<IProps> = () => {
  const [countries, setCountries] = useState<IProps["countries"]>([]);

  useEffect(() => {
    axios
      .get(
        "https://restcountries.eu/rest/v2/all?fields=name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;flag;borders;alpha3code"
      )
      .then(({ data }) => {
        setCountries(data);
      });
  }, []);

  const renderList = (): JSX.Element[] => {
    return countries.map(
      ({ alpha3code, name, population, region, capital, flag }) => {
        const formattedName = name.includes("(") ? name.split("(")[0] : name;
        return (
          <CountryItem
            alpha3code={alpha3code}
            name={formattedName}
            population={population}
            region={region}
            flag={flag}
            capital={capital}
          />
        );
      }
    );
  };

  return (
    <Container>
      <ul>{renderList()}</ul>
    </Container>
  );
};
export default CountryList;
