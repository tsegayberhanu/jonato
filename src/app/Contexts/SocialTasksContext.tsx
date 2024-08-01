"use client";
import React, { createContext, useEffect, useState } from "react";

interface SocialProp {
  socialTaskName: string;
  socialtaskId: string;
  socialTaskTitle: string;
  socialTaskReward: number;
  socialTaskLink: string;
  isSocialTaskDone: boolean;
}

interface SocialContextProps {
  socialTasks: SocialProp[] | [];
  approveTask: (taskId: string) => void;
}

const SocialTasksContext = createContext<SocialContextProps>({
  socialTasks: [],
  approveTask: (taskId: string) => {},
});

interface SocialTasksProviderProps {
  children: React.ReactNode;
}

const SocialTasksProvider = ({ children }: SocialTasksProviderProps) => {

  const [socialTasks, setSocialTasks] = useState<SocialProp[] | []>([]);
  useEffect(() => {
    fetchSocials();
  }, []);

  const fetchSocials = () => {
    const socials = [
      {
        socialTaskName: "Telegram",
        socialtaskId: "123546",
        socialTaskTitle: "Shemu",
        socialTaskReward: 12,
        socialTaskLink: "string",
        isSocialTaskDone: false,
      },
      {
        socialTaskName: "Telegram",
        socialtaskId: "123456",
        socialTaskTitle: "Afri",
        socialTaskReward: 12,
        socialTaskLink: "string",
        isSocialTaskDone: false,
      },
      {
        socialTaskName: "FaceBook",
        socialtaskId: "123456",
        socialTaskTitle: "Afri",
        socialTaskReward: 12,
        socialTaskLink: "string",
        isSocialTaskDone: false,
      },
    ];
    setSocialTasks(socials);
  };

  const approveTask = (taskId: string) => {};

  return (
    <SocialTasksContext.Provider value={{ socialTasks, approveTask }}>
      {children}
    </SocialTasksContext.Provider>
  );
};

export { SocialTasksContext, SocialTasksProvider };
