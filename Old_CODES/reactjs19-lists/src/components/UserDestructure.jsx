import React from 'react';

const UserDestructure = ({ name, img, age, isMarried, hobbies }) => {
    const styles = {
        container: { padding: '20px', border: '2px solid #333', borderRadius: '10px', textAlign: 'center', margin: '20px', backgroundColor: '#112411' },
        img: { borderRadius: '10px' },
        details: { marginTop: '15px' },
    };

    return (
        <section style={styles.container}>
            <h1>Name : {name}</h1>
            <img src={img} alt="User" width={300} style={styles.img} />
            <div style={styles.details}>
                <h2>Age : {age}</h2>
                <h3>Married  : {isMarried ? 'Yes' : 'No'}</h3>
                <h4>Hobbies : {hobbies.join(', ')}</h4>
            </div>
        </section>
    );
};

export default UserDestructure;
