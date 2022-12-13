import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "../css/index.css";
import "../components/Sidebar";
import Sidebar from "../components/Sidebar";
import ProfileSection from "../components/ProfileSection";
import Dashboard from "../views/DashboardPage";
import Home from "../views/HomePage"

function Layout() {
  return (
    <Router>
      <Sidebar />
      <div className="flex items-center flex-col w-full !pl-14 md:!pl-[120px] lg:!pl-[348px]">
        <ProfileSection />
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path="/" element={<Home />} />
          </Routes>
      </div>
    </Router>
    
  );
}

export default Layout;