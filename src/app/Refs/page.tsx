import React from "react";
import { FaRegUser } from "react-icons/fa";
const page = () => {
  return (
    <div className="flex flex-col gap-4">

    <div className="bg-slate-700 bg-opacity-20 p-4 rounded-md flex flex-col gap-1 text-white">
      <div className="flex justify-between">
      <p className="text-xl font-bold">My Invite Link</p>
      <button className="p-2 rounded-xl bg-stone-200 text-black">Copy</button>
      </div>

      <div>
        <p className="font-thin text-xl text-wrap break-all">
        https://tailwindcss.com/docs/background-color
        </p>
      </div>
      
    </div>
    
    <div className="w-full flex flex-col gap-4 ">
      <div className="text-white text-xl"> 12 Refs</div>
      <div>
        <FriendComponent/>
      </div>
    </div>

    </div>
  );
};
export default page;

const FriendComponent = () => {
  return (
    <div className="text-white flex w-full justify-between gap-6 p-2 rounded-md bg-slate-500 bg-opacity-10">
      <div className="flex gap-4">
        <div className="self-center">
        <FaRegUser className="w-8 h-8"/>
        </div>
        <div>
          <p className="font-semibold">Izona</p>
          <div className="flex gap-1">
            <p className="font-thin">level</p>
            <p className="font-thin">1000</p>
          </div>
        </div>
      </div>

      <p className="self-center">
       100000
      </p>

    </div>
  )
}
