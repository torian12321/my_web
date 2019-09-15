import React from "react";
import logo from "./logo.svg";
import { Avatar, Menu, Quote } from "components/ui";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Quote caption="bla bla" />
      <Avatar src="http://placeimg.com/200/200/people" />
      <Menu />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
