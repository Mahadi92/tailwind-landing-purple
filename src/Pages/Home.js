import React from 'react';
import Footer from '../partials/Footer';
import Header from '../partials/Header';
import Packages from '../partials/Packages';

const Home = () => {
    return (
        <div className="w-full">
            <Header />
            <Packages />
            <Footer />
        </div>
    );
};

export default Home;