
import React from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';

import './Footer.scss';

const Footer = () => {

  const handleSubmit = () => {
    window.location.reload()
  };

  return (
    <>
      <h2 className="head-text">Let's have a chat!</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:shadman559@hotmail.com" className="p-text">shadman559@hotmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (347) 4264-9475" className="p-text">(347) 4264-9475</a>
        </div>
      </div>
      {(
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username"   />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email"   />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
             
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{'Send Message'}</button>
        </div>
      ) }
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);