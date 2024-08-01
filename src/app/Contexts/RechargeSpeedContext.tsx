"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { CoinBalanceContext } from "./CoinBalanceContext";

interface MultitapProviderProps {
  children: React.ReactNode;
}

const RechargeSpeedContext = createContext({
  rSLevel: 0,
  rSNLevel: 1,
  rSValue: 1,
  rSRate: 1,
  rSUCoinCost: 1000, // energy Limit Upgrade Coin Cost
  rSUEligibilityCheck: true,
  increaseRechargeSpeed: () => {},
});

const RechargeSpeedProvider = ({ children }: MultitapProviderProps) => {
  const {balance, decreaseBalance} = useContext(CoinBalanceContext);
  const [rSLevel, setRSLevel] = useState<number>(1);
  const [rSNLevel, setRSNLevel] = useState<number>(2);
  const [rSValue, setRSValue] = useState(1);
  const [rSRate, setRSRate] = useState(1);
  const [rSUCoinCost, setRSUCoinCost] = useState<number>(200);
  const [rSUEligibilityCheck, setRSUEligibilityCheck] = useState<boolean>(true);
 
  const checkEligibilty = () => {
    setRSUEligibilityCheck(balance > rSUCoinCost);
  };

  useEffect(() => {
    checkEligibilty();
  }, [rSLevel]);

  const increaseRechargeSpeed = () => {
        
    if( balance > rSUCoinCost ) {
        setRSLevel(level => level+1);
        setRSNLevel(nextlevel => nextlevel+1 )
        setRSValue(tapValue => tapValue + rSRate)
        decreaseBalance(rSUCoinCost)
        setRSUCoinCost( rSNLevel * 10 )
    }

  };

  return (
    <RechargeSpeedContext.Provider
      value={{
        rSLevel,
        rSNLevel,
        rSValue,
        rSRate,
        rSUCoinCost, // energy Limit Upgrade Coin Cost
        rSUEligibilityCheck,
        increaseRechargeSpeed
      }}
    >
      {children}
    </RechargeSpeedContext.Provider>
  );
};

export { RechargeSpeedContext, RechargeSpeedProvider };
