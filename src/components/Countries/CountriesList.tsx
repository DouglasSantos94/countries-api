import React from "react";

import { IState as IProps } from "../../App";

const CountriesList: React.FC<IProps> = ({ countries }) => {
  const renderList = (): JSX.Element[] => {
    return countries.map(({ alpha2code, name }) => (
      <li key={alpha2code}>{name}</li>
    ));
  };
  return (
    <div>
      <ul>{renderList()}</ul>
    </div>
  );
};
export default CountriesList;
