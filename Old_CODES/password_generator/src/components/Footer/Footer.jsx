import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='fixed inset-x-0 flex items-center justify-center bottom-2' id="footer">
            <p>
                © {currentYear} All Right Reserved. Built with ❤️ by{" "}
                <a href="https://x.com/xsh_shahab" target='_blank' rel='noopener noreferrer' className='text-orange-500 hover:text-orange-600 hover:underline'>
                    @xsh_shahab
                </a>
            </p>
        </footer>
    );
}

export default Footer;
