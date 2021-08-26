import React, { useEffect, useState } from "react";
import axios from "axios";
import CountriesList from "./components/Countries/CountriesList";

// import Countries from "./components/Countries/Countries";

export interface IState {
  countries: {
    borders: string[];
    capital: string;
    currencies: Record<string, never>[];
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
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(({ data }) => setCountries(data));
  });

  return <CountriesList countries={countries} />;
}

export default App;
