import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BorderButton, BordersList, BordersWrapper } from "./styles";

interface BorderCountriesProps {
  borderCountries: string[];
  resolved: boolean;
}

const BorderCountries: React.FC<BorderCountriesProps> = ({
  borderCountries,
  resolved,
}) => {
  const [countryBorders, setCountryBorders] = useState<string[]>([]);

  useEffect(() => {
    Promise.all(
      borderCountries.map((b) => {
        return axios
          .get(`https://restcountries.eu/rest/v2/alpha/${b}`)
          .then(({ data: { name } }) => name);
      })
    ).then((name) => setCountryBorders(name));
  }, [countryBorders]);

  const renderBorders = (): JSX.Element[] => {
    return countryBorders.map((border) => {
      return (
        <BorderButton>
          <Link to={`/view-country/${border}`}>{border}</Link>
        </BorderButton>
      );
    });
  };

  return (
    <BordersWrapper>
      <p>Border Countries:</p>
      <BordersList>{renderBorders()}</BordersList>
    </BordersWrapper>
  );
};

export default BorderCountries;
