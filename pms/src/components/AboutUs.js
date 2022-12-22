import React from "react";
import "./AboutUs.css";
import photo from "./photo.jpg";

const AboutUs = () => {
  return (
    <div>
      <div class="section">
        <div class="containerr">
          <div class="content-section">
            <div class="title">
              <h1>About Us</h1>
            </div>
            <div class="content">
              <h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div class="button">
                <a href="">Read More</a>
              </div>
            </div>
            <div class="social">
              <a href="">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div class="image-section">
            <img src={photo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
