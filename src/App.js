// import Navbar from "./components/Navbar/Navbar";
// import Intro from "./components/Intro/Intro";
// import Services from "./components/Services/Services";
// import "./App.css";
// import Experience from "./components/Experience/Experience";
// import Works from "./components/Works/Works";
// import Portfolio from "./components/Portfolio/Portfolio";
// import Testimonial from "./components/Testimonials/Testimonial";
// import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";
// import Game from "./components/TicTacToe/Game/game";

// import { useContext } from "react";
// import { themeContext } from "./Context";
// function App() {
// const theme = useContext(themeContext);
// const darkMode = theme.state.darkMode;
// return (
// <div
//   className="App"
//   style={{
//     background: darkMode ? "black" : "",
//     color: darkMode ? "white" : "",
//   }}
// >
//   <Navbar />
//   <Intro />
//   <Works />
//   <Experience />
//   <Game />
//   <Portfolio />
//   <Testimonial />
//   <Contact />
//   <Footer />
// </div>
// );
// }

// export default App;



//---------------------

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route,Routes ,Link} from "react-router-dom";
import { BrowserRouter as Switch } from "react-router-dom";

// import { Link } from "react-scroll";

import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Game from "./components/TicTacToe/Game/game";
import Toggle from "./components/Toggle/Toggle";

import { useContext } from "react";
import { themeContext } from "./Context";

function App()  {
  console.log("testing",App);
const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}>
        {/* <Navbar/>
        <Intro/>
        <Experience/>
        <Works/>
        <Services/>
        <Footer/> */}
        {/* <Portfolio/> */}
      <Router>
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
              <Link activeClass="active" to="/" spy={true} smooth={true}>
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
          </ul>
        </div>
        <div>
        <Link to='/game'> <button className="button n-button">Game</button></Link>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>

    
    </div>
    {/* <Navbar></Navbar> */}
        <Routes>
        {/* <Route path='/' element={<Navbar/>}></Route> */}
        <Route exact path='/experience' element={<Experience/>}></Route>
        <Route path='/' element={<Intro/>}></Route>
        <Route path='/works' element={<Works/>}></Route>
        <Route path='/footer' element={<Footer/>}></Route>
        <Route path='/portfilio' element={<Portfolio/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route exact path='/game' element={<Game/>}></Route>
        </Routes>
      </Router>
      <Footer></Footer>

    </div>
  );
}

export default App;
