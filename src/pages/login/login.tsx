import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { dummyUser } from '../../mock/data';
import './login.scss';
import logo from '../../assets/applogo1.png';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const validateForm = () => {
        if (!username || !password) {
            setErrorMessage('Both username and password are required.');
            return false;
        }
        return true;
    };

    const handleLogin = () => {
        if (!validateForm()) return;

        if (username === dummyUser.username && password === dummyUser.password) {
            setErrorMessage('');
            navigate('/home');
        } else {
            setErrorMessage('Invalid username or password.');
        }
    };

    const handleSignupRedirect = () => {
        navigate('/signup');
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <img src={logo} alt="Sherwin Logo" className="logo" />
                <h2>Login</h2>
                <div className="input-group">
                    <InputText
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        className={errorMessage && !username ? 'input-error' : ''}
                    />
                </div>

                <div className="input-group">
                    <InputText
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        type="password"
                        className={errorMessage && !password ? 'input-error' : ''}
                    />
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <Button label="Login" onClick={handleLogin} className="login-button" />

                <div className="signup-link">
                    <p>Not a member? <span onClick={handleSignupRedirect}>Signup now</span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
