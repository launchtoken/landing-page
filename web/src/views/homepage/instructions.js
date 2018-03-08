import React from "react";
import styled from "styled-components";
import IMAGES from "assets/images";
import Step from "views/homepage/step";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 350px;
`;

const Icon = styled.img.attrs({
  src: props => props.src
})`
  width: 130px;
`;

const Arrow = styled.img.attrs({
  src: props => props.src
})`
  width: 20%;
  margin-bottom: 100px;
`;

const Title = styled.p`
  color: #3b24c2;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
`;

const Description = styled.p`
  color: black;
  font-size: 13px;
  text-align: center;
`;

const Instructions = () => (
  <Wrapper>
    <Step>
      <Icon src={IMAGES.HOW_IT_WORKS_1} />
      <Title>STEP 1: CREATE ACCOUNT</Title>
      <Description>
        Plusieurs variations de Lorem Ipsum peuvent être trouvées ici
      </Description>
    </Step>
    <Arrow src={IMAGES.HOW_IT_WORKS_ARROW_1} />
    <Step>
      <Icon src={IMAGES.HOW_IT_WORKS_2} />
      <Title>STEP 2: DESIGN PAGE</Title>
      <Description>
        Plusieurs variations de Lorem Ipsum peuvent être trouvées ici
      </Description>
    </Step>
    <Arrow src={IMAGES.HOW_IT_WORKS_ARROW_2} />
    <Step>
      <Icon src={IMAGES.HOW_IT_WORKS_3} />
      <Title>STEP 3: PUBLISH PAGE</Title>
      <Description>
        Plusieurs variations de Lorem Ipsum peuvent être trouvées ici
      </Description>
    </Step>
  </Wrapper>
);

export default Instructions;
