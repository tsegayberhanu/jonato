"use client";
import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { IoCheckmark, IoCheckmarkDone } from "react-icons/io5";
import { useState } from "react";
interface SocialAccordionProps {
  rewardPoints: number;
  socialTitle: string;
  SocialIcon: React.ReactElement;
  children: React.ReactNode;
  unDonetask: boolean;
}
const SocialAccordion = ({
  rewardPoints,
  socialTitle,
  SocialIcon,
  children,
  unDonetask,
}: SocialAccordionProps) => {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  return (
    <div>
      <div
        onClick={() => setAccordionOpen(!accordionOpen)}
        className={`flex cursor-pointer justify-between p-3 bg-slate-500 bg-opacity-10  ${
          accordionOpen
            ? "rounded-t-md border-b border-b-slate-800 "
            : "rounded-md"
        }`}
      >
        <div className="flex gap-4 min-w-40">
          <SocialIcon.type
            {...SocialIcon.props}
            className="w-10 h-10 fill-white"
          />
          <p className="self-center text-xl text-white ">{socialTitle}</p>
        </div>

        <div className="text-white flex self-center ">

            {unDonetask ? <IoCheckmark className="w-8 h-8" /> : <IoCheckmarkDone className="w-8 h-8" /> }
          
          <p className="self-center">{rewardPoints}</p>
        </div>

        <div className="self-center ">
          {accordionOpen ? (
            <FaAngleUp className="fill-white w-6 h-6" />
          ) : (
            <FaAngleDown className="fill-white w-6 h-6" />
          )}
        </div>
      </div>
      <div
        className={`bg-slate-500 flex flex-col gap-3 p-4 pt-2 bg-opacity-10 rounded-b-md ${
          accordionOpen ? " opacity-100" : "hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
export default SocialAccordion;
