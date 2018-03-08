import React from "react";
import styled from "styled-components";
import SectionTitle from "views/homepage/section-title";
import Text from "views/shared/text";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Graphic = styled.img.attrs({
  src: props => props.src
})`
  width: 530px;
  height: 300px;
`;

const Icon = styled.img.attrs({
  src: props => props.src
})`
  width: 34px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 25px;
`;

const Feature = ({ imageOnLeft, graphic, icon, title, description }) => (
  <Wrapper>
    {imageOnLeft ? <Graphic src={graphic} /> : null}
    <Description>
      <Icon src={icon} />
      <SectionTitle>{title}</SectionTitle>
      <Text>{description}</Text>
    </Description>
    {imageOnLeft ? null : <Graphic src={graphic} />}
  </Wrapper>
);

export default Feature;
