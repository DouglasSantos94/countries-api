import React from "react";

import { Switch, Route } from "react-router-dom";

import CountryView from "components/CountryView";
import CountryList from "components/CountryList";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={CountryList} />
    <Route path="/view-country/:name" exact component={CountryView} />
  </Switch>
);

export default Routes;
