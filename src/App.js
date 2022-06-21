import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route,Routes ,Link} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Game from "./components/TicTacToe/Game/game";
import Service from "./img/service.png";
import ga from "./img/ga.png";
import Exp from "./img/exp.png";
import Candle1 from "./img/candle1.png";


import { useContext } from "react";
import { themeContext } from "./Context";

function App()  {
const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;
  return (
    <>
    <div className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}>
      <Router>
      <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <Link activeClass="active" to="/" spy={true} smooth={true}>
             <img src={Candle1} alt="" />
              </Link>
              <div className="n-name">Mei</div>

      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="/" spy={true} smooth={true}>
              </Link>
            </li>  
            <li>
              <Link to="works" spy={true} smooth={true}>
              <img src={Exp} alt="" />
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                  <img src={Service} alt="Service" />
              </Link>
            </li>
              <li>
                <Link to="game" spy={true} smooth={true}>
                <img src={ga} alt="" />
                </Link>
              </li>
          </ul>
        </div>
          <div>
        {/* <Link to='/game'>  <img src={ga} alt="" /></Link>
        <Link to='/floatingDiv'>  <img src={ga} alt="" /></Link> */}
        </div>
        {/* <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link> */}
      </div>

    
    </div>
        <Routes>
        {/* <Route path='/' element={<Navbar/>}></Route> */}
        <Route exact path='/experience' element={<Experience/>}></Route>
        <Route path='/' element={<Intro/>}></Route>
        <Route path='/portofolio' element={<Intro/>}></Route>
        <Route path='/meiportfolio.github.io' element={<Intro/>}></Route>
        <Route path='/works' element={<Works/>}></Route>
        <Route path='/footer' element={<Footer/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route exact path='/game' element={<Game/>}></Route>
        </Routes>
      </Router>
      
      <Experience></Experience>
      <Footer></Footer>

    </div>
    </>
  );
}

export default App;
