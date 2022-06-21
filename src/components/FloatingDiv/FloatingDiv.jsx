import React from "react";
import Github from "../../img/github.png";

import './FloatingDiv.css'


const FloatinDiv = ({img, text1, text2}) => {
  return (
    // darkMode
    // <div className="floatingDiv">
    //   <img src={img} alt="" />
    //   <span>
    //     {text1}
    //     <br/>
    //     {text2}
    //   </span>
    // </div>

<div className="i-icons">
<a href="https://github.com/mztcandle97">
        <img src={Github} alt="" />
      </a>

</div>
  );
};

export default FloatinDiv;
