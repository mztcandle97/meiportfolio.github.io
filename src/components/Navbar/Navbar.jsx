// import React from "react";
// import Toggle from "../Toggle/Toggle";
// import { BrowserRouter as Redirect, Router } from "react-router-dom";

// import "./Navbar.css";
// import { Link } from "react-scroll";
// import Github from "../../img/github.png";
// import LinkedIn from "../../img/linkedin.png";
// import {index} from "../TicTacToe/Game/game";
// const navbar = () => {
//   return (
//     <div className="n-wrapper" id="Navbar">
//       {/* left */}
//       <div className="n-left">
//         <div className="n-name">Mei</div>
//         <Toggle />
//       </div>
//       {/* right */}
//       <div className="n-right">
//         <div className="n-list">
//           <ul style={{ listStyleType: "none" }}>
//           {/* <nav>
//         <Link to="navbar">My Profile</Link>
//       </nav> */}
//             {/* <li>
//               <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
//               <img src={Github} alt="" />
//               </Link>
//             </li> */}

//             {/* <li>
//               <Link to="services" spy={true} smooth={true}>
//                 Serivces
//               </Link>
//             </li>
//             <li>
//               <Link to="works" spy={true} smooth={true}>
//                 Experience
//               </Link>
//             </li>
//             <li>
//               <Link to="portfolio" spy={true} smooth={true}>
//               <img src={LinkedIn} alt="" />
//               </Link> */}
//               {/* <a href="https://www.linkedin.com/in/mayzinthaw"
//         className="youtube social">
//         <img src={LinkedIn} alt="" />
//       </a> */}
//             {/* </li>
//             <li>
//               <Link to="testimonial" spy={true} smooth={true}>
//                 Testimonial
           
//             {/* </li> */}
//           </ul>
         
//         </div>
//         <Redirect to={{
//             pathname:"TicTacToe/Game/game",
//           }}>
//           <button className="button n-button">Tic</button>

//           </Redirect>
//         <Link to="contact" spy={true} smooth={true}>
//         <button className="button n-button">Contact</button>
//         </Link>
//         {/* <Router>

//         <a href="/TicTacToe/Game/game"
//         >
//         <button className="button n-button">Tic Tac Toe</button>
//       </a>
//       </Router> */}
//              <Link to="game" spy={true} smooth={true}>
//         <button className="button n-button">Tic Tac Toe</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default navbar;

import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import Intro from "../Intro/Intro";

const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Mei</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="game" spy={true} smooth={true}>
                Game
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    
    </div>
    
  );
};

export default navbar;

