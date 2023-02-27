import React, { FC, useState, useContext, createContext } from "react";

interface CountProps {
  children?: React.ReactNode;
  count?: number | any[];
  toggle?: boolean | any[];
  setCount?: (count: number) => void;
  setToggle?: (toggle: boolean) => void;
}

const CountContext = createContext({} as CountProps);

export const useCountContext = () => {
  const context: any = useContext(CountContext);
  const [count, setCount] = context.count;
  const [toggle, setToggle] = context.toggle;

  const handleCount = (number: number) => {
    if (number === 0) {
      setCount(0);
    } else {
      setCount((e: number) => e + number);
      //   setCount(count + 1)
    }
  };

  const handleMode = () => {
    setToggle((toggle: boolean) => {
      !toggle;
    });
  };

  return {
    count,
    toggle,
    handleCount,
    handleMode,
  };
};

export const CountProvider: FC<CountProps> = ({ children }) => {
  const [count, setCount] = useState<CountProps>();
  const [toggle, setToggle] = useState<CountProps>();

  return (
    <CountContext.Provider
      value={{
        count: [count, setCount],
        toggle: [toggle, setToggle],
      }}
    >
      {children}
    </CountContext.Provider>
  );
};
