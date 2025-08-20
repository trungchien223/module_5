import { useState } from 'react';

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = (value = 1) => {
    setCount(prevCount => prevCount + value);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return {
    count,
    increment,
    reset
  };
};

export default useCounter;
