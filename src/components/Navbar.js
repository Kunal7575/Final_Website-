// import React from 'react'
// // import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "../styles/Navbar.css";
// // import ReorderIcon from "@material-ui/icons/Reorder";
// function Navbar() {
//   return (
//   <div>
//     <div>
//   <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="navbar">
//     <Link className="navbar-brand" to="/">Portfolio</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNavDropdown">
//       <ul className="navbar-nav">
//         <li className="links">
//           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//         </li>
//         <li className="links">
//           <a className="nav-link active" aria-current="page" to="/projects">Projects</a>
//         </li>
//         <li className="links">
//           <Link className="nav-link active" aria-current="page" to="/TechnicalSkills">Technical Skills</Link>
//         </li>
       
//       </ul>
//     </div>
//   </div>
// </nav>
//       </div>
//     </div>
//   );
// }

// export default Navbar;





      









// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import "../styles/Navbar.css";
// import ReorderIcon from "@material-ui/icons/Reorder";

// function Navbar() {
//   const [expandNavbar, setExpandNavbar] = useState(false);

//   const location = useLocation();

//   useEffect(() => {
//     setExpandNavbar(false);
//   }, [location]);

//   return (
//     <div className="navbar" id={expandNavbar ? "open" : "close"}>
//       <div className="toggleButton">
//         <button
//           onClick={() => {
//             setExpandNavbar((prev) => !prev);
//           }}
//         >
//           <ReorderIcon />
//         </button>
//       </div>
//       <div className="links">
//         {/* <Link to="/"> Home </Link> */}
        
//         <Link className="nav-link active"  to="/">Home</Link>
//         <Link className="nav-link active"  to="/projects">Projects</Link>
//         <Link className="nav-link active"  to="/TechnicalSkills">Technical Skills</Link>
//         {/* <Link to="/projects"> Projects </Link> */}
//         {/* <Link to="/TechnicalSkills"> Technical Skills </Link> */}
//       </div>
//     </div>
//   );
// }

// export default Navbar;












import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/TechnicalSkills"> TechnicalSkills </Link>
      </div>
     
    </div>
    
  );
}

export default Navbar;