import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div class="screen">
      <div class="container">
        <div class="card">
          <div class="box">
            <div class="content">
              <h2>30</h2>
              <h3>Officers</h3>
              <Link to="officers">More Info</Link>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="box">
            <div class="content">
              <h2>20</h2>
              <h3>Sailors</h3>
              <Link to="sailors">More Info</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
