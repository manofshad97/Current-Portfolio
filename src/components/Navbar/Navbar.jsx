import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  //initialize toggle variable
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
    {/*Div holding logo*/} 
      <div className="app__navbar-logo">
        <img src={images.shadman} alt="logo" />
      </div>
      {/*Unordered list holding navbar links. Created a li with a link for 
      each "item" in the navbar array*/}
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      
      {/*Container div for mobile navbar menu */}
      <div className="app__navbar-menu">
        {/*Menu button for mobile navbar */}
        <HiMenuAlt4 onClick={() => setToggle(true)} />
         {/*If toggle is true, the mobile navbar div will appear
         with framermotion animation below */} 
        {toggle && (
          /*Slide in from 300 pixels to the right back to origin to give 
          right to left sliding animation */
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          > 
            {/*X button in mobile navbar. Set toggle to false on click */}
            <HiX onClick={() => setToggle(false)} />

             {/*Unordered list holding mobile navbar links. 
             Created a li with a link for 
              each "item" in the navbar array. Closes menu upon clicking 
              one of the lis*/}
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
