import React, { useEffect, useState } from "react";
import { getCountryBorders } from "api/countryApi";
import { StyledLink } from "styles/elements";
import { BorderButton, BordersList, BordersWrapper } from "./styles";

type BorderProps = {
  borders: string[];
  resolved: boolean;
};

const BorderCountries: React.FC<BorderProps> = ({ borders, resolved }) => {
  const [countryBorders, setCountryBorders] = useState<string[]>(borders);

  useEffect(() => {
    if (resolved)
      getCountryBorders(borders).then((name) => setCountryBorders(name));
  }, [borders]);

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
      <BordersList>{countryBorders && renderBorders()}</BordersList>
    </BordersWrapper>
  );
};

export default BorderCountries;
