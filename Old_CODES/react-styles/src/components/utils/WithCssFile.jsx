import React from 'react';
import "./WithCssFile.css";

const WithCssFile = () => {
    return (
        <div className="landing-page">

            <header className="header">
                <div className="logo">MyBrand</div>
                <nav className="nav">
                    <a href="#features">Features</a>
                    <a href="#testimonials">Testimonials</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>


            <section className="hero">
                <h1>Welcome to MyBrand</h1>
                <p>Your one-stop solution for amazing experiences.</p>
                <button className="cta-button">Get Started</button>
            </section>


            <section className="features" id="features">
                <div className="feature-box">
                    <h2>Feature One</h2>
                    <p>Experience high-quality performance like never before.</p>
                </div>
                <div className="feature-box">
                    <h2>Feature Two</h2>
                    <p>Designed to be user-friendly and efficient.</p>
                </div>
                <div className="feature-box">
                    <h2>Feature Three</h2>
                    <p>Stay ahead with our cutting-edge technology.</p>
                </div>
            </section>


            <section className="testimonials" id="testimonials">
                <h2>What Our Clients Say</h2>
                <div className="testimonial">
                    <p>"This platform has changed my life! Highly recommended!"</p>
                    <span>- Alex Johnson</span>
                </div>
                <div className="testimonial">
                    <p>"A game-changer in the industry. Amazing support!"</p>
                    <span>- Sarah Williams</span>
                </div>
            </section>


            <footer className="footer" id="contact">
                <p>&copy; 2025 Xsh Shahab Website. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default WithCssFile;
