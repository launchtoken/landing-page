import styled from "styled-components";
import IMAGES from "assets/images";

const Slanted = styled.div`
  height: 500px;
  background-repeat: no-repeat;
  background: ${props => props.color};
  padding: 30px;
  clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);
`;

export default Slanted;
