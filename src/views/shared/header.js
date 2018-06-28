import React from "react";
import styled from "styled-components";
import NavigationLink from "views/shared/navigation-link";
import NavigationButton from "views/shared/navigation-button";
import { SECTIONS } from "config";

import IMAGES from "assets/images";
import WHITEPAPER from "assets/files/Launch-Token-Whitepaper.pdf";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 103px;
  justify-content: space-between;
  padding: 0 100px;
  z-index: 1;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);

  @media only screen and (max-width: 768px) {
    margin: -40px 0 0 0;
    padding: 0px 20px;
  }
`;

const Logo = styled.div`
  background-image: url(${IMAGES.LOGO});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 50px;
  width: 208px;

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
      <NavigationLink to={SECTIONS.ABOUT}>About</NavigationLink>
      <NavigationLink to={SECTIONS.ROADMAP}>Roadmap</NavigationLink>
      <NavigationLink to={SECTIONS.TEAM}>Team</NavigationLink>
      <NavigationLink
        isExternal
        to={"https://t.me/joinchat/GyRIcxLhxjsQxw5e-wYVzw"}
      >
        Telegram
      </NavigationLink>
    </Navigation>
  </Wrapper>
);

export default Header;
