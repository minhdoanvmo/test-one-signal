import React, { FC, useContext } from "react";

import logo from "./logo.svg";

import { NotificationContext } from "./contexts/NotificationContext";
import FacebookMessengerLink from "./containers/FacebookMessengerLink";

import "./App.css";

const App: FC = () => {
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
              {item.date.toString()} - [{item.title}] {item.detail}
            </p>
          ))}
        </div>
      </header>
      <FacebookMessengerLink />
    </div>
  );
};

export default App;
