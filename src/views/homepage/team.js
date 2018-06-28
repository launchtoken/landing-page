import React from "react";
import styled from "styled-components";
import IMAGES from "assets/images";
import * as Scroll from "react-scroll";
import { SECTIONS } from "config";
import Slider from "react-slick";
import Carousel from "nuka-carousel";

const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 140px;
  @media only screen and (max-width: 768px) {
    padding: 125px 0;
  }
`;

const Info = styled.div`
  display: flex;
  padding-top: 5px;
  justify-content: space-between;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    width: 180px;
  }
`;

const Member = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 750px;
  border-radius: 2px;
  @media only screen and (max-width: 768px) {
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Title = styled.h3`
  padding: 0 100px;
  font-size: 36px;
  font-weight: 500;
`;

const Name = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

const Position = styled.span`
  font-size: 18px;
  color: transparent;
  background-image: linear-gradient(127deg, #3023ae, #c86dd7);
  font-weight: 500;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LinkedInBadge = styled.img.attrs({
  src: IMAGES.TEAM_LINKEDIN
})`
  width: 30px;
  height: 30px;
`;

const ProfilePicture = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  min-width: 400px;
  min-height: 400px;
`;

const Headline = styled.div`
  display: flex;
  padding: 20px 0;
`;

const Summary = styled.p`
  font-size: 14px;
`;

const Dot = styled.button`
  width: 24px;
  height: 24px;
  outline: none;
  border-radius: 12px;
  margin: 0 12px;
  border-style: solid;
  border-width: ${props => (props.active ? "1px" : "0")};
  border-image-source: ${props =>
    props.active ? "linear-gradient(135deg, #3023ae, #c86dd7);" : ""};
  border-image-slice: 1;
  background-image: ${props =>
    props.active
      ? "linear-gradient(135deg, #3023ae, #c86dd7)"
      : "linear-gradient(to top, #e6e9f0, #eef1f5)"};
`;

const LinkedIn = ({ href }) => (
  <a href={href} target="_blank">
    <LinkedInBadge />
  </a>
);

const MemberCard = ({ picture, name, position, linkedIn, summary }) => (
  <Member>
    <ProfilePicture src={picture} />
    <Info>
      <Headline>
        <Description>
          <Name>{name}</Name>
          <Position>{position}</Position>
        </Description>
        <LinkedIn href={linkedIn} />
      </Headline>
      <Summary>{summary}</Summary>
    </Info>
  </Member>
);

const Team = () => (
  <Scroll.Element name={SECTIONS.TEAM}>
    <Wrapper>
      <Title>Team</Title>
      <Carousel
        slideWidth="420px"
        framePadding="0 100px"
        renderBottomCenterControls={props => {
          let indexes = [];

          for (let i = 0; i < props.slideCount; i++) {
            indexes.push(i);
          }

          return (
            <div className="paging-dots">
              {indexes.map(index => (
                <Dot
                  key={index}
                  onClick={props.goToSlide.bind(null, index)}
                  active={props.currentSlide === index}
                />
              ))}
            </div>
          );
        }}
      >
        <MemberCard
          picture={IMAGES.TEAM_EDMUND}
          name={"EDMUND MAI"}
          position={"CEO"}
          linkedIn={"https://www.linkedin.com/in/edmundmai"}
          summary={
            "Edmund is an experienced entrepreneur and software developer. He has spent most of his career developing software for renowned startups in NYC. He has solid experience developing blockchain-based solutions.In 2016, he co-founded a profitable incubator / software agency, where he built software using blockchain technologies like Ethereum and IOTA for ICOs firsthand. He is an expert in software products and strongly believes in lean methodologies."
          }
        />
        <MemberCard
          picture={IMAGES.TEAM_AARON}
          name={"AARON VASQUEZ"}
          position={"CTO"}
          linkedIn={"https://www.linkedin.com/in/aaronvasquezadilla"}
          summary={
            "Aaron is a seasoned engineer with vast experience in building software for large companies like Google and Uber. In addition, he also has significant experience consulting for many early stage startups. As a libertarian, he was an early adopter of bitcoin and is extremely excited to see innovative applications of blockchain technology, which he believes would reduce the need for centralized authorities."
          }
        />
        <MemberCard
          picture={IMAGES.TEAM_STEPHANIE}
          name={"STEPHANIE VERIN"}
          position={"CMO"}
          linkedIn={"https://www.linkedin.com/in/stephanie-verin-8718889b/"}
          summary={
            "Stephanie is a global marketing executive with robust experience in leading disruptive marketing programs and solutions at a number of blue chip companies like Kelloggs, Procter & Gamble, Mondelez and Nissan Corporation. She also has experience as an independent Marketing and Digital Consultant. She is also currently leading the Marketing & Strategy development at Block Collective. She is passionate about innovation and entrepreneurship and loves attending tech meet-ups all over the world."
          }
        />
        <MemberCard
          picture={IMAGES.TEAM_ROSS}
          name={"ROSS CAMPBELL"}
          position={"COO"}
          linkedIn={"https://www.linkedin.com/in/ross-campbell-058153aa/"}
          summary={
            "Ross is an agile professional with extensive experience helping large and early-stage companies with their corporate and legal needs. He has a diverse background, having practiced corporate and securities law with an international law firm with additional experience working in federal and state court. Among other critical responsibilities, Ross has helped companies manage risk over and optimize their most valued assets and transactions (>$100 million). Ross is driven to help build on the promise of ICOs and develop better models for crowdsourced funding."
          }
        />
        <MemberCard
          picture={IMAGES.TEAM_KUDA}
          name={"KUDA SAMKANGE"}
          position={"CHIEF COPYWRITER"}
          linkedIn={"https://www.linkedin.com/in/kudakwashe-samkange-40650926/"}
          summary={
            "Kuda has a diverse background that includes experience gained from working for firms in investment management, financial markets education, oil trading and a top global cryptocurrency exchange. His experience ranges from multinational global firms to early stage startups. He truly believes in blockchain and that it will play a significant role in democratizing future financial markets."
          }
        />
        <MemberCard
          picture={IMAGES.TEAM_CHRISTIAN}
          name={"CHRISTIAN TANAKA"}
          position={"CREATIVE DIRECTOR"}
          linkedIn={"https://www.linkedin.com/in/christatix/"}
          summary={
            "Christian is a design generalist who comes with extensive experience in the startup space working for companies accelerated through notable incubators such as Y-Combinator and Techstars. Those experiences span numerous different verticals consisting of healthcare, social development, AR/VR, finance, education and more."
          }
        />
        <MemberCard
          picture={IMAGES.TEAM_ALEXEY}
          name={"ALEXEY MELNICHENKO"}
          position={"VP OF ENGINEERING"}
          linkedIn={"https://www.linkedin.com/in/alexey-melnichenko/"}
          summary={
            "Alexey has been co-founding startups since the start of his career.  As an early adopter of cryptocurrencies he started out holding & trading Bitcoin and later, Ethereum.  After realizing the great potential of distributed computing in centralized environments he started developing smart contracts on technologies like Ethereum and EOS. Recently he has been helping blockchain startups architect and implement their systems."
          }
        />
        <MemberCard
          picture={IMAGES.TEAM_CONNOR}
          name={"CONNOR LARKIN"}
          position={"COMMUNITY MANAGER"}
          linkedIn={"https://www.linkedin.com/in/connor-larkin-4a7b3b148/"}
          summary={
            "Connor is an experienced growth hacker and community manager that has helped several crypto projects come to fruition. He has helped grow communities and is responsible for acquiring  over 75000+ members across Telegram, Discord, and Slack. Simultaneously, he was a quick and effective community manager that handled all project support, questions, and content creation. He is highly effective in young startups with a proven growth hacking track record."
          }
        />
        <MemberCard
          picture={IMAGES.TEAM_JONATHAN}
          name={"JONATHAN TOW"}
          position={"SENIOR DEVELOPER"}
          linkedIn={"https://www.linkedin.com/in/jonathan-tow-6399691a/"}
          summary={
            "Edmund is an experienced entrepreneur and software developer. He has spent most of his career developing software for renowned startups in NYC. He has solid experience developing blockchain-based solutions.In 2016, he co-founded a profitable incubator / software agency, where he built software using blockchain technologies like Ethereum and IOTA for ICOs firsthand. He is an expert in software products and strongly believes in lean methodologies."
          }
        />
        <MemberCard
          picture={IMAGES.TEAM_JOHN}
          name={"JOHN HARTMAN"}
          position={"ADVISOR"}
          linkedIn={"https://www.linkedin.com/in/johnhartmansd/"}
          summary={
            "John has significant experience in providing leadership to clients in technology, change management and revenue growth. A former Accenture manager, John has grown startups from founder to exit. Most recently John was the President of Piston, an award winning digital marketing agency where he was named the iMedia Agency Marketer of the Year. He currently advises startups across cryptocurrency, SaaS and healthcare."
          }
        />
        <MemberCard
          picture={IMAGES.TEAM_ESCO}
          name={"ESCO OBONG"}
          position={"TECHNICAL ADVISOR"}
          linkedIn={"https://www.linkedin.com/in/escoo/"}
          summary={
            "Esco is a senior software engineer that has experience leading teams and effectively translating product vision into code. He has worked on many products at the early stage that have since gained mainstream success including UberEats, Under30 Social Network, and NYT Times Video."
          }
        />
      </Carousel>
    </Wrapper>
  </Scroll.Element>
);

export default Team;
