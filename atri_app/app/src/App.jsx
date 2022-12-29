import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Home1 from "./pages/Home1.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/Home1" element={<Home1 />} />
    </Routes>
  );
}
