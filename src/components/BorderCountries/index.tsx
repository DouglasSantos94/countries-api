import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyledLink } from "styles/elements";
import { BorderButton, BordersList, BordersWrapper } from "./styles";

interface BorderProps {
  borders: string[];
  resolved: boolean;
}

const BorderCountries: React.FC<BorderProps> = ({ borders, resolved }) => {
  const [countryBorders, setCountryBorders] = useState<string[]>([]);
  useEffect(() => {
    if (resolved) {
      Promise.all(
        borders.map((b) =>
          axios
            .get(`https://restcountries.eu/rest/v2/alpha/${b}`)
            .then(({ data: { name } }) => name)
        )
      ).then((name) => setCountryBorders(name));
    }
  }, [countryBorders]);

  const renderBorders = (): JSX.Element[] => {
    return countryBorders.map((border) => {
      return (
        <BorderButton>
          <StyledLink to={`/view-country/${border}`}>{border}</StyledLink>
        </BorderButton>
      );
    });
  };
  return (
    <BordersWrapper>
      <p>Border Countries:</p>
      <BordersList>{countryBorders ? renderBorders() : "Loading"}</BordersList>
    </BordersWrapper>
  );
};

export default BorderCountries;
