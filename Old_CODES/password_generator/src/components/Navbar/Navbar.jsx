import React from 'react';
import Logo from "../../assets/Logo.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {

    const socialItem = [
        {
            id: 1,
            icon: <FaLinkedin size={24} color="#0077B5" />,
            link: "https://www.linkedin.com/in/mdshahabuddin82/"
        },
        {
            id: 2,
            icon: <FaGithub size={24} color="#171515" />,
            link: "https://github.com/xsh_shahab"
        },
        {
            id: 3,
            icon: <FaInstagram size={24} color="#E4405F" />,
            link: "https://www.instagram.com/xsh_shahab/"
        },
        {
            id: 4,
            icon: <FaXTwitter size={24} color="#111" />,
            link: "https://twitter.com/xsh_shahab"
        }
    ];

    return (
        <nav className='flex items-center justify-between gap-2 p-2 shadow-lg md:px-10 backdrop-blur-lg bg-zinc-900'>
            <img src={Logo} width={40} alt="logo" />
            <div id="social-icons" className='flex items-center gap-4'>
                {
                    socialItem.map((item) => {
                        return <a target='_blank' className='p-1 rounded-md bg-zinc-100' key={item.id} href={item.link}>{item.icon}</a>
                    })
                }
            </div>
        </nav>
    )
}

export default Navbar