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
  font-size: 25px;
  font-weight: bold;
  color: black;
  text-align: center;
`;

const DesktopGraphic = styled.div`
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  width: 800px;
  height: 380px;

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
  <Slanted medium background={IMAGES.TOKEN_ALLOCATION_BACKGROUND}>
    <PaddedContainer>
      <Wrapper>
        <Title>Token Allocation</Title>
        <Text centered size="13px">
          Below is a breakdown of the token allocation and usage of the funds.
        </Text>
        <ImageContainer>
          <DesktopGraphic src={IMAGES.TOKEN_ALLOCATION_GRAPH_DESKTOP} />
          <MobileGraphic src={IMAGES.TOKEN_ALLOCATION_GRAPH_MOBILE} />
        </ImageContainer>
      </Wrapper>
    </PaddedContainer>
  </Slanted>
);

export default Roadmap;
