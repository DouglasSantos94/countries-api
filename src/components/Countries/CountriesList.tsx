import axios from "axios";
import React, { useEffect, useState } from "react";
import CountryItem from "./CountryItem";

interface IProps {
  countries: {
    alpha2code: string;
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
        "https://restcountries.eu/rest/v2/all?fields=name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;flag;borders"
      )
      .then(({ data }) => {
        setCountries(data);
      });
  }, []);

  const renderList = (): JSX.Element[] => {
    return countries.map(
      ({ alpha2code, name, population, region, capital, flag }) => (
        <CountryItem
          alpha2code={alpha2code}
          name={name}
          population={population}
          region={region}
          flag={flag}
          capital={capital}
        />
      )
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
