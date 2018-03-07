import styled from "styled-components";

const Text = styled.p`
  color: ${props => props.color || "white"};
  font-size: ${props => props.size || 15};
  font-weight: ${props => props.weight || 300};
`;

export default Text;
