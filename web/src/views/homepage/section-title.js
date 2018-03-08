import styled from "styled-components";

const SectionTitle = styled.h3`
  font-size: 25px;
  font-weight: bold;
  text-align: ${props => (props.centered ? "center" : "")};
`;

export default SectionTitle;
