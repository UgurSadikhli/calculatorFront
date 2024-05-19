import React, { useState } from "react";
import calculator from "./calculator.module.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    if (e.target.value === " ") {
      setInput("");
    } else {
      setInput(input + e.target.value);
    }
  };

  const calculate = async () => {
    try {
      const url = "https://localhost:7224/Calculator";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await response.json();
      setInput(input + " = " + data);
      setError(null);
    } catch (err) {
      setError("Error calculating result");
    }
  };

  return (
    <div className={calculator.main}>
      <div className={calculator.body1}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder=""
          readOnly
        />
        <div className={calculator.c1}>
          <button
            className={calculator.clear}
            onClick={handleInputChange}
            value={" "}
          >
            C
          </button>
          <button className={calculator.pm}>+/-</button>
          <button className={calculator.percent}>%</button>
          <button
            className={calculator.plus}
            onClick={handleInputChange}
            value={"+"}
          >
            +
          </button>
        </div>
        <div className={calculator.c2}>
          <button onClick={handleInputChange} value={7}>
            7
          </button>
          <button onClick={handleInputChange} value={8}>
            8
          </button>
          <button onClick={handleInputChange} value={9}>
            9
          </button>
          <button
            className={calculator.multiply}
            onClick={handleInputChange}
            value={"*"}
          >
            x
          </button>
        </div>
        <div className={calculator.c3}>
          <button onClick={handleInputChange} value={4}>
            4
          </button>
          <button onClick={handleInputChange} value={5}>
            5
          </button>
          <button onClick={handleInputChange} value={6}>
            6
          </button>
          <button
            className={calculator.dot}
            onClick={handleInputChange}
            value={"."}
          >
            .
          </button>
        </div>
        <div className={calculator.c4}>
          <button onClick={handleInputChange} value={1}>
            1
          </button>
          <button onClick={handleInputChange} value={2}>
            2
          </button>
          <button onClick={handleInputChange} value={3}>
            3
          </button>
          <button
            className={calculator.minus}
            onClick={handleInputChange}
            value={"-"}
          >
            -
          </button>
        </div>
        <div className={calculator.c5}>
          <button onClick={handleInputChange} value={0}>
            0
          </button>
          <button>,</button>
          <button className={calculator.equalButton} onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
