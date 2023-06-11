import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import resturant from '../../../assets/img/resturant.jpg'
import ai from '../../../assets/img/ai.jpg'
import news from '../../../assets/img/news.jpg'
import hospital from '../../../assets/img/hospital.jpg'
import hosting from '../../../assets/img/web-hosting.webp'
import './Projects.css'
const Projects = () => {
//     const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;
    return (
        <div className="portfolio" id="portfolio">
        {/* heading */}
        {/* <span style={{color: darkMode?'white': ''}}>Recent Projects</span> */}
        <span>Portfolio</span>
  
        {/* slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className="portfolio-slider"
        >
          <SwiperSlide>
            <h1 className='text-center font-bold text-2xl'>Resturant</h1>
            <img src={resturant} alt="" />
            <h2>Project Details:</h2>
            <p>
            
 A nice Resturant page desktop and mobile responsive.
 I found this design in the Figma community.
 I am coding only HTML and CSS for this page without using any CSS or JS library.
<h3>Technology: HTML, CSS, Javascript</h3>
            </p>
            <div className='text-center'>
            <button className="btn btn-outline mt-4">
            <a href="https://stirring-mochi-9b1367.netlify.app/"  target="_blank">Live site</a>
    </button>
           
                </div>
          </SwiperSlide>
         <SwiperSlide>
         <h1 className='text-center font-bold text-2xl'>OpenAI</h1>
            <img src={ai} alt="" />
            <h2>Project Details:</h2>
            <p>
            
 A nice OpenAI page desktop and mobile responsive.
 I found this design in the Figma community.
 I am coding only HTML and CSS for this page without using any CSS or JS library and React JS.
<h3>Technology: HTML, CSS, React JS</h3>
            </p>
            <div className='text-center'>
            <button className="btn btn-outline mt-4">
            <a href="https://candid-stroopwafel-4ece65.netlify.app/"  target="_blank">Live site</a>
    </button>
           
                </div>
          </SwiperSlide>
          <SwiperSlide>
          <h1 className='text-center font-bold text-2xl'>News-portal</h1>
            <img src={news} alt="" />
            <h2>Project Details:</h2>
            <p>
            
 A nice News-portal page desktop and mobile responsive.
 I found this design in the Figma community.
 I am coding only HTML and CSS for this page without using any CSS or JS library.
<h3>Technology: HTML, CSS, Javascript</h3>
            </p>
            <div className='text-center'>
            <button className="btn btn-outline mt-4">
            <a href="https://64859316ad38cc75d71d3bc5--guileless-frangipane-87ce7f.netlify.app/"  target="_blank">Live site</a>
    </button>
           
                </div>
          </SwiperSlide>
          <SwiperSlide>
          <h1 className='text-center font-bold text-2xl'>Hospital</h1>
            <img src={hospital} alt="" />
            <h2>Project Details:</h2>
            <p>
            
 A nice Hospital page desktop and mobile responsive.
 I found this design in the Figma community.
 I am coding only HTML and CSS for this page without using any CSS or JS library.
<h3>Technology: HTML, CSS, Javascript</h3>
            </p>
            <div className='text-center'>
            <button className="btn btn-outline mt-4">
            <a href="https://648592db2fa55b753425b7eb--resplendent-licorice-ae02e3.netlify.app/"  target="_blank">Live site</a>
    </button>
           
                </div>
          </SwiperSlide> 
          <SwiperSlide>
          <h1 className='text-center font-bold text-2xl'>Hosting-company</h1>
            <img src={hosting} alt="" />
            <h2>Project Details:</h2>
            <p>
            
 A nice Hosting-company page desktop and mobile responsive.
 I found this design in the Figma community.
 I am coding only HTML and CSS for this page without using any CSS or JS library.
<h3>Technology: HTML, CSS, Javascript</h3>
            </p>
            <div className='text-center'>
            <button className="btn btn-outline mt-4">
            <a href="https://64859274f1e5e1776ffd99a4--precious-jelly-b4ecf7.netlify.app/"  target="_blank">Live site</a>
    </button>
           
                </div>
          </SwiperSlide> 
        </Swiper>
      </div>
    );
};

export default Projects;