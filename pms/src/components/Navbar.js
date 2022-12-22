import React from "react";
import "./Navbar.css";
import image from "./logo.png";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import snapchatimg from "./snapchat.jpg";

const Navbar = () => {
  return (
    <div class="main">
      <div class="logo">
        <Link to="/">
          <img src={image} />
        </Link>
      </div>
      <div class="ul">
        <ul>
          <li>
            <Link className="tags" to="officers">
              Officers
            </Link>
          </li>
          <li>
            <Link className="tags" to="sailors">
              Sailors
            </Link>
          </li>
          <li>
            <Link className="tags" to="adduser">
              Add User
            </Link>
          </li>
          <li>
            <Link className="tags" to="aboutus">
              About Us
            </Link>
          </li>
          <Avatar
            style={{
              width: "30px",
              height: "30px",
              marginBottom: "2px",
              cursor: "pointer",
            }}
            alt="Remy Sharp"
            src={snapchatimg}
          />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
