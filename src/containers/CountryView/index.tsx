import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { InfoField, StyledLink } from "styles/elements";
import BorderCountries from "components/BorderCountries";
import { getCountry } from "api/countryApi";
import {
  ButtonWrapper,
  Container,
  ContentWrapper,
  CountryDetails,
  InfoWrapper,
} from "./styles";

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
  const [resolved, setResolved] = useState(false);
  const [countryName, setCountryName] = useState("");

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

  useEffect(
    () => setCountryName(pathname.replace("/view-country/", "")),
    [pathname]
  );

  useEffect(() => {
    if (countryName)
      getCountry(countryName).then(({ data }) => {
        setCountry(data[0]);
        setResolved(true);
      });
  }, [countryName]);

  return (
    <Container>
      <ButtonWrapper>
        <StyledLink to="/">
          <button type="button">
            <i className="fas fa-arrow-left" />
            Back
          </button>
        </StyledLink>
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
          {resolved && <BorderCountries borders={country.borders} resolved />}
        </CountryDetails>
      </ContentWrapper>
    </Container>
  );
};

export default CountryView;
