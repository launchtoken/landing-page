import React from "react";
import styled from "styled-components";
import IMAGES from "assets/images";
import Slanted from "views/homepage/slanted";
import PaddedContainer from "views/homepage/padded-container";

const Wrapper = styled.div`
  height: 100%;
`;

const Title = styled.h3`
  font-size: 25px;
  font-weight: bold;
  color: white;
  text-align: center;
`;

const Icon = styled.img.attrs({
  src: props => props.src
})`
  width: 50px;
`;

const Caption = styled.p`
  color: ${props => (props.white ? "white" : "black")};
  font-size: 13px;
  font-weight: bold;
  text-align: center;
`;

const Description = styled.p`
  color: ${props => (props.white ? "white" : "black")};
  font-size: 12px;
  text-align: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  margin-top: ${props => (props.higher ? "-50px" : 0)};
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props =>
    props.highlighted
      ? "linear-gradient(270deg, #3314BA 0%, #6A48FD 100%)"
      : "white"};
  border-radius: 10px;
  width: 178px;
  height: 218px;
  margin-bottom: 20px;
  padding: 15px;
`;

const Summary = () => (
  <Slanted long background={IMAGES.FEATURE_SUMMARY_BACKGROUND}>
    <PaddedContainer>
      <Wrapper>
        <Title>All The Features You'll Love</Title>
        <CardContainer>
          <Column higher>
            <Card>
              <Icon src={IMAGES.SUMMARY_EASY_TO_USE} />
              <Caption>EASY TO USE</Caption>
              <Description>
                Focus on marketing and building your product and allow us to
                manage your token crowdsale in a trustless manner.
              </Description>
            </Card>
            <Card>
              <Icon src={IMAGES.SUMMARY_RESPONSIVE} />
              <Caption>MOBILE RESPONSIVE</Caption>
              <Description>
                Browse cross browser and cross platform responsive templates and
                add / remove sections as you please.
              </Description>
            </Card>
          </Column>
          <Column>
            <Card>
              <Icon src={IMAGES.SUMMARY_DOMAIN} />
              <Caption>CUSTOM DOMAINS</Caption>
              <Description>
                Point your DNS to our IP and that's it! We host your websites on
                battled-tested infrastructure to ensure reliability.
              </Description>
            </Card>
            <Card highlighted>
              <Icon src={IMAGES.SUMMARY_API} />
              <Caption white>HOOK INTO YOUR OWN API</Caption>
              <Description white>
                Add webhooks that fire on important events for analytics or
                connect to services like Mailchimp.
              </Description>
            </Card>
          </Column>
          <Column higher>
            <Card>
              <Icon src={IMAGES.SUMMARY_TEMPLATE} />
              <Caption>ALL ON BLOCKCHAIN</Caption>
              <Description>
                Allow your investors to trust in the crowdsale process by using
                Launch Token's secure protocol.
              </Description>
            </Card>
            <Card>
              <Icon src={IMAGES.SUMMARY_SUPPORT} />
              <Caption>GREAT CUSTOMER SUPPORT</Caption>
              <Description>
                We are committed to creating the most complete ICO platform, and
                love feedback from users in how we can improve our protocol!
              </Description>
            </Card>
          </Column>
        </CardContainer>
      </Wrapper>
    </PaddedContainer>
  </Slanted>
);

export default Summary;
