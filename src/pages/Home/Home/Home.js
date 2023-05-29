import React from 'react';
import Introduices from '../Introduices/Introduices';
import Service from '../Service/Service';
import Experience from '../Experience/Experience';
import Works from '../Works/Works';
import Testimonial from '../Testimonial/Testimonial';




const Home = () => {
    return (
        <div>
           <Introduices></Introduices>
            <Service></Service>
            <Experience></Experience>
            <Works></Works>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;