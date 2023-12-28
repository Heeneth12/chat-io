import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RandomeChatPage from "./pages/RandomeChatPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/RandomChat" element={<RandomeChatPage />} />
      </Routes>
    </Router>
  );
}

export default App;
