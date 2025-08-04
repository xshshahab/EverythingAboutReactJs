import React from 'react';
import useFormInput from '../hooks/useFormInput';

function MyForm() {
    const name = useFormInput('');
    const email = useFormInput('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${name.value}, Email: ${email.value}`);
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <div style={{ marginBottom: '10px' }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
                <input
                    id="name"
                    type="text"
                    {...name}
                    style={{
                        width: '100%',
                        padding: '8px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        fontSize: '16px',
                    }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
                <input
                    id="email"
                    type="email"
                    {...email}
                    style={{
                        width: '100%',
                        padding: '8px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        fontSize: '16px',
                    }}
                />
            </div>
            <button type="submit" style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px',
            }}>Submit</button>
        </form>
    );
}

export default MyForm;
