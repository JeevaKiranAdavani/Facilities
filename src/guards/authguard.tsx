import { Navigate, Outlet } from 'react-router-dom';

const AuthGuard = () => {
    const isAuthenticated = false; 

    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default AuthGuard;
