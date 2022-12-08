import "./index.css";
import "./components/Sidebar";
import Sidebar from "./components/Sidebar";
import ProfileSection from "./components/ProfileSection";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex items-center flex-col container">
        <ProfileSection />
      </div>
    </div>
  );
}

export default App;
