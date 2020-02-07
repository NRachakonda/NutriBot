import React from "react";
import "./ChatBox.css";
import SpeechBubble from "./SpeechBubble";
import axios from "axios";

class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bubbles: [
        {
          type: "question",
          text:
            "Welcome to NutriBot! Enter the quantity and name of the item you want to know about!"
        }
      ]
    };
  }

  onEnterPress = e => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      console.log(e);
      e.preventDefault();

      let foodItem = e.target.value;

      let foodItems = foodItem.split(",");

      let updatedBubbles = [
        ...this.state.bubbles,
        { type: "question", text: foodItem },
        { type: "answer", text: "Searching ..." }
      ];

      this.setState({ bubbles: updatedBubbles });

      //make a call to API here to get the info about the food
      const APP_ID = process.env.REACT_APP_APP_ID;
      const APP_KEY = process.env.REACT_APP_APP_KEY;
      const API_URL =
        "https://api.edamam.com/api/nutrition-details?app_id=" +
        APP_ID +
        "&app_key=" +
        APP_KEY;
      console.log(API_URL);
      console.log(foodItems);
      axios
        .post(API_URL, {
          title: "Some Random Recipe",
          ingr: foodItems
        })
        .then(response => {
          // handle success
          console.log(response);
          let responseText =
            foodItem + " contains " + response.data.calories + " Calories ";

          console.log(responseText);
          updatedBubbles.pop();
          updatedBubbles = [
            ...updatedBubbles,
            { type: "answer", text: responseText }
          ];
          this.setState({ bubbles: updatedBubbles });
          console.log(updatedBubbles);
        })
        .catch(error => {
          console.log(error);
          updatedBubbles.pop();
          updatedBubbles = [
            ...updatedBubbles,
            { type: "answer", text: "Sorry, I don't know about that one!" }
          ];
          this.setState({ bubbles: updatedBubbles });
        });

      e.target.value = "";
    }
  };

  render() {
    return (
      <div className="box">
        <div className="closeContainer">
          <div className="NutriBotTitle">NutriBot!</div>
          <div id="mdiv" onClick={this.props.open}>
            <div className="mdiv">
              <div className="md"></div>
            </div>
          </div>
        </div>
        <div className="internalBox">
          {this.state.bubbles.map(bubble => {
            if (bubble.type === "question") {
              return (
                <SpeechBubble
                  text={bubble.text}
                  cssClass="speech-bubble"
                  bubbleTextClass="bubble-text-chat"
                />
              );
            } else
              return (
                <SpeechBubble
                  text={bubble.text}
                  cssClass="speech-bubble-answer"
                  bubbleTextClass="bubble-text-chat"
                />
              );
          })}
        </div>
        <div className="textInput">
          <textarea
            placeholder="Type here..."
            rows="4"
            cols="70"
            onKeyDown={this.onEnterPress}
          ></textarea>
        </div>
      </div>
    );
  }
}

export default ChatBox;
