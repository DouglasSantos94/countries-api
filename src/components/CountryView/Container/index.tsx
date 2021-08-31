import styled from "styled-components";

const ButtonWrapper = styled.div`
  width: 80%;

  button {
    width: 100px;
    font-weight: normal;
    padding: 5px;
    margin: 5px 10px;
    box-shadow: 1px 1px 2px rgba(231, 231, 231, 0.9),
      -1px -1px 2px rgba(231, 231, 231, 0.9);
    background-color: white;
    border: none;
    cursor: pointer;
  }
`;

const InfoWrapper = styled.div`
  height: 150px;
  padding: 15px 0;
  width: 540px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: space-between;
  flex-wrap: wrap;

  p {
    margin-bottom: 7px;
    box-sizing: border-box;
  }
`;

const BordersList = styled.ul`
  display: flex;
  width: 75%;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const BordersWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  height: 110px;
  width: 100%;

  p {
    width: 25%;
  }
`;

const BorderButton = styled.li`
  font-weight: normal;
  padding: 5px;
  margin: 5px 10px;
  box-shadow: 1px 1px 2px rgba(231, 231, 231, 0.7),
    -1px -1px 2px rgba(231, 231, 231, 0.7);

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const CountryDetails = styled.div`
  width: 560px;

  h1 {
    box-sizing: border-box;
    font-size: 25px;
    font-weight: 800;
    width: 500px;
    display: flex;
    align-items: flex-end;
    height: 60px;
    margin-bottom: 20px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 300px;
  width: 80%;

  img {
    width: 400px;
    height: 300px;
  }
`;

const Container = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 14px;
  width: 100vw;
  flex-direction: column;
  height: 600px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  span {
    font-weight: 600;
  }
`;

export {
  ButtonWrapper,
  BordersWrapper,
  BordersList,
  BorderButton,
  Container,
  ContentWrapper,
  CountryDetails,
  InfoWrapper,
};
