import { Github, Instagram, Twitter } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white md:px-20 px-3 py-4 flex flex-col-reverse md:flex-row justify-between items-center shadow-lg">
            <p className="text-sm  text-center text-gray-400">
                © {new Date().getFullYear()} XshShahab. Created with <span className="text-red-500">❤️</span> by <span className="text-orange-500 font-bold">XshShahab</span>
            </p>
            <div className="flex gap-4 mt-3 md:mt-0 mb-3 md:mb-0">
                <a href="http://github.com/xshshahab" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-all duration-300">
                    <Github size={24} />
                </a>
                <a href="http://instagram.com/xsh_shahab" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-all duration-300">
                    <Instagram size={24} />
                </a>
                <a href="http://x.com/xsh_shahab" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-all duration-300">
                    <Twitter size={24} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
