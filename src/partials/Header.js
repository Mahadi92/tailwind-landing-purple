import React from 'react';
import Navbar from './Navbar';
import headerImage from '../images/image_01.png';

const Header = () => {
    return (
        <header className="bg-purple-400 w-full h-screen">
            <Navbar />
            <hr />

            <section className="text-white flex md:flex-row flex-col items-center md:justify-evenly h-full">
                <div className="md:w-2/5 md:text-left text-center">
                    <p className="uppercase mt-5 md:py-6 py-4">Business workflow</p>
                    <h1 className="font-black md:text-5xl text-3xl leading-tight">Get the most</h1>
                    <h1 className="font-black md:text-5xl text-3xl leading-tight">efficient UI design for</h1>
                    <h1 className="font-black md:text-5xl text-3xl leading-tight">your business now!</h1>

                    <p className="md:py-8 py-4 w-4/5 md:ml-0 m-auto">Hire me to design a a clean and modern UI for you product's website.</p>

                    <div className="md:pt-10 pt-5 pb-14">
                        <button className="py-2 md:px-8 px-14 text-sm border-2 border-white rounded-full bg-white text-purple-800 uppercase font-semibold md:mr-4 mr-2">Hire Me</button>
                        <button className="py-2 md:px-8 px-10 text-sm border-2 border-white rounded-full text-white uppercase">Portfolio</button>

                    </div>
                </div>
                <div className="md:w-2/5">
                    <img src={headerImage} className="w-4/5 m-auto" alt="" />
                </div>
            </section>

        </header>
    );
};

export default Header;