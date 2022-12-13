import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../css/index.css";
import "../components/Sidebar";
import Sidebar from "../components/Sidebar";
import ProfileSection from "../components/ProfileSection";
import Dashboard from "../views/DashboardPage";
import Wallet from "../views/WalletPage";
import Cards from "../views/CardsPage";
import Settings from "../views/SettingsPage";
import FAQ from "../views/FAQPage";
import Home from "../views/Home";

function Layout() {
  return (
    <Router>
      <Sidebar />
      <div className="flex items-center flex-col w-full !pl-14 md:!pl-[120px] lg:!pl-[348px]">
        <ProfileSection />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Layout;
