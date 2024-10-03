import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MR Stall || Home</title>
            </Helmet>
            <Banner></Banner>
            <Slider></Slider>
        </div>
    );
};

export default Home;