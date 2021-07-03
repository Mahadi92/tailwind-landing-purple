import React from 'react';
import brandLogo from '../images/logo_white.png';

const Navbar = () => {
    return (
        <div className="container px-10 m-auto">
            <nav className="flex items-center justify-between px-3 h-14 bg-purple-400">
                <div>
                    <img src={brandLogo} className="object-cover md:h-7 sm:h-6" alt="" />
                </div>
                <ul className="flex space-x-5">
                    <li className="font-bold text-white">Home</li>
                    <li className="text-gray-100">Portfolio</li>
                </ul>
                <div>
                    <button className="py-2 px-5 text-sm rounded-full bg-white text-purple-800 uppercase font-semibold">Hire Me</button>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;