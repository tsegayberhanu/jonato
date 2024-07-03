"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const AppMenu = () => {
  const pathname = usePathname();    
  const style =
    "bg-gray-800 rounded-sm flex flex-grow min-w-16 h-14 justify-center items-center";

  return (
    <div  className="bg-red-950 w-full flex px-4 flex-wrap self-center pt-4 pb-12 gap-3 h-28 bottom-0 fixed ">
      <div className={`${style} ${pathname == "/Refs" ? "opacity-50" : ""}`}>
        <Link className="text-white" href="/Refs">
          Refs
        </Link>
      </div>
      <div className={`${style} ${pathname.startsWith("/Tasks") ? "opacity-50" : ""}`}>
        <Link className="text-white" href="/Tasks">
          Tasks
        </Link>
      </div>
      <div className={`${style} ${pathname == "/Play" ? "opacity-50" : ""}`}>
        <Link className="text-white" href="/Play">
          Play
        </Link>
      </div>
      <div className={`${style} ${pathname == "/Boost" ? "opacity-50" : ""}`}>
        <Link className="text-white" href="/Boost">
          Boost
        </Link>
      </div>
      <div className={`${style} ${pathname == "/Stats" ? "opacity-50" : ""}`}>
        <Link className="text-white" href="/Stats">
          Stats
        </Link>
      </div>
    </div>
  );
};
export default AppMenu;
