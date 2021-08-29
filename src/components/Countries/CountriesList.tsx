import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountryItem from "./CountryItem";

interface IProps {
  countries: {
    alpha3code: string;
    borders: string[];
    capital: string;
    currencies: Array<string>;
    flag: string;
    name: string;
    nativeName: string;
    languages: string[];
    population: number;
    region: string;
    subregion: string;
    topLevelDomain: string[];
  }[];
}

const CountriesList: React.FC<IProps> = () => {
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
      ({
        alpha3code,
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
        const formattedName = name.includes("(") ? name.split("(")[0] : name;
        return (
          <Link to={`/view-country/${name}`}>
            <CountryItem
              alpha3code={alpha3code}
              name={formattedName}
              population={population}
              region={region}
              flag={flag}
              capital={capital}
            />
          </Link>
        );
      }
    );
  };

  return (
    <div>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          padding: "30px",
        }}
      >
        {renderList()}
      </ul>
    </div>
  );
};
export default CountriesList;
