import styled from "styled-components";

const Container = styled.div`
  font-family: "Nunito Sans", sans-serif;
  width: 100vw;
  height: 600px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 300px;
    width: 70%;

    img {
      width: 360px;
      height: 300px;
    }

    div {
      width: 500px;

      h1 {
        box-sizing: border-box;
        font-size: 25px;
        font-weight: 800;
        width: 500px;
        display: flex;
        align-items: flex-end;
        height: 60px;
      }

      .info {
        height: 190px;
        padding: 25px 0;
        width: 540px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-content: space-between;
        flex-wrap: wrap;

        p {
          margin-bottom: 10px;
          box-sizing: border-box;
        }
      }
      .borders {
        height: 50px;
        box-sizing: border-box;
        width: 540px;
      }
    }
  }
`;

export default Container;
