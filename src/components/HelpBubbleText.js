import React from "react";
import SpeechBubble from "./SpeechBubble";

const HelpBubbleText = ({ open }) => (
  <div onClick={open}>
    <SpeechBubble
      text="Click Here to Chat"
      cssClass="speech-bubble"
      bubbleTextClass="bubble-text"
    />
  </div>
);

export default HelpBubbleText;
