import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { InfoField } from "styles/elements";
import BorderCountries from "components/BorderCountries";
import { getCountry } from "api/countryApi";
import Skeleton from "react-loading-skeleton";
import BackButton from "components/BackButton";
import {
  ButtonWrapper,
  Container,
  ContentWrapper,
  CountryDetails,
  CountryFlag,
  CountryName,
  InfoWrapper,
  ResponsiveSkeleton,
} from "./styles";

interface CountryProps {
  alpha3code: string;
  borders: string[];
  capital: string;
  currencies: [{ name: string }];
  flag: string;
  nativeName: string;
  name: string;
  languages: [{ name: string }];
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
    currencies: [{ name: "" }],
    flag: "",
    nativeName: "",
    name: "",
    languages: [{ name: "" }],
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
        <BackButton />
      </ButtonWrapper>
      <ContentWrapper>
        {resolved ? (
          <CountryFlag src={country.flag} alt={`${country.name} flag`} />
        ) : (
          <Skeleton width="400px" height="300px" />
        )}
        {resolved ? (
          <CountryDetails>
            <CountryName>{country.name}</CountryName>
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
                <span>Top Level Domain:</span> {country.topLevelDomain}
              </InfoField>
              <InfoField>
                <span>Currencies:</span> {country.currencies[0].name}
              </InfoField>
              <InfoField>
                <span>Languages:</span>{" "}
                {country.languages.map((l) => l.name).join(", ")}
              </InfoField>
            </InfoWrapper>
            {resolved && <BorderCountries borders={country.borders} resolved />}
          </CountryDetails>
        ) : (
          <ResponsiveSkeleton />
        )}
      </ContentWrapper>
    </Container>
  );
};

export default CountryView;
