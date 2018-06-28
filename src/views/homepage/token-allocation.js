import React from "react";
import styled from "styled-components";
import IMAGES from "assets/images";
import Text from "views/shared/text";
import Slanted from "views/homepage/slanted";
import PaddedContainer from "views/homepage/padded-container";

const Wrapper = styled.div`
  height: 100%;
  @media only screen and (max-width: 768px) {
    padding: 125px 0;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: 36px;
  font-weight: 500;
  text-align: center;
`;

const Caption = styled.h4`
  font-size: 18px;
  font-weight: normal;
  text-align: center;
  padding: 0 370px;
  margin-bottom: 60px;
`;

const DesktopGraphic = styled.div`
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 570px;
  height: 523px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileGraphic = styled.div`
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  width: 335px;
  height: 800px;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Roadmap = () => (
  <Slanted colored>
    <Wrapper>
      <Title>Token Allocation</Title>
      <Caption>
        Below is a breakdown of the token allocation and usage of the funds.
      </Caption>
      <ImageContainer>
        <DesktopGraphic src={IMAGES.TOKEN_ALLOCATION_GRAPHIC_1} />
        <DesktopGraphic src={IMAGES.TOKEN_ALLOCATION_GRAPHIC_2} />
      </ImageContainer>
    </Wrapper>
  </Slanted>
);

export default Roadmap;
