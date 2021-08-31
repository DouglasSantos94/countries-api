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
  const [regionFilter, setRegionFilter] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://restcountries.eu/rest/v2/all?fields=name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;flag;borders;alpha3code"
      )
      .then(({ data }) => {
        setCountries(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/region/${regionFilter}`)
      .then(({ data }) => setCountries(data));
  }, [regionFilter]);

  const renderList = (): JSX.Element[] => {
    return countries.map(
      ({ alpha3code, name, population, region, capital, flag }) => {
        return (
          <CountryItem
            alpha3code={alpha3code}
            name={name}
            population={population}
            region={region}
            flag={flag}
            capital={capital}
          />
        );
      }
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    axios
      .get(`https://restcountries.eu/rest/v2/name/${name}`)
      .then(({ data }) => {
        setCountries(data);
      });
  };

  return (
    <Container>
      <nav>
        <input type="text" onChange={handleChange} />
        <ul>
          <li>
            <button type="button" onClick={() => setRegionFilter("Africa")}>
              Africa
            </button>
          </li>
          <li>
            <button type="button" onClick={() => setRegionFilter("Americas")}>
              Americas
            </button>
          </li>
          <li>
            <button type="button" onClick={() => setRegionFilter("Asia")}>
              Asia
            </button>
          </li>
          <li>
            <button type="button" onClick={() => setRegionFilter("Europe")}>
              Europe
            </button>
          </li>
          <li>
            <button type="button" onClick={() => setRegionFilter("Oceania")}>
              Oceania
            </button>
          </li>
        </ul>
      </nav>
      <ul>{renderList()}</ul>
    </Container>
  );
};
export default CountryList;
