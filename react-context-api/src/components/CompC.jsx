import React from "react";
import { PropsConsumer } from "../context/PropsContext";
import { Instagram, Twitter, Github, Linkedin } from "lucide-react";

const iconMap = {
    Instagram: Instagram,
    Twitter: Twitter,
    Github: Github,
    Linkedin: Linkedin,
};

const CompC = () => {
    return (
        <PropsConsumer>
            {(user) => (
                <div className="bg-slate-900 text-white shadow-xl rounded-xl p-6 text-center border border-slate-700">
                    <div className="flex justify-center">
                        <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-24 h-24 rounded-full border-2 border-blue-950 shadow-md"
                        />
                    </div>
                    <h2 className="mt-4 text-xl font-semibold text-white">{user.name}</h2>
                    <p className="text-zinc-300">@{user.username}</p>

                    <div className="mt-4 flex justify-center space-x-4">
                        {user.socialLinks.map((link, index) => {
                            const IconComponent = iconMap[link.icon];
                            return (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-2 bg-slate-700 rounded-full transition duration-300 hover:bg-white"
                                >
                                    <IconComponent className="w-5 h-5 text-gray-300 transition duration-300 group-hover:text-slate-800" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            )}
        </PropsConsumer>
    );
};

export default CompC;
