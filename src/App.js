import React, { useState } from "react";
import "./App.css";

function App() {
  const [displayValue, setDisplayValue] = useState("0");

  const handleButtonPress = (buttonValue) => {
    if (displayValue === "0") {
      setDisplayValue(buttonValue);
    } else {
      setDisplayValue(displayValue + buttonValue);
    }
  };

  const handleClear = () => {
    setDisplayValue("0");
  };

  const handleCalculate = () => {
    try {
      // Use the eval() function to calculate the result of the expression
      // eslint-disable-next-line no-eval
      setDisplayValue(eval(displayValue).toString());
    } catch (error) {
      // Handle error when the expression is invalid
      setDisplayValue("Error");
    }
  };

  const handleBackspace = () => {
    if (displayValue.length === 1) {
      // If there's only one character, set the display value to "0"
      setDisplayValue("0");
    } else {
      // Remove the last character using substring
      setDisplayValue(displayValue.slice(0, -1));
    }
  };

  return (
    <><h1>Calculator</h1>
      <div className="calculator">
        <div className="display">{displayValue}</div>
        <div className="buttons">
          {/* First row */}
          <div className="row">
            <button onClick={() => handleButtonPress("7")}>7</button>
            <button onClick={() => handleButtonPress("8")}>8</button>
            <button onClick={() => handleButtonPress("9")}>9</button>
            <button type="cancel" onClick={handleClear}>C</button>
          </div>
          {/* Second row */}
          <div className="row">
            <button onClick={() => handleButtonPress("4")}>4</button>
            <button onClick={() => handleButtonPress("5")}>5</button>
            <button onClick={() => handleButtonPress("6")}>6</button>
            <button onClick={() => handleButtonPress("/")}>/</button>
          </div>
          {/* Third row */}
          <div className="row">
            <button onClick={() => handleButtonPress("1")}>1</button>
            <button onClick={() => handleButtonPress("2")}>2</button>
            <button onClick={() => handleButtonPress("3")}>3</button>
            <button onClick={() => handleButtonPress("*")}>*</button>
          </div>
          {/* Fourth row */}
          <div className="row">
            <button onClick={() => handleButtonPress("0")}>0</button>
            <button onClick={() => handleButtonPress(".")}>.</button>
            <button onClick={() => handleButtonPress("+")}>+</button>
            <button onClick={() => handleBackspace()}><i class="las la-backspace"></i></button>

          </div>
          <div className="row result">
            <button type="submit" class="green" onClick={handleCalculate}>=</button>
          </div>
        </div>
      </div></>
  );

}

export default App;
