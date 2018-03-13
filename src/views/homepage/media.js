import React from "react";
import styled from "styled-components";
import IMAGES from "assets/images";
import Slanted from "views/homepage/slanted";
import PaddedContainer from "views/homepage/padded-container";

const Wrapper = styled.div`
  height: 100%;
  @media only screen and (max-width: 768px) {
    padding: 125px 0;
  }
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 50px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 0;
    align-items: center;
  }
`;

const Title = styled.h3`
  font-size: 25px;
  font-weight: bold;
  color: black;
  text-align: center;
`;

const Logo = styled.div`
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 145px;
  height: 40px;
  margin: 0 10px;

  @media only screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const LogoWrapper = styled.div`
  width: 200px;
`;

const TableContainer = styled.div`
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const Company = ({ src }) => (
  <LogoWrapper>
    <Logo src={src} />
  </LogoWrapper>
);

const Media = () => (
  <Slanted>
    <PaddedContainer>
      <Wrapper>
        <Title>FEATURED BY</Title>
        <TableContainer>
          <Row>
            <Company src={IMAGES.MEDIA_NBC} />
            <Company src={IMAGES.MEDIA_SINGULARITY} />
            <Company src={IMAGES.MEDIA_TECH_IN_ASIA} />
            <Company src={IMAGES.MEDIA_FASTCOMPANY} />
          </Row>
          <Row>
            <Company src={IMAGES.MEDIA_TECH_IN_ASIA} />
            <Company src={IMAGES.MEDIA_FASTCOMPANY} />
          </Row>
        </TableContainer>
      </Wrapper>
    </PaddedContainer>
  </Slanted>
);

export default Media;
