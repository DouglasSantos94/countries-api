import React from "react";

import { Switch, Route } from "react-router-dom";

import CountryView from "../components/Countries/CountryView";
import CountriesList from "../components/Countries/CountriesList";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={CountriesList} />
    <Route path="/view-country/:id" exact component={CountryView} />
  </Switch>
);

export default Routes;
