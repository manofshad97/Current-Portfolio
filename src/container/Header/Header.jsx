import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import {AppWrap} from "../../wrapper";
import "./Header.scss";

//variants for scale and opacity animations
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut"
    },
  },
};

const Header = () => (
  //Container div for entire home page
  <div className="app__header app__flex">
    {/*Outer div holding greeting and description */}
    <motion.div
    //Slide in from the left and fade in slowly
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      {/*Inner div holding greeting + description */}
      <div className="app__header-badge">
        {/*Inner container div holding greeting */}
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Shadman</h1>
          </div>
        </div>
        {/*Inner container div holding description */}
        <div className="tag-cmp app__flex">
          <p className="p-text">Web Developer</p>
          <p className="p-text">UI/UX Designer</p>
        </div>
      </div>
    </motion.div>

    {/*Div holding profile image and gray circle behind it
      Profile image fades in slowly and its children are delayed 0.5s after it
      (i.e gray circle)
    */}
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      {/*Profile image */}
      <img src={images.profile} alt="profile_bg" />
      {/*Increase scale of gray circle. Plays 0.5s after profile image fades in */}
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    {/*Skill images use variants from before (scale and opacity animations) */}
    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {/*Create a circular container div holding an image for each skill*/}
      {[images.flutter, images.redux, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img  src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home')
