import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Girl from "../../img/gitl.png";
import Design from "../../img/tic.png";
import Odoo from "../../img/odoo.png";
import Resume from './mei.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ rotate: "25rem" }}
          whileInView={{ left: "1rem" }}
          transition={transition}
        >
          <Card
            emoji={Design}
            heading={"Design"}
            detail={"Figma,Canva, etc.. "}
          />
        </motion.div>
        {/* second card */}
        <motion.div
            initial={{ rotate: "25rem" }}
          // initial={{ left: "-11rem", top: "20rem" }}
          whileInView={{ left: "19rem" }}
          transition={transition}
        >
          <Card
            emoji={Girl}
            heading={"Software Engineer"}
            detail={"Html, Css, JavaScript, React, etc ..."}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
            initial={{ rotate: "25rem" }}
          // initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "37rem" }}
          transition={transition}
        >
          <Card
            emoji={Odoo}
            heading={"Odoo Developer"}
            detail={
              "Custom Module, Custom Reports, Odoo sh, etc.."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>

  );
};

export default Services;
