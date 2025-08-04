import React, { useState } from 'react';
import "./Calculator.css"

const Calculator = () => {
    const [inputValue, setInputValue] = useState('');

    const clear = () => {
        setInputValue("")
    }

    const display = (value) => setInputValue(inputValue + value);

    const calculate = () => {
        setInputValue(eval(inputValue))
    }



    return (
        <form name='calc' className='calculator'>
            <h1>Calculator App</h1>
            <input
                type="text"
                className="value"
                placeholder='Enter number'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <div id="button-container">
                <span onClick={() => clear()} className="clear num">c</span>
                <span onClick={() => display("/")}>/</span>
                <span onClick={() => display("*")}>*</span>
                <span onClick={() => display("7")}>7</span>
                <span onClick={() => display("8")}>8</span>
                <span onClick={() => display("9")}>9</span>
                <span onClick={() => display("-")}>-</span>
                <span onClick={() => display("4")}>4</span>
                <span onClick={() => display("5")}>5</span>
                <span onClick={() => display("6")}>6</span>
                <span className='plus' onClick={() => display("+")}>+</span>

                <span onClick={() => display("1")}>1</span>
                <span onClick={() => display("2")}>2</span>
                <span onClick={() => display("3")}>3</span>
                <span onClick={() => display("0")}>0</span>
                <span onClick={() => display("00")}>00</span>
                <span onClick={() => display(".")}>.</span>
                <span className='num equal' onClick={() => calculate()}>=</span>
            </div>
        </form>
    );
}

export default Calculator;