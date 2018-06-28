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
            "Decentralizing the road to decentralization. Seamlessly whitelist, KYC, and fundraise all on top of Ethereum's decentralized protocol."
          }
        />
        <Feature
          coloredBg={true}
          imageOnLeft
          graphic={IMAGES.FEATURE_GRAPHIC_2}
          title={"Easy, Powerful, Drag & Drop Website Builder"}
          description={
            "Choose from an array of professionally designed templates and customize the look and feel to match your business. Host on your own domain and build a brand."
          }
        />
        <Feature
          graphic={IMAGES.FEATURE_GRAPHIC_3}
          title={"Decentralized & Secure"}
          description={
            "Benefit from the checks and balances of the Launch Token protocol. Allow your investors to enjoy the comfort of transparency and built-in scam protection."
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
