import "./style.css";
import React, { useState } from "react";

const Calculator = () => {
    const [firstCount, setFirstCount] = useState(0);
    const [secondCount, setSecondCount] = useState(0);
    const [result, setResult] = useState(0);
    const [operator, setOperator] = useState("+")

    const incrementCount = () => {
        setFirstCount(firstCount + 1)
    }
    const secIncrementCount = () => {
        setSecondCount(secondCount + 1)
    }
    const decrementCount = () => {
        setFirstCount(firstCount - 1)
    }
    const secDecrementCount = () => {
        setSecondCount(secondCount - 1)
    }

    const calculateConts = () => {
        switch (operator) {
            case "+":
                setResult(firstCount + secondCount)
                break;
            case "-":
                setResult(firstCount - secondCount)
                break;
            case "*":
                setResult(firstCount * secondCount)
                break;
            case "/":
                setResult(firstCount / secondCount)
                break
        }
    }




    return (
        <div className="component">
            <div className="calculator-wrapper">
                <div className="buttons">
                    <button className="scuare btn" onClick={() => setOperator("-")}>-</button>
                    <button className="multiple btn" onClick={() => setOperator("*")}>*</button>
                    <button className="division btn" onClick={() => setOperator("/")}>/</button>
                    <button className="addition btn" onClick={() => setOperator("+")}>+</button>
                </div>
                <div className="calculator">
                    <div className="num-wrapper">
                        <button className="increment" onClick={incrementCount}>INCREMENT</button>
                        <p className="first-num num">{firstCount}</p>
                        <button className="decrement" onClick={decrementCount}>DECREMENT</button>
                    </div>
                    <button className="btn">{operator}</button>
                    <div className="num-wrapper">
                        <button className="increment" onClick={secIncrementCount}>INCREMENT</button>
                        <p className="second-num num">{secondCount}</p>
                        <button className="decrement" onClick={secDecrementCount}>DECREMENT</button>
                    </div>

                    <button className="equal btn" onClick={calculateConts}>=</button>
                    <p className="result num">{result}</p>
                </div>
            </div>
        </div>
    )
}

export default Calculator;