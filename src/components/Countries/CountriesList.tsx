import React from "react";

import { IState as IProps } from "../../App";
import CountryItem from "./CountryItem";

const CountriesList: React.FC<IProps> = ({ countries }) => {
  const renderList = (): JSX.Element[] => {
    return countries.map(
      ({ alpha2code, name, population, region, capital, flag }) => (
        <CountryItem
          alpha2code={alpha2code}
          name={name}
          population={population}
          region={region}
          flag={flag}
          capital={capital}
        />
      )
    );
  };
  return (
    <div>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          padding: "30px",
        }}
      >
        {renderList()}
      </ul>
    </div>
  );
};
export default CountriesList;
