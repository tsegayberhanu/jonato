import ClickerCard from "../Components/ClickerCard";
import TankCoinProgress from "../Components/TankCoinProgress";
import CoinBalanceCard from "../Components/CoinBalanceCard";
export default function page() {
  return (
    <div className="flex flex-col items-center gap-4">
      <CoinBalanceCard />
      <ClickerCard />
      <TankCoinProgress />
    </div>
  );
}
