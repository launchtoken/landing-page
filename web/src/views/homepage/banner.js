import styled from "styled-components";
import IMAGES from "assets/images";

const Banner = styled.div`
  height: 512px;
  background-image: url(${IMAGES.BANNER_BACKGROUND});
  background-repeat: no-repeat;
  padding: 140px;
  display: flex;
`;

export default Banner;
