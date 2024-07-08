import Link from "next/link";
import React from "react";
import { RiShareForwardFill } from "react-icons/ri";

interface SocialCardProps {
  title: string;
  points: number;
  link: string;
}

const SocialCard = ({ title, points, link }: SocialCardProps) => {
  return (
    <div className="rounded-md flex justify-between bg-slate-600 bg-opacity-10  p-2">
      <div className="flex flex-col">
        <span className="font-semibold text-white ">{title}</span>
        <span className="font-thin text-white  ">+{points} jonato</span>
      </div>
      <button className="self-center">
        <Link href={link} target="_blanck">
          <RiShareForwardFill className="w-6 h-6 fill-white" />
        </Link>
      </button>
    </div>
  );
};

export default SocialCard;
