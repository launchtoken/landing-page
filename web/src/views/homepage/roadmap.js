import React from "react";
import styled from "styled-components";
import IMAGES from "assets/images";

const Wrapper = styled.div`
  height: 100%;
`;

const Title = styled.h3`
  font-size: 25px;
  font-weight: bold;
  color: white;
  margin-bottom: 100px;
  text-align: center;
`;

const Icon = styled.img.attrs({
  src: props => props.src
})`
  width: 100%;
`;

const Roadmap = () => (
  <Wrapper>
    <Title>Roadmap</Title>
    <Icon src={IMAGES.ROADMAP_SCHEDULE} />
  </Wrapper>
);

export default Roadmap;
