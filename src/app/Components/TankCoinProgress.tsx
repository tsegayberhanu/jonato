"use client";
import React, { useContext, useState } from "react";
import { EnergyLimitContext } from "../Contexts/EnergyLimitContext";
import { TankCoinContext } from "../Contexts/TankCoinContext";
const TankCoinProgress = () => {
  const { eLValue } = useContext(EnergyLimitContext);
  const { tankStackCoin } = useContext(TankCoinContext);
  const progress = (tankStackCoin / eLValue) * 100;
  return (
    <div>
      <div className="w-full flex flex-col gap-1 ">
        <div className="self-center text-white">
          {tankStackCoin}/{eLValue}
        </div>
        <div className="">
          <div className="min-w-64 p-1 bg-gray-600 min-h-2 rounded-full">
            <div
              style={{ width: `${progress}%` }}
              className="bg-green-600 min-h-2 rounded-full"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TankCoinProgress;
