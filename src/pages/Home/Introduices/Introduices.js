import React from 'react';
import './Introduices.css'
import Github from "../../../assets/img/github.png"
import LinkedIn from '../../../assets/img/linkedin.png'
import Instagram from "../../../assets/img/instagram.png"
import Vector1 from '../../../assets/img/Vector1.png'
import Vector2 from '../../../assets/img/Vector2.png'
import boy from '../../../assets/img/boy.png'

import { Link } from 'react-scroll';
import Intro from './Intro';
import { motion } from "framer-motion";

const Introduices = () => {
    return (
        <div className="Intro" id="Intro">
        {/* left name side */}
        <div className="i-left">
          <div className="i-name">
            {/* yahan change hy darkmode ka */}
            {/* <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
            <span>Andrew Thomas</span> */}
            <span>
              Frontend Developer with high level of experience in web designing
              and development, producting the Quality work
            </span>
          </div>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button i-button">Hire me</button>
          </Link>
          {/* social icons */}
          <div className="i-icons">
            <img src={Github} alt="" />
            <img src={LinkedIn} alt="" />
            <img src={Instagram} alt="" />
          </div>
        </div>
        {/* right image side */}
        <div className="i-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={boy} alt="" />
          {/* animation */}
          {/* <motion.img
            initial={{ left: "-36%" }}
            whileInView={{ left: "-24%" }}
            transition={transition}
            src={glassesimoji}
            alt=""
          /> */}
  
          {/* <motion.div
            initial={{ top: "-4%", left: "74%" }}
            whileInView={{ left: "68%" }}
            transition={transition}
            className="floating-div"
          > */}
            {/* <Intro img={crown} text1="Web" text2="Developer" />
          </motion.div>
   */}
          {/* animation */}
          {/* <motion.div
            initial={{ left: "9rem", top: "18rem" }}
            whileInView={{ left: "0rem" }}
            transition={transition}
            className="floating-div"
          > */}
            {/* floatinDiv mein change hy dark mode ka */}
            {/* <Intro img={thumbup} text1="Best Design" text2="Award" />
          </motion.div>
   */}
          <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
          <div
            className="blur"
            style={{
              background: "#C1F5FF",
              top: "17rem",
              width: "21rem",
              height: "11rem",
              left: "-9rem",
            }}
          ></div>
        </div>
      </div>
    );
};

export default Introduices;