import styled from "styled-components";

const NavigationButton = styled.button`
  margin: 10px 5px 0 5px;
  font-size: 12px;
  height: 44px;
  width: 164px;
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
`;

export default NavigationButton;
