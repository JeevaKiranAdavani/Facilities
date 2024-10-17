import { useState, useEffect} from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';        
import { useNavigate } from 'react-router-dom';
import './login.scss';
import logo from '../../assets/applogo1.png';
import { login } from '../../services/serviceApis';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [apiError, setApiError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const validateForm = () => {
        if (!username || !password) {
            setErrorMessage('Both username and password are required.');
            return false;
        }
        setErrorMessage('');
        return true;
    };

    const handleLogin = async () => {
        if (!validateForm()) return;

        setLoading(true);
        setApiError(null); 

        try {
            const response = await login(username, password);
            if (response.role === 'Manager') {
                navigate('/home');
            } else if (response.role === 'Driver') {
                navigate('/driver-dashboard');
            } else {
                setApiError('Unauthorized access.');
            }
        } catch (err) {
            setApiError('Invalid credentials. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (loading) {
            console.log('Logging in...');
        }
    }, [loading]);

    const handleSignupRedirect = () => {
        navigate('/signup');
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <img src={logo} alt="Logo" className="logo" />
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
                {apiError && <div className="error-message">{apiError}</div>}

                {loading ? (
                    <div>
                        <ProgressBar mode="indeterminate" style={{ height: '6px', background:'#094679'}}></ProgressBar>
                    </div>
                    
                ) : (
                    <Button label="Login" onClick={handleLogin} className="login-button" />
                )}

                <div className="signup-link">
                    <p>Not a member? <span onClick={handleSignupRedirect}>Sign up now</span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
