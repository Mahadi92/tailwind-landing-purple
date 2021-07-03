import React from 'react';
import Navbar from './Navbar';
import headerImage from '../images/image_01.png';

const Header = () => {
    return (
        <header className="bg-purple-400 h-screen">
            <Navbar />
            <hr />

            <section className="text-white flex items-center justify-evenly h-full">
                <div className="w-2/5">
                    <p className="uppercase">Business workflow</p>
                    <h1 className="font-bolder font-black text-5xl">Get the most</h1>
                    <h1 className="font-bolder font-black text-5xl">efficient UI design for</h1>
                    <h1 className="font-bolder font-black text-5xl">your business now!</h1>

                    <p className="py-8 w-4/5">Hire me to design a a clean and modern UI for you product's website.</p>

                    <div className="pt-10">
                        <button className="py-2 px-8 text-sm border-2 border-white rounded-full bg-white text-purple-800 uppercase font-semibold mr-4">Hire Me</button>
                        <button className="py-2 px-8 text-sm border-2 border-white rounded-full text-white uppercase">Portfolio</button>

                    </div>
                </div>
                <div className="w-2/5">
                    <img src={headerImage} className="w-4/5" alt="" />
                </div>
            </section>

        </header>
    );
};

export default Header;