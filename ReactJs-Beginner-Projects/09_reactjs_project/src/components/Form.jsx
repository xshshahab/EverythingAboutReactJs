import React, { useState } from 'react';
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

        if (username.length > 8) {
            setErrorUsername("")
            setUserColor("green")
        } else {
            setErrorUsername("Username must be 8 letters long.")
            setUserColor("red")
        }

        if (email.includes("@gmail")) {
            setErrorEmail('')
            setEmailColor('green')
        } else {
            setErrorEmail('Email should have @gmail')
            setEmailColor('red')
        }

        if (password.length > 8) {
            setErrorPassword('')
            setPasswordColor('green');
        } else {
            setErrorPassword('Password should be 8 letters long')
            setPasswordColor('red');
        }


        if (password !== '' && password === confirmPassword) {
            setErrorConfirmPassword("")
            setConfirmPasswordColor('green')
        } else {
            setErrorConfirmPassword("Passwords didn't match")
            setConfirmPasswordColor('red')
        }


    }


    return (
        <div className='form'>

            <div className="card">
                <div className="card-image"></div>

                <form>
                    <input required type="text" placeholder='Name' style={{ borderColor: userColor }} value={username} onChange={(e) => setUsername(e.target.value)} />
                    <p className="error">{errorUsername}</p>

                    <input required type="email" placeholder='Email' style={{ borderColor: emailColor }} value={email} onChange={e => setEmail(e.target.value)} />
                    <p className="error">{errorEmail}</p>

                    <input required type="password" placeholder='Password' style={{ borderColor: passwordColor }} value={password} onChange={e => setPassword(e.target.value)} />
                    <p className="error">{errorPassword}</p>

                    <input required type="password" name="confirmPassword" placeholder='Confirm Password' style={{ borderColor: confirmPasswordColor }} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <p className="error">{errorConfirmPassword}</p>

                    <button onClick={validate} className="submit-btn">Submit</button>
                </form>
            </div>

        </div>
    );
}

export default Form;