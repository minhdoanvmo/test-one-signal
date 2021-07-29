import React, { useContext } from "react";

import { NotificationContext } from "./contexts/NotificationContext";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const context = useContext(NotificationContext);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!context?.isLogging && (
          <button onClick={context?.handleLogin}>Login</button>
        )}
        <div>
          {context?.notifications?.map((item) => (
            <p key={item.id} style={{ color: "white" }}>
              {item.date.toString()} - {item.detail}
            </p>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
