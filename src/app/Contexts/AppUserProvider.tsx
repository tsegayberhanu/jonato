"use client"
import WebApp from "@twa-dev/sdk";
import React, { createContext, useEffect, useState } from "react";
interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}

const AppUserContext = createContext<UserData>({
  id: 0,
  first_name: "",
  last_name: "",
  username: "",
  language_code: "",
  is_premium: false,
});
interface AppUserContextProps {
  children: React.ReactNode;
}

const AppUserProvider = ({ children }: AppUserContextProps) => {
  const [userData, setUserData] = useState<UserData>({
    id: 0,
    first_name: "",
    last_name: "",
    username: "",
    language_code: "",
    is_premium: false,
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (WebApp.initDataUnsafe.user) {
        setUserData(WebApp.initDataUnsafe.user as UserData);
      }
    }
  }, []);

  return (
    <AppUserContext.Provider value={userData}>
      {children}
    </AppUserContext.Provider>
  );
};

export { AppUserContext, AppUserProvider };
