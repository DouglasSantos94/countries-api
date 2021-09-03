import styled from "styled-components";

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

  .search {
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
  }

  .menu {
    display: flex;
    flex-direction: column;
    margin-top: 200px;
    justify-content: flex-start;
    height: 200px;
    width: 200px;
    border-radius: 4px;
    z-index: 2;
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

interface RegionSelectProps {
  show: boolean;
}

const RegionSelect = styled.ul<RegionSelectProps>`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  width: 180px;
  box-shadow: 1px 1px 2px rgba(168, 168, 168, 0.7),
    -1px -1px 2px rgba(168, 168, 168, 0.7);
  background: white;
  border-radius: 6px;
  align-items: flex-start;
  max-height: ${(props) => (props.show ? "100%" : "0")};

  li {
    display: ${(props) => (props.show ? "visible" : "none")};
    max-height: ${(props) => (props.show ? "100%" : "0")};
    list-style-type: none;
    text-align: center;
    background-color: transparent;

    button {
      padding: 3px 20px;
      border: none;
      box-shadow: none;
      background-color: transparent;
    }
  }
`;

export { Container, RegionSelect, NavItem };
