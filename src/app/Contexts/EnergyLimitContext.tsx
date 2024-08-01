"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { CoinBalanceContext } from "./CoinBalanceContext";
const EnergyLimitContext = createContext({
  eLLevel: 0, // energy Limit Level
  eLNLevel: 1, // energy Limit Next Level
  eLValue: 50, // energy Limit Value
  eLIRate: 500, // energy Limit Increase Rate
  eLUCoinCost: 1000, // energy Limit Upgrade Coin Cost
  eLUEligibilityCheck: true,
  increaseEnergyLimit: () => {},
});

interface EnergyLimitProviderProps {
  children: React.ReactNode;
}

const EnergyLimitProvider = ({ children }: EnergyLimitProviderProps) => {

  const { balance, decreaseBalance } = useContext(CoinBalanceContext);
  const [eLLevel, setELLevel] = useState<number>(0);
  const [eLNLevel, setELNLevel] = useState<number>(1);
  const [eLValue, setELValue] = useState<number>(200);
  const [eLIRate] = useState<number>(50);
  const [eLUCoinCost, setELUCoinCost] = useState(50);
  const [eLUEligibilityCheck, setELUEligibilityCheck] =
    useState<boolean>(false);

  const checkEligibilty = () => {
    setELUEligibilityCheck(balance > eLUCoinCost);
  };

  useEffect(() => {
    checkEligibilty();
  }, [eLLevel]);

  const increaseEnergyLimit = () => {
    if (balance > eLUCoinCost) {
      setELLevel((level) => level + 1);
      setELNLevel((nextLevel) => nextLevel + 1);
      setELValue((energyLimit) => energyLimit + eLIRate);
      decreaseBalance(eLUCoinCost);
      setELUCoinCost((upgradeCoinCost) => upgradeCoinCost * eLNLevel);
    }
  };

  return (
    <EnergyLimitContext.Provider
      value={{
        eLLevel,
        eLNLevel,
        eLValue,
        eLIRate,
        eLUCoinCost,
        eLUEligibilityCheck,
        increaseEnergyLimit,
      }}
    >
      {children}
    </EnergyLimitContext.Provider>
  );
};
export { EnergyLimitContext, EnergyLimitProvider };
