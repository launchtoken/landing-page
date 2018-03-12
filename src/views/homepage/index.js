import React, { Component } from "react";
import Notification from "views/shared/notification";
import Banner from "views/homepage/banner";
import Countdown from "views/homepage/countdown";
import Instructions from "views/homepage/instructions";
import Feature from "views/homepage/feature";
import Summary from "views/homepage/summary";
import Roadmap from "views/homepage/roadmap";
import TokenAllocation from "views/homepage/token-allocation";
import Team from "views/homepage/team";
import Media from "views/homepage/media";
import Footer from "views/shared/footer";

import IMAGES from "assets/images";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Notification>
          For investors interested in applying for the private pre-sale please
          contact our BD team at business@launchtoken.me
        </Notification>
        <Banner />
        <Countdown />
        <Instructions />
        <Feature
          coloredBg={true}
          imageOnLeft
          graphic={IMAGES.FEATURE_GRAPHIC_1}
          icon={IMAGES.FEATURE_ICON_1}
          title={"Crowdsales Built on Smart Contracts"}
          description={
            "Seamlessly whitelist, KYC, and fundraise all on top of Ethereum's decentralized protocol."
          }
        />
        <Feature
          graphic={IMAGES.FEATURE_GRAPHIC_2}
          icon={IMAGES.FEATURE_ICON_2}
          title={"Easy, Powerful, Drag & Drop Website Builder"}
          description={
            "Choose from an array of professionally designed templates and customize the look and feel to match your business."
          }
        />
        <Feature
          coloredBg={true}
          imageOnLeft
          graphic={IMAGES.FEATURE_GRAPHIC_3}
          icon={IMAGES.FEATURE_ICON_3}
          title={"Decentralized & Secure"}
          description={
            "Build on top of the secure Launch Token protocol and decentralize all parts of your ICO to ensure trust in your investors."
          }
        />
        <Summary />
        <Roadmap />
        <TokenAllocation />
        <Team />
        <Media />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
