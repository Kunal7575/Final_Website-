// import './App.css';
// // import {BrowserRouter as Router,Routes,Route} from "react-router-dom"; 
// import Home from './pages/Home';
// import Projects from './pages/Projects';
// import TechnicalSkills from './pages/TechnicalSkills';
// import Navbar from './components/Navbar';
// import React from 'react';
// import Footer from './components/Footer';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
// import ProjectDisplay from './pages/ProjectDisplay';
// function App() {
//   return (
//     <>
//       <Router>
//         <Navbar/>
//         {/* <div className="App"> */}
//         <Routes>
//           <Route exact path="/"/>
//             <Home/>
//             {/* </Route> */}
//             <Route exact path="/projects"/>
//             <Projects/>
//             {/* </Route> */}
//             <Route exact path="/project/:id"/>
//             <ProjectDisplay/>
//             {/* </Route> */}
//             <Route exact path="/TechnicalSkills"/>
//             <TechnicalSkills/>
//             {/* </Route> */}
//           {/* <Route exact path="/projects" element={<Projects/>}/>
//           <Route exact path="/project/:id" element={<ProjectDisplay/>}/>
//           <Route exact path="/TechnicalSkills" element={<TechnicalSkills/>}/> */}
          
//         </Routes>
//         {/* </div> */}
//         <Footer/>
//       </Router>
//     </>
//   );
// }

// export default App;








import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import TechnicalSkills from "./pages/TechnicalSkills";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import Img from "./pages/Img";
function App() {
  return (
    <div className="App">
        <div className="relative">
      <Router>
        <Navbar />
        <Img/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/TechnicalSkills" element={<TechnicalSkills />} />

        </Routes>
        <Footer />
      </Router>
  </div>
    </div>
  );
}

export default App;