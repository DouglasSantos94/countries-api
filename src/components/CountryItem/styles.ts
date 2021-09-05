import styled from "styled-components";

const Container = styled.li`
  font-family: "Nunito Sans", sans-serif;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 230px;
  height: 280px;
  margin: 30px;
  border-radius: 6px;
  box-shadow: 1px 1px 2px rgba(168, 168, 168, 0.7),
    -1px -1px 2px rgba(168, 168, 168, 0.7);

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 450px;
  }

  img {
    width: 100%;
    box-sizing: border-box;
    height: 140px;
    border-radius: 6px 6px 0 0;
    @media screen and (max-width: 600px) {
      height: 300px;
    }
  }
`;

const InfoWrapper = styled.div`
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 17px;
    font-weight: 800;
    margin-bottom: 10px;
  }
`;

export { Container, InfoWrapper };
