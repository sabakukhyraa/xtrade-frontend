import "./css/index.css";
import "./components/Sidebar";
import Sidebar from "./components/Sidebar";
import ProfileSection from "./components/ProfileSection";
import DashboardPage from "./pages/DashboardPage";


function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex items-center flex-col container lg:px-12">
        <ProfileSection />
        <DashboardPage />
      </div>
    </div>
  );
}

export default App;
