import ClickerCard from "./Components/ClickerCard";
import CoinBalanceCard from "./Components/CoinBalanceCard";
import TankCoinProgress from "./Components/TankCoinProgress";
import UserInfoCard from "./Components/UserInfoCard";
export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4">
      <UserInfoCard/>
      <CoinBalanceCard />
      <ClickerCard />
      <TankCoinProgress />
    </div>
  );
}
