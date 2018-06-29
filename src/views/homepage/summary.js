import React from "react";
import styled from "styled-components";
import IMAGES from "assets/images";
import Slanted from "views/homepage/slanted";
import PaddedContainer from "views/homepage/padded-container";
import * as Scroll from "react-scroll";
import { SECTIONS } from "config";

const Wrapper = styled.div`
  display: flex;
  padding: 0 100px 100px;
  flex: 1;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    padding: 0 30px 100px;
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

const Feature = styled.div`
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  width: 300px;
  height: 400px;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Icon = styled.div`
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-top 41.5px;
  margin-bottom: 34px;
  min-width: 97px;
  min-height: 75px;
`;

const Title = styled.p`
  margin: 0;
  margin-bottom: 20px;
  color: #1f3052;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;

const Description = styled.p`
  font-size: 14px;
  text-align: center;
  padding: 0 20px;
`;

const Heading = styled.h3`
  color: #1f3052;
  font-size: 36px;
  font-weight: 500;
  padding-top: 50px;
  text-align: ${props => (props.centered ? "center" : "")};
`;

const Caption = styled.h4`
  font-size: 18px;
  font-weight: normal;
  text-align: center;
  padding: 0 370px;
  @media only screen and (max-width: 768px) {
    padding: 0;
  }
`;

const Instructions = () => (
  <Scroll.Element name={SECTIONS.ABOUT}>
    <Slanted colored>
      <Wrapper>
        <Heading centered>Launch Token Features</Heading>
        <Caption>
          Focus on marketing and building your product while our cross browser,
          responsive platform does the heavy lifting managing your token
          crowdsale in a trustless manner.
        </Caption>
        <Section>
          <Feature>
            <Icon src={IMAGES.SUMMARY_ICON_1} />
            <Title>Custom Domains</Title>
            <Description>
              Point your DNS to our IP and that's it! We host your websites on
              battled-tested infrastructure to ensure reliability.
            </Description>
          </Feature>
          <Feature>
            <Icon src={IMAGES.SUMMARY_ICON_2} />
            <Title>Built on Blockchain</Title>
            <Description>
              Allow your investors to trust in the crowdsale process by using
              Launch Token's secure protocol.
            </Description>
          </Feature>
          <Feature>
            <Icon src={IMAGES.SUMMARY_ICON_3} />
            <Title>Hook Into Your Own API</Title>
            <Description>
              Add webhooks that fire on important events for analytics or
              connect to services like Mailchimp.
            </Description>
          </Feature>
          <Feature>
            <Icon src={IMAGES.SUMMARY_ICON_4} />
            <Title>Customer Support</Title>
            <Description>
              We are committed to creating the most complete ICO platform, and
              love feedback from users in how we can improve our protocol!
            </Description>
          </Feature>
        </Section>
      </Wrapper>
    </Slanted>
  </Scroll.Element>
);

export default Instructions;
