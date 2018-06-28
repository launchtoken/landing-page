import React from "react";
import styled from "styled-components";
import * as Scroll from "react-scroll";

const LinkText = styled.p`
  padding: 15px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
`;

const RegularLink = styled.a`
  outline: none;
  text-decoration: none;
  cursor: pointer;
`;

const NavigationLink = ({ to, children, isExternal }) =>
  isExternal ? (
    <LinkText>
      <RegularLink target="_blank" href={to}>
        {children}
      </RegularLink>
    </LinkText>
  ) : (
    <Scroll.Link to={to} smooth={true}>
      <LinkText>{children}</LinkText>
    </Scroll.Link>
  );

export default NavigationLink;
