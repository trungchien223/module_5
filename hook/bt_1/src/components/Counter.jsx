import React from 'react';
import useCounter from '../hook_custom/useCounter';

const Counter = ({ title, incrementValue, buttonText }) => {
  const { count, increment, reset } = useCounter(0);

  const handleIncrement = () => {
    increment(incrementValue);
  };

  return (
    <div className="counter">
      <h3>{title}</h3>
      <div className="counter-display">
        <span className="count">{count}</span>
      </div>
      <div className="counter-controls">
        <button onClick={handleIncrement} className="increment-btn">
          {buttonText}
        </button>
        <button onClick={reset} className="reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
