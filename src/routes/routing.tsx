import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/layout/layout';
import AuthGuard from '../guards/authguard';
import NotFound from '../pages/notFound/notfound';
import routeConfig from './routeConfig';
import ViewCheck_in from '../pages/viewCheck_in/viewCheck_in';
import CheckInDetail from '../pages/check-in-detail/checkInDetail';
import Supervisor from '../pages/supervisor/supervisor';
import SealVerification from '../pages/supervisor/seal-verification/sealVerification';
import Drvier_Staus from '../pages/driver_status/driver_status'
// import AuthGuard from '../guards/authguard';

const Routing = () => {
  return (
    <Routes>
      {routeConfig.map((route) => {
        const routeElement = route.isProtected ? (
          <AuthGuard allowedRoles={route.allowedRoles}>{route.element}</AuthGuard>
        ) : (
          route.element
        );

        return route.useLayout ? (
          <Route
            key={route.path}
            element={<Layout />}
          >
            <Route path={route.path} element={routeElement} />
          </Route>
        ) : (
          <Route key={route.path} path={route.path} element={routeElement} />
        );
      })}
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;


// import { Routes, Route, Navigate } from 'react-router-dom';
// import Layout from '../components/layout/layout';
// import NotFound from '../pages/notFound/notfound';
// import routeConfig from './routeConfig';

// const Routing = () => {
//   return (
//     <Routes>
//       {routeConfig.map((route) => {
//         const routeElement = route.element;

//         return route.useLayout ? (
//           <Route
//             key={route.path}
//             element={<Layout />}
//           >
//             <Route path={route.path} element={routeElement} />
//           </Route>
//         ) : (
//           <Route key={route.path} path={route.path} element={routeElement} />
//         );
//       })}
//       <Route path="/" element={<Navigate to="/login" />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// };

// export default Routing;
