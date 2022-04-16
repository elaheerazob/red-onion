import React from 'react';
import Bannerbackground from '../../../images/bannerbackground.png';

const Home = () => {
    return (
        <div>
            <img  className="w-100" src={Bannerbackground} alt="" />
            <h2>Breakfast</h2>
        </div>
    );
};

export default Home;