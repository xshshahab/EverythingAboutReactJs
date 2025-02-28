import React, { useId } from 'react';

const UniqueId = () => {
    const id = useId();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted!!!");
    };

    const styles = {
        form: {
            width: '300px',
            margin: '0 auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        div: {
            marginBottom: '15px',
        },
        label: {
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'bold',
        },
        input: {
            width: '100%',
            padding: '8px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
        },
        button: {
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            fontSize: '16px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        },
        buttonHover: {
            backgroundColor: '#0056b3',
        }
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.div}>
                <label htmlFor={`${id}-email`} style={styles.label}>Email</label>
                <input type="email" name="email" id={`${id}-email`} style={styles.input} />
            </div>
            <div style={styles.div}>
                <label htmlFor={`${id}-password`} style={styles.label}>Password</label>
                <input type="password" name="password" id={`${id}-password`} style={styles.input} />
            </div>
            <button type="submit" style={styles.button}>Log in</button>
        </form>
    );
};

export default UniqueId;
