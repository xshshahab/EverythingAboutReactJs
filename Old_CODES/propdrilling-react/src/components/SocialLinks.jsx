import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const socialLinks = [
    { 
        id: 1, 
        name: "GitHub", 
        url: "https://github.com/xshshahab", icon: <FaGithub size={28} />, hoverColor: "hover:text-white" },
    { 
        id: 2, 
        name: "LinkedIn", 
        url: "https://www.linkedin.com/in/mdshahabuddin82/", icon: <FaLinkedin size={28} />, hoverColor: "hover:text-blue-400" },
    { 
        id: 3, 
        name: "Twitter", 
        url: "https://twitter.com/xsh_shahab", icon: <FaTwitter size={28} />, hoverColor: "hover:text-blue-500" },
    { 
        id: 4, 
        name: "Instagram", 
        url: "https://instagram.com/xsh_shahab", icon: <FaInstagram size={28} />, hoverColor: "hover:text-pink-500" },
];

const SocialLinks = () => {
    return (
        <div className="mt-4 flex space-x-6 justify-center">
            {socialLinks.map((link) => (
                <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 transition-all duration-300 transform hover:scale-110 ${link.hoverColor}`}
                    aria-label={link.name}
                >
                    {link.icon}
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
