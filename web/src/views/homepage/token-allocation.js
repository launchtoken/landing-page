import React from "react";
import styled from "styled-components";
import IMAGES from "assets/images";
import Text from "views/shared/text";

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

const Graphic = styled.img.attrs({
  src: props => props.src
})`
  width: 600px;
  height: 380px;
`;

const Roadmap = () => (
  <Wrapper>
    <Title>Launch Token In Numbers</Title>
    <Text centered size="13px">
      Below is a breakdown of the sources of investment as well as the planned
      usage of the funds.
    </Text>
    <ImageContainer>
      <Graphic src={IMAGES.TOKEN_ALLOCATION_GRAPH} />
    </ImageContainer>
  </Wrapper>
);

export default Roadmap;
