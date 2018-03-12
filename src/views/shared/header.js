import React from "react";
import styled from "styled-components";
import Logo from "views/shared/logo";
import Navigation from "views/shared/navigation";
import NavigationLink from "views/shared/navigation-link";
import NavigationButton from "views/shared/navigation-button";
import { SECTIONS } from "config";

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
