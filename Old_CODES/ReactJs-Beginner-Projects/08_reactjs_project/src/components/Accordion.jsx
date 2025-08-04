import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ id, title, content }) => {

    const [isActive, setIsActive] = useState(false);

    return (
        <section key={id} className={`accordion-card ${isActive ? 'active' : ''}`}>
            <div className="header" onClick={() => setIsActive(!isActive)}>
                <h2 className='heading'>{title}</h2>
                <p className='icon'>{isActive ? "-" : "+"}</p>
            </div>

            <div className={`content ${isActive ? 'show' : ''}`}>
                <p className='card-info'>
                    {content}
                </p>
            </div>
        </section>

    );
}

export default Accordion;
