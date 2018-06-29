import React from "react";
import styled from "styled-components";
import Slanted from "views/homepage/slanted";
import IMAGES from "assets/images";

const Wrapper = styled.div`
  height: 335px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;

const Disclaimer = styled.p`
  font-size: 14px;
  text-align: center;
`;

const Logo = styled.img.attrs({
  src: props => props.src
})`
  width: 50px;
  height: 50px;
`;

const Link = styled.a.attrs({
  href: props => props.href,
  target: "_blank"
})`
  margin: 0 15px;
  @media only screen and (max-width: 768px) {
    margin: 0 6px;
  }
`;

const SocialMedia = ({ href, src }) => (
  <Link href={href}>
    <Logo src={src} />
  </Link>
);

const Media = () => (
  <Slanted colored>
    <Wrapper>
      <Title>Shoot across the cosmos with us!</Title>
      <Row>
        <SocialMedia
          href={"https://www.facebook.com/launchtoken/"}
          src={IMAGES.FOOTER_FACEBOOK}
        />
        <SocialMedia
          href={"https://twitter.com/launchtoken_ico"}
          src={IMAGES.FOOTER_TWITTER}
        />
        <SocialMedia
          href={"https://www.linkedin.com/company/launch-token/"}
          src={IMAGES.FOOTER_LINKEDIN}
        />
        <SocialMedia
          href={"https://t.me/joinchat/GyRIcxLhxjsQxw5e-wYVzw"}
          src={IMAGES.FOOTER_TELEGRAM}
        />
        <SocialMedia
          href={"https://github.com/launchtoken"}
          src={IMAGES.FOOTER_GITHUB}
        />
        <SocialMedia
          href={"https://medium.com/launch-token"}
          src={IMAGES.FOOTER_MEDIUM}
        />
      </Row>
      <Disclaimer>© 2018 Launch Token All rights reserved.</Disclaimer>
    </Wrapper>
  </Slanted>
);

export default Media;
