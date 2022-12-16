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
            <p className="p-text">@2022 <a href="https://github.com/manofshad97/Current-Portfolio" target="_blank" rel="noopener noreferrer">Shadman Ahmed</a></p>
            <p className="p-text">| <a href="https://www.figma.com/file/PHpJ5fLFTgFBYxNcQfrXJB/Current-Portfolio?node-id=0%3A1&t=Qj9aMDvCiljrn0JE-3" target="_blank" rel="noopener noreferrer">Figma File</a> |</p>
          </div>
        </div>
        {/*Use id name that is passed in to see which section the user is on 
        and highlight the appropriate dot*/}
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
