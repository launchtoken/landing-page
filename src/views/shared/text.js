import styled from "styled-components";

const Text = styled.p`
  color: ${props =>
    props.primary ? "#3B24C2" : props.white ? "white" : "black"};
  font-size: ${props => props.size || "15px"};
  font-weight: ${props => props.weight || 300};
  text-align: ${props => (props.centered ? "center" : "")};
`;

export default Text;
