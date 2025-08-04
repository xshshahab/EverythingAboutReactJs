import React from 'react';

const InlineStyle = () => {
    return (
        <div>
            <h1>InlineStyle</h1>
            <div
                id="box"
                style={{
                    backgroundColor: 'crimson',
                    padding: '20px',
                    borderRadius: '10px',
                    fontSize: '16px'
                }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aliquid esse magni quibusdam eligendi sint veritatis vel, mollitia laborum consequuntur ullam aliquam quia voluptas aperiam earum impedit sunt iure alias quae praesentium, voluptates magnam!
            </div>
            <p
                style={{
                    fontWeight: 'bold',
                    color: 'greenyellow',
                    fontSize: '18px'
                }}
            >
                Style me as a bold paragraph
            </p>
        </div>
    );
};

export default InlineStyle;
