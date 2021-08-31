import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { InfoField } from "styles/elements";
import {
  BorderButton,
  BordersList,
  BordersWrapper,
  ButtonWrapper,
  Container,
  ContentWrapper,
  CountryDetails,
  InfoWrapper,
} from "./Container";

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
        <BorderButton>
          <Link
            to={`/view-country/${border.name}`}
            onClick={() => {
              setResolved(false);
              setCountryName(border.name);
            }}
          >
            {border.name}
          </Link>
        </BorderButton>
      );
    });
  };

  return (
    <Container>
      <ButtonWrapper>
        <Link to="/">
          <button type="button">Voltar</button>
        </Link>
      </ButtonWrapper>
      <ContentWrapper>
        <img src={country.flag} alt={`${country.name} flag`} />
        <CountryDetails>
          <h1>{country.name}</h1>
          <InfoWrapper>
            <InfoField>
              <span>Native Name:</span> {country.nativeName}
            </InfoField>
            <InfoField>
              <span>Population:</span> {country.population}
            </InfoField>
            <InfoField>
              <span>Region:</span> {country.region}
            </InfoField>
            <InfoField>
              <span>Sub Region:</span> {country.subregion}
            </InfoField>
            <InfoField>
              <span>Capital:</span> {country.capital}
            </InfoField>
            <InfoField>
              <span>Top Level Domain:</span> teste
              {/* {topLevelDomain[0]} */}
            </InfoField>
            <InfoField>
              <span>Currencies:</span> teste
              {/* {topLevelDomain[0]} */}
            </InfoField>
            <InfoField>
              <span>Languages:</span> teste
              {/* {topLevelDomain[0]} */}
            </InfoField>
            <InfoField>
              {/* <span>Currencies:</span> {currencies[0]} */}
            </InfoField>
            <InfoField>
              {/* <span>Languages:</span> {languages[0]} */}
            </InfoField>
          </InfoWrapper>
          <BordersWrapper>
            <p>Border Countries:</p>
            <BordersList>
              {countryBorders ? renderBorders() : "Loading"}
            </BordersList>
          </BordersWrapper>
        </CountryDetails>
      </ContentWrapper>
    </Container>
  );
};

export default CountryView;
