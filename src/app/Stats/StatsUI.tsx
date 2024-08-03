"use client";
import React, { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";
interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}
const StatsUI = () => {
  
  const [userData, setUserData] = useState<UserData | null>(null)
  useEffect(() => {
    
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user as UserData)
    }
  }, [])


  return (
    <div className="flex flex-col items-center gap-4 text-white">
      <div className="text-white text-3xl">Stats</div>
      {userData ? (
        <>
          <h1 className="text-2xl font-bold mb-4">User Data</h1>
          <ul>
            <li>ID: {userData.id}</li>
            <li>First Name: {userData.first_name}</li>
            <li>Last Name: {userData.last_name || 'N/A'}</li>
            <li>Username: {userData.username || 'N/A'}</li>
            <li>Language Code: {userData.language_code}</li>
            <li>Is Premium: {userData.is_premium ? 'Yes' : 'No'}</li>
          </ul>
        </>
      ) : (
        <div>Loading...</div>
      )}


      <div className="flex flex-col items-center">
        <p className="text-xl font-bold">Total Share Balance</p>
        <p className="font-thin">416.281 T</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="font-semibold">Total Touches</p>
        <p className="font-thin">1234567</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="font-semibold">Total Players</p>
        <p className="font-thin">64,000,000</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="font-semibold">Daily users</p>
        <p className="font-thin">1222</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="font-semibold">online players</p>
        <p className="font-thin">90000</p>
      </div>
    </div>
  );
};
export default StatsUI;
