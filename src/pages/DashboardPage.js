import WalletStatus from "../components/WalletStatus";
import InfoSection from "../components/InfoSection";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-12 w-full">
      <WalletStatus />
      <InfoSection />
    </div>
  )
}
