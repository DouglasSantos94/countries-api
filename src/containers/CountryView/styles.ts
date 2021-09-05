import styled from "styled-components";

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

const ButtonWrapper = styled.div`
  width: 80%;

  button {
    width: 100px;
    font-weight: normal;
    padding: 5px;
    margin: 5px 10px;
    box-shadow: 1px 1px 2px rgba(168, 168, 168, 0.7),
      -1px -1px 2px rgba(168, 168, 168, 0.7);
    background-color: white;
    border: none;
    text-decoration: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 300px;
  width: 80%;
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

const CountryName = styled.h1`
  box-sizing: border-box;
  font-size: 25px;
  font-weight: 800;
  width: 500px;
  display: flex;
  align-items: flex-end;
  height: 60px;
  margin-bottom: 20px;
`;

const CountryFlag = styled.img`
  width: 400px;
  height: 300px;
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

export {
  ButtonWrapper,
  Container,
  ContentWrapper,
  CountryDetails,
  InfoWrapper,
  CountryName,
  CountryFlag,
};
