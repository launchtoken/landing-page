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
  min-height: 350px;
  @media only screen and (max-width: 768px) {
    padding-top: 140px;
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 35px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    min-height: 350px;
  }
`;

const Step = styled.div`
  display: flex;
  width: 288px;
  min-height: 300px;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.div`
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  min-width: 130px;
  min-height: 110px;
`;

const Arrow = styled.img.attrs({
  src: props => props.src
})`
  width: 20%;
  margin-bottom: 100px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.p`
  color: #3b24c2;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
`;

const Description = styled.p`
  color: black;
  font-size: 13px;
  text-align: center;
`;

const Heading = styled.h3`
  font-size: 25px;
  font-weight: bold;
  color: ${props => (props.white ? "white" : "black")};
  text-align: ${props => (props.centered ? "center" : "")};
`;

const Instructions = () => (
  <Scroll.Element name={SECTIONS.ABOUT}>
    <Slanted colored>
      <PaddedContainer>
        <Wrapper>
          <Heading centered>How It Works</Heading>
          <Section>
            <Step>
              <Icon src={IMAGES.HOW_IT_WORKS_1} />
              <Title>STEP 1: CREATE TOKEN</Title>
              <Description>
                Create a new token on the Launch Token platform by filling out a
                simple form, or input an existing ERC-20 token.
              </Description>
            </Step>
            <Arrow src={IMAGES.HOW_IT_WORKS_ARROW_1} />
            <Step>
              <Icon src={IMAGES.HOW_IT_WORKS_2} />
              <Title>STEP 2: DESIGN PAGE</Title>
              <Description>
                Select from several ICO models, and choose from professionally
                designed website templates.
              </Description>
            </Step>
            <Arrow src={IMAGES.HOW_IT_WORKS_ARROW_2} />
            <Step>
              <Icon src={IMAGES.HOW_IT_WORKS_3} />
              <Title>STEP 3: LAUNCH</Title>
              <Description>
                Start fundraising using Launch Token's decentralized smart
                contracts to manage your entire crowdsale!
              </Description>
            </Step>
          </Section>
        </Wrapper>
      </PaddedContainer>
    </Slanted>
  </Scroll.Element>
);

export default Instructions;
