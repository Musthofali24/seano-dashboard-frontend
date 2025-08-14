import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Missions from "./pages/Missions/Missions";

function App() {
  return (
    <div className="">
      <header>
        <Link to="/" className="">
          Dashboard
        </Link>
        <Link to="/missions" className="">
          Missions
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </div>
  );
}

export default App;
