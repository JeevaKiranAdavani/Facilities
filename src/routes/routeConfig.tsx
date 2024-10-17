import Home from '../pages/home/home';
import Login from '../pages/login/login';
import SignUp from '../pages/registration/registration';
import CheckIn from '../pages/checkin/checkin';
import ViewCheckIn from '../pages/viewCheck_in/viewCheck_in';
import CheckInDetail from '../pages/check-in-detail/checkInDetail';
import DriverStatus from '../pages/driver_status/driver_status';
import Unauthorized from '../pages/unauthorized/unauthorized';
import Supervisor from '../pages/supervisor/supervisor';
import SealVerification from '../pages/supervisor/seal-verification/sealVerification';

const routeConfig = [
    {
      path: "/login",
      element: <Login />,
      isProtected: false,
      allowedRoles: [],
      useLayout: false,
    },
    {
      path: "/signup",
      element: <SignUp />,
      isProtected: false,
      allowedRoles: [],
      useLayout: false,
    },
    {
      path: "/checkin",
      element: <CheckIn />,
      isProtected: false,
      allowedRoles: [],
      useLayout: false,
    },
    {
      path: "/home",
      element: <Home />,
      isProtected: true,
      allowedRoles: ["Manager", "Warehouse Supervisor"],
      useLayout: true,
    },
    {
      path: "/home/view-checkins",
      element: <ViewCheckIn />,
      isProtected: true,
      allowedRoles: ["Manager"],
      useLayout: true,
    },
    {
      path: "/home/check-in-detail/:appointmentId",
      element: <CheckInDetail />,
      isProtected: true,
      allowedRoles: ["Manager"],
      useLayout: true,
    },
    {
      path: "driver-dashboard",
      element: <DriverStatus />,
      isProtected: true,
      allowedRoles: ["Driver"],
      useLayout: true,
    },
    {
      path: "/home/seal-details",
      element: <Supervisor />,
      isProtected: true,
      allowedRoles: ["Manager","Warehouse Supervisor"],
      useLayout: true,
    },
    {
      path: "/home/seal-details/sealVerification",
      element: <SealVerification/>,
      isProtected: true,
      allowedRoles: ["Warehouse Supervisor","Manager"],
      useLayout: true,
    },
    {
      path: "/unauthorized",
      element: <Unauthorized />,
      isProtected: false,
      allowedRoles: [],
      useLayout: false,
    },
  ];

  export default routeConfig
  