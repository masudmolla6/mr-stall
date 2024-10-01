import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MR Stall || Home</title>
            </Helmet>
            <h1>This is Home Page.</h1>
        </div>
    );
};

export default Home;