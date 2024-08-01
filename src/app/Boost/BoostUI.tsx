"use client";
import React from "react";
import { GiMagicPalm } from "react-icons/gi";
import { IoMdBatteryCharging } from "react-icons/io";
import { GiBattery100 } from "react-icons/gi";
import { PiArrowsClockwiseFill } from "react-icons/pi";
import { useContext } from "react";
import { MultitapContext } from "../Contexts/MultitapContext";
import { EnergyLimitContext } from "../Contexts/EnergyLimitContext";
import { RechargeSpeedContext } from "../Contexts/RechargeSpeedContext";
import { WorkingHoursContext } from "../Contexts/WorkingHoursContext";

import BoostCard from "../Components/BoostCard";

const BoostUI = () => {
  const { level, nextLevel, upgradeCoinCost, checkEligibility, upgradeLevel } =
    useContext(MultitapContext);

  const {
    eLLevel,
    eLNLevel,
    eLValue,
    eLIRate,
    eLUCoinCost,
    eLUEligibilityCheck,
    increaseEnergyLimit,
  } = useContext(EnergyLimitContext);

  const { rSLevel,
    rSNLevel,
    rSValue,
    rSRate,
    rSUCoinCost, // energy Limit Upgrade Coin Cost
    rSUEligibilityCheck,
    increaseRechargeSpeed } = useContext(RechargeSpeedContext);

    const {hour,
      nextHour,
      hourValue,
      hourRate,
      hourUpdateCoinCost,
      checkUpdateEligibility,
      increaseWorkingHour} = useContext(WorkingHoursContext)

  return (
    <div className="flex flex-col gap-4">
      <div className="text-white text-3xl self-center">Boost</div>

      <BoostCard
        checkEligibility={checkEligibility}
        boostTitle="Multitap"
        BoostIcon={<GiMagicPalm />}
        boostUpCoin={upgradeCoinCost}
        boostUnit="level"
        boostTarget={nextLevel}
        booster={upgradeLevel}
        boostShortDescription="+1 per tap for each level."
        boostLongDescription="Increase amount of TAP you can earn per one tap."
      />
      <BoostCard
        boostTitle="Energy Limit"
        BoostIcon={<GiBattery100 />}
        boostUpCoin={eLUCoinCost}
        boostUnit="level"
        boostTarget={eLNLevel}
        boostShortDescription={`+${eLIRate} energy level for each level.`}
        boostLongDescription="Increase the limit of energy storage."
        booster={increaseEnergyLimit}
        checkEligibility={eLUEligibilityCheck}
      />
       <BoostCard checkEligibility={rSUEligibilityCheck} booster={increaseRechargeSpeed} boostTitle="Recharge Speed" BoostIcon={<IoMdBatteryCharging/>} boostUpCoin={rSUCoinCost} boostUnit="level" boostTarget={rSNLevel} boostShortDescription={`+${rSRate} per second for each level.`} boostLongDescription="Increase amount of coins collected per second."  />
       
       <BoostCard booster={increaseWorkingHour}  checkEligibility={checkUpdateEligibility} boostTitle="Working Hours" BoostIcon={<PiArrowsClockwiseFill/>} boostUpCoin={hourUpdateCoinCost} boostUnit="Hour" boostTarget={nextHour} boostShortDescription={`+${hourRate} hour mining time.`} boostLongDescription="Increase the time yor app will stay active."/> 
       

    </div>
  );
};

export default BoostUI;
