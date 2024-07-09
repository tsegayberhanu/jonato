import React from "react";
import { GiMagicPalm } from "react-icons/gi";
import { IoMdBatteryCharging } from "react-icons/io";
import { GiBattery100 } from "react-icons/gi";
import { PiArrowsClockwiseFill } from "react-icons/pi";
import BoostCard from "../Components/BoostCard";
const page = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-white text-3xl self-center">Boost</div>
      
       <BoostCard boostTitle="Multitap" BoostIcon={<GiMagicPalm/>} boostUpCoin={20000} boostUnit="level" boostTarget={11} boostShortDescription="+1 per tap for each level." boostLongDescription="Increase amount of TAP you can earn per one tap."  />
       <BoostCard boostTitle="Energy Limit" BoostIcon={<GiBattery100/>} boostUpCoin={20000} boostUnit="level" boostTarget={11} boostShortDescription="+500 energy level for each level." boostLongDescription="Increase the limit of energy storage."  />
       <BoostCard boostTitle="Recharge Speed" BoostIcon={<IoMdBatteryCharging/>} boostUpCoin={20000} boostUnit="level" boostTarget={11} boostShortDescription="+1 per second for each level." boostLongDescription="Increase amount of coins collected per second."  />
       <BoostCard boostTitle="Working Hours" BoostIcon={<PiArrowsClockwiseFill/>} boostUpCoin={20000} boostUnit="Hour" boostTarget={11} boostShortDescription="+1 hour mining time." boostLongDescription="Increase the time yor app will stay active."/>
    </div>
  );
};
export default page;
