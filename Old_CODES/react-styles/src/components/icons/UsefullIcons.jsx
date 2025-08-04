import React from 'react';
import {
    FaApple, FaAndroid, FaReact, FaHtml5, FaCss3, FaJs, FaNodeJs, FaPython, FaPhp, FaDatabase, FaCode, FaLaptopCode,
    FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedin, FaYoutube, FaSnapchat, FaTiktok, FaAmazon, FaGoogle, FaMicrosoft,
    FaPaypal, FaReddit, FaTwitch, FaDiscord, FaBitcoin, FaTelegram, FaPinterest, FaWhatsapp, FaFirefox, FaChrome, FaBootstrap,
    FaFigma, FaDribbble, FaBehance, FaSlack, FaSkype, FaCloud, FaServer, FaBug, FaCogs, FaShieldAlt, FaEnvelope, FaPhone, FaCommentDots, FaSearch
} from 'react-icons/fa';

const UsefullIcons = () => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '20px'
    };

    const iconContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(10, 1fr)',
        gap: '2rem',
        padding: '20px',
        justifyContent: 'center',
    };

    const iconBoxStyle = {
        backgroundColor: '#333',
        borderRadius: '10px',
        padding: '25px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: '0.3s ease',
        width: '100px',
        height: '100px',
        cursor: 'pointer',
    };

    const iconHoverStyle = {
        backgroundColor: '#111',
    };

    const headingStyle = {
        textAlign: 'center',
        fontSize: '28px',
        marginBottom: '25px',
    };

    const icons = [
        { icon: <FaApple />, color: '#A2AAAD' },
        { icon: <FaAndroid />, color: '#A4C639' },
        { icon: <FaReact />, color: '#61DAFB' },
        { icon: <FaHtml5 />, color: '#E34F26' },
        { icon: <FaCss3 />, color: '#1572B6' },
        { icon: <FaJs />, color: '#F7DF1E' },
        { icon: <FaNodeJs />, color: '#83CD29' },
        { icon: <FaPython />, color: '#3776AB' },
        { icon: <FaPhp />, color: '#777BB4' },
        { icon: <FaDatabase />, color: '#4DB33D' },
        { icon: <FaCode />, color: '#F16529' },
        { icon: <FaLaptopCode />, color: '#FF6F00' },
        { icon: <FaFacebook />, color: '#1877F2' },
        { icon: <FaTwitter />, color: '#1DA1F2' },
        { icon: <FaInstagram />, color: '#E4405F' },
        { icon: <FaGithub />, color: '#181717' },
        { icon: <FaLinkedin />, color: '#0077B5' },
        { icon: <FaYoutube />, color: '#FF0000' },
        { icon: <FaSnapchat />, color: '#FFFC00' },
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
        { icon: <FaChrome />, color: '#4285F4' },
        { icon: <FaBootstrap />, color: '#563D7C' },
        { icon: <FaFigma />, color: '#F24E1E' },
        { icon: <FaDribbble />, color: '#EA4C89' },
        { icon: <FaBehance />, color: '#1769FF' },
        { icon: <FaSlack />, color: '#4A154B' },
        { icon: <FaSkype />, color: '#00AFF0' },
        { icon: <FaCloud />, color: '#00C3FF' },
        { icon: <FaServer />, color: '#A1A1A1' },
        { icon: <FaBug />, color: '#E63946' },
        { icon: <FaCogs />, color: '#6D6875' },
        { icon: <FaShieldAlt />, color: '#00875A' },
        { icon: <FaEnvelope />, color: '#D44638' },
        { icon: <FaPhone />, color: '#34B7F1' },
        { icon: <FaCommentDots />, color: '#FF9F1C' },
        { icon: <FaSearch />, color: '#5A5A5A' }
    ];

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Useful Icons</h1>
            <div style={iconContainerStyle}>
                {icons.map((item, index) => (
                    <div
                        key={index}
                        style={{ ...iconBoxStyle, color: item.color, fontSize: '50px' }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = iconHoverStyle.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = iconBoxStyle.backgroundColor}
                    >
                        {item.icon}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UsefullIcons;
