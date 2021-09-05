import styled from "styled-components";

const Button = styled.button`
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
`;

export default Button;
