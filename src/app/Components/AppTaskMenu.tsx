"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AppTaskMenu = () => {
  const pathname = usePathname();
  const btnStyle = "text-white p-2 rounded-md text-sm font-semibold  hover:bg-black ";
  return (
    <div className="flex flex-wrap  justify-evenly bg-gray-900 px-2 py-3 rounded-md sticky top-4">
      <button
        className={`${btnStyle} ${
          pathname == "/Tasks/Socials" ? "bg-black" : ""
        }`}
      >
        <Link href="/Tasks/Socials">Socials</Link>
      </button>

      <button
        className={`${btnStyle} ${
          pathname == "/Tasks/Products" ? "bg-black" : ""
        }`}
      >
        <Link href="/Tasks/Products">Products</Link>
      </button>

      <button
        className={`${btnStyle} ${
          pathname == "/Tasks/Educations" ? "bg-black" : ""
        }`}
      >
        <Link href="/Tasks/Educations">Educations</Link>
      </button>
      <button
        className={`${btnStyle} ${
          pathname == "/Tasks/Services" ? "bg-black" : ""
        }`}
      >
        <Link href="/Tasks/Services">Services</Link>
      </button>
      <button
        className={`${btnStyle} ${
          pathname == "/Tasks/Fundings" ? "bg-black" : ""
        }`}
      >
        <Link href="/Tasks/Fundings">Fundings</Link>
      </button>
    </div>
  );
};

export default AppTaskMenu;
