import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const SocialMedia = () => (
  //Flexbox for social media icons
  <div className="app__social">
    <div>
      <a
        href="https://github.com/manofshad97"
        alt="github"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/shadman-ahmed-169356143/"
        alt="linkedin"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a 
        href="#contact" 
        alt="contact" 
        >
        <GrMail />
      </a>
    </div>
  </div>
);

export default SocialMedia;
