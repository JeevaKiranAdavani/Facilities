import { Routes, Route ,Navigate } from 'react-router-dom';
import Home from '../pages/home/home';
import Login from '../pages/login/login';
import Layout from '../components/layout/layout';
// import AuthGuard from '../guards/authguard';

const Routing = () => {
    return (
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" />} />
        
        <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
        </Route>
    </Routes>
    );
};

export default Routing;
