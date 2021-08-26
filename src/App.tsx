import React, { useEffect, useState } from "react";
import axios from "axios";
import CountriesList from "./components/Countries/CountriesList";
import Header from "./components/Header";

export interface IState {
  countries: {
    alpha2code: string;
    borders: string[];
    capital: string;
    currencies: Array<string>;
    name: string;
    population: number;
    region: string;
    subregion: string;
    topLevelDomain: string[];
  }[];
}

function App(): JSX.Element {
  const [countries, setCountries] = useState<IState["countries"]>([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(({ data }) => {
      setCountries(data);
    });
  }, []);

  return (
    <>
      <Header />
      <CountriesList countries={countries} />
    </>
  );
}

export default App;
