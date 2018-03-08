import styled from "styled-components";
import IMAGES from "assets/images";

const Slanted = styled.div`
  height: ${props => (props.long ? "1000px" : "500px")};
  background-repeat: no-repeat;
  margin-top: -50px;
  background: ${props => (props.colored ? "#EFF5F8" : "white")};
  background-image: url(${props => props.background});
  padding: 30px;
  clip-path: polygon(0 8%, 100% 0, 100% 92%, 0 100%);
  display: flex;
  align-items: center;
`;

export default Slanted;
