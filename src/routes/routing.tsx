import { Routes, Route ,Navigate } from 'react-router-dom';
import Home from '../pages/home/home';
import Login from '../pages/login/login';
import Layout from '../components/layout/layout';
import ViewCheck_in from '../pages/viewCheck_in/viewCheck_in';
import CheckInDetail from '../pages/check-in-detail/checkInDetail';
// import AuthGuard from '../guards/authguard';

const Routing = () => {
    return (
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/home/view-checkins" element={<ViewCheck_in />} />
        <Route path="/home/check-in-detail/:appointmentId" element={<CheckInDetail />} />
      </Route>
    </Routes>
    );
};

export default Routing;
