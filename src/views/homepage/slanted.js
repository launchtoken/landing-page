import styled from "styled-components";

const Slanted = styled.div`
  background: ${props => (props.colored ? "#f8f9fb" : "white")};
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
`;

export default Slanted;
