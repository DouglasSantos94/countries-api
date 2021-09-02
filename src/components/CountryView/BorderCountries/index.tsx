import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  }, [borders]);

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
      <BordersList>{countryBorders ? renderBorders() : "Loading"}</BordersList>
    </BordersWrapper>
  );
};

export default BorderCountries;
