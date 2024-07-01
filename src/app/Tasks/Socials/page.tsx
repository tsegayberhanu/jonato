import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-white flex justify-between p-4 bg-purple-800 bg-opacity-10 rounded-md ">
        <div className="text-white">Telegram</div>
        <div className="text-white">
          <button className=" hover:cursor-pointer"> Go</button>
        </div>
        <div className="text-white">300 Jonato</div>
      </div>
      <div className="text-white p-4 bg-purple-800 bg-opacity-10 rounded-md ">
        Facebook
      </div>
      <div className="text-white p-4 bg-purple-800 bg-opacity-10 rounded-md ">
        Youtube
      </div>
      <div className="text-white p-4 bg-purple-800 bg-opacity-10 rounded-md ">
        Instagram
      </div>
      <div className="text-white p-4 bg-purple-800 bg-opacity-10 rounded-md ">
        Tiktok
      </div>
      <div className="text-white p-4 bg-purple-800 bg-opacity-10 rounded-md ">
        X
      </div>
    </div>
  );
};

export default page;
