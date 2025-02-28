import React from 'react';
import useFetch from '../hooks/useFetch';

const DataFetching = () => {

    let url = "https://jsonplaceholder.typicode.com/todos";
    const [data] = useFetch(url);

    const containerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
        padding: '20px',
        backgroundColor: '#1a1a1a',
    };

    const itemStyle = {
        backgroundColor: '#2c2c2c',
        padding: '20px',
        borderRadius: '8px',
        color: '#e0e0e0',
        boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
        transition: 'transform 0.3s ease',
    };

    const itemHoverStyle = {
        transform: 'scale(1.05)',
    };

    const idStyle = {
        fontWeight: '600',
        color: 'orange',
        marginBottom: '10px',
    };

    const titleStyle = {
        fontSize: '16px',
        color: 'slategray',
        wordWrap: 'break-word',
    };

    const gridResponsiveStyle = {
        '@media (max-width: 1200px)': {
            gridTemplateColumns: 'repeat(3, 1fr)',
        },
        '@media (max-width: 900px)': {
            gridTemplateColumns: 'repeat(2, 1fr)',
        },
        '@media (max-width: 600px)': {
            gridTemplateColumns: '1fr',
        },
    };

    return (
        <div style={{ ...containerStyle, ...gridResponsiveStyle }}>
            {
                data && data.map(item => {
                    return (
                        <div
                            key={item.id}
                            style={{ ...itemStyle, ':hover': itemHoverStyle }}
                        >
                            <span style={idStyle}>{item.id}.</span>
                            <h3 style={titleStyle}>{item.title}</h3>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default DataFetching;
