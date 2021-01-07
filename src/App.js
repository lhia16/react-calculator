import React, { Component } from "react";
import "./App.css";
import { CustomKey } from "./components/CustomKey";

class App extends Component {
  state = {
    result: [],
    keys: [
      { value: "clear", styleName: "clearButton" },
      { value: "/", styleName: "operatorButton" },
      { value: "7", styleName: "numberButton" },
      { value: "8", styleName: "numberButton" },
      { value: "9", styleName: "numberButton" },
      { value: "*", styleName: "operatorButton" },
      { value: "4", styleName: "numberButton" },
      { value: "5", styleName: "numberButton" },
      { value: "6", styleName: "numberButton" },
      { value: "-", styleName: "operatorButton" },
      { value: "1", styleName: "numberButton" },
      { value: "2", styleName: "numberButton" },
      { value: "3", styleName: "numberButton" },
      { value: "+", styleName: "operatorButton" },
      { value: "0", styleName: "zeroButton" },
      { value: ".", styleName: "numberButton" },
      { value: "=", styleName: "operatorButton" },
    ],
  };

  handleButton = (value) => {
    if (value === "clear") {
      this.setState({ result: [] });
    } else if (value === "=") {
      this.setState({ result: [eval(this.state.result.join(""))] });
    } else {
      this.setState({ result: [...this.state.result, value] });
    }
  };

  render() {
    const { result, keys } = this.state;

    return (
      <div className="container">
        <h1 className="display">{result.length === 0 ? "0" : result}</h1>

        <div className="keyboard-container">
          {keys.map((key) => {
            return (
              <CustomKey
                resultProp={this.state.result}
                value={key.value}
                styleName={key.styleName}
                handleButton={this.handleButton}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
