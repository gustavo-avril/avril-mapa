import React from "react";
import images from "../../../img/index";

function LeftContainer (){
  return(
    <div className="wrapper">
      <div className="main">
        <img src={ images.ba } />
        <div className="texto">
          <span className="title">Buenos Aires</span>
          <span className="email">buenos.aires@avril-assistance.com</span>
        </div>
        <img src={ images.caba } />
        <div className="texto">
          <span className="title">Caba & Amba</span>
          <span className="email">caba.amba@avril-assistance.com</span>
        </div>
        <img src={ images.noroeste } />
        <div className="texto">
          <span className="title">Noroeste</span>
          <span className="email">noroeste@avril-assistance.com</span>
        </div>
        <img src={ images.sta } />
        <div className="texto">
          <span className="title">Santa Fé</span>
          <span className="email">santa.fe@avril-assistance.com</span>
        </div>
      </div>
    </div>
  );
}

export default LeftContainer;