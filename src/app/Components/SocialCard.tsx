"use client";
import Link from "next/link";
import React, { useContext,useState } from "react";
import { RiShareForwardFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { CoinBalanceContext } from "../Contexts/CoinBalanceContext";

interface SocialCardProps {
  taskId: string;
  taskTitle: string;
  taskReward: number;
  taskLink: string;
  isTaskDone: boolean;
}

const SocialCard = ({
  taskId,
  taskTitle,
  taskReward,
  taskLink,
  isTaskDone,
}: SocialCardProps) => {

  const { increaseBalance } = useContext(CoinBalanceContext);
  const [redirected, setRedirected] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(isTaskDone)

  const handleClick = () => {
    setRedirected((redirected) => !redirected);
  };

  const approveTask = (taskId: string) => {
    console.log(taskId);
  };

  const claim = () => {
    increaseBalance(taskReward)
    !done && setDone(true)
  }

  return (
    <div className="rounded-md flex justify-between bg-slate-600 bg-opacity-10  p-2">
      <div className="flex flex-col">
        <Link href={taskLink} target="_blanck">
          <span className="font-semibold text-white ">{taskTitle}</span>
        </Link>
        <span className="font-thin text-white  "> +{taskReward} jonato</span>
      </div>

      {done ? (
        <FaCheck className="text-xl text-green-600"></FaCheck>
      ) : (
        <button className="self-center" onClick={handleClick}>
          {redirected ? (
            <button className="text-white bg-emerald-800 p-4 rounded-md  text-start" onClick={claim} >
              claim
            </button>
          ) : (
            <Link href={taskLink} target="_blanck">
              <RiShareForwardFill className="w-6 h-6 fill-white" />
            </Link>
          )}
        </button>
      )}
    </div>
  );
};
export default SocialCard;
