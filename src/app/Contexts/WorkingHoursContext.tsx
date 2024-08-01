"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { CoinBalanceContext } from "./CoinBalanceContext";
const WorkingHoursContext = createContext({
  hour: 0,
  nextHour: 1,
  hourValue: 1,
  hourRate: 1,
  hourUpdateCoinCost: 1000,
  checkUpdateEligibility: true,
  increaseWorkingHour: () => {},
});

interface WorkingHoursProviderProps {
  children: React.ReactNode;
}

const WorkingHoursProvider = ({ children }: WorkingHoursProviderProps) => {
  const { balance, decreaseBalance } = useContext(CoinBalanceContext);
  const [hour, setHour] = useState<number>(1);
  const [nextHour, setNextHour] = useState<number>(2);
  const [hourValue, setHourValue] = useState(1);
  const [hourRate, setHourRate] = useState(1);
  const [hourUpdateCoinCost, setHourUpdateCoinCost] = useState<number>(200);
  const [checkUpdateEligibility, setCheckUpdateEligibility] = useState<boolean>(true);

  useEffect(() => {
    checkEligibilty();
  }, [hour]);

  const checkEligibilty = () => {
    setCheckUpdateEligibility(balance > hourUpdateCoinCost);
  };

  const increaseWorkingHour = () => {
    if (balance > hourUpdateCoinCost) {
      setHour((hour) => hour + 1);
      setNextHour((nextHour) => nextHour + 1);
      setHourValue((hourValue) => hourValue + hourRate);
      decreaseBalance(hourUpdateCoinCost);
      setHourUpdateCoinCost((coinCost) => coinCost * 10);
    }
  };

  return (
    <WorkingHoursContext.Provider
      value={{
        hour,
        nextHour,
        hourValue,
        hourRate,
        hourUpdateCoinCost,
        checkUpdateEligibility,
        increaseWorkingHour: increaseWorkingHour,
      }}
    >
      {children}
    </WorkingHoursContext.Provider>
  );
};

export { WorkingHoursProvider, WorkingHoursContext };
