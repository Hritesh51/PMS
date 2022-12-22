import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Officers from "./components/Officers";
import Sailors from "./components/Sailors";
import AddUser from "./components/AddUser";
import AboutUs from "./components/AboutUs";
import CardScreen from "./components/Cardscreen";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<CardScreen />} />
        <Route path="officers" element={<Officers />} />
        <Route path="sailors" element={<Sailors />} />
        <Route path="adduser" element={<AddUser />} />
        <Route path="aboutus" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
