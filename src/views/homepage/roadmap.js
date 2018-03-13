import React from "react";
import styled from "styled-components";
import IMAGES from "assets/images";
import Slanted from "views/homepage/slanted";
import PaddedContainer from "views/homepage/padded-container";
import * as Scroll from "react-scroll";
import { SECTIONS } from "config";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  @media only screen and (max-width: 768px) {
    padding: 125px 0;
  }
`;

const Title = styled.h3`
  font-size: 25px;
  font-weight: bold;
  color: white;
  margin: 0 0 50px;
  text-align: center;
`;

const DesktopGraphic = styled.img.attrs({
  src: props => props.src
})`
  width: 100%;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileGraphic = styled.img.attrs({
  src: props => props.src
})`
  width: 265px;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Roadmap = () => (
  <Scroll.Element name={SECTIONS.ROADMAP}>
    <Slanted medium background={IMAGES.ROADMAP_BACKGROUND}>
      <PaddedContainer>
        <Wrapper>
          <Title>Roadmap</Title>
          <DesktopGraphic src={IMAGES.ROADMAP_SCHEDULE_DESKTOP} />
          <MobileGraphic src={IMAGES.ROADMAP_SCHEDULE_MOBILE} />
        </Wrapper>
      </PaddedContainer>
    </Slanted>
  </Scroll.Element>
);

export default Roadmap;
