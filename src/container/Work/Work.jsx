import React, { useState} from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";

const Work = () => {
  //array of project objects
  const projects = [
    {
      name: "crypto-app",
      title: "Crypto News App",
      description:
        "App that displays cryptocurrency prices, details and news. Made using React, Redux TK, Ant Design, and the CoinRanking API",
      tags: ["API Usage", "React JS"],
      imgUrl: images.about01,
      projectLink: "https://shad-crypto.herokuapp.com/",
      codeLink: "https://github.com/manofshad97/Crypto-App",
    },
    {
      name: "stocks-app",
      title: "Stock Details App",
      description:
        "Stock Details. React/Tailwind CSS/createContext/Finnhub-API. MUST use exact stock symbol when searching (i.e aapl for Apple)",
      tags: ["CSS Frameworks", "API Usage", "React JS"],
      imgUrl: images.about02,
      projectLink: "https://shad-stocks.netlify.app/",
      codeLink: "https://github.com/manofshad97/Shad-Stocks",
    },
    {
      name: "metaverse-app",
      title: "Shad's Metaversus",
      description: "Metaverse App Promotional Page (Hypothetical). Built from scratch using React, NEXT.js, Framer Motion and Tailwind CSS. Designed in figma.", 
      tags: ["CSS Frameworks", "React JS"],
      imgUrl: images.about03,
      projectLink: "https://shads-metaverse.netlify.app/",
      codeLink:
        "https://shad-ahmed.com",
    }
  ];
  //Initialize entire projects array as the default filter for work/projects 
  //so that all projects are shown by default. Intialize active filter to all so that the all button is highlighted.
  //Initialize project card animation so that cards show by default. Animation only shows upon clicking a filter button.
  const [filterWork, setFilterWork] = useState(projects);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      //fade in and slide up
      setAnimateCard([{ y: 0, opacity: 1 }]);
      //Unless the filter is set to all, a project card only displays when the filter that is clicked is included in the projects tags.
      if (item === "All") {
        setFilterWork(projects);
      } else {
        setFilterWork(
          projects.filter((project) => project.tags.includes(item))
        );
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My <span>Portfolio</span> 
      </h2>
      {/*div holding filter buttons */}
      <div className="app__work-filter">
        {["React JS", "CSS Frameworks", "API Usage", "All"].map(
          (item, index) => (
            <div
              key={index}
              //On click, the filter button ("React JS", "CSS Frameworks" etc..) will pass in its name into the work filter handler function.
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text tag-text-mobile ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      {/*flexbox that holds all project cards. */}
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((project, index) => (
          //flexbox for individual project card
          <div className="app__work-item app__flex" key={index}>
            {/*flexbox for image */}
            <div className="app__work-img app__flex">
              <img src={(project.imgUrl)} alt={project.name} />
              {/*Div that holds github and web links. Appears on hover. */}
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                {/*Link to website */}
                <a href={project.projectLink} target="_blank" rel="noreferrer">
                  {/*Motion div that holds eye icon. Increase size on view, decrease size on hover */}
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                 {/*Link to github repo*/}
                <a href={project.codeLink} target="_blank" rel="noreferrer">
                   {/*Motion div that holds github icon. Increase size on view, decrease size on hover */}
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            
            {/*Flexbox that holds project title, description and tag */}
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{project.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {project.description}
              </p>
              {/*Only display first tag */}
              <div className="app__work-tag app__flex">
                <p className="p-text">{project.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
