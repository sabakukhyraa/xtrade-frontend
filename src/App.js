import "./index.css";
import "./components/Sidebar";
import Sidebar from "./components/Sidebar";
import ProfileSection from "./components/ProfileSection";
import WalletStatus from "./components/WalletStatus";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex items-center flex-col container lg:px-12">
        <ProfileSection />
        <WalletStatus />
      </div>
    </div>
  );
}

export default App;
