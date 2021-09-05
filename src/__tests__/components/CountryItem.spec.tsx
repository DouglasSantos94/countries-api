/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import CountryItem from "components/CountryItem";

const CountryItemProps = {
  alpha3code: "DDD",
  flag: "www",
  name: "Country",
  population: 100,
  region: "Country Region",
  capital: "Country Capital",
};
describe("CountryItem component test suit", () => {
  it("should render country name", () => {
    render(
      <BrowserRouter>
        <CountryItem {...CountryItemProps} />
      </BrowserRouter>
    );

    const nameElement = screen.getByRole("heading", { name: /Country/i });
    expect(nameElement).toBeInTheDocument();
  });

  it("should render country population with correct value", () => {
    render(
      <BrowserRouter>
        <CountryItem {...CountryItemProps} />
      </BrowserRouter>
    );

    const populationElement = screen.getByText(100);
    expect(populationElement).toBeInTheDocument();
  });

  it("should render country region with correct value", () => {
    render(
      <BrowserRouter>
        <CountryItem {...CountryItemProps} />
      </BrowserRouter>
    );

    const regionElement = screen.getByText(/Country Region/i);
    expect(regionElement).toBeInTheDocument();
  });

  it("should render country capital with correct value", () => {
    render(
      <BrowserRouter>
        <CountryItem {...CountryItemProps} />
      </BrowserRouter>
    );

    const capitalElement = screen.getByText(/Country Capital/i);
    expect(capitalElement).toBeInTheDocument();
  });
});
