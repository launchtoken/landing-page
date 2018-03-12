import React from "react";
import styled from "styled-components";
import IMAGES from "assets/images";
import Slanted from "views/homepage/slanted";
import PaddedContainer from "views/homepage/padded-container";
import * as Scroll from "react-scroll";
import { SECTIONS } from "config";

const Wrapper = styled.div`
  height: 100%;
`;

const Title = styled.h3`
  font-size: 25px;
  font-weight: bold;
  color: white;
  margin: 0 0 50px;
  text-align: center;
`;

const Icon = styled.img.attrs({
  src: props => props.src
})`
  width: 100%;
`;

const Roadmap = () => (
  <Scroll.Element name={SECTIONS.ROADMAP}>
    <Slanted medium background={IMAGES.ROADMAP_BACKGROUND}>
      <PaddedContainer>
        <Wrapper>
          <Title>Roadmap</Title>
          <Icon src={IMAGES.ROADMAP_SCHEDULE} />
        </Wrapper>
      </PaddedContainer>
    </Slanted>
  </Scroll.Element>
);

export default Roadmap;
