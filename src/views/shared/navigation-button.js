import styled from "styled-components";

const NavigationButton = styled.button`
  margin: 0px 5px;
  font-size: 12px;
  cursor: pointer;
  height: 38px;
  width: 144px;
  border-width: 2px;
  border-style: solid;
  border-color: #6a48fd;
  border-radius: 25px;
  background: ${props =>
    props.highlighted
      ? "linear-gradient(270deg, #3314BA 0%, #6A48FD 100%)"
      : "#270668"};
  color: white;
  box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.2);
  &:focus {
    outline: 0;
  }
`;

export default NavigationButton;
