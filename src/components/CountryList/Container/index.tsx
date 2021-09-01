import styled from "styled-components";

const Container = styled.main`
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    padding: 30px;
  }
`;

const NavItem = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 150px;

  input {
    width: 30%;
    height: 20px;
    padding: 10px;
  }

  div {
    width: 30%;
    button {
      width: 30%;
    }
  }
`;

const RegionSelect = styled.select`
  width: 30%;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  button {
    margin-bottom: 10px;
  }
`;

export { Container, RegionSelect, NavItem };
