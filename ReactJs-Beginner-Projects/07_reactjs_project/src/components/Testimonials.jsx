import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            quote: "This is the best product I've ever used!",
            author: "Jane Doe"
        },
        {
            quote: "Amazing quality and excellent customer service. Highly recommend!",
            author: "John Smith"
        },
        {
            quote: "I saw immediate results and couldn't be happier with my purchase.",
            author: "Sarah Lee"
        },
        {
            quote: "A game-changer in the industry. Truly revolutionary!",
            author: "Michael Brown"
        },
        {
            quote: "I will never go back to anything else. This is top-notch!",
            author: "Emily Davis"
        },
    ];

    const handlePrevClick = () => {
        setCurrentIndex((currentIndex + testimonials.length - 1) % testimonials.length);
    }

    const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % testimonials.length)
    }



    return (
        <div className='testimonials'>
            <div className="testimonials-quote">
                {
                    testimonials[currentIndex].quote
                }
            </div>

            <div className="testimonials-author">
                - {
                    testimonials[currentIndex].author
                }
            </div>


            <div className="testimonials-nav">
                <button onClick={handlePrevClick}>Prev</button>
                <button onClick={handleNextClick}>Next</button>
            </div>
        </div>
    );
}

export default Testimonials;