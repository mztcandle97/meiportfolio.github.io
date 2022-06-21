import React from "react";
import "./Footer.css";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" class="tm-section-down-arrow">
            <polygon fill="#ffffff" points="0,0  100,0  50,60"></polygon>                   
        </svg> 
      <div className="f-content">
    
        <div className="f-icons">
        <span><h1>Email<hr></hr> </h1>mayzinthaw97@gmail.com</span>
</div>
       <div className="f-icon">
        <span><h1>Contact No<hr></hr> </h1>+959970144753</span>
        <span><h1>Location<hr></hr></h1> Yangon,Myanmar</span>

        </div>
       
      </div>
    </div>
  );
};

export default Footer;
