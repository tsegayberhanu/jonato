"use client";
import SocialAccordion from "@/app/Components/SocialAccordion";
import SocialCard from "@/app/Components/SocialCard";
import React from "react";

import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

import { SocialTasksContext } from "@/app/Contexts/SocialTasksContext";
import { useContext } from "react";

const icons = {
  Telegram:<FaTelegram/>,
  Facebook:<FaFacebook/>,
  Instagram:<FaInstagram/>,
  Tiktok:<FaTiktok/>,
  Xtwitter:<FaXTwitter/>,
  Youtube:<FaYoutube/>
}

const telegramLinks = [
  {
    taskId: "Shemu Group",
    taskTitle: "Shemu Group",
    taskReward: 200,
    taskLink: "task.link",
    isTaskDone: false,
    points: 200,
    link: "https://t.me/concept_developer",
  },

  {
    taskId: "Green Tech Africa",
    taskTitle: "Green Tech Africa",
    taskReward: 200,
    taskLink: "task.link",
    isTaskDone: false,
    points: 200,
    link: "https://t.me/concept_developer",
  },

  {
    taskId: "Afri General Trading",
    taskTitle: "Afri General Trading",
    taskReward: 200,
    taskLink: "task.link",
    isTaskDone: false,
    points: 200,
    link: "https://t.me/concept_developer",
  },
];

const socialAccordionLists = [
  {
    rewardPoints: 2000,
    socialTitle: "Telegram",
    socialIcon: <FaTelegram />,
    undoneTask: telegramLinks.some(link => !link.isTaskDone) ,
    allChildLinks: telegramLinks,
  },
];

const SocialsUI = () => {
  const { socialTasks } = useContext( SocialTasksContext );
  console.log(socialTasks)

  return (
    <div className="flex flex-col gap-2">
      {socialAccordionLists.length &&
        socialAccordionLists.map((accordionList, index) => (
          <SocialAccordion
            key={index}
            rewardPoints={accordionList.rewardPoints}
            socialTitle={accordionList.socialTitle}
            SocialIcon={accordionList.socialIcon}
            unDonetask={accordionList.undoneTask}
          >
            {accordionList.allChildLinks.map((task) => (
              <SocialCard
                key={task.taskId}
                taskId={task.taskId}
                taskTitle={task.taskTitle}
                taskReward={200}
                taskLink={task.link}
                isTaskDone={false}
              />
            ))}
          </SocialAccordion>
        ))}

      <SocialAccordion
        rewardPoints={2000}
        socialTitle={"Facebook"}
        SocialIcon={<FaFacebook />}
        unDonetask={true}
      >
        <SocialCard
          taskId={""}
          taskTitle={"FaceBook"}
          taskReward={200}
          taskLink={"task.link"}
          isTaskDone={false}
        />
      </SocialAccordion>

      <SocialAccordion
        rewardPoints={2000}
        socialTitle={"Youtube"}
        SocialIcon={<FaYoutube />}
        unDonetask={false}
      >
        <SocialCard
          taskId={""}
          taskTitle={"Work"}
          taskReward={200}
          taskLink={"task.link"}
          isTaskDone={false}
        />
      </SocialAccordion>

      <SocialAccordion
        rewardPoints={2000}
        socialTitle={"Instagram"}
        SocialIcon={<FaInstagram />}
        unDonetask={true}
      >
        <SocialCard
          taskId={""}
          taskTitle={"Shemu"}
          taskReward={200}
          taskLink={"task.link"}
          isTaskDone={false}
        />
      </SocialAccordion>

      <SocialAccordion
        rewardPoints={2000}
        socialTitle={"Tiktok"}
        SocialIcon={<FaTiktok />}
        unDonetask={true}
      >
        <SocialCard
          taskId={""}
          taskTitle={"Shemu"}
          taskReward={200}
          taskLink={"task.link"}
          isTaskDone={false}
        />
      </SocialAccordion>

      <SocialAccordion
        rewardPoints={2000}
        socialTitle={"X"}
        SocialIcon={<FaXTwitter />}
        unDonetask={false}
      >
        <SocialCard
          taskId={""}
          taskTitle={"Shemu"}
          taskReward={200}
          taskLink={"task.link"}
          isTaskDone={false}
        />
      </SocialAccordion>
    </div>
  );
};

export default SocialsUI;
