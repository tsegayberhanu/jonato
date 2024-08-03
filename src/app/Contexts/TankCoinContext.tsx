"use client"
import React, { createContext, useState } from "react";
const TankCoinContext = createContext({
  tankStackCoin: 0,
  tankOverStackCoin: 1,
  increaseTankStackCoin: (value: number) => {},
  decreaseTankStackCoin: (value: number) => {},
  increaseTankOverStackCoin: (value: number) => {},
  decreaseTankOverStackCoin: (value: number) => {},
});
interface TankCoinProviderProps {
  children: React.ReactNode;
}
const TankCoinProvider = ({ children }: TankCoinProviderProps) => {
  const [tankStackCoin, setTankStackCoin] = useState<number>(200);
  const [tankOverStackCoin, setTankOverStackCoin] = useState<number>(0);

  const increaseTankStackCoin = (incree: number) => {
    setTankStackCoin((tankStackCoin) => tankStackCoin + incree);
  };

  const decreaseTankStackCoin = (decree: number) => {
    setTankStackCoin((tankStackCoin) => tankStackCoin - decree);
  };

  const increaseTankOverStackCoin = (incree: number) => {
    setTankOverStackCoin((tankOverStackCoin) => tankOverStackCoin + incree);
  };

  const decreaseTankOverStackCoin = (decree: number) => {
    setTankOverStackCoin((tankOverStackCoin) => tankOverStackCoin - decree);
  };

  return (
    <TankCoinContext.Provider
      value={{
        tankStackCoin,
        tankOverStackCoin,
        increaseTankStackCoin,
        decreaseTankStackCoin,
        increaseTankOverStackCoin,
        decreaseTankOverStackCoin,
      }}
    >
      {children}
    </TankCoinContext.Provider>
  );
};
export { TankCoinContext, TankCoinProvider };
