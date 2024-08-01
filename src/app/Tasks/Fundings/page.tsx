import React from "react";
import AppAddCard from "@/app/Components/AppAddCard";
import niberIcon from "/public/niberIcon.ico"
const page = () => {
  return (
    <div className="flex gap-6 flex-wrap">
      <AppAddCard adCardImageAlt="image" adCardImageSrc={niberIcon} adCardTitle="Niber Foundation" />
      <AppAddCard adCardImageAlt="image" adCardImageSrc={niberIcon} adCardTitle="Niber Foundation" />
      <AppAddCard adCardImageAlt="image" adCardImageSrc={niberIcon} adCardTitle="Niber Foundation" />
      <AppAddCard adCardImageAlt="image" adCardImageSrc={niberIcon} adCardTitle="Niber Foundation" />
      <AppAddCard adCardImageAlt="image" adCardImageSrc={niberIcon} adCardTitle="Niber Foundation" />
      <AppAddCard adCardImageAlt="image" adCardImageSrc={niberIcon} adCardTitle="Niber Foundation" />
    </div>
  );
};

export default page;
