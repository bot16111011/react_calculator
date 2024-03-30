import React, { useState } from 'react';
import './calc.css';

const Calc = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (event) => {
    const value = event.target.innerText;

    if (value === '=') {
      try {
        setDisplay(eval(display));
      } catch {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
    } else if (value === '+/-') {
        setDisplay((prevDisplay) => {
          if (prevDisplay.startsWith('-')) {
            return prevDisplay.substring(1);
          } else {
            return '-' + prevDisplay;
          }
        });
        } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="calculator">
      <div className="wrapper">
        <div className="display">{display}</div>
        <div className="buttons">
          <button className="side_button" onClick={handleClick}>C</button>
          <button className="side_button" onClick={handleClick}>+/-</button>
          <button className="side_button" onClick={handleClick}>%</button>
          <button className="side_button" onClick={handleClick}>/</button>

          <button onClick={handleClick}>7</button>
          <button onClick={handleClick}>8</button>
          <button onClick={handleClick}>9</button>
          <button className="side_button" onClick={handleClick}>*</button>

          <button onClick={handleClick}>4</button>
          <button onClick={handleClick}>5</button>
          <button onClick={handleClick}>6</button>
          <button className="side_button" onClick={handleClick}>-</button>

          <button onClick={handleClick}>1</button>
          <button onClick={handleClick}>2</button>
          <button onClick={handleClick}>3</button>
          <button className="side_button" onClick={handleClick}>+</button>

          <button className="big_button" onClick={handleClick}>0</button>
          <button onClick={handleClick}>.</button>
          <button className="equal_button" onClick={handleClick}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calc;
