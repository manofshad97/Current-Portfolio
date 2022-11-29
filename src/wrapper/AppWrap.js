import React from "react";
import { NavigationDots, SocialMedia } from "../components";

//Higher Order Component
const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        {/*Social Media Icons */}
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">@2022 <a href="https://github.com/manofshad97" target="_blank">Shadman Ahmed</a></p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        {/*Use id name that is passed in to see which section the user is on 
        and highlight the appropriate dot*/}
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
