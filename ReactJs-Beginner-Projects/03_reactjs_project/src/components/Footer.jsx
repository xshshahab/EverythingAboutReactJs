import React from 'react';

const Footer = () => {
    const footerStyle = {
        backgroundColor: '#222',
        color: '#fff',
        textAlign: 'center',
        padding: '15px',
        fontSize: '0.9rem',
    };

    const linkStyle = {
        color: 'orangered',
        textDecoration: 'none',
    };

    return (
        <footer style={footerStyle}>
            &copy; Meals Recipe App | Crafted with care by{' '}
            <a
                href="http://x.com/xsh_shahab"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
            >
                @xsh_shahab
            </a>
        </footer>
    );
};

export default Footer;
