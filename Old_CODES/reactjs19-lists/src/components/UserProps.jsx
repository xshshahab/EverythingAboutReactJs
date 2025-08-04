import React from 'react';

const UserProps = (props) => {
    const styles = {
        container: { padding: '20px', border: '2px solid #000', borderRadius: '10px', textAlign: 'center', margin: '20px', backgroundColor: '#111' },
        img: { borderRadius: '10px' },
        details: { marginTop: '15px' },
    };

    return (
        <section style={styles.container}>
            <h1>Name : {props.name}</h1>
            <img src={props.img} alt="User" width={300} style={styles.img} />
            <div style={styles.details}>
                <h2>Age : {props.age}</h2>
                <h3>Married  : {props.isMarried ? 'Yes' : 'No'}</h3>
                <h4>Hobbies : {props.hobbies.join(', ')}</h4>
            </div>
        </section>
    );
};

export default UserProps;
