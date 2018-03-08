import styled from "styled-components";
import IMAGES from "assets/images";

const Slanted = styled.div`
  height: 500px;
  background-repeat: no-repeat;
  background: ${props => (props.colored ? "#EFF5F8" : "white")};
  padding: 30px;
  clip-path: polygon(0 8%, 100% 0, 100% 92%, 0 100%);
  display: flex;
  align-items: center;
`;

export default Slanted;
