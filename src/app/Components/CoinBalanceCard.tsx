"use client"
import React, { useContext } from 'react'
import { CoinBalanceContext } from '../Contexts/CoinBalanceContext'
const CoinBalanceCard = () => {
  const {balance} = useContext(CoinBalanceContext)
  return (
    <div>
    <div className="flex flex-col gap-2">
      <div className="flex gap-1">
        <div>
          <p className="text-3xl text-yellow-400 font-bold">$</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-white">{balance}</p>
        </div>
      </div>
      <div>
        <p className="text-white font-thin text-center">Mastery</p>
      </div>
    </div>
  </div>
  )
}
export default CoinBalanceCard