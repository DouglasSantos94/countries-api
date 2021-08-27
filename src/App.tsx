import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Routes from "./routes";

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
