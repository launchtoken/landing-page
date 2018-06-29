import React from "react";
import styled from "styled-components";
import IMAGES from "assets/images";
import Slanted from "views/homepage/slanted";
import PaddedContainer from "views/homepage/padded-container";
import * as Scroll from "react-scroll";
import { SECTIONS } from "config";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 50px 0 140px 0;
  align-items: center;
  @media only screen and (max-width: 768px) {
    padding: 125px 0;
  }
`;

const Title = styled.h3`
  font-size: 36px;
  font-weight: 500;
  text-align: center;
`;

const DesktopGraphic = styled.div`
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 374px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileGraphic = styled.div`
  background-image: url(${props => props.src});
  width: 384px;
  height: 300px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Roadmap = () => (
  <Scroll.Element name={SECTIONS.ROADMAP}>
    <Slanted>
      <Wrapper>
        <Title>Roadmap</Title>
        <DesktopGraphic src={IMAGES.ROADMAP_SCHEDULE_DESKTOP} />
        <MobileGraphic src={IMAGES.ROADMAP_SCHEDULE_DESKTOP} />
      </Wrapper>
    </Slanted>
  </Scroll.Element>
);

export default Roadmap;
