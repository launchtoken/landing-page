import React from "react";
import styled from "styled-components";
import NavigationLink from "views/shared/navigation-link";
import NavigationButton from "views/shared/navigation-button";
import { SECTIONS } from "config";

import IMAGES from "assets/images";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 83px;
  justify-content: space-between;
  left: 0;
  margin: -20px 141px 0 141px;
  position: absolute;
  right: 0;
  top: 50px;
  z-index: 1;

  @media only screen and (max-width: 768px) {
    margin: -40px 0 0 0;
    padding: 0px 20px;
  }
`;

const Logo = styled.div`
  background-image: url(${IMAGES.LOGO});
  background-size: contain;
  background-repeat: no-repeat;
  height: 63px;
  width: 200px;

  @media only screen and (max-width: 768px) {
    height: 46px;
    width: 153px;
  }
`;

const Navigation = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Header = () => (
  <Wrapper>
    <Logo />
    <Navigation>
      <NavigationLink to={SECTIONS.ABOUT}>ABOUT</NavigationLink>
      <NavigationLink to={SECTIONS.TEAM}>TEAM</NavigationLink>
      <NavigationLink to={SECTIONS.ROADMAP}>ROADMAP</NavigationLink>
      <NavigationButton
        onClick={() => window.open("Launch-Token-Whitepaper.pdf")}
      >
        WHITEPAPER
      </NavigationButton>
    </Navigation>
  </Wrapper>
);

export default Header;
