import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./assets/Components/Header";
import Home from "./assets/Components/Home";
import Study from "./assets/Components/Study";
import Calculate from "./assets/Components/Calculate";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/study" element={<Study />} />
          <Route path="/calculate" element={<Calculate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;