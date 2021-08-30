import styled from "styled-components";

const Container = styled.div`
  font-family: "Nunito Sans", sans-serif;
  font-size: 14px;
  width: 100vw;
  height: 600px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-weight: 600;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 280px;
    width: 70%;

    img {
      width: 380px;
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
      }
      .borders {
        height: 110px;
        box-sizing: border-box;
        display: flex;
        width: 540px;

        span {
          width: 100%;
          display: flex;
          flex-wrap: nowrap;
          justify-content: flex-start;
          align-items: flex-start;
          box-sizing: border-box;

          p {
            width: 25%;
          }

          ul {
            display: flex;
            width: 75%;
            flex-wrap: wrap;
            justify-content: space-evenly;
          }
          a {
            text-decoration: none;
            color: inherit;
          }
          li {
            font-weight: normal;
            padding: 5px;
            margin: 5px 10px;
            box-shadow: 1px 1px 2px rgba(231, 231, 231, 0.7),
              -1px -1px 2px rgba(231, 231, 231, 0.7);
          }
        }
      }
    }
  }
`;

export default Container;
