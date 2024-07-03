import React from "react";
const page = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-white text-3xl self-center">Boost</div>
      <div className="w-full flex flex-col gap-4 ">
        <button className=" text-start p-4 bg-purple-800 bg-opacity-10  text-white font-semibold rounded-md">Multi-Tap</button>
        <button className=" text-start p-4 bg-purple-800 bg-opacity-10  text-white font-semibold rounded-md">Energy Limit</button>
        <button className=" text-start p-4 bg-purple-800 bg-opacity-10  text-white font-semibold rounded-md">Recharge Speed</button>
        <button className=" text-start p-4 bg-purple-800 bg-opacity-10  text-white font-semibold rounded-md">Working Hours</button>
      </div>
    </div>
  );
};
export default page;
