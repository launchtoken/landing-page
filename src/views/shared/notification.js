import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #040134;
  height: 50px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Text = styled.span`
  text-align: center;
  font-size: 12px;
  color: white;
`;

const Link = styled.a`
  color: white;
`;

const Notification = ({ children }) => (
  <Wrapper>
    <Text>
      For investors interested in applying for the private pre-sale please
      contact our BD team at{" "}
      <Link href="mailto:business@launchtoken.me">business@launchtoken.me</Link>
    </Text>
  </Wrapper>
);

export default Notification;
