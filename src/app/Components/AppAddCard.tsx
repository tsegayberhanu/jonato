"use client";
import React, { useState } from "react";
import { useRef } from "react";
import Image, { StaticImageData } from "next/image";

interface AppAdCardProps {
  adCardId?:string;
  adCardType?:string;
  adCardImageSrc: StaticImageData;
  adCardImageAlt:string;
  adCardCost?: string;
  adCardTitle: string;
  adCardLevel?:number;
  adCardModalTitle?: string;
  adCardDescription?: string;
  
}

const AppAddCard = ({ adCardTitle, adCardDescription,adCardImageAlt, adCardImageSrc, adCardLevel, adCardCost }: AppAdCardProps) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [showModal, setShowModal] = useState(false);
  
  const handleClick = () => {
    setShowModal(!showModal);
    showModal ? modalRef.current?.close() : modalRef.current?.showModal();
  };

  return (
    <>
      <dialog ref={modalRef}>
        <div
          style={{ boxShadow: "0 -8px 64px rgb(249 250 251)" }}
          className="fixed bottom-0 left-0 flex flex-col gap-2 justify-around items-center p-4 rounded-t-3xl h-fit  border-t-white border-t-2 bg-neutral-950 w-full"
        >
          <div className="flex w-full justify-end">
            <button
              onClick={handleClick}
              className="rounded-full self-end bg-slate-800 bg-opacity-20 py-4 px-6 text-xl text-white"
            >
              X
            </button>
          </div>
          <div>
            <p className="text-xl p-4 self-center  text-white font-semibold">
              {adCardTitle}
            </p>
          </div>
          <div className="relative w-full flex justify-center">
            <Image
              src={adCardImageSrc}
              height={50}
              width={100}
              alt={adCardImageAlt}
              className="bg-inherit  rounded-sm"
            />
          </div>
          <div className="text-white max-w-sm p-2">
            {adCardDescription}
          </div>
          <div className="w-full flex justify-center">
            <button
              className="p-4 w-1/2 bg-blue-900 rounded-md "
              onClick={handleClick}
            >
              continue
            </button>
          </div>
        </div>
      </dialog>

      <div
        onClick={handleClick}
        className="bg-gray-900  text-white h-fit  p-2 w-1/3  flex flex-col gap-2 justify-center items-center flex-grow  rounded-md "
      >
        <div className="flex h-fit gap-4 pb-2">
          <div className="self-center h-16 w-16">
            <Image
              src={adCardImageSrc}
              alt={adCardImageAlt}
              height={90}
              width={120}
              className="shadow-inner bg-white rounded-sm border-4 border-white"
            ></Image>
          </div>

          <div className="flex flex-col justify-between h-16 ">
            <div className="text-stone-100 text-sm font-semibold">
              {adCardTitle}
            </div>
            <div>
              <p className="text-slate-100 text-xs ">profit per hour</p>
              <p className="text-white">{adCardLevel}</p>
            </div>
          </div>
        </div>
        <div className=" border-b-slate-950 border-b w-full"></div>

        <div className="flex justify-around gap-2 ">
          <div className="text-sm">lvl {adCardLevel}</div>
          <div className=" border-r-slate-950 border-r"></div>
          <div className="text-sm">{adCardCost}</div>
        </div>
      </div>
      
    </>
  );
};

export default AppAddCard;
