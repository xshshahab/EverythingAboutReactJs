import { Route, BrowserRouter as Router, Routes } from "react-router";
import Sidebar from "./components/sidebar/Sidebar";
import MainContent from "./components/main/MainContent";

function App() {
  return (
    <Router>
      <main className="flex h-screen">
        <Sidebar />
        <div className="flex flex-wrap justify-between w-full rounded">
          <Routes>
            <Route path="/" element={<MainContent />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
