import React, { useContext } from "react";
import "./Works.css";
import Girl from "../../img/gitl.png";
import odoo from "../../img/odoo.png";
import Coding from "../../img/coding.png";
import Database from "../../img/database.png";
import reactimage from "../../img/react.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './mei.pdf';


const Works = () => {
  // context
  const theme = useContext(themeContext);
  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      {/* <div className="w-left"> */}
        <div className="awesome">
          {/* dark Mode */}
          <span>
           Let me Introduce myself
          </span>
          <span>Software Engineer</span>
          <spane>
            <ul>
              <li> I have been working as a software Engineer for two years,</li>learning the ins and outs of programming.
              <li>I try to do a good job in all roles I have in life,</li>and I enjoy the process immensely.
              <li> I create beautiful and funtional website for small business.</li>
              <li> I also have a strong experience in odoo development</li>
            </ul>
           {/* I have been working as a software Engineer for two years,climbing the career ladder,
           <br/>
           learning the ins and outs of programming.
            <br />
            I try to do a good job in all roles I have in life, and I enjoy the process immensely.
            <br />
            I create beautiful and funtional website for small business.
            <br />
            I also have a strong experience in odoo development . */}

          </spane>
          {/* <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link> */}
          <br></br><hr></hr>
            <a href={Resume} download>
            <button className="button n-button">Download CV</button>
          </a>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
       
        {/* right side */}
      {/* </div> */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={odoo} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={reactimage} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Girl} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Database} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Coding} alt="" />
          </div>
         
        </motion.div>
      </div>
    </div>
  );
};

export default Works;
