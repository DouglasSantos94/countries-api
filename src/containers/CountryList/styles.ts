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

    @media screen and (max-width: 600px) {
      flex-direction: column;
      align-content: center;
      justify-items: center;
      padding: 0 20px;
    }
  }
`;

const NavItem = styled.nav`
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;

  @media screen and (max-width: 800px) {
    width: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    height: 280px;
    padding: 0 20px;
    box-sizing: border-box;
  }

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

  @media (max-width: 800px) {
    width: 100%;
  }

  i {
    width: 10%;
    padding-left: 5%;
    box-sizing: border-box;
    @media screen and (max-width: 800px) {
      width: 20%;
    }
  }

  input {
    padding: 15px;
    box-sizing: border-box;
    border: none;
    width: 90%;
    @media (max-width: 800px) {
      width: 80%;
    }
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

  @media screen and (max-width: 800px) {
    margin-top: 0;
    width: 100%;
  }

  button {
    width: 100%;
  }
`;

const RegionList = styled.ul<RegionListProps>`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  box-shadow: 1px 1px 2px rgba(168, 168, 168, 0.7),
    -1px -1px 2px rgba(168, 168, 168, 0.7);
  background: white;
  border-radius: 6px;
  box-sizing: border-box;
  align-items: flex-start;
  max-height: ${(props) => (props.show ? "100%" : "0")};
`;

const RegionListItem = styled.li<RegionListItemProps>`
  display: ${(props) => (props.show ? "visible" : "none")};
  max-height: ${(props) => (props.show ? "100%" : "0")};
  list-style-type: none;
  width: 100%;
  box-sizing: border-box;
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
