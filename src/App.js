import "./css/index.css";
import "./components/Sidebar";
import Sidebar from "./components/Sidebar";
import ProfileSection from "./components/ProfileSection";
import DashboardPage from "./views/Dashboard";

function App() {
  return (
    <div className="">
      <Sidebar />
      <div className="flex items-center flex-col w-full pl-14 px-3 md:pl-[120px] md:px-6 lg:pl-[348px] lg:px-12">
        <ProfileSection />
        <DashboardPage />
      </div>
    </div>
  );
}

export default App;
