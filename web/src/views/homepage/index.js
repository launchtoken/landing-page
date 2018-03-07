import React, { Component } from "react";
import Notification from "views/shared/notification";
import Header from "views/shared/header";
import Logo from "views/shared/logo";
import Navigation from "views/shared/navigation";
import NavigationLink from "views/shared/navigation-link";
import NavigationButton from "views/shared/navigation-button";
import Banner from "views/homepage/banner";
import BannerSection from "views/homepage/banner-section";
import Tagline from "views/homepage/tagline";
import Caption from "views/homepage/caption";
import TextInput from "views/shared/text-input";

import IMAGES from "assets/images";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Notification>
          Invests in Unsplash -- To create the new currency for photography.
          Learn More
        </Notification>
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
        <Banner>
          <BannerSection>
            <Tagline>Create Your Stunning Website</Tagline>
            <Caption>
              Launch Token allows you to create beautiful ICO landing pages in
              minutes. It's drag and drop.
            </Caption>
            <TextInput placeholder="Email address" />
          </BannerSection>
          <BannerSection>
            <img src={IMAGES.BANNER_GRAPHIC} width="654" height="565" />
          </BannerSection>
        </Banner>
      </div>
    );
  }
}

export default Homepage;
