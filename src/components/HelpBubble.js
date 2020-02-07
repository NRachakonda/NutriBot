import React from "react";
import HelpBubbleText from "./HelpBubbleText.js";
import ChatBox from "./ChatBox.js";

class HelpBubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  onClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return this.state.open ? (
      <ChatBox open={() => this.onClick()} />
    ) : (
      <HelpBubbleText open={() => this.onClick()} />
    );
  }
}

export default HelpBubble;
