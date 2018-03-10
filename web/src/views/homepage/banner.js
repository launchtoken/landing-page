import styled from "styled-components";
import IMAGES from "assets/images";

const Banner = styled.div`
  position: relative;
  height: 425px;
  background-image: url(${IMAGES.BANNER_BACKGROUND});
  background-repeat: no-repeat;
  padding: 140px;
  display: flex;
  justify-content: space-between;
`;

export default Banner;
