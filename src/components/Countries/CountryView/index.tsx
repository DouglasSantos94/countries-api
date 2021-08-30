import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import Container from "./Container";

interface CountryProps {
  alpha3code: string;
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
const CountryView: React.FC<CountryProps> = () => {
  const { pathname } = useLocation();
  const [countryBorders, setCountryBorders] = useState<CountryProps[]>([]);
  const [resolved, setResolved] = useState(false);
  const [countryName, setCountryName] = useState(
    pathname.replace("/view-country/", "")
  );
  const [country, setCountry] = useState<CountryProps>({
    alpha3code: "",
    borders: [],
    capital: "",
    currencies: [],
    flag: "",
    nativeName: "",
    name: "",
    languages: [],
    population: 0,
    region: "",
    subregion: "",
    topLevelDomain: [],
  });

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${countryName}`)
      .then(({ data }) => {
        setCountry(data[0]);
        setResolved(true);
      });
  }, [countryName]);

  useEffect(() => {
    const bordersS: CountryProps[] = [];
    country.borders.map((b) =>
      axios
        .get(`https://restcountries.eu/rest/v2/alpha/${b}`)
        .then(({ data }) => {
          bordersS.push(data);
          setCountryBorders([...bordersS]);
        })
    );
  }, [resolved]);

  const renderBorders = (): JSX.Element[] => {
    return countryBorders.map((border) => {
      return (
        <Link
          to={`/view-country/${border.name}`}
          onClick={() => {
            setResolved(false);
            setCountryName(border.name);
          }}
        >
          <li>{border.name}</li>
        </Link>
      );
    });
  };

  return (
    <Container>
      <div>
        <img src={country.flag} alt={`${country.name} flag`} />
        <div>
          <h1>{country.name}</h1>
          <div className="info">
            <p>
              <span>Native Name:</span> {country.nativeName}
            </p>
            <p>
              <span>Population:</span> {country.population}
            </p>
            <p>
              <span>Region:</span> {country.region}
            </p>
            <p>
              <span>Sub Region:</span> {country.subregion}
            </p>
            <p>
              <span>Capital:</span> {country.capital}
            </p>
            <p>
              <span>Top Level Domain:</span> teste
              {/* {topLevelDomain[0]} */}
            </p>
            <p>
              <span>Currencies:</span> teste
              {/* {topLevelDomain[0]} */}
            </p>
            <p>
              <span>Languages:</span> teste
              {/* {topLevelDomain[0]} */}
            </p>
            <p>{/* <span>Currencies:</span> {currencies[0]} */}</p>
            <p>{/* <span>Languages:</span> {languages[0]} */}</p>
          </div>
          <div className="borders">
            <span>
              <p>Border Countries:</p>
              <ul>{countryBorders ? renderBorders() : "Loading"}</ul>
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CountryView;
