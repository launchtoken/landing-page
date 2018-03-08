import React from "react";
import styled from "styled-components";
import IMAGES from "assets/images";

const Wrapper = styled.div`
  height: 100%;
`;

const Title = styled.h3`
  font-size: 25px;
  font-weight: bold;
  color: white;
  text-align: center;
`;

const Icon = styled.img.attrs({
  src: props => props.src
})`
  width: 50px;
`;

const Caption = styled.p`
  color: ${props => (props.white ? "white" : "black")};
  font-size: 13px;
  font-weight: bold;
  text-align: center;
`;

const Description = styled.p`
  color: ${props => (props.white ? "white" : "black")};
  font-size: 12px;
  text-align: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  margin-top: ${props => (props.higher ? "-50px" : 0)};
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props =>
    props.highlighted
      ? "linear-gradient(270deg, #3314BA 0%, #6A48FD 100%)"
      : "white"};
  border-radius: 10px;
  width: 178px;
  height: 218px;
  margin-bottom: 20px;
  padding: 15px;
`;

const Summary = () => (
  <Wrapper>
    <Title>All The Features You'll Love</Title>
    <CardContainer>
      <Column higher>
        <Card>
          <Icon src={IMAGES.SUMMARY_EASY_TO_USE} />
          <Caption>EASY TO USE</Caption>
          <Description>
            Plusieurs variations de Lorem Ipsum peuvent être trouvées ici o
            Plusieurs variations
          </Description>
        </Card>
        <Card>
          <Icon src={IMAGES.SUMMARY_RESPONSIVE} />
          <Caption>MOBILE RESPONSIVE</Caption>
          <Description>
            Plusieurs variations de Lorem Ipsum peuvent être trouvées ici o
            Plusieurs variations
          </Description>
        </Card>
      </Column>
      <Column>
        <Card>
          <Icon src={IMAGES.SUMMARY_DOMAIN} />
          <Caption>GET YOUR OWN DOMAIN NAME</Caption>
          <Description>
            Plusieurs variations de Lorem Ipsum peuvent être trouvées ici o
            Plusieurs variations
          </Description>
        </Card>
        <Card highlighted>
          <Icon src={IMAGES.SUMMARY_API} />
          <Caption white>YOU CAN ADD YOUR OWN API</Caption>
          <Description white>
            Plusieurs variations de Lorem Ipsum peuvent être trouvées ici o
            Plusieurs variations de Lorem Ipsum peuvent être trouvées ici o
          </Description>
        </Card>
      </Column>
      <Column higher>
        <Card>
          <Icon src={IMAGES.SUMMARY_TEMPLATE} />
          <Caption>AWESOME TEMPLATE DESIGNS</Caption>
          <Description>
            Plusieurs variations de Lorem Ipsum peuvent être trouvées ici o
            Plusieurs variations de Lorem Ipsum peuvent être trouvées ici o
          </Description>
        </Card>
        <Card>
          <Icon src={IMAGES.SUMMARY_SUPPORT} />
          <Caption>GREAT CUSTOMER SUPPORT</Caption>
          <Description>
            Plusieurs variations de Lorem Ipsum peuvent être trouvées ici o
            Plusieurs variations de Lorem Ipsum peuvent être trouvées ici o
          </Description>
        </Card>
      </Column>
    </CardContainer>
  </Wrapper>
);

export default Summary;
