import './App.css';
// import {BrowserRouter as Router,Routes,Route} from "react-router-dom"; 
import Home from './pages/Home';
import Projects from './pages/Projects';
import TechnicalSkills from './pages/TechnicalSkills';
import Navbar from './components/Navbar';
import React from 'react';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ProjectDisplay from './pages/ProjectDisplay';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/projects" element={<Projects/>}/>
          <Route exact path="/project/:id" element={<ProjectDisplay/>}/>
          <Route exact path="/TechnicalSkills" element={<TechnicalSkills/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
