import styled from "styled-components";

const TextInput = styled.input.attrs({
  type: "text",
  name: "EMAIL",
  placeholder: props => props.placeholder
})`
  font-size: 13px;
  border-radius: 25px;
  margin-right: 5px;
  border: none;
  width: 232px;
  padding: 18px 32px;
  background-color: #ffffff;
`;

export default TextInput;
