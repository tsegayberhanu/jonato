"use client"
import React, { useContext, useState } from "react";
import { CoinBalanceContext } from "../Contexts/CoinBalanceContext";
import { MultitapContext } from "../Contexts/MultitapContext";
import { TankCoinContext } from "../Contexts/TankCoinContext";
//tap value
//tank coin
//increase coin balance
//decrease tank coin
interface Bubble {
  id: string;
  top: string;
  left: string;
}

const ClickerCard = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const { increaseBalance } = useContext(CoinBalanceContext);
  const { tapValue } = useContext(MultitapContext);
  const { tankStackCoin, decreaseTankStackCoin } = useContext(TankCoinContext);

  const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    if (tankStackCoin > tapValue) {
      const touches = event.changedTouches;
      increaseBalance(tapValue);
      decreaseTankStackCoin(tapValue);
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
    }
  };

  return (
    <div>
      <button
        onTouchStart={handleTouchStart}
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
          +{tapValue}
        </div>
      ))}
    </div>
  );
};

export default ClickerCard;
