import React, { Component } from "react";
import "../App.css";

function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footer">
      <p>Copyright © {year} GA</p>
    </div>
  );
}

export default Footer;
