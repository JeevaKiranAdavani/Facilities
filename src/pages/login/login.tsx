// src/pages/Login.tsx
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { dummyUser } from '../../mock/data';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === dummyUser.username && password === dummyUser.password) {
            navigate('/home');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <InputText value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <InputText value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
            <Button label="Login" onClick={handleLogin} />
        </div>
    );
};

export default Login;
