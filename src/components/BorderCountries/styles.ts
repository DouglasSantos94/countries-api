import styled from "styled-components";

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
  box-shadow: 1px 1px 2px rgba(168, 168, 168, 0.7),
    -1px -1px 2px rgba(168, 168, 168, 0.7);
`;

export { BorderButton, BordersList, BordersWrapper };
