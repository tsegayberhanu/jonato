import React from "react";
import AppTaskMenu from "../Components/AppTaskMenu";
interface LayoutProps {
  children: React.ReactNode;
}
const layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-white text-3xl">Tasks</div>
      <AppTaskMenu />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default layout;
