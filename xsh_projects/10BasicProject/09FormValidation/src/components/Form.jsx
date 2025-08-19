import React, { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("#ccc");
  const [emailColor, setEmailColor] = useState("#ccc");
  const [passwordColor, setPasswordColor] = useState("#ccc");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("#ccc");

  const handleValidate = (e) => {
    e.preventDefault();

    let valid = true;

    // Reset errors
    setErrorUsername("");
    setErrorEmail("");
    setErrorPassword("");
    setErrorConfirmPassword("");

    // Username
    if (username.trim().length < 3) {
      setErrorUsername("Username must be at least 3 characters");
      setUserColor("red");
      valid = false;
    } else {
      setUserColor("green");
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorEmail("Enter a valid email");
      setEmailColor("red");
      valid = false;
    } else {
      setEmailColor("green");
    }

    // Password
    if (password.length < 6) {
      setErrorPassword("Password must be at least 6 characters");
      setPasswordColor("red");
      valid = false;
    } else {
      setPasswordColor("green");
    }

    // Confirm Password
    if (confirmPassword !== password) {
      setErrorConfirmPassword("Passwords do not match");
      setConfirmPasswordColor("red");
      valid = false;
    } else {
      setConfirmPasswordColor("green");
    }

    if (valid) {
      console.log({
        username,
        email,
        password,
        confirmPassword,
      });
      alert("Form submitted successfully!");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f3f4f6",
      }}
    >
      <div
        style={{
          width: "400px",
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Register</h2>
        <form onSubmit={handleValidate}>
          {/* Username */}
          <div style={{ marginBottom: "15px" }}>
            <input
              type="text"
              placeholder="Username"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: `2px solid ${userColor}`,
                outline: "none",
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <p style={{ color: "red", fontSize: "12px" }}>{errorUsername}</p>
          </div>

          {/* Email */}
          <div style={{ marginBottom: "15px" }}>
            <input
              type="email"
              placeholder="Email"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: `2px solid ${emailColor}`,
                outline: "none",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p style={{ color: "red", fontSize: "12px" }}>{errorEmail}</p>
          </div>

          {/* Password */}
          <div style={{ marginBottom: "15px" }}>
            <input
              type="password"
              placeholder="Password"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: `2px solid ${passwordColor}`,
                outline: "none",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p style={{ color: "red", fontSize: "12px" }}>{errorPassword}</p>
          </div>

          {/* Confirm Password */}
          <div style={{ marginBottom: "20px" }}>
            <input
              type="password"
              placeholder="Confirm Password"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: `2px solid ${confirmPasswordColor}`,
                outline: "none",
              }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <p style={{ color: "red", fontSize: "12px" }}>
              {errorConfirmPassword}
            </p>
          </div>

          {/* Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#4f46e5",
              color: "white",
              fontWeight: "bold",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#4338ca")}
            onMouseOut={(e) => (e.target.style.background = "#4f46e5")}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
