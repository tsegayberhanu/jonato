import React from "react";

import { FaTelegram } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import SocialAccordion from "@/app/Components/SocialAccordion";
import SocialCard from "@/app/Components/SocialCard";

const telegramLinks = [
  {
    title: "Shemu Group",
    points: 200,
    link: "https://t.me/concept_developer",
  },

  {
    title: "Green Tech Africa",
    points: 200,
    link: "https://t.me/concept_developer",
  },

  {
    title: "Afri General Trading",
    points: 200,
    link: "https://t.me/concept_developer",
  },
];

const youtubeLinks = [
  {
    title: "Shemu Group",
    points: 200,
    link: "https://t.me/concept_developer",
  },

  {
    title: "Green Tech Africa",
    points: 200,
    link: "https://t.me/concept_developer",
  },

  {
    title: "Afri General Trading",
    points: 200,
    link: "https://t.me/concept_developer",
  },
];

const facebookLinks = [
  {
    title: "Shemu Group",
    points: 200,
    link: "https://t.me/concept_developer",
  },

  {
    title: "Green Tech Africa",
    points: 200,
    link: "https://t.me/concept_developer",
  },

  {
    title: "Afri General Trading",
    points: 200,
    link: "https://t.me/concept_developer",
  },
];

const instagramLinks = [
  {
    title: "Shemu Group",
    points: 200,
    link: "https://t.me/concept_developer",
  },

  {
    title: "Green Tech Africa",
    points: 200,
    link: "https://t.me/concept_developer",
  },

  {
    title: "Afri General Trading",
    points: 200,
    link: "https://t.me/concept_developer",
  },
];

const tiktok = [
  {
    title: "Shemu Group",
    points: 200,
    link: "https://t.me/concept_developer",
  },

  {
    title: "Green Tech Africa",
    points: 200,
    link: "https://t.me/concept_developer",
  },

  {
    title: "Afri General Trading",
    points: 200,
    link: "https://t.me/concept_developer",
  },
];

const xtwitter = [
  {
    title: "Shemu Group",
    points: 200,
    link: "https://t.me/concept_developer",
  },

  {
    title: "Green Tech Africa",
    points: 200,
    link: "https://t.me/concept_developer",
  },

  {
    title: "Afri General Trading",
    points: 200,
    link: "https://t.me/concept_developer",
  },
];

const socialAccordionLists = [
  {
    totalPoints: 2000,
    socialTitle: "Telegram",
    socialIcon: <FaTelegram />,
    undoneTask: false,
    allChildLinks: telegramLinks,
  },
];

const SocialsPage = () => {
  return (
    <div className="flex flex-col gap-2">
      {socialAccordionLists.length &&
        socialAccordionLists.map((accordionList) => (
          <SocialAccordion
            totalPoints={accordionList.totalPoints}
            socialTitle={accordionList.socialTitle}
            SocialIcon={accordionList.socialIcon}
            unDonetask={accordionList.undoneTask}
          >
            {accordionList.allChildLinks.map((link) => (
              <SocialCard
                title={link.title}
                points={link.points}
                link={link.link}
              />
            ))}
          </SocialAccordion>
        ))}

      <SocialAccordion
        totalPoints={2000}
        socialTitle={"Facebook"}
        SocialIcon={<FaFacebook />}
        unDonetask={true}
      >
        <SocialCard
          title="Shemu Group"
          points={200}
          link="https://t.me/concept_developer"
        />
      </SocialAccordion>

      <SocialAccordion
        totalPoints={2000}
        socialTitle={"Youtube"}
        SocialIcon={<FaYoutube />}
        unDonetask={false}
      >
        <SocialCard
          title="Shemu Group"
          points={200}
          link="https://t.me/concept_developer"
        />
      </SocialAccordion>

      <SocialAccordion
        totalPoints={2000}
        socialTitle={"Instagram"}
        SocialIcon={<FaInstagram />}
        unDonetask={true}
      >
        <SocialCard
          title="Shemu Group"
          points={200}
          link="https://t.me/concept_developer"
        />
      </SocialAccordion>

      <SocialAccordion
        totalPoints={2000}
        socialTitle={"Tiktok"}
        SocialIcon={<FaTiktok />}
        unDonetask={true}
      >
        <SocialCard
          title="Shemu Group"
          points={200}
          link="https://t.me/concept_developer"
        />
      </SocialAccordion>

      <SocialAccordion
        totalPoints={2000}
        socialTitle={"X"}
        SocialIcon={<FaXTwitter />}
        unDonetask={false}
      >
        <SocialCard
          title="Shemu Group"
          points={200}
          link="https://t.me/concept_developer"
        />
      </SocialAccordion>
    </div>
  );
};

export default SocialsPage;
