"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const AppMenu = () => {
  const pathname = usePathname();
  const style =
    "bg-gray-800 rounded-sm flex flex-grow h-14 justify-center items-center";

  return (
    <div style={{maxWidth:'inherit', width:'inherit'}} className="bg-slate-950 flex pt-4 mx-auto  gap-3 h-28 bottom-0 fixed ">
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
