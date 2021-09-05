/* eslint-disable no-console */
import axios, { AxiosResponse } from "axios";

const getCountries = (): Promise<AxiosResponse> =>
  axios.get(
    "https://restcountries.eu/rest/v2/all?fields=name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;flag;borders;alpha3code"
  );

const getCountry = (countryName: string): Promise<AxiosResponse> =>
  axios.get(`https://restcountries.eu/rest/v2/name/${countryName}`);

const getCountriesByRegion = (regionFilter: string): Promise<AxiosResponse> =>
  axios.get(`https://restcountries.eu/rest/v2/region/${regionFilter}`);

const getCountryBorders = (borders: string[]): Promise<string[]> =>
  Promise.all(
    borders.map((b) =>
      axios
        .get(`https://restcountries.eu/rest/v2/alpha/${b}`)
        .then(({ data: { name } }) => name)
        .catch((e) => console.log(e))
    )
  );

export { getCountry, getCountryBorders, getCountries, getCountriesByRegion };
