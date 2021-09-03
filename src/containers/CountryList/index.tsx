import axios from "axios";
import React, { useEffect, useState } from "react";
import CountryItem from "components/CountryItem";
import { Container, NavItem, RegionSelect } from "./styles";

interface IProps {
  countries: {
    alpha3code: string;
    capital: string;
    flag: string;
    name: string;
    population: number;
    region: string;
  }[];
}

const CountryList: React.FC<IProps> = () => {
  const [countries, setCountries] = useState<IProps["countries"]>([]);
  const [regionFilter, setRegionFilter] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://restcountries.eu/rest/v2/all?fields=name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;flag;borders;alpha3code"
      )
      .then(({ data }) => {
        setCountries(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/region/${regionFilter}`)
      .then(({ data }) => setCountries(data));
  }, [regionFilter]);

  const renderList = (): JSX.Element[] => {
    return countries.map(
      ({ alpha3code, name, population, region, capital, flag }) => {
        return (
          <CountryItem
            alpha3code={alpha3code}
            name={name}
            population={population}
            region={region}
            flag={flag}
            capital={capital}
          />
        );
      }
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    axios
      .get(`https://restcountries.eu/rest/v2/name/${name}`)
      .then(({ data }) => {
        setCountries(data);
      });
  };

  const handleRegionChange = (e: any) => {
    setRegionFilter(e.target.textContent);
    setShow(!show);
  };

  return (
    <Container>
      <NavItem>
        <div className="search">
          <i className="fas fa-search" />
          <input
            type="text"
            onChange={handleChange}
            placeholder="Search for a country..."
          />
        </div>
        <div className="menu">
          <button type="button" onClick={() => setShow(!show)}>
            Filter By Region
            <i className="fas fa-chevron-down" />
          </button>
          <RegionSelect show={show}>
            <li>
              <button type="button" onClick={handleRegionChange}>
                Africa
              </button>
            </li>
            <li>
              <button type="button" onClick={handleRegionChange}>
                Americas
              </button>
            </li>
            <li>
              <button type="button" onClick={handleRegionChange}>
                Asia
              </button>
            </li>
            <li>
              <button type="button" onClick={handleRegionChange}>
                Europe
              </button>
            </li>
            <li>
              <button type="button" onClick={handleRegionChange}>
                Oceania
              </button>
            </li>
          </RegionSelect>
        </div>
      </NavItem>
      <ul>{renderList()}</ul>
    </Container>
  );
};
export default CountryList;