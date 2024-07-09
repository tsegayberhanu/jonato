"use client";
import React from "react";
import { useState, useRef } from "react";
import { IoIosArrowForward} from "react-icons/io";
import { IoClose } from "react-icons/io5";

interface BoostCardProps extends BoostProps, BoostMaximazedProps {
  
}

const BoostCard = ({
  boostTitle,
  BoostIcon,
  boostUpCoin,
  boostUnit,
  boostTarget,
  boostLongDescription,
  boostShortDescription
}:BoostCardProps) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {

    setShowModal(!showModal);
    showModal ? modalRef.current?.close() : modalRef.current?.showModal();

  };
  return (
    <div>
      <dialog ref={modalRef}>
        <div style={{ boxShadow: "0 -4px 50px rgb(249 250 251)" }} className=" bg-gray-950 bg-opacity-90 border-t border-t-white rounded-t-3xl py-4 px-8 pb-12 text-white flex flex-col gap-6 items-center  border-black fixed right-0 bottom-0 h-3/4 w-full">
          <div className="self-end text-xl">
            <button onClick={handleClick}>
              <IoClose className="h-8 w-8" />
            </button>
          </div>
               <BoostMaximazed boostTitle={boostTitle} BoostIcon={BoostIcon} boostLongDescription={boostLongDescription} boostShortDescription={boostShortDescription} boostTarget={boostTarget}  boostUnit={boostUnit} boostUpCoin={boostUpCoin} />
          <button
            onClick={handleClick}
            className="w-full bg-purple-800 bg-opacity-95 rounded-lg p-4"
          >
            Get It!
          </button>
        </div>
      </dialog>

      <div className="flex justify-between p-3 bg-slate-500 bg-opacity-10 text-white rounded-md">
        <Boost
          boostTitle={boostTitle}
          BoostIcon={BoostIcon}
          boostTarget={boostTarget}
          boostUnit={boostUnit}
          boostUpCoin={boostUpCoin}
        />

        <div onClick={handleClick} className="self-center cursor-pointer">
          <IoIosArrowForward className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
};

export default BoostCard;

interface BoostProps {
  boostTitle: string;
  BoostIcon: React.ReactElement;
  boostUpCoin: number;
  boostUnit: string;
  boostTarget: number;
}

const Boost = ({
  boostTitle,
  BoostIcon,
  boostUpCoin,
  boostUnit,
  boostTarget,
}: BoostProps) => {
  return (
    <div className="flex gap-4">
      <div className="self-center">
        <BoostIcon.type
          {...BoostIcon.props}
          className="fill-slate-300 w-10 h-10"
        />
      </div>
      <div className="flex flex-col">
        <div>{boostTitle}</div>
        <div className="flex gap-2">
          <p>{boostUpCoin}</p>
          <p className=" self-center border-r h-3/4 border-gray-600"></p>
          <p>
            {boostTarget} {boostUnit}
          </p>
        </div>
      </div>
    </div>
  );
};

interface BoostMaximazedProps extends BoostProps {
  boostLongDescription:string;
  boostShortDescription:string
}

const BoostMaximazed = ({boostTitle,
  BoostIcon,
  boostUpCoin,
  boostUnit,
  boostTarget,
  boostLongDescription,
  boostShortDescription
}:BoostMaximazedProps) => {
  return (
    <div className="flex  flex-col justify-around items-center gap-3">
      <div className="self-center flex flex-col items-center">
        <BoostIcon.type {...BoostIcon.props} className="fill-white w-16 h-16" />
        <p className="font-bold text-2xl">{boostTitle}</p>
      </div>

      <div className="text-white flex flex-col items-center">
        <p> {boostLongDescription} </p>
        <p> {boostShortDescription} </p>
      </div>

      <div className="flex gap-2">
        <p className="font-bold">{boostUpCoin}</p>
        <p className=" self-center border-r h-3/4 border-gray-600"></p>
        <p className="font-light">{boostTarget} {boostUnit}</p>
      </div>
    </div>
  );
};
