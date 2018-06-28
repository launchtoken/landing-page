import styled from "styled-components";

const NavigationButton = styled.button`
  margin: 0px 5px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  width: 150px;
  height: 50px;
  background-image: linear-gradient(108deg, #3023ae, #c86dd7);
  color: white;
  &:focus {
    outline: 0;
  }
`;

export default NavigationButton;
