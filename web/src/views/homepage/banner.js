import styled from "styled-components";
import IMAGES from "assets/images";

const Banner = styled.div`
  position: relative;
  height: 425px;
  background-image: url(${IMAGES.BANNER_BACKGROUND});
  background-repeat: no-repeat;
  padding: 140px;
  display: flex;
  clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);
`;

export default Banner;
