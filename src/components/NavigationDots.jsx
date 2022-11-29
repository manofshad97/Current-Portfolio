import React from 'react';

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {/*Map through this array and create a link that's styled as a dot for each one. 
    Each dot links to the appropriate section using its id */}
    {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        //If the passed in id is the same as the current item (dot), it means were are currently on the section of that id, so highlight the dot
        style={active === item ? { backgroundColor: '#313BAC' } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;