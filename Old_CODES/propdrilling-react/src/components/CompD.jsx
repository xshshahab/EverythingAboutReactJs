import React from 'react';
import SocialLinks from './SocialLinks';

const CompD = ({ name, username }) => {
    return (
        <div className="bg-zinc-900 min-h-screen flex flex-col items-center justify-center text-white p-6">
            <div className="bg-zinc-800 shadow-lg rounded-lg p-8 text-center max-w-lg">
                <div className="flex justify-center">
                    <img
                        src={`https://github.com/${username}.png`}
                        alt={`${name}'s avatar`}
                        className="w-24 h-24 rounded-full border-2 border-orange-500 shadow-md"
                    />
                </div>
                <h1 className="text-4xl font-extrabold mt-4 text-gray-100">{name}</h1>

                <h2 className="text-lg text-gray-400 mt-2">
                    <a
                        className="text-orange-500 font-semibold hover:underline"
                        href={`http://www.github.com/${username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @{username}
                    </a> - Full-Stack Developer
                </h2>

                <p className="text-gray-300 mt-4 leading-relaxed">
                    A Passionate about building impactful digital experiences, mastering modern web technologies, and continuously learning to innovate.
                </p>

                <div className="mt-6">
                    <SocialLinks />
                </div>
            </div>
        </div>
    );
};

export default CompD;
