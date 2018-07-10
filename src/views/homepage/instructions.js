import React from "react";
import styled from "styled-components";
import IMAGES from "assets/images";
import Slanted from "views/homepage/slanted";
import PaddedContainer from "views/homepage/padded-container";
import * as Scroll from "react-scroll";
import { SECTIONS } from "config";

const Wrapper = styled.div`
  display: flex;
  padding: 0 30px 100px 30px;
  flex: 1;
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
  width: 300px;
  min-height: 300px;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.div`
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  min-width: 150px;
  min-height: 150px;
`;

const Title = styled.p`
  color: #1f3052;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;

const Description = styled.p`
  font-size: 14px;
  text-align: center;
  padding: 3px 10px;
`;

const Heading = styled.h3`
  color: #1f3052;
  font-size: 36px;
  font-weight: 500;
  padding-top: 50px;
  text-align: ${props => (props.centered ? "center" : "")};
`;

const Instructions = () => (
  <Scroll.Element name={SECTIONS.ABOUT}>
    <Slanted colored>
      <Wrapper>
        <Heading centered>How It Works</Heading>
        <Section>
          <Step>
            <Icon src={IMAGES.HOW_IT_WORKS_1} />
            <Title>Step 1 - Create Token</Title>
            <Description>
              Create a customized token on the Launch Token platform or input an existing ERC-20 token.
            </Description>
          </Step>
          <Step>
            <Icon src={IMAGES.HOW_IT_WORKS_2} />
            <Title>Step 2 - Choose ICO Model</Title>
            <Description>
              Select from several ICO models and choose a model that meets your project team’s specific requirements.
            </Description>
          </Step>
          <Step>
            <Icon src={IMAGES.HOW_IT_WORKS_3} />
            <Title>Step 3 - Create ICO Website</Title>
            <Description>
              Choose from a selection of  professionally designed templates and instantly create a dedicated ICO campaign website.
            </Description>
          </Step>
        </Section>
      </Wrapper>
    </Slanted>
  </Scroll.Element>
);

export default Instructions;
