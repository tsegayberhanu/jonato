"use client";
import React, { createContext, useState } from "react";

const CoinBalanceContext = createContext({
  balance: 10000,
  increaseBalance: (amount: number) => {},
  decreaseBalance: (amount: number) => {},
});

interface CoinBalanceProviderProps {
  children: React.ReactNode;
}

const CoinBalanceProvider = ({ children }: CoinBalanceProviderProps) => {
  const [balance, setBalance] = useState(10000);
  const increaseBalance = (amount: number) => {
    setBalance((prevBalance) => prevBalance + amount);
  };

  const decreaseBalance = (amount: number) => {
    console.log("amount to decrease", amount);
    setBalance((prevBalance) => prevBalance - amount);
  };

  return (
    <CoinBalanceContext.Provider
      value={{ balance, increaseBalance, decreaseBalance }}
    >
      {children}
    </CoinBalanceContext.Provider>
  );
};

export { CoinBalanceContext, CoinBalanceProvider };
