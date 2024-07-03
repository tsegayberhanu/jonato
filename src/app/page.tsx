"use client";
import { useState } from "react";
import AppMenu from "./Components/AppMenu";
interface Bubble {
  id: string;
  top: string;
  left: string;
}
export default function Home() {
  const [energyLimit] = useState(1000);
  const [tankCoins, setTankCoins] = useState(1000);
  const [count, setCount] = useState(0);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  const handleTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    event.preventDefault();
    const touches = event.changedTouches;
    for (let i = 0; i < touches.length; i++) {
      console.log(`touchend: ${i}.`);
    }
  };

  const handleTouchCancel = (event: React.TouchEvent<HTMLElement>) => {
    event.preventDefault();
    const touches = event.changedTouches;
    for (let i = 0; i < touches.length; i++) {
      console.log(`touchcancel: ${i}.`);
    }
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    const touches = event.changedTouches;
    console.log(touches[0].identifier);
    setCount(count + 1); // Increment points on each tap
    setTankCoins(tankCoins - 1);
    const tapX = event.touches[0].clientX;
    const tapY = event.touches[0].clientY;
    // Create new bubble with initial position at tap position
    const newBubble = {
      id: `${touches[0].identifier}-${Date.now().toLocaleString()}`,
      top: `${tapY - 16}px`, // Set initial top position to tap Y coordinate
      left: `${tapX - 16}px`, // Set initial left position to tap X coordinate
    };
    setBubbles([...bubbles, newBubble]);
    // Remove the bubble after 500ms
    setTimeout(() => {
      setBubbles(bubbles.filter((bubble) => bubble.id !== newBubble.id));
    }, 500);
  };

  const progress = (tankCoins / energyLimit) * 100;

  return (
    <div className="flex flex-col items-center gap-4">
      <div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            <div>
              <p className="text-3xl text-yellow-400 font-bold">$</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">{count}</p>
            </div>
          </div>
          <div>
            <p className="text-white font-thin text-center">Mastery</p>
          </div>
        </div>
      </div>

      <div>
        <button
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchCancel}
          className="min-h-64 min-w-64  border-8  border-yellow-950 bg-gradient-to-b from-black to-stone-200 via-gray-800  rounded-full shadow-lg"
        ></button>
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute text-5xl font-bold text-white"
            style={{
              top: bubble.top,
              left: bubble.left,
              animation: "bubbleUp 0.5s forwards",
            }}
          >
            +1
          </div>
        ))}
      </div>

      <div>
        <div className="w-full flex flex-col gap-1 ">
          <div className="self-center text-white">
            {tankCoins}/{energyLimit}
          </div>
          <div className="">
            <div className="min-w-64 p-1 bg-gray-600 min-h-2 rounded-full">
              <div
                style={{ width: `${progress}%` }}
                className="bg-green-600 min-h-2 rounded-full"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
