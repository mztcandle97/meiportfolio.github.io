import React, { useContext } from "react";
import "./Intro.css";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import FloatinDiv1 from "../FloatingDiv/Floatinglink";
import Floatinwhatapp from "../FloatingDiv/Floatingwhatapp";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };
  // context
  const theme = useContext(themeContext);

  return (

    <div className="Intro" id="Intro">
    {/* left name side */}
    <div className="i-left">
      <div className="i-name">
       <span>Hi! I Am</span>
        <span>May Zin Thaw</span>
        </div>
        <span>
      Software Engineer with 2+ years experience
    </span>

    <motion.div
        initial={{ rotate: -45 }}
        whileInView={{ rotate: 45 }}
        transition={transition}
        viewport={{ margin: "-40px" }}
        className="f-backCircle"
      > 
        <FloatinDiv img={Github} text1="GitHub" />
        <FloatinDiv1 img={LinkedIn} text1="LinkedIn" />
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>

      </motion.div>
      </div>
           <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
      
    {/* right image side */}
    <div className="i-right">
      
      <motion.div
        initial={{ left: "10rem", top: "-10rem" }}
        whileInView={{ left: "8rem" }}
        transition={transition}
        className="floating-div"
      > 
         <Floatinwhatapp  text1="WhatApp" />
      </motion.div> 
      {/* <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "-7rem",
            width: "19rem",
            height: "11rem",
            left: "-39rem",
          }}
        ></div>   */}
    </div>
    
  </div>
  );
};

export default Intro;
