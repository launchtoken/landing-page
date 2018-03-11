import React from "react";
import styled from "styled-components";
import IMAGES from "assets/images";
import Text from "views/shared/text";
import Slanted from "views/homepage/slanted";
import PaddedContainer from "views/homepage/padded-container";

const Wrapper = styled.div`
  height: 100%;
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

const Graphic = styled.div`
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  width: 600px;
  height: 380px;
`;

const Roadmap = () => (
  <Slanted medium background={IMAGES.TOKEN_ALLOCATION_BACKGROUND}>
    <PaddedContainer>
      <Wrapper>
        <Title>Launch Token In Numbers</Title>
        <Text centered size="13px">
          Below is a breakdown of the sources of investment as well as the
          planned usage of the funds.
        </Text>
        <ImageContainer>
          <Graphic src={IMAGES.TOKEN_ALLOCATION_GRAPH} />
        </ImageContainer>
      </Wrapper>
    </PaddedContainer>
  </Slanted>
);

export default Roadmap;
