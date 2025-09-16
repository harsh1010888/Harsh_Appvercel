import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import TotalSummaryCards from "./components/TotalSummaryCards";
import MainContent from "./components/MainContent";
import CampaignTables from "./components/CampaignTables";
import { lineData } from "./data/chartData";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 ml-16">
        <Header />
        <div className="overflow-auto">
          <TotalSummaryCards />
          <MainContent lineData={lineData} />
          <CampaignTables />
        </div>
      </div>
    </div>
  );
}

export default App;
