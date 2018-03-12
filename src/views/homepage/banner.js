import React from "react";
import styled from "styled-components";
import NavigationButton from "views/shared/navigation-button";
import BannerSection from "views/homepage/banner-section";
import EmailSignup from "views/homepage/email-signup";
import Text from "views/shared/text";
import Floater from "views/homepage/floater";
import IMAGES from "assets/images";

const Wrapper = styled.div`
  position: relative;
  height: 425px;
  background-image: url(${IMAGES.BANNER_BACKGROUND});
  background-repeat: no-repeat;
  padding: 140px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    padding: 75px 30px 0 30px;
  }
`;

const Tagline = styled.h1`
  color: white;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 0px;
  padding-right: 20px;

  @media only screen and (max-width: 768px) {
    font-size: 31px;
    padding-right: 0;
    text-align: center;
  }
`;

const Caption = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 500;
  line-height: 25px;
  padding-right: 92px;
  margin-bottom: 35px;

  @media only screen and (max-width: 768px) {
    font-size: 11px;
    padding-right: 0;
    text-align: center;
  }
`;

const Banner = () => (
  <Wrapper>
    <BannerSection>
      <Tagline>Create Your First ICO Landing Page</Tagline>
      <Caption>
        Launch Token allows you to create your own token and ICO crowdsale in
        minutes - without a single line of code.
      </Caption>
      <div className="separated">
        <EmailSignup />
      </div>
      <NavigationButton href="www.google.com">WATCH VIDEO ></NavigationButton>
    </BannerSection>
    <BannerSection>
      <img src={IMAGES.BANNER_GRAPHIC} width="500" height="432" />
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
