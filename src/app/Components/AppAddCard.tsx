"use client";
import React, { useState } from "react";
import { useRef } from "react";
interface AppAdCardProps {
  children?: React.ReactNode;
}
const AppAddCard = ({ children }: AppAdCardProps) => {
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
          className="fixed bottom-0 left-0 flex flex-col justify-around items-center rounded-t-3xl h-4/5  border-t-white border-t-2 bg-neutral-950 w-full"
        >
          <div className="text-white">data goes here</div>
          <div>
            <button
              className="p-2 bg-blue-900 rounded-md w-full"
              onClick={handleClick}
            >
              continue
            </button>
          </div>
        </div>
      </dialog>
      <div onClick={handleClick}
        className="bg-purple-800 bg-opacity-10 text-white  p-2 w-1/3 max-w-40 flex justify-center items-center flex-grow  rounded-md h-36"
      >
        {children}
      </div>
    </>
  );
};

export default AppAddCard;
