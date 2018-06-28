import React from "react";
import styled from "styled-components";
import Text from "views/shared/text";
import Slanted from "views/homepage/slanted";
import PaddedContainer from "views/homepage/padded-container";

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 115px 0;
  }
`;

const LeftGraphic = styled.div`
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  min-width: 700px;
  height: 588px;
  display: ${props => (props.imageOnLeft ? "initial" : "none")};
  @media only screen and (max-width: 768px) {
    display: initial;
    min-width: 200px;
    max-width: 330px;
    height: 250px;
  }
`;

const RightGraphic = styled.div`
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  min-width: 700px;
  height: 588px;
  display: ${props => (!props.imageOnLeft ? "initial" : "none")};
  @media only screen and (max-width: 768px) {
    display: none;
    width: 365px;
    height: 235px;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 121px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const SectionTitle = styled.h3`
  font-size: 36px;
  font-weight: 500;
  text-align: ${props => (props.centered ? "center" : "")};

  @media only screen and (max-width: 768px) {
    text-align: center;
    margin-top: 0;
  }
`;

const Feature = ({ coloredBg, imageOnLeft, graphic, title, description }) => (
  <Slanted colored={!!coloredBg}>
    <Wrapper>
      <LeftGraphic src={graphic} imageOnLeft={imageOnLeft} />
      <Description>
        <SectionTitle>{title}</SectionTitle>
        <Text>{description}</Text>
      </Description>
      <RightGraphic src={graphic} imageOnLeft={imageOnLeft} />
    </Wrapper>
  </Slanted>
);

export default Feature;
