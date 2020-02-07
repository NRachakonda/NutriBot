import React from "react";

function SpeechBubble({ text, cssClass, bubbleTextClass }) {
  if (text) {
    return (
      <div className={cssClass}>
        <div className={bubbleTextClass}>{text}</div>
      </div>
    );
  }
  return null;
}

export default SpeechBubble;
