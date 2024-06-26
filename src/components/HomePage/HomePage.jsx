import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';

const HomePage = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Banner />
            <About />
            <Services />
        </div>
    );
};

export default HomePage;