
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Dogs from "./pages/Dogs";
import Cats from "./pages/Cats";
import Sheeps from "./pages/Sheeps";
import Goats from "./pages/Goats";

const App = () => {
  return (
    <Router>
      <Navbar></Navbar>
        <Routes>
          <Route exact path="/pages/Dogs" element={<Dogs/>}/>
          <Route exact path="/pages/Cats" element={<Cats/>}/>
          <Route exact path="/pages/Goats" element={<Goats/>}/>
          <Route path="/pages/Sheeps" element={<Sheeps/>}/>
        </Routes>
    </Router>
  );
}

export default App;
