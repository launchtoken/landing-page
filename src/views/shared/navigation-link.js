import React from "react";
import styled from "styled-components";
import * as Scroll from "react-scroll";

const LinkText = styled.p`
  color: white;
  padding: 15px;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
`;

const NavigationLink = ({ to, children }) => (
  <Scroll.Link to={to}>
    <LinkText>{children}</LinkText>
  </Scroll.Link>
);

export default NavigationLink;
