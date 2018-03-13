import React from "react";
import styled from "styled-components";
import Text from "views/shared/text";
import Slanted from "views/homepage/slanted";
import PaddedContainer from "views/homepage/padded-container";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 115px 0;
  }
`;

const LeftGraphic = styled.div`
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  min-width: 413px;
  height: 300px;
  display: ${props => (props.imageOnLeft ? "initial" : "none")};
  @media (max-width: 768px) {
    display: initial;
  }
`;

const RightGraphic = styled.div`
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  min-width: 413px;
  height: 300px;
  display: ${props => (!props.imageOnLeft ? "initial" : "none")};
  @media (max-width: 768px) {
    display: none;
    min-width: 365px;
    height: 235px;
  }
`;

const Icon = styled.img.attrs({
  src: props => props.src
})`
  width: 34px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 25px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const SectionTitle = styled.h3`
  font-size: 25px;
  font-weight: bold;
  color: ${props => (props.white ? "white" : "black")};
  text-align: ${props => (props.centered ? "center" : "")};

  @media (max-width: 768px) {
    text-align: center;
    margin-top: 0;
  }
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
        <LeftGraphic src={graphic} imageOnLeft={imageOnLeft} />
        <Description>
          <Icon src={icon} />
          <SectionTitle>{title}</SectionTitle>
          <Text>{description}</Text>
        </Description>
        <RightGraphic src={graphic} imageOnLeft={imageOnLeft} />
      </Wrapper>
    </PaddedContainer>
  </Slanted>
);

export default Feature;
