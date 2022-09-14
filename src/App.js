
import './App.css';
//import ReactDOM from "react-dom/client";
import React, {useEffect} from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Interests from "./pages/Interests";

const App = () => {


  useEffect(() => {
    // call api or anything
    console.log("loaded");
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = (e) => {
    console.log('Scrolling!')
    console.log('Scroll position is ' + window.scrollY);
    var addClasses = false;
    if(window.scrollY >= 200){
      console.log('past the scroll point!');
      addClasses = true;
      if(addClasses){
        document.getElementById("tabList").classList.add('docked');
      }
    } else {
      addClasses = false;
      document.getElementById("tabList").classList.remove('docked');
    }
  }

  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<AboutMe/>}/>
        <Route exact path="/AboutMe" element={<AboutMe/>}/>
        <Route exact path="/Projects" element={<Projects/>}/>
        <Route exact path="/AboutMe" element={<AboutMe/>}/>
        <Route exact path="/Interests" element={<Interests/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);
