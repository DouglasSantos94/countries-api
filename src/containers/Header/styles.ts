import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  height: 50px;
  align-items: center;
  width: 100%;
  background-color: hsl(0, 0%, 98%);
  box-shadow: 1px 1px 2px rgba(168, 168, 168, 0.7);
`;

const Title: React.FC = styled.h1<HTMLHeadingElement>`
  font-family: "Nunito Sans";
  font-weight: 800;
  font-size: 20px;
  margin-left: 30px;
`;

export { Title, Wrapper };
