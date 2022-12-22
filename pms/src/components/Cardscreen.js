import React from "react";
import Cards from "./Cards";
import Piechart from "./Piechart";
import "./Cardscreen.css";

const Cardscreen = () => {
  return (
    <div class="cardscreen">
      <div>
        <Cards />
      </div>
      <div>
        <Piechart />
      </div>
    </div>
  );
};

export default Cardscreen;
