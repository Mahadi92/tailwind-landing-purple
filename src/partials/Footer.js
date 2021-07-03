import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full h-96 flex items-center justify-center w-full">
            <div className="text-center pt-14 text-white">
                <h3 className="md:w-72 w-60 pb-3 my-5 m-auto border-b-2 border-gray-300 border-opacity-40 font-bold md:text-2xl text-xl tracking-wide">Start a project with me</h3>

                <p className="md:w-3/5 w-4/5 m-auto">Let's discuss our ideas for presenting your business to the world in an attractive, effcient and effective way.</p>

                <button className="py-2 md:px-10 px-20 text-sm rounded-full bg-white text-purple-800 uppercase font-semibold shadow-xl mt-10">Hire Me</button>


            </div>

        </footer>
    );
};

export default Footer;