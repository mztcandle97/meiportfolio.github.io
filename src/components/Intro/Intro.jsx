import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import FloatinDiv1 from "../FloatingDiv/Floatinglink";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    // <div className="Intro" id="Intro">
    //   {/* left name side */}
    //   <div className="i-left">
    //     <div className="i-name">
    //       <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
    //       <span>May Zin Thaw</span>
    //       <span>
    //         Software Engineer with 2+ years experience in web designing
    //         and development,Odoo ERP, producting the Quality work
    //       </span>
    //     </div>
       
    //     {/* social icons */}
    //     {/* <div className="i-icons">
    //       <img src={Github} alt="" />
    //       <img src={LinkedIn} alt="" />
    //       <img src={Instagram} alt="" />
    //     </div> */}
    //   </div>
    //   {/* right image side */}
    //   <div className="i-right">
    
    //     {/* <img src={Vector1} alt="" />
    //     <img src={Vector2} alt="" /> */}
    //     {/* <img src={boy} alt="" /> */}
    //     {/* animation */}
    //     <motion.div
    //       initial={{ left: "-36%" }}
    //       whileInView={{ left: "-24%" }}
    //       transition={transition}
    //       src={Vector1}
    //       alt=""
         
    //     > 
    //      <div className="i-left">
    //     <div className="i-name">
    //      <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
    //       <span>May Zin Thaw</span>
    //       </div>
    //       </div>
    //     {/* <Link to="contact" smooth={true} spy={true}>
    //     <button className="button i-button">Hire me</button>
    //   </Link> */}
    //   </motion.div>

    //     <motion.div
    //       initial={{ top: "-4%", left: "74%" }}
    //       whileInView={{ left: "68%" }}
    //       transition={transition}
    //       className="floating-div"
    //     >
    //       <FloatinDiv img={Github} text1="GitHub" />
    //     </motion.div>

    //     {/* animation */}
    //     {/* <motion.img
    //       initial={{ left: "-36%" }}
    //       whileInView={{ left: "-24%" }}
    //       transition={transition}
    //       src={Github}
    //       alt=""
    //     /> */}
    //     <motion.div
    //       initial={{ left: "74%", top: "9rem" }}
    //       whileInView={{ left: "0rem" }}
    //       transition={transition}
    //       className="floating-div"
    //     > <span>
    //     Software Engineer with 2+ years experience in web designing
    //     and development,Odoo ERP, producting the Quality work
    //   </span>
    //        {/* floatinDiv mein change hy dark mode ka */}
    //        {/* <FloatinDiv1 img={LinkedIn} text1="LinkedIn" /> */}
    //     </motion.div> 

    //     <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
    //     <div
    //       className="blur"
    //       style={{
    //         background: "#C1F5FF",
    //         top: "17rem",
    //         width: "21rem",
    //         height: "11rem",
    //         left: "-9rem",
    //       }}
    //     ></div>
    //   </div>
    // </div>

    <div className="Intro" id="Intro">
    {/* left name side */}
    <div className="i-left">
      <div className="i-name">
        {/* <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
        <span>May Zin Thaw</span>
        <span>
          Software Engineer with 2+ years experience in web designing
          and development,Odoo ERP, producting the Quality work
        </span> */}
      </div>
     
      {/* social icons */}
      {/* <div className="i-icons">
        <img src={Github} alt="" />
        <img src={LinkedIn} alt="" />
        <img src={Instagram} alt="" />
      </div> */}
    </div>
    {/* right image side */}
    <div className="i-right">
  
      {/* <img src={Vector1} alt="" />
      <img src={Vector2} alt="" /> */}
      {/* <img src={boy} alt="" /> */}
      {/* animation */}
      <motion.div
        initial={{ left: "-36%" }}
        whileInView={{ left: "-24%" }}
        transition={transition}
        src={Vector1}
        alt=""
       
      > 
       <div className="i-left">
      <div className="i-name">
       <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
        <span>May Zin Thaw</span>
        </div>
        </div>
        <span>
      Software Engineer with 2+ years experience
    </span>
      {/* <Link to="contact" smooth={true} spy={true}>
      <button className="button i-button">Hire me</button>
    </Link> */}
    </motion.div>

      <motion.div
        initial={{ top: "5rem", left: "74%" }}
        whileInView={{ left: "-15rem" }}
        transition={transition}
        className="floating-div"
      > 
        <FloatinDiv img={Github} text1="GitHub" />
      </motion.div>

      {/* animation */}
      {/* <motion.img
        initial={{ left: "-36%" }}
        whileInView={{ left: "-24%" }}
        transition={transition}
        src={Github}
        alt=""
      /> */}
      <motion.div
        initial={{ left: "74%", top: "9rem" }}
        whileInView={{ left: "-1rem" }}
        transition={transition}
        className="floating-div"
      >
         <Link to="contact" smooth={true} spy={true}>
      <button className="button i-button">Hire me</button>
    </Link>
         {/* floatinDiv mein change hy dark mode ka */}
         {/* <FloatinDiv1 img={LinkedIn} text1="LinkedIn" /> */}
      </motion.div> 
      <motion.div
        initial={{ left: "-74%", top: "5rem" }}
        whileInView={{ left: "-9rem" }}
        transition={transition}
        className="floating-div"
      >
        
         <FloatinDiv1 img={LinkedIn} text1="LinkedIn" />
      </motion.div> 


      <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
      <div
        className="blur"
        style={{
          background: "#C1F5FF",
          top: "17rem",
          width: "21rem",
          height: "11rem",
          left: "-9rem",
        }}
      ></div>
    </div>
  </div>
  );
};

export default Intro;
