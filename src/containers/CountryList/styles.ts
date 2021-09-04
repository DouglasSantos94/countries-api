import styled from "styled-components";

interface RegionListProps {
  show: boolean;
}

type RegionListItemProps = RegionListProps;

const Container = styled.main`
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    padding: 0;
  }
`;

const NavItem = styled.nav`
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;

  button {
    width: 180px;
    margin-bottom: 3px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: inherit;
    border-radius: 4px;
    padding: 10px;
    border: none;
    box-shadow: 1px 1px 2px rgba(168, 168, 168, 0.7),
      -1px -1px 2px rgba(168, 168, 168, 0.7);
    background-color: white;
  }
`;

const CountrySearch = styled.div`
  box-shadow: 1px 1px 2px rgba(168, 168, 168, 0.7),
    -1px -1px 2px rgba(168, 168, 168, 0.7);
  width: 30%;
  border-radius: 6px;

  i {
    width: 10%;
    padding-left: 5%;
    box-sizing: border-box;
  }

  input {
    padding: 15px;
    box-sizing: border-box;
    border: none;
    width: 90%;
  }
`;

const RegionSelect = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  justify-content: flex-start;
  height: 200px;
  width: 200px;
  border-radius: 4px;
  z-index: 2;
`;

const RegionList = styled.ul<RegionListProps>`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  width: 180px;
  box-shadow: 1px 1px 2px rgba(168, 168, 168, 0.7),
    -1px -1px 2px rgba(168, 168, 168, 0.7);
  background: white;
  border-radius: 6px;
  align-items: flex-start;
  max-height: ${(props) => (props.show ? "100%" : "0")};
`;

const RegionListItem = styled.li<RegionListItemProps>`
  display: ${(props) => (props.show ? "visible" : "none")};
  max-height: ${(props) => (props.show ? "100%" : "0")};
  list-style-type: none;
  text-align: center;
  background-color: transparent;

  button {
    box-shadow: none;
  }
`;

export {
  Container,
  CountrySearch,
  RegionSelect,
  RegionList,
  RegionListItem,
  NavItem,
};
