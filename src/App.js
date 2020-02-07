import React from "react";
import "./App.css";
import HelpBubble from "./components/HelpBubble.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="welcomeText">Welcome to NutriBot!</p>
        <HelpBubble />
      </header>
    </div>
  );
}

export default App;
