import { Github, Instagram, Twitter } from 'lucide-react';
import React from 'react';

const Header = () => {
    return (
        <nav className="bg-black text-white md:px-20 px-3 py-3 flex justify-between items-center shadow-lg">
            <h1 className="text-2xl font-bold">
                <span className="text-orange-500">Xsh</span>Shahab
            </h1>

            <div id="icons" className="flex gap-4 items-center">
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
        </nav>
    );
};

export default Header;
