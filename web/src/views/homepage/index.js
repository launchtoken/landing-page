import React, { Component } from "react";
import styled from "styled-components";
import Notification from "views/shared/notification";
import Header from "views/shared/header";
import Logo from "views/shared/logo";
import Navigation from "views/shared/navigation";
import NavigationLink from "views/shared/navigation-link";
import NavigationButton from "views/shared/navigation-button";
import Banner from "views/homepage/banner";
import BannerSection from "views/homepage/banner-section";
import EmailSignup from "views/homepage/email-signup";
import Tagline from "views/homepage/tagline";
import Caption from "views/homepage/caption";
import Text from "views/shared/text";
import Floater from "views/homepage/floater";
import Countdown from "views/homepage/countdown";
import Slanted from "views/homepage/slanted";
import SectionTitle from "views/homepage/section-title";
import Instructions from "views/homepage/instructions";
import Feature from "views/homepage/feature";
import Summary from "views/homepage/summary";
import Roadmap from "views/homepage/roadmap";
import TokenAllocation from "views/homepage/token-allocation";
import Team from "views/homepage/team";
import Media from "views/homepage/media";
import Footer from "views/shared/footer";

import IMAGES from "assets/images";

const PaddedContainer = styled.div`
  padding: 0 20%;
  width: 100%;
`;

class Homepage extends Component {
  render() {
    return (
      <div>
        <Notification>
          For investors interested in applying for the private pre-sale please
          contact our BD team at business@launchtoken.me
        </Notification>
        <Banner>
          <Header>
            <Logo />
            <Navigation>
              <NavigationLink href="www.google.com">HOME</NavigationLink>
              <NavigationLink href="www.google.com">ABOUT</NavigationLink>
              <NavigationLink href="www.google.com">TEAM</NavigationLink>
              <NavigationLink href="www.google.com">ROADMAP</NavigationLink>
              <NavigationLink href="www.google.com">CONTACT</NavigationLink>
              <NavigationButton href="www.google.com">
                WHITEPAPER
              </NavigationButton>
              <NavigationButton highlighted href="www.google.com">
                REGISTER
              </NavigationButton>
            </Navigation>
          </Header>
          <BannerSection>
            <Tagline>Create Your First ICO Landing Page</Tagline>
            <Caption>
              Launch Token allows you to create your own token and ICO crowdsale
              in minutes - without a single line of code.
            </Caption>
            <div className="separated">
              <EmailSignup />
            </div>
            <NavigationButton href="www.google.com">
              WATCH VIDEO >
            </NavigationButton>
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
        </Banner>
        <Countdown />
        <Slanted>
          <PaddedContainer>
            <SectionTitle centered>How It Works</SectionTitle>
            <Instructions />
          </PaddedContainer>
        </Slanted>
        <Slanted colored>
          <PaddedContainer>
            <Feature
              imageOnLeft
              graphic={IMAGES.FEATURE_GRAPHIC_1}
              icon={IMAGES.FEATURE_ICON_1}
              title={"Crowdsales Built on Smart Contracts"}
              description={
                "Seamlessly whitelist, KYC, and fundraise all on top of Ethereum's decentralized protocol."
              }
            />
          </PaddedContainer>
        </Slanted>
        <Slanted>
          <PaddedContainer>
            <Feature
              graphic={IMAGES.FEATURE_GRAPHIC_2}
              icon={IMAGES.FEATURE_ICON_2}
              title={"Easy, Powerful, Drag & Drop Website Builder"}
              description={
                "Choose from an array of professionally designed templates and customize the look and feel to match your business."
              }
            />
          </PaddedContainer>
        </Slanted>
        <Slanted colored>
          <PaddedContainer>
            <Feature
              imageOnLeft
              graphic={IMAGES.FEATURE_GRAPHIC_3}
              icon={IMAGES.FEATURE_ICON_3}
              title={"Decentralized & Secure"}
              description={
                "Build on top of the secure Launch Token protocol and decentralize all parts of your ICO to ensure trust in your investors."
              }
            />
          </PaddedContainer>
        </Slanted>
        <Slanted long background={IMAGES.FEATURE_SUMMARY_BACKGROUND}>
          <PaddedContainer>
            <Summary />
          </PaddedContainer>
        </Slanted>
        <Slanted medium background={IMAGES.ROADMAP_BACKGROUND}>
          <PaddedContainer>
            <Roadmap />
          </PaddedContainer>
        </Slanted>
        <Slanted medium background={IMAGES.TOKEN_ALLOCATION_BACKGROUND}>
          <PaddedContainer>
            <TokenAllocation />
          </PaddedContainer>
        </Slanted>
        <Slanted medium colored background={IMAGES.TEAM_BACKGROUND}>
          <PaddedContainer>
            <Team />
          </PaddedContainer>
        </Slanted>
        <Slanted>
          <PaddedContainer>
            <Media />
          </PaddedContainer>
        </Slanted>
        <Footer />
      </div>
    );
  }
}

export default Homepage;
