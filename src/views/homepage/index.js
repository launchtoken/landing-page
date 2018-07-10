import React, { Component } from "react";
import Notification from "views/shared/notification";
import Banner from "views/homepage/banner";
import Instructions from "views/homepage/instructions";
import Feature from "views/homepage/feature";
import Summary from "views/homepage/summary";
import Roadmap from "views/homepage/roadmap";
import TokenAllocation from "views/homepage/token-allocation";
import Team from "views/homepage/team";
import Media from "views/homepage/media";
import Header from "views/shared/header";
import Footer from "views/shared/footer";

import IMAGES from "assets/images";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Instructions />
        <Feature
          graphic={IMAGES.FEATURE_GRAPHIC_1}
          title={"Crowdsales Built on Smart Contracts"}
          description={
            "Decentralizing the road to crowdfunding. Seamlessly whitelist, KYC, and fundraise on top of Ethereum's decentralized protocol. All done with minimal gatekeeping."
          }
        />
        <Feature
          coloredBg={true}
          imageOnLeft
          graphic={IMAGES.FEATURE_GRAPHIC_2}
          title={"Easy, Powerful, Drag & Drop Website Builder"}
          description={
            "Quickly deploy a campaign website without a single line of code required.Choose from a selection of customizable, professionally designed templates that can be hosted on your own domain."
          }
        />
        <Feature
          graphic={IMAGES.FEATURE_GRAPHIC_3}
          title={"Decentralized & Secure"}
          description={
            "Enjoy the benefits of running your entire crowdsale on a decentralised, robust and secure protocol. This ensures that investor  funds are safe and that the integrity of the process remains intact."
          }
        />
        <Summary />
        <Roadmap />
        <TokenAllocation />
        <Team />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
