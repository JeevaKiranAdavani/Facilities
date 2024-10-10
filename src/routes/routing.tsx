import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import Login from '../pages/login/login';
import Layout from '../components/layout/layout';
// import AuthGuard from '../guards/authguard';

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />

            {/* Layout wraps the Home route */}
            <Route path="/home" element={<Layout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    );
};

export default Routing;
