
import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
     <div className="footer">
      <div>
        <h2>NASA Official Website</h2> 
        <p>
        The National Aeronautics and Space Administration is America’s civil space 
        program and the global leader in space exploration.<br></br>
        NASA.gov brings you the latest news, images and videos from America's space agency, pioneering the 
        future in space exploration, scientific 
        discovery and aeronautics research
        </p>
          <div className="tag1">
        <a href="https://www.nasa.gov/" >
          <h4 className="tag" >LINK</h4>
        </a>
       <a href="https://www.nasa.gov/about/contact/index.html" >
          <h3 className="tag">Contact Us</h3>
        </a> 
        <a href="https://www.nasa.gov/about/highlights/HP_Privacy.html" >
          <h3 className="tag">Privacy</h3>
        </a>  
        </div>
      </div>
    </div>
  );
};

export default Footer;