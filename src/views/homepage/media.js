import React from "react";
import styled from "styled-components";
import IMAGES from "assets/images";
import Slanted from "views/homepage/slanted";
import PaddedContainer from "views/homepage/padded-container";

const Wrapper = styled.div`
  height: 100%;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const Title = styled.h3`
  font-size: 25px;
  font-weight: bold;
  color: black;
  text-align: center;
`;

const Logo = styled.div`
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 145px;
  height: 40px;
  margin: 0 10px;
`;

const LogoWrapper = styled.div`
  width: 200px;
`;

const Company = ({ src }) => (
  <LogoWrapper>
    <Logo src={src} />
  </LogoWrapper>
);

const Media = () => (
  <Slanted>
    <PaddedContainer>
      <Wrapper>
        <Title>FEATURED BY</Title>
        <Row>
          <Company src={IMAGES.MEDIA_NBC} />
          <Company src={IMAGES.MEDIA_SINGULARITY} />
          <Company src={IMAGES.MEDIA_TECH_IN_ASIA} />
          <Company src={IMAGES.MEDIA_FASTCOMPANY} />
        </Row>
        <Row>
          <Company src={IMAGES.MEDIA_TECH_IN_ASIA} />
          <Company src={IMAGES.MEDIA_FASTCOMPANY} />
        </Row>
      </Wrapper>
    </PaddedContainer>
  </Slanted>
);

export default Media;
