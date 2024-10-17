import { Routes, Route ,Navigate } from 'react-router-dom';
import Home from '../pages/home/home';
import Login from '../pages/login/login';
import SignUp from '../pages/registration/registration';
import CheckIn from '../pages/checkin/checkin';
import Layout from '../components/layout/layout';
import ViewCheck_in from '../pages/viewCheck_in/viewCheck_in';
import CheckInDetail from '../pages/check-in-detail/checkInDetail';
import Supervisor from '../pages/supervisor/supervisor';
import SealVerification from '../pages/supervisor/seal-verification/sealVerification';
import Drvier_Staus from '../pages/driver_status/driver_status'
// import AuthGuard from '../guards/authguard';

const Routing = () => {
    return (
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/checkin' element={<CheckIn />}/>
        
        <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/home/view-checkins" element={<ViewCheck_in />} />
        <Route path="/home/check-in-detail/:appointmentId" element={<CheckInDetail />} />
        <Route path="/home/supervisor" element={<Supervisor />} />
        <Route path="/home/supervisor/sealVerification" element={<SealVerification />} />
        <Route path="/home/driverStatus" element={<Drvier_Staus />} />
      </Route>
    </Routes>
    );
};

export default Routing;
