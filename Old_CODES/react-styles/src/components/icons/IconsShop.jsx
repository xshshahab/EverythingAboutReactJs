import React from 'react';
import { FaApple, FaAndroid, FaReact, FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedin, FaYoutube, FaSnapchat, FaSpotify, FaTiktok, FaAmazon, FaGoogle, FaMicrosoft, FaPaypal, FaReddit, FaTwitch, FaDiscord, FaBitcoin, FaTelegram, FaPinterest, FaWhatsapp, FaFirefox, FaChrome } from 'react-icons/fa';

const IconsShop = () => {
    const iconStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '20px',
        padding: '20px',
        textAlign: 'center',
        fontSize: '40px'
    };

    const icons = [
        { icon: <FaApple />, color: '#A2AAAD' },
        { icon: <FaAndroid />, color: '#A4C639' },
        { icon: <FaReact />, color: '#61DAFB' },
        { icon: <FaFacebook />, color: '#1877F2' },
        { icon: <FaTwitter />, color: '#1DA1F2' },
        { icon: <FaInstagram />, color: '#E4405F' },
        { icon: <FaGithub />, color: '#181717' },
        { icon: <FaLinkedin />, color: '#0077B5' },
        { icon: <FaYoutube />, color: '#FF0000' },
        { icon: <FaSnapchat />, color: '#FFFC00' },
        { icon: <FaSpotify />, color: '#1DB954' },
        { icon: <FaTiktok />, color: '#000000' },
        { icon: <FaAmazon />, color: '#FF9900' },
        { icon: <FaGoogle />, color: '#4285F4' },
        { icon: <FaMicrosoft />, color: '#F25022' },
        { icon: <FaPaypal />, color: '#00457C' },
        { icon: <FaReddit />, color: '#FF4500' },
        { icon: <FaTwitch />, color: '#6441A5' },
        { icon: <FaDiscord />, color: '#5865F2' },
        { icon: <FaBitcoin />, color: '#F7931A' },
        { icon: <FaTelegram />, color: '#0088CC' },
        { icon: <FaPinterest />, color: '#E60023' },
        { icon: <FaWhatsapp />, color: '#25D366' },
        { icon: <FaFirefox />, color: '#FF7139' },
        { icon: <FaChrome />, color: '#4285F4' }
    ];

    return (
        <div>
            <h1 style={{ textAlign: 'center', margin: "20px" }}>Icons Shop</h1>
            <div style={iconStyle}>
                {icons.map((item, index) => (
                    <div key={index} style={{ color: item.color }}>
                        {item.icon}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IconsShop;
