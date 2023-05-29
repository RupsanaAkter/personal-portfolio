import React from 'react';
import './Experience.css'
const Experience = () => {
    // const theme = useContext(themeContext);
    // const darkMode = theme.state.darkMode;
    return (
        <div className="experience" id='experience'>
        <div className="achievement">
          {/* darkMode */}
          {/* <div className="circle" style={{color: darkMode?'var(--orange)':''}}>8+</div>
          <span  style={{color: darkMode?'white':''}}>years </span> */}
          <div className='circle'>8+</div>
          <span>Years</span>
          <span>Experience</span>
        </div>
        <div className="achievement">
          {/* <div className="circle" style={{color: darkMode?'var(--orange)':''}}>20+</div>
          <span  style={{color: darkMode?'white':''}}>completed </span> */}
          <div className='circle'>20+</div>
          <span>Completed</span>
          <span>Projects</span>
        </div>
        <div className="achievement">
          {/* <div className="circle" style={{color: darkMode?'var(--orange)':''}}>5+</div>
          <span  style={{color: darkMode?'white':''}}>companies </span> */}
          <div className='circle'>5+</div>
          <span>Companies</span>
          <span>Work</span>
        </div>
      </div>
    );
};

export default Experience;