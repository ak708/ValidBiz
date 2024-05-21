import { useState } from "react";
import logo from "./assets/innersightlogo.png";
import "./App.css";
import Chat from "./components/Chat";
import "animate.css";

function App() {
  const [chatMode, setchatMode] = useState(false);

  function startChat() {
    setchatMode(true);
  }

  const AppComponent = chatMode ? (
    <Chat />
  ) : (
    <div className="flex items-center justify-center">
      <div className="row">
        <div className="col-3">
          <img src={logo} id="app-logo" />
        </div>
      </div>
      <div className="row" id="app-caption">
        <div id="caption-head">Valid Biz</div> <br />
      </div>
      <div>
        <button onClick={startChat}>Let's Go!</button>
      </div>
    </div>
  );

  return AppComponent;
}

export default App;
