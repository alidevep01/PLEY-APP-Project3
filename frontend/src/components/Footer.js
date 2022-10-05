import React, { Component } from "react";
import "../App.css";

function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footer">
      <p className="footerP">Copyright © {year} GA</p>
      <p>Developed by Mohammad, Drew & Shiv</p>
    </div>
  );
}

export default Footer;
