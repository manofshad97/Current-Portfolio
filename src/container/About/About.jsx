import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import {AppWrap} from "../../wrapper";
import "./About.scss";

const About = () => {
  //array of objects containing my current skills
  const abouts = [
    {
      title: "Web Development",
      description: "I am a passionate web developer",
      imgUrl: images.about01,
    },
    {
      title: "Web Design",
      description: "I strive to be as creative in design as possible",
      imgUrl: images.about02,
    },
    {
      title: "UI/UX",
      description: "I am familiar with wireframing and UI/UX tools such as Figma.",
      imgUrl: images.about03,
    },
    {
      title: "Web Animations",
      description: "I am familiar with numerous animation libaries as well as keyframes",
      imgUrl: images.about04,
    },
  ];

  return (
    <>
    {/*Header at top of about page */}
      <h2 id="about" className="head-text" >
        I Know the <span>Importance</span> <br />
        of <span>Good Design</span>
      </h2>
      {/*Flexbox holding all skill boxes */}
      <div className="app__profiles">
        {abouts.map((about, index) => (
          //Map through the skills and create a div for each individual skill 
          //Each div holds an image, title, and description 
          //Increase scale on hover, fade in on scroll
          <motion.div
            whileInView={{ opacity: [0,1]}}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div> 
     
    </>
  );
};

export default AppWrap(About, 'about')
