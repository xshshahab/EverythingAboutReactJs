import React from 'react';

const ObjectStyle = () => {

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        padding: '20px',
    };

    const rectangleStyle = {
        width: '300px',
        height: '150px',
        backgroundColor: 'blue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        fontSize: '18px',
        fontWeight: 'bold'
    };

    const circleStyle = {
        width: '100px',
        height: '100px',
        backgroundColor: 'purple',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '16px',
        fontWeight: 'bold',
        color: 'white'
    };

    return (
        <div style={containerStyle}>
            <h1>Styled Components with Object CSS</h1>

            <div style={rectangleStyle}>
                I am a rectangle
            </div>

            <div style={circleStyle}>
                Circle
            </div>
        </div>
    );
};

export default ObjectStyle;
