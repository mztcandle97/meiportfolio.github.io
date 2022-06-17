import React from "react";
import LinkedIn from "../../img/linkedin.png";

import './FloatingDiv.css'



const FloatinDiv1 = ({text1})=>{
  return(
   
       <div className="i-icons">
       <a href="https://www.linkedin.com/in/mayzinthaw"
    className="youtube social">
    <img src={LinkedIn} alt="" />
  </a>
  {/* <span>{text1}</span> */}
</div> 
  )
}

export default FloatinDiv1;
