import React from "react";

import { Switch, Route } from "react-router-dom";

import CountryView from "containers/CountryView";
import CountryList from "containers/CountryList";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={CountryList} />
    <Route path="/view-country/:name" exact component={CountryView} />
  </Switch>
);

export default Routes;
