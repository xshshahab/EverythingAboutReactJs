import React, { useState } from "react";

const MyProfile = () => {
    const [profile, setProfile] = useState({ name: "", age: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
    };

    const handleReset = () => {
        setProfile({ name: "", age: "" });
    };

    const styles = {
        container: {
            textAlign: "center",
            padding: "20px",
            fontFamily: "Arial, sans-serif",
            backgroundColor: "#2C3E50",
            color: "white",
            minHeight: "10vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        },
        heading: {
            fontSize: "28px",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#F39C12"
        },
        inputContainer: {
            marginBottom: "15px"
        },
        label: {
            fontSize: "18px",
            marginRight: "10px"
        },
        input: {
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #F39C12",
            backgroundColor: "#34495E",
            color: "white",
            fontSize: "16px",
            outline: "none"
        },
        profileInfo: {
            marginTop: "20px",
            padding: "15px",
            borderRadius: "5px",
            backgroundColor: "#1F2C3D",
            width: "300px",
            textAlign: "left"
        },
        infoHeading: {
            fontSize: "22px",
            color: "#F39C12",
            marginBottom: "10px"
        },
        infoText: {
            fontSize: "18px",
            color: "#ECF0F1"
        },
        resetButton: {
            marginTop: "15px",
            padding: "10px 15px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#E74C3C",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
            transition: "0.3s ease"
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>User Profile</h1>

            <div style={styles.inputContainer}>
                <label style={styles.label}>
                    Name:
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={profile.name}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </label>
            </div>

            <div style={styles.inputContainer}>
                <label style={styles.label}>
                    Age:
                    <input
                        type="number"
                        name="age"
                        placeholder="Enter your age"
                        value={profile.age}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </label>
            </div>

            <button style={styles.resetButton} onClick={handleReset}>Reset</button>

            <div style={styles.profileInfo}>
                <h2 style={styles.infoHeading}>Profile Information:</h2>
                <h3 style={styles.infoText}>Name: {profile.name || "N/A"}</h3>
                <h5 style={styles.infoText}>Age: {profile.age || "N/A"}</h5>
            </div>
        </div>
    );
};

export default MyProfile;
