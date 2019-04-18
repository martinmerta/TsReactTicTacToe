import * as React from "react";
import "./App.css";
import Board from "./components/Board";

// import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
