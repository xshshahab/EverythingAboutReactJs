import React, { useState, useEffect } from 'react';

const BharatClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            color: '#333',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '400px',

        },
        time: {
            fontSize: '24px',
            fontWeight: 'bold',
            margin: '10px 0',
            color: '#007BFF',
        },
        date: {
            fontSize: '18px',
            color: '#555',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.time}>Current Time: {time.toLocaleTimeString()}</div>
            <div style={styles.date}>Date: {time.toLocaleDateString()}</div>
        </div>
    );
};

export default BharatClock;
