import React from "react";
import styled from "styled-components";
import IMAGES from "assets/images";
import Text from "views/shared/text";

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

const Logo = styled.img.attrs({
  src: props => props.src
})`
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
);

export default Media;
