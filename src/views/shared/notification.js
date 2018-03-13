import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #040134;
  height: 50px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Text = styled.span`
  text-align: center;
  font-size: 12px;
  color: white;
`;

const Notification = ({ text }) => (
  <Wrapper>
    <Text>{text}</Text>
  </Wrapper>
);

export default Notification;
