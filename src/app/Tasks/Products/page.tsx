import React from "react";
import evcar from "/public/evcar.jpg";
import AppAddCard from "@/app/Components/AppAddCard";

const page = () => {
  return (
    <div className="flex gap-6 flex-wrap">
      <AppAddCard adCardImageAlt="image" adCardImageSrc={evcar} adCardTitle="car" />
      <AppAddCard adCardImageAlt="image" adCardImageSrc={evcar} adCardTitle="car" />
      <AppAddCard adCardImageAlt="image" adCardImageSrc={evcar} adCardTitle="car" />
      <AppAddCard adCardImageAlt="image" adCardImageSrc={evcar} adCardTitle="car" />
    </div>
  );
};

export default page;
