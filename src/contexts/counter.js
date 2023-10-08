import React, {createContext, useContext, useEffect, useState} from 'react';

const CounterContext = createContext();

const CounterProvider = ({children}) => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(null);

  const resetCounter = () => {
    setCount(60);
    setTimer(
      setInterval(() => {
        setCount(prevCount => prevCount - 1);
      }, 1000),
    );

    return () => clearInterval(timer);
  };
  useEffect(() => {
    if (count == 0) clearInterval(timer);
  }, [count]);
  const value = {resetCounter, count};
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

const useCounter = () => useContext(CounterContext);

export {CounterProvider, useCounter};
