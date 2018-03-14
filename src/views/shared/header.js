import React from "react";
import styled from "styled-components";
import NavigationLink from "views/shared/navigation-link";
import NavigationButton from "views/shared/navigation-button";
import { SECTIONS } from "config";
import IMAGES from "assets/images";

const Wrapper = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  height: 83px;
  display: flex;
  margin: 15px 141px 0 141px;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  @media only screen and (max-width: 768px) {
    margin: 0;
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
      <NavigationButton href="www.google.com">WHITEPAPER</NavigationButton>
      <NavigationButton highlighted href="www.google.com">
        REGISTER
      </NavigationButton>
    </Navigation>
  </Wrapper>
);

export default Header;
