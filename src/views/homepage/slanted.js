import styled from "styled-components";

const Slanted = styled.div`
  min-height: ${props =>
    props.long ? "1000px" : props.medium ? "700px" : "550px"};
  background: ${props => (props.colored ? "#f8f9fb" : "white")};
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
`;

export default Slanted;
