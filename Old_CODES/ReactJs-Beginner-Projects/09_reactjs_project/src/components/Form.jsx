import React, { useState } from 'react';
import toast from 'react-hot-toast'; // Import the toast library
import "./Form.css";

const Form = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errorUsername, setErrorUsername] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

    const [userColor, setUserColor] = useState('');
    const [emailColor, setEmailColor] = useState('');
    const [passwordColor, setPasswordColor] = useState('');
    const [confirmPasswordColor, setConfirmPasswordColor] = useState('');

    const validate = (e) => {
        e.preventDefault();

        let isValid = true;

        // Username validation
        if (username.length > 8) {
            setErrorUsername("");
            setUserColor("green");
        } else {
            setErrorUsername("Username must be 8 letters long.");
            setUserColor("red");
            isValid = false;
        }

        // Email validation
        if (email.includes("@gmail")) {
            setErrorEmail('');
            setEmailColor('green');
        } else {
            setErrorEmail('Email should have @gmail');
            setEmailColor('red');
            isValid = false;
        }

        // Password validation
        if (password.length > 8) {
            setErrorPassword('');
            setPasswordColor('green');
        } else {
            setErrorPassword('Password should be 8 letters long');
            setPasswordColor('red');
            isValid = false;
        }

        // Confirm password validation
        if (password !== '' && password === confirmPassword) {
            setErrorConfirmPassword("");
            setConfirmPasswordColor('green');
        } else {
            setErrorConfirmPassword("Passwords didn't match");
            setConfirmPasswordColor('red');
            isValid = false;
        }

        // If all validations pass, create object and show toast
        if (isValid) {
            const formData = {
                username,
                email,
                password,
            };

            console.log(formData);

            toast.success("Form Submitted Successfully!");

            // Optionally, you can clear the form fields after submission:
            setUsername("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        } else {
            toast.error("Please fix the errors before submitting!");
        }
    };

    return (
        <div className='form'>
            <div className="form-container">
                {/* Image section */}
                <div className="image-section">
                    <div className="card-image">
                        <img src="/Landing.jpg" alt="My Landing Jpg" />
                    </div>
                </div>

                {/* Form section */}
                <div className="form-section">
                    <div className="card">
                        <form>
                            <input
                                required
                                type="text"
                                placeholder='Name'
                                style={{ borderColor: userColor }}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <p className="error">{errorUsername}</p>

                            <input
                                required
                                type="email"
                                placeholder='Email'
                                style={{ borderColor: emailColor }}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <p className="error">{errorEmail}</p>

                            <input
                                required
                                type="password"
                                placeholder='Password'
                                style={{ borderColor: passwordColor }}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <p className="error">{errorPassword}</p>

                            <input
                                required
                                type="password"
                                name="confirmPassword"
                                placeholder='Confirm Password'
                                style={{ borderColor: confirmPasswordColor }}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <p className="error">{errorConfirmPassword}</p>

                            <button onClick={validate} className="submit-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
