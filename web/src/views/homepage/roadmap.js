import React from "react";
import styled from "styled-components";
import IMAGES from "assets/images";
import Slanted from "views/homepage/slanted";
import PaddedContainer from "views/homepage/padded-container";

const Wrapper = styled.div`
  height: 100%;
`;

const Title = styled.h3`
  font-size: 25px;
  font-weight: bold;
  color: white;
  margin: 0 0 100px;
  text-align: center;
`;

const Icon = styled.img.attrs({
  src: props => props.src
})`
  width: 100%;
`;

const Roadmap = () => (
  <Slanted medium background={IMAGES.ROADMAP_BACKGROUND}>
    <PaddedContainer>
      <Wrapper>
        <Title>Roadmap</Title>
        <Icon src={IMAGES.ROADMAP_SCHEDULE} />
      </Wrapper>
    </PaddedContainer>
  </Slanted>
);

export default Roadmap;
