
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Interests from "./pages/Interests";

export default function App() {
  return (
    <Router>
      <Navbar></Navbar>
        <Routes>
          <Route exact path="/Projects" element={<Projects/>}/>
          <Route exact path="/AboutMe" element={<AboutMe/>}/>
          <Route exact path="/Interests" element={<Interests/>}/>
        </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
