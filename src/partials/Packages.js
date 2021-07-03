import React from 'react';

const Packages = () => {
    return (
        <section className="container m-auto py-20 px-5">
            <h1 className="font-black text-4xl border-b-4 border-gray-300 border-opacity-60 m-auto text-center pb-2 w-44">Packages</h1>

            <div className="grid md:grid-cols-3 md:gap-8 gap-5 mt-10 md:px-24 px-5">

                <div className="md:p-10 p-5 rounded-lg card">
                    <p className="uppercase text-purple-700 md:text-md text-sm font-semibold md:md-4 mb-2">Getting Started</p>

                    <h3 className="md:text-2xl text-xl pb-2 font-extrabold">Singularity</h3>
                    <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eveniet...</p>

                    <button className="uppercase text-white md:text-md text-sm px-5 py-1.5 md:mt-8 mt-4 rounded-full bg-color-custom">See More</button>
                </div>

                <div className="md:p-10 p-5 rounded-lg card">
                    <p className="uppercase text-purple-700 md:text-md text-sm font-semibold md:md-4 mb-2">Business workflow</p>

                    <h3 className="md:text-2xl text-xl pb-2 font-extrabold">Plurality</h3>
                    <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eveniet...</p>

                    <button className="uppercase text-white md:text-md text-sm px-5 py-1.5 md:mt-8 mt-4 rounded-full bg-color-custom">See More</button>
                </div>

                <div className="md:p-10 p-5 rounded-lg card">
                    <p className="uppercase text-purple-700 md:text-md text-sm font-semibold md:md-4 mb-2">Interaction</p>

                    <h3 className="md:text-2xl text-xl pb-2 font-extrabold">Professional</h3>
                    <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eveniet...</p>

                    <button className="uppercase text-white md:text-md text-sm px-5 py-1.5 md:mt-8 mt-4 rounded-full bg-color-custom">See More</button>
                </div>

            </div>

        </section>
    );
};

export default Packages;