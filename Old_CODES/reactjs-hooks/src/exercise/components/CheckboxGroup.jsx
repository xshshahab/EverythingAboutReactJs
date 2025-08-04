import React, { useId } from 'react';

const CheckboxGroup = () => {
    const groupId = useId();

    const styles = {
        container: {
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            width: '300px',
            margin: '0 auto',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        title: {
            fontSize: '20px',
            marginBottom: '15px',
            textAlign: 'center',
            fontWeight: 'bold',
        },
        optionContainer: {
            marginBottom: '10px',
        },
        label: {
            fontSize: '16px',
            marginLeft: '8px',
        },
        input: {
            marginRight: '8px',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Choose your options:</h2>
            <div>
                <div style={styles.optionContainer}>
                    <input type="checkbox" id={`${groupId}-option1`} style={styles.input} />
                    <label htmlFor={`${groupId}-option1`} style={styles.label}>Option 1</label>
                </div>
                <div style={styles.optionContainer}>
                    <input type="checkbox" id={`${groupId}-option2`} style={styles.input} />
                    <label htmlFor={`${groupId}-option2`} style={styles.label}>Option 2</label>
                </div>
                <div style={styles.optionContainer}>
                    <input type="checkbox" id={`${groupId}-option3`} style={styles.input} />
                    <label htmlFor={`${groupId}-option3`} style={styles.label}>Option 3</label>
                </div>
            </div>
        </div>
    );
};

export default CheckboxGroup;
