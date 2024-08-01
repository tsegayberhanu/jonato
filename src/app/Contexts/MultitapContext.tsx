"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { CoinBalanceContext } from "./CoinBalanceContext";

const MultitapContext = createContext({
  level: 0,
  nextLevel: 1,
  tapValue:1,
  tapIncreaseRate:1,
  upgradeCoinCost: 1000,
  checkEligibility: true,
  upgradeLevel: () => {},
});

interface MultitapProviderProps {
  children: React.ReactNode;
}

const MultitapProvider = ({ children }: MultitapProviderProps) => {

  const { balance, decreaseBalance } = useContext(CoinBalanceContext);
  const [level, setLevel] = useState<number>(1);
  const [nextLevel, setNextLevel] = useState<number>(2);
  const[tapValue, setTapValue] = useState(1)
  const[tapIncreaseRate, setTapIncreaseRate] = useState(1)
  const [upgradeCoinCost, setUpgradeCoin] = useState<number>(200);
  const [checkEligibility, setCheckEligibility] = useState<boolean>(true);

  const checkEligibilty = () => {
    setCheckEligibility(balance > upgradeCoinCost);
  };

  useEffect(() => {
    checkEligibilty();
  }, [level]);

  const upgradeLevel = () => {

    if( balance > upgradeCoinCost ) {
        setLevel(nextLevel);
        setNextLevel(nextLevel+1)
        setTapValue(tapValue => tapValue + tapIncreaseRate)
        decreaseBalance(upgradeCoinCost)
        setUpgradeCoin(nextLevel * 10)
    }
  };


  return (
    <MultitapContext.Provider
      value={{
        level,
        nextLevel,
        tapValue, 
        tapIncreaseRate,
        upgradeCoinCost,
        checkEligibility,
        upgradeLevel,
      }}
    >
      {children}
    </MultitapContext.Provider>
  );
};
export { MultitapContext, MultitapProvider };
