import React from "react";
import images from "../../../img/index";

function RightContainer (){
  return(
    <div className="wrapper">
      <div className="main">
        <img src={ images.mundo } />
        <div className="texto">
          <span className="title">Avril</span>
          <span className="email">info@avril-assistance.com</span>
        </div>
        <img src={ images.cuyo } />
        <div className="texto">
          <span className="title">Cuyo</span>
          <span className="email">cuyo@avril-assistance.com</span>
        </div>
        <img src={ images.cba } />
        <div className="texto">
          <span className="title">Córdoba</span>
          <span className="email">cordoba@avril-assistance.com</span>
        </div>
        <img src={ images.lit } />
        <div className="texto">
          <span className="title">Litoral</span>
          <span className="email">litoral@avril-assistance.com</span>
        </div>
      </div>
    </div>
  );
}

export default RightContainer;