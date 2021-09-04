import axios from "axios";
import React, { useEffect, useState } from "react";
import CountryItem from "components/CountryItem";
import {
  Container,
  CountrySearch,
  NavItem,
  RegionSelect,
  RegionList,
  RegionListItem,
} from "./styles";

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
  const [resolved, setResolved] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://restcountries.eu/rest/v2/all?fields=name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;flag;borders;alpha3code"
      )
      .then(({ data }) => {
        setCountries(data);
        setResolved(true);
      });
  }, []);

  useEffect(() => {
    if (resolved)
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
        <CountrySearch>
          <i className="fas fa-search" />
          <input
            type="text"
            onChange={handleChange}
            placeholder="Search for a country..."
          />
        </CountrySearch>
        <RegionSelect>
          <button type="button" onClick={() => setShow(!show)}>
            Filter By Region
            <i className="fas fa-chevron-down" />
          </button>
          <RegionList show={show}>
            <RegionListItem show={show}>
              <button type="button" onClick={handleRegionChange}>
                Africa
              </button>
            </RegionListItem>
            <RegionListItem show={show}>
              <button type="button" onClick={handleRegionChange}>
                Americas
              </button>
            </RegionListItem>
            <RegionListItem show={show}>
              <button type="button" onClick={handleRegionChange}>
                Asia
              </button>
            </RegionListItem>
            <RegionListItem show={show}>
              <button type="button" onClick={handleRegionChange}>
                Europe
              </button>
            </RegionListItem>
            <RegionListItem show={show}>
              <button type="button" onClick={handleRegionChange}>
                Oceania
              </button>
            </RegionListItem>
          </RegionList>
        </RegionSelect>
      </NavItem>
      <ul>{renderList()}</ul>
    </Container>
  );
};
export default CountryList;
