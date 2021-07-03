import React from 'react';

const Packages = () => {
    return (
        <section className="container m-auto py-20 px-5">
            <h1 className="font-black text-4xl border-b-4 border-gray-300 m-auto text-center pb-2 w-44">Packages</h1>

            <div className="grid grid-cols-3 gap-8 mt-10 px-24">

                <div className="p-10 rounded-lg card">
                    <p className="uppercase text-purple-700 font-semibold mb-4">Getting Started</p>

                    <h3 className="text-2xl pb-2 font-bold">Singularity</h3>
                    <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eveniet...</p>

                    <button className="uppercase text-white px-5 py-1.5 mt-8 rounded-full bg-purple-500">See More</button>
                </div>

                <div className="p-10 rounded-lg card">
                    <p className="uppercase text-purple-700 font-semibold mb-4">Business workflow</p>

                    <h3 className="text-2xl pb-2 font-bold">Plurality</h3>
                    <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eveniet...</p>

                    <button className="uppercase text-white px-5 py-1.5 mt-8 rounded-full bg-color-custom">See More</button>
                </div>

                <div className="p-10 rounded-lg card">
                    <p className="uppercase text-purple-700 font-semibold mb-4">Interaction</p>

                    <h3 className="text-2xl pb-2 font-bold">Professional</h3>
                    <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eveniet...</p>

                    <button className="uppercase text-white px-5 py-1.5 mt-8 rounded-full bg-color-custom">See More</button>
                </div>

            </div>

        </section>
    );
};

export default Packages;