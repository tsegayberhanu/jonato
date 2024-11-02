"use client";
import { FaRegUser } from "react-icons/fa";
import { shareURL } from '@telegram-apps/sdk';

const page = () => {
  return (
    <div className="flex flex-col gap-4 relative">
      <div className="w-full flex flex-col gap-4 ">
        <div className="text-white text-xl"> 12 Refs</div>
        <div>
          <FriendComponent />
        </div>
      </div>
      <div className="bottom-0">
        <InviteFriend userId={BigInt(123)} />
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
          <FaRegUser className="w-8 h-8" />
        </div>
        <div>
          <p className="font-semibold">Izona</p>
          <div className="flex gap-1">
            <p className="font-thin">level</p>
            <p className="font-thin">1000</p>
          </div>
        </div>
      </div>

      <p className="self-center">100000</p>
    </div>
  );
};

import { FaCopy } from "react-icons/fa";
const InviteFriend = ({ userId }: RefereTelegramIdProp) => {
  const INVITE_URL = "https://t.me/ezylBot/start";
  const handleInviteFriend = () => {
    const inviteLink = `${INVITE_URL}?startapp=${userId}`;
    const shareText = `Join me on this awesome Telegram mini app!`;
     shareURL(inviteLink, shareText);
  };

  const handleCopyInviteLink = () => {
    const inviteLink = `${INVITE_URL}?startapp=${userId}`;
    navigator.clipboard.writeText(inviteLink);
    alert("Invite link copied to clipboard!");
  };

  return (
    <div className="bg-slate-700 w-full flex flex-row gap-3 justify-between  bg-opacity-20 p-4 rounded-md">
      <div className="flex-grow justify-center items-center bg-blue-500 rounded-md">
        <button className=" w-full py-4" onClick={handleInviteFriend}>
        invite a friend
        </button>
        </div>
      <div className="bg-white bg-opacity-10 flex justify-center items-center rounded-md">
        <button  className="w-full h-full px-6" onClick={handleCopyInviteLink}>
        <FaCopy size={28} className="text-blue-500" />
        </button>
      </div>
    </div>
  );
};

interface RefereTelegramIdProp {
  userId: bigint;
}
