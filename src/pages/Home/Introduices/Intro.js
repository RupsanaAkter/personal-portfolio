import React from 'react';
import './Intro.css'
const Intro = ({img, text1, text2}) => {
    return (
        <div className="floatingDiv">
      <img src={img} alt="" />
      <span>
        {text1}
        <br/>
        {text2}
      </span>
    </div>
    );
};

export default Intro;