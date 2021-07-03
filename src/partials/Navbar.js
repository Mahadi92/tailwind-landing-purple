import React, { useState } from 'react';
import brandLogo from '../images/logo_white.png';

const Navbar = () => {

    const [hideNav, setHideNav] = useState(false)

    return (
        <div className="container px-10 m-auto w-full">
            <nav className="flex items-center justify-between px-3 h-14">
                <div>
                    <img src={brandLogo} className="object-cover md:h-7 h-6" alt="" />
                </div>

                <div className=" hidden md:block">
                    <ul className="flex space-x-5">
                        <li className="font-bold text-white">Home</li>
                        <li className="text-gray-100">Portfolio</li>
                    </ul>
                </div>

                <div className="hidden md:block">
                    <button className="py-2 px-6 text-sm rounded-full bg-white text-purple-800 uppercase font-semibold">Hire Me</button>
                </div>


                <div className={`${hideNav ? 'lg:hidden hidden' : 'lg:hidden block'}`}>
                    <button onClick={() => setHideNav(!hideNav)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white hover:text-gray-400 focus:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                <div className={`${hideNav ? 'lg:hidden block' : 'lg:hidden hidden'}`}>
                    <button onClick={() => setHideNav(!hideNav)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white hover:text-gray-400 focus:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>


                {/* Mobile Navbar */}
                <section className={`lg:hidden bg-purple-400 bg-opacity-90 shadow-xl absolute top-10 left-0 mr-0 py-5 w-full ${hideNav ? 'block' : 'hidden'}`}>
                    <div>
                        <ul className="flex flex-col items-center space-y-5">
                            <li className="font-bold text-white">Home</li>
                            <li className="text-gray-100">Portfolio</li>
                            <li>
                                <button className="py-2 px-6 text-sm rounded-full bg-white text-purple-800 uppercase font-semibold">Hire Me</button>
                            </li>
                        </ul>
                    </div>
                </section>


            </nav>

        </div>
    );
};

export default Navbar;