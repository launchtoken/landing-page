import React, { Component } from "react";
import IMAGES from "assets/images";
import Notification from "views/shared/notification";

class Homepage extends Component {
  render() {
    return (
      <div className="App">
        <Notification>
          Invests in Unsplash -- To create the new currency for photography.
          Learn More
        </Notification>
      </div>
    );
  }
}

export default Homepage;
