import styled from "styled-components";

const SectionTitle = styled.h3`
  font-size: 25px;
  font-weight: bold;
  color: ${props => (props.white ? "white" : "black")};
  text-align: ${props => (props.centered ? "center" : "")};
`;

export default SectionTitle;
