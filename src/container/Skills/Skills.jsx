import React from "react";
import { motion } from "framer-motion";
import { jobInfo } from "../../jobInfo";
import ReactTooltip from "react-tooltip";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";

const Skills = () => {
  //import experiences and skill array
  const experiences = jobInfo.experiences;
  const skills = jobInfo.skills;

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>
    {/*Container div that holds skills and experiences in two sep flexboxes */}
      <div className="app__skills-container">
        {/*Flexbox that holds all skills */}
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            //flexbox for individual skill bubble
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              {/*div holding skill image (skill bubble) */}
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              {/*text under bubble */}
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        {/*Container div holding all experiences */}
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            //Container div for individual experience 
            <motion.div className="app__skills-exp-item" key={experience.year}>
              {/*Container div for year */}
              <div className="app__skills-exp-year">
                <p className="bold-text-skills">{experience.year}</p>
              </div>
              {/*Container div for job title, company and description tooltip */}
              <motion.div className="app__skills-exp-works">
                {experience.jobs.map((job) => (
                  <>
                    {/*Inner div holding job title and company */}
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={job.name}
                      key={job.name}
                    >
                      <h4 className="bold-text-skills">{job.name}</h4>
                      <p className="p-text">{job.company}</p>
                    </motion.div>
                    {/*tooltip with description */}
                    <ReactTooltip
                      id={job.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {job.description}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
