import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -120px;
  left: 0;
  right: 0;
  width: 450px;
  height: 130px;
  margin: auto;
  z-index: 1;
  background: #140f30;

  @media only screen and (max-width: 768px) {
    top: -76px;
    width: 405px;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const Title = styled.h3`
  margin-bottom: 0;
  font-size: 13px;
  font-weight: bold;
  color: white;
  text-align: center;
`;

const TimeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TimeSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const TimeValue = styled.p`
  font-size: 80px;
  font-family: "Digital", sans-serif;
  color: white;
  margin: 0;
`;

const TimeUnit = styled.p`
  font-size: 10px;
  color: #9289ef;
  font-weight: bold;
  text-align: center;
  margin: 0;
`;

const Colon = styled.p`
  font-size: 80px;
  color: white;
  font-family: "Digital", sans-serif;
  margin: 0 3px;
  align-self: flex-start;
`;

const Countdown = () => (
  <Wrapper>
    <Container>
      <Title>LAUNCHING IN:</Title>
      <TimeWrapper>
        <TimeSection>
          <TimeValue>12</TimeValue>
          <TimeUnit>DAYS</TimeUnit>
        </TimeSection>
        <Colon>:</Colon>
        <TimeSection>
          <TimeValue>36</TimeValue>
          <TimeUnit>HOURS</TimeUnit>
        </TimeSection>
        <Colon>:</Colon>
        <TimeSection>
          <TimeValue>59</TimeValue>
          <TimeUnit>MINS</TimeUnit>
        </TimeSection>
      </TimeWrapper>
    </Container>
  </Wrapper>
);

export default Countdown;
