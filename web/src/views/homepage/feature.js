import React from "react";
import styled from "styled-components";
import SectionTitle from "views/homepage/section-title";
import Text from "views/shared/text";
import Slanted from "views/homepage/slanted";
import PaddedContainer from "views/homepage/padded-container";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Graphic = styled.div`
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  min-width: 413px;
  height: 300px;
`;

const Icon = styled.img.attrs({
  src: props => props.src
})`
  width: 34px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 25px;
`;

const Feature = ({
  coloredBg,
  imageOnLeft,
  graphic,
  icon,
  title,
  description
}) => (
  <Slanted colored={!!coloredBg}>
    <PaddedContainer>
      <Wrapper>
        {imageOnLeft ? <Graphic src={graphic} /> : null}
        <Description>
          <Icon src={icon} />
          <SectionTitle>{title}</SectionTitle>
          <Text>{description}</Text>
        </Description>
        {imageOnLeft ? null : <Graphic src={graphic} />}
      </Wrapper>
    </PaddedContainer>
  </Slanted>
);

export default Feature;
