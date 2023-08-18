import React from "react";
import ReactDOM from "react-dom";

import Map from "./Map";
import LeftContainer from "./Map/components/LeftContainer";
import { MAP_JSON } from "./Map/constants";

import "./styles.css";
import RightContainer from "./Map/components/RightContainer";
import Oficinas from "./Map/components/OfficeContainer";

function App() {
  return (
    <div className="App">
      <LeftContainer />
      <Map
        data={{
          map: MAP_JSON,
          width: 300,
          height: 800,
          center: [-62, -40],
          scale: 420,
          currency: "$"
        }}
      />
      <RightContainer />
      <Oficinas />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
