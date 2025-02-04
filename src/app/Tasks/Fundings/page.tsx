import React from "react";
import AppAddCard from "@/app/Components/AppAddCard";
import communityDev from "/public/communityDev.jpg"
const page = () => {
  return (
    <div className="flex gap-6 flex-wrap">
      <AppAddCard adCardImageAlt="image" adCardImageSrc={communityDev} adCardTitle="Community Development" />
      <AppAddCard adCardImageAlt="image" adCardImageSrc={communityDev} adCardTitle="Community Development" />
      <AppAddCard adCardImageAlt="image" adCardImageSrc={communityDev} adCardTitle="Community Development" />
      <AppAddCard adCardImageAlt="image" adCardImageSrc={communityDev} adCardTitle="Community Development" />
      <AppAddCard adCardImageAlt="image" adCardImageSrc={communityDev} adCardTitle="Community Development" />
      <AppAddCard adCardImageAlt="image" adCardImageSrc={communityDev} adCardTitle="Community Development" />
    </div>
  );
};

export default page;
