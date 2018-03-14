import React from "react";
import styled from "styled-components";
import IMAGES from "assets/images";

const Wrapper = styled.div`
  height: 335px;
  clip-path: polygon(0 8%, 100% 0, 100% 100%, 0 100%);
  background-image: url(${IMAGES.FOOTER_BACKGROUND});
  display: flex;
  padding-top: 50px;
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
  font-size: 15px;
  font-weight: bold;
  color: white;
  text-align: center;
`;

const Disclaimer = styled.p`
  font-size: 10px;
  color: #9088ef;
  text-align: center;
`;

const Logo = styled.img.attrs({
  src: props => props.src
})`
  width: 40px;
  height: 40px;
`;

const Link = styled.a.attrs({
  href: props => props.href,
  target: "_blank"
})`
  margin: 0 5px;
`;

const SocialMedia = ({ href, src }) => (
  <Link href={href}>
    <Logo src={src} />
  </Link>
);

const Media = () => (
  <Wrapper>
    <Title>STALK US!</Title>
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
);

export default Media;
