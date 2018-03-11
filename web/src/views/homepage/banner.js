import React from "react";
import styled from "styled-components";
import Header from "views/shared/header";
import Logo from "views/shared/logo";
import Navigation from "views/shared/navigation";
import NavigationLink from "views/shared/navigation-link";
import NavigationButton from "views/shared/navigation-button";
import BannerSection from "views/homepage/banner-section";
import EmailSignup from "views/homepage/email-signup";
import Tagline from "views/homepage/tagline";
import Caption from "views/homepage/caption";
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
`;

const Banner = () => (
  <Wrapper>
    <Header>
      <Logo />
      <Navigation>
        <NavigationLink href="www.google.com">HOME</NavigationLink>
        <NavigationLink href="www.google.com">ABOUT</NavigationLink>
        <NavigationLink href="www.google.com">TEAM</NavigationLink>
        <NavigationLink href="www.google.com">ROADMAP</NavigationLink>
        <NavigationLink href="www.google.com">CONTACT</NavigationLink>
        <NavigationButton href="www.google.com">WHITEPAPER</NavigationButton>
        <NavigationButton highlighted href="www.google.com">
          REGISTER
        </NavigationButton>
      </Navigation>
    </Header>
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
