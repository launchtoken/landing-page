import React from "react";
import styled from "styled-components";

import Header from "views/shared/header";
import NavigationButton from "views/shared/navigation-button";
import EmailSignup from "views/homepage/email-signup";
import Text from "views/shared/text";
import IMAGES from "assets/images";

const Wrapper = styled.div`
  position: relative;
  height: 425px;
  background-repeat: no-repeat;
  padding: 140px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    padding: 75px 30px 84px 30px;
    flex-direction: column;
    height: 600px;
  }
`;

const BannerSection = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    width: auto;
  }
`;

const Tagline = styled.h1`
  color: #1f3052;
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 0px;
  padding-right: 20px;

  @media only screen and (max-width: 768px) {
    font-size: 31px;
    padding-right: 0;
    text-align: center;
  }
`;

const Caption = styled.p`
  color: #1f3052;
  font-size: 18px;
  line-height: 25px;
  padding-right: 92px;
  margin-bottom: 35px;

  @media only screen and (max-width: 768px) {
    font-size: 11px;
    padding-right: 0;
    text-align: center;
  }
`;

const FormWrapper = styled.div`
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin-bottom: 32px;
  }
`;

const Graphic = styled.div`
  background-image: url(${IMAGES.BANNER_GRAPHIC});
  height: 470px;
  width: 698px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media only screen and (max-width: 768px) {
    margin-top: 30px;
    height: 339px;
    width: 339px;
  }
`;

const VideoButtonWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const Floater = styled.div`
  position: absolute;
  bottom: 20px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Banner = () => (
  <Wrapper>
    <BannerSection>
      <Tagline>Launch Your Own ICO Crowdsale</Tagline>
      <Caption>
        Safe, secure and investor-friendly crowdsales run on a platform built with the future of ICOs in mind.
      </Caption>
      <FormWrapper>
        <EmailSignup />
      </FormWrapper>
    </BannerSection>
    <BannerSection>
      <Graphic />
    </BannerSection>
    <Floater>
      <Text white size="10px">
        LEARN MORE
      </Text>
      <img src={IMAGES.BANNER_SCROLL} width="13" height="26" />
    </Floater>
  </Wrapper>
);

export default Banner;
