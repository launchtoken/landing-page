import styled from "styled-components";

const Slanted = styled.div`
  min-height: ${props =>
    props.long ? "1000px" : props.medium ? "700px" : "550px"};
  margin-top: ${props =>
    props.long ? "-100px" : props.medium ? "-81px" : "-50px"};
  background: ${props => (props.colored ? "#EFF5F8" : "white")};
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  clip-path: polygon(0 40px, 100% 0, 100% 100%, 0 100%);
  display: flex;
  align-items: center;
`;

export default Slanted;
